import React from 'react';
import PropTypes from 'prop-types';

function Alert({message}) {
  return (
    <div className="alert">{message}</div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
