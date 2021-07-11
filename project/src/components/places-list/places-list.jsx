import React from 'react';
import PropTypes from 'prop-types';
import PlacesItem from '../places-item/places-item';
import placesItemProp from '../places-item/places-item.prop';

function PlacesList({places, onItemHover}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <PlacesItem key={`places-item-${place.id.toString()}`} place={place} onHover={onItemHover} />
      ))}
    </div>
  );
}

PlacesList.propTypes = {
  places: PropTypes.arrayOf(placesItemProp),
  onItemHover: PropTypes.func.isRequired,
};

export default PlacesList;
