import React from 'react';
import PropTypes from 'prop-types';
import CitiesPlace from '../cities-place/cities-place';
import CitiesPlaceProp from '../cities-place/cities-place.prop';

function CitiesPlacesList({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesPlace key={offer.id.toString()} offer={offer} />
      ))}
    </div>
  );
}

CitiesPlacesList.propTypes = {
  offers: PropTypes.arrayOf(CitiesPlaceProp),
};

export default CitiesPlacesList;
