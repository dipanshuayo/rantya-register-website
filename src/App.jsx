import React from 'react';
import {Route, Switch } from 'react-router-dom';
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
    const [loggedIn,toggleLoggedIn]=React.useState(true)
    const [classId,setClassId]=React.useState("")
    const showToolbarAndSetLoggedIn=(loggedInValue,newClassId)=>{
        toggleShowToolbar(true)
        toggleLoggedIn(loggedInValue)
        setClassId(newClassId)
    }
    return (
       <div className="colorPrimary">
           {showToolbar && <Toolbar classId={classId}/>}
          
           <Switch>
               <Route exact path="/" render={({history})=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} history={history} />}/>
               { loggedIn && 
               <React.Fragment>
               <Route exact path="/students" component={StudentsPages}/>
               <Route exact path="/dates" component={DatesPage}/>
               <Route exact path="/take_attendance" component={TakeAttendancePage}/>
               {/* <Route exact path="/admin" component={AdminPage}/> */}
               <Route exact path="/add_student" component={AddStudentPage}/>
                </React.Fragment>
}
           </Switch>
        
    </div>
     );
}
 
export default App;