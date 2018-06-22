import React from 'react';
import { Link } from 'react-router-dom';

export default class ModuleListItem
extends React.Component {
 constructor(props){
  super(props);

 }
 render() {
     return <div>
         <li className="list-group-item">
             {this.props.module.title}
         <button className="fa fa-trash" onClick={() => {
             this.props.delete(this.props.module.id)
         }}></button>
         </li>

         <div className="float-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
       </div>

         <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
             {this.props.module.title}
         </Link>


     </div>
 }
}
