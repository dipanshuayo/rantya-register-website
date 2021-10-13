import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import StudentsPages from './pages/StudentsPage';
const App = () => {
    const [showToolbar,toggleShowToolbar]=React.useState(true)
    return (
       <div>
           {showToolbar && <Toolbar/>}
          
           <Switch>
               <Route exact path="/" component={()=><HomePage toggleShowToolbar={toggleShowToolbar}/>}/>
               <Route exact path="/students" component={StudentsPages}/>
           </Switch>
        
    </div>
     );
}
 
export default App;