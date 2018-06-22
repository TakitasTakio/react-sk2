import React from 'react';
import CourseList from './CourseList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseEditor from './CourseEditor';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class CourseManager extends React.Component {
   render() {
       return (
         <Router>
            <div className="jumbotron">
           <h1>Course Manager</h1>
           <Route path="/courses"
              component={CourseList}/>
           <Route path="/course/:courseId/edit"
                component={CourseEditor}/>

           
          </div>
         </Router>
       )
   }
}
export default CourseManager;
