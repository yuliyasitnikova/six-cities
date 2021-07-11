import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesScreen({places}) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites places={places} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesScreen.propTypes = {
  places: PropTypes.arrayOf(favoritesItemProp),
};

export default FavoritesScreen;
