import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import StudentsPages from './pages/StudentsPage';
import DatesPage from './pages/DatesPage';
import TakeAttendancePage from './pages/TakeAttendancePage';
const App = () => {
    const [showToolbar,toggleShowToolbar]=React.useState(true)
    return (
       <div className="colorPrimary">
           {showToolbar && <Toolbar/>}
          
           <Switch>
               <Route exact path="/" component={()=><HomePage toggleShowToolbar={toggleShowToolbar}/>}/>
               <Route exact path="/students" component={StudentsPages}/>
               <Route exact path="/dates" component={DatesPage}/>
               <Route exact path="/take_attendance" component={TakeAttendancePage}/>
           </Switch>
        
    </div>
     );
}
 
export default App;