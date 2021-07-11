import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesList({places}) {
  const favoritesObject = useMemo(() => {
    const _favoritesObject = {};
    places.forEach((place) => {
      if (place.isFavorite) {
        const currentCityArr = _favoritesObject[place.city.name] || [];
        _favoritesObject[place.city.name] = [...currentCityArr, place];
      }
    });
    return _favoritesObject;
  }, [places]);

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
            {favoritesObject[cityName].map((offer) => (
              <FavoritesItem key={offer.id} offer={offer} />
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
