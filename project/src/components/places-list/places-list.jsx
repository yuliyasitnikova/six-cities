import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {PlacesListClassModifier} from '../../const';
import PlacesItem from '../places-item/places-item';
import CitiesPlacesItem from '../places-item/cities-places-item';
import NearPlacesItem from '../places-item/near-places-item';
import placesItemProp from '../places-item/places-item.prop';

const getComponentByClassName = (className, place, props) => {
  switch (className) {
    case PlacesListClassModifier.CITIES:
      return <CitiesPlacesItem key={`cities-places-item-${place.id}`} place={place} onMouseEnterCallback={props.onMouseEnterCallback} onMouseLeaveCallback={props.onMouseLeaveCallback} />;
    case PlacesListClassModifier.NEAR_PLACES:
      return <NearPlacesItem key={`near-places-item-${place.id}`} place={place} />;
    default:
      return <PlacesItem key={`places-item-${place.id}`} place={place} />;
  }
};

function PlacesList({className = '', places, ...otherProps}) {
  return (
    <div className={classNames(className, 'places__list', {'tabs__content': className === PlacesListClassModifier.CITIES})}>
      {places.map((place) => getComponentByClassName(className, place, {...otherProps}))}
    </div>
  );
}

PlacesList.propTypes = {
  className: PropTypes.string,
  places: PropTypes.arrayOf(placesItemProp),
  onMouseEnterCallback: PropTypes.func,
  onMouseLeaveCallback: PropTypes.func,
};

export default PlacesList;
