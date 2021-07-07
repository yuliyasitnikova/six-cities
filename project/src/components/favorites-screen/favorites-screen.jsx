import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import FavoritePlaceProp from '../favorites-place/favorites-place.prop';

function FavoriteScreen({offers}) {
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

FavoriteScreen.propTypes = {
  offers: PropTypes.arrayOf(FavoritePlaceProp),
};

export default FavoriteScreen;
