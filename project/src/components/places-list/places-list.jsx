import React from 'react';
import PropTypes from 'prop-types';
import PlacesItem from '../places-item/places-item';
import placesItemProp from '../places-item/places-item.prop';

function PlacesList({offers, onItemHover}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlacesItem key={offer.id.toString()} offer={offer} onHover={onItemHover} />
      ))}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(placesItemProp),
  onItemHover: PropTypes.func.isRequired,
};

export default PlacesList;
