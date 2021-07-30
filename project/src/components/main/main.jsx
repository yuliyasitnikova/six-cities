import React from 'react';
import PropTypes from 'prop-types';

function Main({className, children}) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Main;
