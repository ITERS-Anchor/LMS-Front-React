import React from 'react';
import axios from 'axios';
import PageLoader from '../../framework/ui/PageLoader/PageLoader';

function CourseCard({ course }) {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{course.title}</div>
        <div className="meta">Fee: ${course.fee}</div>
        <div className="meta">Max students: {course.maxStudent}</div>
        <div className="description">
          {course.description}
        </div>
      </div>
      <div className="ui bottom attached violet button">
        <i className="edit icon" />
        Details
      </div>
    </div>
  );
}
export default class CourseList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      courses: [],
    };
  }

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.setState({ isLoading: true });
    // promise
    axios.get('/api/courses').then((response) => {
      this.setState({ courses: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <PageLoader />}
        {!this.state.isLoading && (
          <div>
            <h1 className="ui header">Courses</h1>
            <div className="ui cards">
              {this.state.courses.map(course => <CourseCard course={course} key={course.id} />)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
