import  React  from 'react';
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
        <button
                      className="flex justify-center w-50 centerHorizontal colorAccent margin-top text-white  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    
                      onClick={() => onSaveAttendanceClick()}
                     
                    >
                     Save Attendance
                    </button>
   </div> );
}
 
export default TakeAttendancePage;