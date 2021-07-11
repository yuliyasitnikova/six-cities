import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import PlacesMap from '../places-map/places-map';
import placesItemProp from '../places-item/places-item.prop';

function Places({city, places}) {
  const [activePoint, setActivePoint] = useState({});

  const onItemHover = (placeId) => {
    const activeItem = places.find((place) => (
      place.id === placeId
    ));
    setActivePoint(activeItem);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{places.length} place{places.length !== 1 && 's'} to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>
        <PlacesList places={places} onItemHover={onItemHover} />
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
