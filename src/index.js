import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


import CourseManager from './containers/CourseManager';

ReactDOM.render(
        <div className="jumbotron">
        <CourseManager/>
        </div>,
   document.getElementById('root')
);