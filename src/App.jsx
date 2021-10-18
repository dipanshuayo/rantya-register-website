import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import StudentsPages from './pages/StudentsPage';
import DatesPage from './pages/DatesPage';
import TakeAttendancePage from './pages/TakeAttendancePage';
import AdminPage from './pages/AdminPage';
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
    const showToolbarAndSetLoggedIn=(loggedInValue)=>{
        toggleShowToolbar(true)
        toggleLoggedIn(loggedInValue)

    }
    return (
       <div className="colorPrimary">
           {showToolbar && <Toolbar/>}
          
           <Switch>
               <Route exact path="/" component={()=><HomePage toggleLoggedInBar={showToolbarAndSetLoggedIn} />}/>
               { loggedIn && 
               <React.Fragment>
               <Route exact path="/students" component={StudentsPages}/>
               <Route exact path="/dates" component={DatesPage}/>
               <Route exact path="/take_attendance" component={TakeAttendancePage}/>
               <Route exact path="/admin" component={AdminPage}/>
               <Route exact path="/add_student" component={AddStudentPage}/>
                </React.Fragment>
}
           </Switch>
        
    </div>
     );
}
 
export default App;