import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesList({places}) {
  const favoritesObject = {};
  places.forEach((place) => {
    const currentCityArr = favoritesObject[place.city.name] || [];
    favoritesObject[place.city.name] = [...currentCityArr, place];
  });

  return (
    <ul className="favorites__list">
      {Object.keys(favoritesObject).map((cityName) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesObject[cityName].map((place) => (
              <FavoritesItem key={`Favorite Item ${place.id}`} place={place} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  places: PropTypes.arrayOf(favoritesItemProp),
};

export default FavoritesList;
