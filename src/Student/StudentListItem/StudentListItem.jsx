import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';// Import css

export default function StudentListItem(props) {
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
  // onClick: () => { props.onRemoveHandler(); }
  return (
    <tr>
      <td>{props.student.firstName} {props.student.lastName}</td>
      <td>{props.student.email}</td>
      <td>{props.student.gender}</td>
      <td>{props.student.credit}</td>
      <td>
        <button className="ui teal tiny button" onClick={deleteModal}>
          <i className="trash alternate outline icon" />
          Delete
        </button>

        <Link to={`/students/${props.student.id}`} className="ui blue tiny button">
          <i className="edit icon" />
          Details
        </Link>
        {/* <Link to={`/students/delete/${student.id}`} className="ui teal tiny button">
          <i className="edit icon" />
          Delete
        </Link> */}
      </td>
    </tr>
  );
}
