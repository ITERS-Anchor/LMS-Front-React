import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../framework/ui/Container/Container';

export default function TopNav() {
  return (
    <div className="ui blue fixed inverted menu">
      {/* <Container>
        <a href="#" className="header item">
          My React App
        </a>
        <a href="#" className="item">Courses</a>
        <a href="#" className="item">Students</a>
        <a href="#" className="item">Lecturers</a>
      </Container> */}
      <Container>
        <Link to="/" className="header item">
          My React App
        </Link>
        <Link to="/courses" className="item">Courses</Link>
        <Link to="/students" className="item">Students</Link>
        <Link to="/lecturers" className="item">Lecturers</Link>
      </Container>
    </div>
  );
}
