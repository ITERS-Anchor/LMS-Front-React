import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CourseList, CourseDetails } from './Course';
import { LecturerList, LecturerDetails } from './Lecturer';
import { StudentList, StudentDetails } from './Student';

export default () => ((
  <Switch>
    <Route exact path="/" component={StudentList} />
    <Route exact path="/courses" component={CourseList} />
    <Route exact path="/courses/:id" component={CourseDetails} />
    <Route exact path="/students" component={StudentList} />
    <Route exact path="/students/:id" component={StudentDetails} />
    <Route exact path="/lecturers" component={LecturerList} />
    <Route exact path="/lecturers/:id" component={LecturerDetails} />
  </Switch>
));
