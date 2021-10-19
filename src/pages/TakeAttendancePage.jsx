import  React, { useEffect }  from 'react';
import AccentButton from '../components/AccentButton';
import Attendance from '../components/Attendance';
import Constants from '../Constants';
import Store from '../Store'

import { getFirestore, setDoc, doc,getDoc,updateDoc,arrayUnion } from "firebase/firestore";
import { format } from 'date-fns';
const TakeAttendancePage = () => {
    const db=getFirestore()
    const todayDate= format(new Date(),'dd-MM-yyyy')
    console.log('Store :>> ', Store.classId);
    const [studentsAttendance,changeStudentsAttendance]=React.useState(new Map())
    const classDocRef=doc(db,Constants.CLASSES_COLLECTION_PATH,Store.classId)
    const getStudentAttendance=async ()=>{
        const snapShot=await getDoc(classDocRef)
        const classNames=snapShot.data().names
        console.log('classNames :>> ', classNames);
        const newStudentsAttendane=new Map()
        classNames.forEach(name=>{
            newStudentsAttendane.set(name,false)
        })
        changeStudentsAttendance(newStudentsAttendane)
    }
    useEffect(
        ()=>{
           getStudentAttendance()
        },
        []
    )
    
    const onSaveAttendanceClick= async ()=>{
        console.log("save attendance");
        sendSavedAttendance().then(
            updateStudentSubCollection()
        )
    }
    const sendSavedAttendance= async ()=>{
        const docRef=doc(db,`${Store.term}/${todayDate}`)
        const dataTobeSent={}
        dataTobeSent[Store.classId]=Object.fromEntries(studentsAttendance)
       return await setDoc(docRef,dataTobeSent)
    }
    const updateStudentSubCollection=async ()=>{
        Array.from(studentsAttendance.keys()).forEach( async name=>{
            const studentDocRef=doc(db,`${classDocRef.path}/${Constants.STUDENTS_COLLECTION_PATH}/${name}`)
            if(studentsAttendance.get(name)){
                const str= `${Store.term}.dates_present`
                await updateDoc(studentDocRef,
                    {
                       [str]:arrayUnion(todayDate)
                    })
            }
            else{
                const str= `${Store.term}.dates_absent`
                await updateDoc(studentDocRef,
                    {
                       [str]:arrayUnion(todayDate)
                    })
            }
        })
    }
    return ( <div className="h-screen w-full">
        <Attendance studentsAttendance={studentsAttendance} changeStudentsAttendance={changeStudentsAttendance}/>
       <AccentButton name="Save attendance" onClick={onSaveAttendanceClick}/>
   </div> );
}
 
export default TakeAttendancePage;