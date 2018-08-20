import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import PageLoader from '../../framework/ui/PageLoader/PageLoader';

function CourseCard(props) {
  const deleteModal = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => { props.onRemoveHandler(); },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  return (
    <div className="card">
      <div className="content">
        <div className="header">{props.course.title}</div>
        <div className="meta">Fee: ${props.course.fee}</div>
        <div className="meta">Max students: {props.course.maxStudent}</div>
        <div className="description">
          {props.course.description}
        </div>
      </div>
      <Link to={`/courses/${props.course.id}`} className="ui blue tiny button">
        <i className="edit icon" />
          Details
      </Link>
      <button className="ui teal tiny button" onClick={deleteModal}>
        <i className="trash alternate outline icon" />
          Delete
      </button>
      {/* <div className="ui bottom attached blue button">
        <i className="edit icon" />
        Details
      </div> */}
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

  onRemoveHandler(course) {
    axios.delete(`/api/courses/${course.id}`).then((response) => {
      console.log(response);
      console.log(response.data);
      this.fetchCourses();
    });
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
            <Link to="/courses/create" className="ui blue button">Add course</Link>
            <div className="ui divider" />
            <div className="ui cards">
              {this.state.courses.map(course => <CourseCard course={course} key={course.id} onRemoveHandler={() => this.onRemoveHandler(course)} />)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
