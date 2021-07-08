import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesList({offers}) {
  const favoritesObject = useMemo(() => {
    const _favoritesObject = {};
    offers.forEach((offer) => {
      const currentCityArr = _favoritesObject[offer.city.name] || [];
      _favoritesObject[offer.city.name] = [...currentCityArr, offer];
    });
    return _favoritesObject;
  }, [offers]);

  return (
    <ul className="favorites__list">
      {Object.keys(favoritesObject).map((item) => (
        <li key={item} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesObject[item].map((offer) => (
              <FavoritesItem key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(favoritesItemProp),
};

export default FavoritesList;
