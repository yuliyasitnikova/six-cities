import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {PlacesListClassModifier, SortType} from '../../const';
import Sorting from '../sorting/sorting';
import PlacesList from '../places-list/places-list';
import PlacesMap from '../places-map/places-map';
import placesItemProp from '../places-item/places-item.prop';

function Places({city, places, sortType}) {
  const [activePoint, setActivePoint] = useState({});

  const sortedPlaces = useMemo(() => {
    switch (sortType) {
      case SortType.PRICE_TO_HIGH:
        return places.slice().sort((a, b) => a.price - b.price);
      case SortType.PRICE_TO_LOW:
        return places.slice().sort((a, b) => b.price - a.price);
      case SortType.RATING_TO_LOW:
        return places.slice().sort((a, b) => b.rating - a.rating);
    }
    return places;
  }, [places, sortType]);

  const onPlaceMouseEnter = (placeId) => {
    const activeItem = places.find((place) => place.id === placeId);
    setActivePoint(activeItem);
  };

  const onPlaceMouseLeave = () => setActivePoint({});

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} place{places.length !== 1 && 's'} to stay in {city}</b>
        <Sorting />
        <PlacesList className={PlacesListClassModifier.CITIES} places={sortedPlaces} onMouseEnterCallback={onPlaceMouseEnter} onMouseLeaveCallback={onPlaceMouseLeave} />
      </section>
      <div className="cities__right-section">
        <PlacesMap points={places} activePoint={activePoint} />
      </div>
    </div>
  );
}

Places.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placesItemProp),
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {Places};
export default connect(mapStateToProps, null)(Places);
