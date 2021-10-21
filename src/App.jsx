import React, { useEffect } from 'react';
import {Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import StudentsPages from './pages/StudentsPage';
import DatesPage from './pages/DatesPage';
import TakeAttendancePage from './pages/TakeAttendancePage';
import {initializeApp} from "firebase/app"
import AddStudentPage from './pages/AddStudentPage';

initializeApp(
    {
        apiKey: "AIzaSyDjFUkltLYbx-kD_oftZPtA1rzdxToiiO8",
        authDomain: "rantyaregister.firebaseapp.com",
        projectId: "rantyaregister",
        storageBucket: "rantyaregister.appspot.com",
        messagingSenderId: "1080784316451",
        appId: "1:1080784316451:web:94f8c9d5d048aff3cfa996"
      }
)

const App = () => {
    const [showToolbar,toggleShowToolbar]=React.useState(false)
    const [loggedIn,toggleLoggedIn]=React.useState(false)
    const [classId,setClassId]=React.useState("")
    const showToolbarAndSetLoggedIn=(loggedInValue,newClassId)=>{
        toggleShowToolbar(true)
        toggleLoggedIn(loggedInValue)
        setClassId(newClassId)
    }
    // useEffect(()=>{
    //     if(!loggedIn){
           
    //     }
    // },[loggedIn])
    return (
       <div className="colorPrimary">
           {showToolbar && <Toolbar classId={classId}/>}
          
           <Switch>
               <Route exact path="/" render={({history})=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} history={history} />}/>
               { loggedIn && 
               <React.Fragment>
               <Route exact path="/students" render={({history})=><StudentsPages history={history}/>}/>
               <Route exact path="/dates" component={DatesPage}/>
               <Route exact path="/take_attendance" component={TakeAttendancePage}/>
               <Route exact path="/add_student" render={({history})=><AddStudentPage history={history}/>}/>
               {/* <Route path="*" render={({history})=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} history={history} />}/> */}
                </React.Fragment>
}
{/* <Route path="*" render={({history})=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} history={history} />}/> */}
</Switch>
<Route path="*" render={({history})=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} history={history} />}/>
    </div>
     );
}
 
export default App;