import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../public/ic_launcher.png'
import LoginModal from '../components/LoginModal';
const HomePage = ({toggleShowToolbar}) => {
    const [passCode,changePassCode]=React.useState("")
    const history=useHistory()
    const handleOnSubmitPassCode=()=>{
        console.log("submitted")
        toggleShowToolbar(true)
        history.push("/students")
    }
    return (
    <div className="homePage colorPrimary">
        <img src={logo} width="192px" height="192px" className="centerHorizontal"/>
        <LoginModal className="centerHorizontal flex mt-16" value={passCode} valueChangedHandler={changePassCode} onSubmit={handleOnSubmitPassCode}/>
        <h2 className="font-semibold font-serif textColorAccent centerHorizontal">
            A PROJECT BY SET 2K21 FOR TEACHERS OF RANTYA HIGH SCHOOL.
        </h2>
        <h2 className=" font-semibold textColorAccent centerHorizontal">
            No Bad Vides.
        </h2>
    </div>);
}
 
export default HomePage;