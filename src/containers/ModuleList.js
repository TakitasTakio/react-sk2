import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import ModuleEditor from './ModuleEditor';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Route} from 'react-router-dom';


export default class ModuleList
extends React.Component {
 
constructor(props) {
   super(props);
   this.state = {
       courseId: '',
       module: {title: ''},
       modules:[
           {title: 'Module 1', id:123},
           {title: 'Module 2', id:234},
           {title: 'Module 3', id:345},
           {title: 'Module 4', id:456},
           {title: 'Module 5', id:567},
           {title: 'Module 6', id:678},
       ]
   };
   this.setCourseId = this.setCourseId.bind(this);
   this.setModuleTitle = this.setModuleTitle.bind(this);
   this.createModule =this.createModule.bind(this);
   this.moduleService = ModuleService.instance;
    this.deleteModule = this.deleteModule.bind(this);




}

setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }


componentDidMount() {
   this.setCourseId(this.props.courseId);
}
componentWillReceiveProps(newProps){
   this.setCourseId(newProps.courseId);
   this.findAllModulesForCourse(newProps.courseId)
}

setModuleTitle(event) {
    console.log(event.target.value);
    this.setState({module: {title: event.target.value}})}
   
createModule() {
   this.moduleService.createModule
      (this.state.courseId, this.state.module).then(() => {
         this.findAllModulesForCourse
            (this.state.courseId);
      }) 
}



findAllModulesForCourse(courseId) {
   this.moduleService
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
}

setModules(modules) {
   this.setState({modules:[modules]})
}

deleteModule(moduleId) {
 this.moduleService
    .deleteModule(moduleId)
    .then(() => {
      this.findAllModulesForCourse
        (this.state.courseId)
   });
}

renderModules() {
  let modules =
  this.state.modules.map((module) => {
    return (<ModuleListItem module={module} key={module.id} title={module.title}
                            delete={this.deleteModule}/>)
  });
   return (<ul>{modules}</ul>)

}


 render() { return (
  <div className="row">
     <h4>Module List for course Id: {this.state.courseId}</h4>
     <th><input className="form-control" placeholder="New Module"
                value={this.state.module.title} onChange={this.setModuleTitle}/></th>
     <th><button className="btn btn-primary" onClick={this.createModule}>
     Create</button></th>


   {this.renderModules()}


         < Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>


  </div>
)}
 
 
 }
