import React from 'react';
import TopNav from '../TopNav/TopNav';

export default function Shell(props) {
  return (
    <div>
      <TopNav />
      {props.children}
    </div>
  );
}
