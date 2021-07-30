import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFavoritesList, getFavoritesLoadedStatus} from '../../store/data/selectors';
import {fetchFavorites} from '../../store/api-actions';
import classNames from 'classnames/bind';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Footer from '../footer/footer';

function FavoritesScreen() {
  const dispatch = useDispatch();

  const favorites = useSelector(getFavoritesList);
  const isDataLoaded = useSelector(getFavoritesLoadedStatus);

  useEffect(() => dispatch(fetchFavorites()), [dispatch]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className={classNames('page', {'page--favorites-empty': !favorites.length})}>
      <Header />
      <Main className={classNames('page__main', 'page__main--favorites', {'page__main--favorites-empty': !favorites.length})}>
        <div className="page__favorites-container container">
          {
            favorites.length
              ? <Favorites places={favorites} />
              : <FavoritesEmpty />
          }
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
