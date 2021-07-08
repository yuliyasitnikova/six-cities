import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesScreen({offers}) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites offers={offers} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(favoritesItemProp),
};

export default FavoritesScreen;
