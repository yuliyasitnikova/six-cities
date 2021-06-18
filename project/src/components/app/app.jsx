import React from 'react';
import PropTypes from 'prop-types';
import CitiesScreen from '../cities-screen/cities-screen';

function App(props) {
  const {placesCount} = props;

  return (
    <CitiesScreen placesCount={placesCount} />
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
