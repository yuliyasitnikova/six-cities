import React from 'react';
import PropTypes from 'prop-types';
import FavoriteList from '../favorites-list/favorites-list';
import favoriteItemProp from '../favorites-item/favorites-item.prop';

function Favorites({offers}) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={offers} />
    </section>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(favoriteItemProp),
};

export default Favorites;
