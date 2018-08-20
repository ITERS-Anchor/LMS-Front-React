import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageLoader from '../../framework/ui/PageLoader/PageLoader';
import LecturerListItem from '../LecturerListItem/LecturerListItem';

export default class LecturerListView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      lecturers: [],
    };
  }

  componentDidMount() {
    this.fetchLecturers();
  }

  onRemoveHandler(lecturer) {
    axios.delete(`/api/lecturers/${lecturer.id}`).then((response) => {
      console.log(response);
      console.log(response.data);
      this.fetchLecturers();
    });
  }

  fetchLecturers() {
    this.setState({ isLoading: true });
    axios.get('/api/lecturers').then((response) => {
      this.setState({ lecturers: response.data, isLoading: false });
    });
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <PageLoader />}
        {!this.state.isLoading && (
          <div>
            <h1 className="ui header">Lecturers</h1>
            <Link to="/lecturers/create" className="ui blue button">Add lecturer</Link>
            <div className="ui divider" />
            <table className="ui celled table">
              <thead>
                <tr>
                  <th style={{ width: 200 }}>Name</th>
                  <th>Email</th>
                  <th style={{ width: 150 }}>Staff number</th>
                  <th >Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lecturers.map(lecturer => (
                  <LecturerListItem lecturer={lecturer} key={lecturer.id} onRemoveHandler={() => this.onRemoveHandler(lecturer)} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

