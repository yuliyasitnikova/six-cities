import React from 'react';
import classNames from 'classnames/bind';
import Header from '../header/header';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from '../footer/footer';

function FavoritesScreen() {
  const places = [];

  return (
    <div className={classNames('page', {'page--favorites-empty': !places.length})}>
      <Header />
      <Main className={classNames('page__main', 'page__main--favorites', {'page__main--favorites-empty': !places.length})}>
        <div className="page__favorites-container container">
          {
            places.length
              ? <Favorites places={places} />
              : <FavoritesEmpty />
          }
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
