import React from 'react';
import AddButton from '../components/AddButton';
import DeleteButton from '../components/DeleteButton';
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
    const onAddButtonClick=()=>{
        console.log("add student")
    }
    const onDeleteButtonClick=()=>{
        console.log("delete button")
    }
    return (<div className="studentsPage colorPrimary">
        {showModal && <InfoModal title={title} body={body} showModal={showModal} setShowModal={setShowModal}/>}
        <span >
            <AddButton onClick={onAddButtonClick}/>
            <DeleteButton onClick={onDeleteButtonClick}/>
        </span>
        <ListView values={studentNames} onItemClicked={onItemClicked} />
    </div> );
}
 
export default StudentsPages;