import React from 'react';
import InfoModal from '../components/InfoModal';
import ListView from '../components/ListView';
const StudentsPages = () => {
    const [studentNames,changeStudentNames]=React.useState(["kdf","kfsd","klsdfl","kjsldfd","lkfdsl"])
    const [showModal, setShowModal] = React.useState(false);
    const [title,setTitle]=React.useState("")
    const [body,setBody]=React.useState("")
    const onItemClicked=({target})=>{
        console.log("ccliked")
        setTitle(target.textContent)
        setBody("kslflsdlfs")
        setShowModal(true)
    }
    const showInfoModal=()=>{
        return <InfoModal title={title} body={body} showModal={showModal} setShowModal={setShowModal}/>
    }
    return (<div className="studentsPage colorPrimary">
        {showModal && showInfoModal()}
        <ListView values={studentNames} onItemClicked={onItemClicked} />
    </div> );
}
 
export default StudentsPages;