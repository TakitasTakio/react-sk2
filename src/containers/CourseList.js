import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
import ModuleList from './ModuleList';

class CourseList extends React.Component {
   constructor() {
       super();
       this.courseService = CourseService.instance;
       this.titleChanged = this.titleChanged.bind(this);
       this.createCourse = this.createCourse.bind(this);
       this.deleteCourse = this.deleteCourse.bind(this);


       this.state = {courses: []};
       
   }
   
   componentDidMount() {
               this.findAllCourses();
}

findAllCourses() {
   this.courseService.findAllCourses()
       .then((courses) => {
           this.setState({courses: courses});

       });
}



renderCourseRows() {
      let courses = this.state.courses.map
    {
        (course) => {
            return <CourseRow key={course.id} course={course} delete={this.deleteCourse(course.id)}/>
        }
    };
   return(courses);
}

titleChanged(event) {
   this.setState({
       course: { title: event.target.value }
   })
}
createCourse(){
  this.courseService
       .createCourse(this.state.course)
       .then(() => { this.findAllCourses(); })

   }
deleteCourse(courseId) { this.courseService
                             .deleteCourse(courseId)
 }



   
   render() {
       return (
            <div>
           <h2>Course List</h2>
           <h3>Course {this.state.courseId}</h3>
           <ModuleList courseId={this.state.courseId}/>
           <table className="table">
           <thead>
          <tr><th>Title</th></tr>
           <tr>
           <th><input onChange={this.titleChanged} className="form-control" id="titleFld"
                  placeholder="cs1010"/></th>
           <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
           </tr>
           </thead>
           <tbody>
           {this.renderCourseRows()}
           </tbody>
           </table>
           </div>
           );
   }
}
export default CourseList;
