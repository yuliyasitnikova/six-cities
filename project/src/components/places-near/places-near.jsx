import React from 'react';
import PropTypes from 'prop-types';
import {PlacesListClassModifier} from '../../const';
import PlacesList from '../places-list/places-list';
import placesItemProp from '../places-item/places-item.prop';

function PlacesNear({places}) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlacesList className={PlacesListClassModifier.NEAR_PLACES} places={places} />
    </section>
  );
}

PlacesNear.propTypes = {
  places: PropTypes.arrayOf(placesItemProp),
};

export default PlacesNear;
