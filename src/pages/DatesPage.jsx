import React from 'react';
import Attendance from '../components/Attendance';
import DatePicker from './../components/DatePicker';
import AccentButton from './../components/AccentButton';

const DatesPage = () => {
    const [dateShow,toggleDateShow]=React.useState(true)
    const map=new Map([
        ["d",true],
        ["c",true],
        ["kc",false]
    ])
    console.log({map});
    
    const [studentsAttendance,changeStudentsAttendance]=React.useState(map)
    const onSaveChangesAttendance=()=>{
        console.log("save attendance");
    }
    return (<div className="h-screen w-full">
        <DatePicker dateShow={dateShow} toggleDateShow={toggleDateShow}/>
        {!dateShow &&
        <React.Fragment>
             <Attendance studentsAttendance={studentsAttendance} changeStudentsAttendance={changeStudentsAttendance}/>
             <AccentButton name="Save changes to attendance" onClick={onSaveChangesAttendance}/>
        </React.Fragment>

        }
    </div> );
}
 
export default DatesPage;