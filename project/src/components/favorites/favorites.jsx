import React from 'react';
import PropTypes from 'prop-types';
import FavoriteList from '../favorites-list/favorites-list';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function Favorites({places}) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList places={places} />
    </section>
  );
}

Favorites.propTypes = {
  places: PropTypes.arrayOf(favoritesItemProp),
};

export default Favorites;
