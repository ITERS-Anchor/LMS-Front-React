import React from 'react';
import Container from '../../framework/ui/Container/Container';

export default function TopNav() {
  return (
    <div className="ui violet fixed inverted menu">
      <Container>
        <a href="#" className="header item">
          My React App
        </a>
        <a href="#" className="item">Courses</a>
        <a href="#" className="item">Students</a>
        <a href="#" className="item">Lecturers</a>
      </Container>
    </div>
  );
}
