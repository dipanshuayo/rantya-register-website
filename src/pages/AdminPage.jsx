import React from 'react';
import AccentButton from './../components/AccentButton';
const AdminPage = () => {
    const onChangeTermClick=()=>{
        console.log("term clicked");
    }
    const onChangeAcademicTermClick=()=>{
        console.log("onChangeAcademicTermClick clicked");
    }
    const onChangeClassCodeClickClick=()=>{
        console.log("onChangeClassCodeClickClick clicked");
    }
    return ( <div className="h-screen w-full">
        <AccentButton name="Change term" onClick={onChangeTermClick}/>
        <AccentButton name="start new academic year" onClick={onChangeAcademicTermClick}/>
        <AccentButton name="Change class code" onClick={onChangeClassCodeClickClick}/>
    </div> );
}
 
export default AdminPage;