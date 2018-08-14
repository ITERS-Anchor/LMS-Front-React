
import React from 'react';
import classnames from 'classnames';

// import './page-loader.css';

export default function PageLoader({ className, children, ...other }) {
  return (
    <div className={classnames('ui segment', className)} {...other}>
      <div className="ui active centered inline loader" />
      <p />
      <p />
    </div>
  );
}
// <div class="ui active centered inline loader"></div>
