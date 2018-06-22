import React from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends React.Component {
      constructor(props){
            super(props);
      }
   render() {
       return (
           <div>
               <tr>
                   <td>{this.props.course.title}</td>
                   <td><button
                       onClick={this.props.delete(this.props.course.id)}>
                       Delete
                   </button>
                   </td>
               </tr>

           <tr>
           <td>
           <Link to={`/course/${this.props.course.id}/edit`}>
           {this.props.course.title}
           </Link>
           </td>
           </tr>
           </div>
       )
   }
}
export default CourseRow;
