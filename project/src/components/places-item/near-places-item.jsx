import React from 'react';
import PlacesItem from './places-item';
import PropTypes from 'prop-types';

function NearPlacesItem({className = '', ...restProps}) {
  return (
    <PlacesItem className={`near-places__card ${className}`} {...restProps} />
  );
}

NearPlacesItem.propTypes = {
  className: PropTypes.string,
};

export default NearPlacesItem;
