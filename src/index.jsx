import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Shell from './App/Shell/Shell';
import Routes from './Routes';
import Container from './framework/ui/Container/Container';
// import CourseList from './Course/CourseList/CourseList';
// import LecturerList from './Lecturer/LecturerList/LecturerList';
// import StudentList from './Student/StudentList/StudentList';

import './styles/app.css';

axios.defaults.baseURL = 'http://helenlms.azurewebsites.net';
const App = () => {
  return (
    <Router>
      <Shell>
        <Container>
          <Routes />
        </Container>
      </Shell>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
