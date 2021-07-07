import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FavoriteItem from '../favorites-item/favorites-item';
import favoriteItemProp from '../favorites-item/favorites-item.prop';

function FavoriteList({offers}) {
  const favoriteObject = useMemo(() => {
    const _favoriteObject = {};
    offers.forEach((offer) => {
      const currentCityArr = _favoriteObject[offer.city.name] || [];
      _favoriteObject[offer.city.name] = [...currentCityArr, offer];
    });
    return _favoriteObject;
  }, [offers]);

  return (
    <ul className="favorites__list">
      {Object.keys(favoriteObject).map((item) => (
        <li key={item} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteObject[item].map((offer) => (
              <FavoriteItem key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(favoriteItemProp),
};

export default FavoriteList;
