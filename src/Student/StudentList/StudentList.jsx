import React from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { range } from 'lodash/util';
import { Link } from 'react-router-dom';
import StudentListItem from '../StudentListItem/StudentListItem';
import PageLoader from '../../framework/ui/PageLoader/PageLoader';

function renderHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Credit</th>
        <th>Details</th>
      </tr>
    </thead>
  );
}

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      students: [],
      currentPage: 1,
      totalPage: 1,
    };
    this.fetchStudentsByPage = this.fetchStudentsByPage.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }

  componentDidMount() {
    this.fetchStudents();
  }
  onRemoveHandler(stu) {
    axios.delete(`/api/students/${stu.id}`).then((response) => {
      console.log(response);
      console.log(response.data);
      this.fetchStudents();
    });
  }

  fetchStudents() {
    this.setState({ isLoading: true });
    axios.get('/api/students').then((response) => {
      this.setState({
        students: response.data.students,
        totalPage: response.data.totalPage,
        isLoading: false,
      });
    });
  }

  fetchStudentsByPage(pageNumber) {
    this.setState({ currentPage: pageNumber });
    axios.get(`/api/students?pageNumber=${pageNumber}`).then((response) => {
      this.setState({
        students: response.data.students,
        totalPage: response.data.totalPage,
      });
    });
  }

  renderBody() {
    return (
      <tbody>
        {this.state.students.map(stu => <StudentListItem student={stu} key={stu.id} onRemoveHandler={() => this.onRemoveHandler(stu)} />)}
      </tbody>
    );
  }
  renderFooter() {
    const { totalPage, currentPage } = this.state;
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPage;
    return (
      <tfoot>
        <tr>
          <th colSpan="5">
            <div className="ui right floated pagination menu">
              <a className={classnames('icon item', { disabled: !hasPrev })} onClick={hasPrev ? () => this.fetchStudentsByPage(currentPage - 1) : undefined}>
                <i className="left chevron icon" />
              </a>
              {range(1, totalPage + 1).map(pageNumber => (
                <a
                  key={pageNumber}
                  className={classnames('item', { active: currentPage === pageNumber })}
                  onClick={currentPage === pageNumber ? undefined : () => this.fetchStudentsByPage(pageNumber)}
                >
                  {pageNumber}
                </a>
              ))}
              <a className={classnames('icon item', { disabled: !hasNext })} onClick={hasNext ? () => this.fetchStudentsByPage(currentPage + 1) : undefined}>
                <i className="right chevron icon" />
              </a>
            </div>
          </th>
        </tr>
      </tfoot>
    );
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <PageLoader />}
        {!this.state.isLoading && (
          <div>
            <h1 className="ui header">Students</h1>
            <Link to="/students/create" className="ui blue button">Add student</Link>
            <div className="ui divider" />
            <table className="ui celled table">
              {renderHeader()}
              {this.renderBody()}
              {this.renderFooter()}
            </table>
          </div>
        )}
      </div>
    );
  }
}
