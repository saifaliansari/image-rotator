import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Alert.module.css';

const AlertOverlay = (props) => {
  const { children } = props;
  return (
    <div className={classes.alert}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Alert = (props) => {
  const { children } = props;
  return ReactDOM.createPortal(<AlertOverlay>{children}</AlertOverlay>, portalElement);
};

export default Alert;
