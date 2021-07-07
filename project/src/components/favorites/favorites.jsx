import React from 'react';
import PropTypes from 'prop-types';
import FavoriteList from '../favorites-list/favorites-list';
import FavoritePlaceProp from '../favorites-place/favorites-place.prop';

function Favorites({offers}) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList offers={offers} />
    </section>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(FavoritePlaceProp),
};

export default Favorites;
