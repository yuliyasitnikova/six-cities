import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {city} from '../../const';
import PlacesList from '../places-list/places-list';
import PlacesMap from '../places-map/places-map';
import placesItemProp from '../places-item/places-item.prop';

function Places({placesCount, offers}) {
  const [activePoint, setActivePoint] = useState({});

  const onItemHover = (itemId) => {
    const activeItem = offers.find((offer) => (
      offer.id === itemId
    ));
    setActivePoint(activeItem);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam</b>
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
          <PlacesList offers={offers} onItemHover={onItemHover} />
        </section>
        <div className="cities__right-section">
          <PlacesMap city={city} points={offers} activePoint={activePoint} />
        </div>
      </div>
    </div>
  );
}

Places.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(placesItemProp),
};

export default Places;
