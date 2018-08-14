import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Shell from './App/Shell/Shell';
import Container from './framework/ui/Container/Container';
import CourseList from './Course/CourseList/CourseList';
// import { LecturerListView } from './Lecturer';
// import { StudentListView } from './Student';

import './styles/app.css';

axios.defaults.baseURL = 'http://helenlms.azurewebsites.net';
const App = () => {
  return (
    <Shell>
      <Container>
        <CourseList />
      </Container>
    </Shell>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
