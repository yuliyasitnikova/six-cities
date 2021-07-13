import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from '../footer/footer';
import favoritesItemProp from '../favorites-item/favorites-item.prop';

function FavoritesScreen({places}) {
  return (
    <div className={classNames('page', {'page--favorites-empty': !places.length})}>
      <Header />
      <main className={classNames('page__main', 'page__main--favorites', {'page__main--favorites-empty': !places.length})}>
        <div className="page__favorites-container container">
          {
            places.length
              ? <Favorites places={places} />
              : <FavoritesEmpty />
          }
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
