import React from 'react';
import Alert from '../UI/Alert';
import classes from './ErrorAlert.module.css';

const ErrorAlert = (props) => {
  const { message, onClose } = props;
  return (
    <Alert>
      <div className={classes.errorContainer}>
        <div className={classes.errorMesssage}>
          <span>{message}</span>
        </div>
        <button type="button" className={classes.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Alert>
  );
};

export default ErrorAlert;
