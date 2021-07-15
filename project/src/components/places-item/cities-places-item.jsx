import React from 'react';
import PlacesItem from './places-item';
import PropTypes from 'prop-types';

function CitiesPlacesItem({className = '', ...restProps}) {
  return (
    <PlacesItem className={`cities__place-card ${className}`} {...restProps} />
  );
}

CitiesPlacesItem.propTypes = {
  className: PropTypes.string,
};

export default CitiesPlacesItem;
