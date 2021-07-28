import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getSortType} from '../../store/ui/selectors';
import {PlacesListClassModifier, SortType} from '../../const';
import Sorting from '../sorting/sorting';
import PlacesList from '../places-list/places-list';
import PlacesMap from '../places-map/places-map';
import placesItemProp from '../places-item/places-item.prop';

function Places({city, places}) {
  const [activePoint, setActivePoint] = useState(null);
  const sortType = useSelector(getSortType);

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

  const handlePlaceMouseEnter = useCallback((id) => setActivePoint(id), []);
  const handlePlaceMouseLeave = useCallback(() => setActivePoint(null), []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} place{places.length !== 1 && 's'} to stay in {city}</b>
        <Sorting />
        <PlacesList className={PlacesListClassModifier.CITIES} places={sortedPlaces} onPlaceMouseEnter={handlePlaceMouseEnter} onPlaceMouseLeave={handlePlaceMouseLeave} />
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
};

export default Places;
