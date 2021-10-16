import  React  from 'react';
import AccentButton from '../components/AccentButton';
import Attendance from '../components/Attendance';
const TakeAttendancePage = () => {
    const map=new Map([
        ["d",true],
        ["c",true],
        ["kc",false]
    ])
    console.log({map});
    
    const [studentsAttendance,changeStudentsAttendance]=React.useState(map)
    const onSaveAttendanceClick=()=>{
        console.log("save attendance");
    }
    return ( <div className="h-screen w-full">
        <Attendance studentsAttendance={studentsAttendance} changeStudentsAttendance={changeStudentsAttendance}/>
       <AccentButton name="Save attendance" onClick={onSaveAttendanceClick}/>
   </div> );
}
 
export default TakeAttendancePage;