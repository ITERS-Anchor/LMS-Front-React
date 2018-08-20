import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function LecturerListItem(props) {
  const deleteModal = () => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this lecturer?',
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
    <tr>
      <td>{props.lecturer.name}</td>
      <td>{props.lecturer.email}</td>
      <td>{props.lecturer.staffNumber}</td>
      <td style={{ textAlign: 'left' }}>
        <button className="ui teal tiny button" onClick={deleteModal}>
          <i className="trash alternate outline icon" />
          Delete
        </button>
        <Link to={`/lecturers/${props.lecturer.id}`} className="ui blue tiny button">
          <i className="edit icon" />
          Details
        </Link>
      </td>
    </tr>
  );
}
