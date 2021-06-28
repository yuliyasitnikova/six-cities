import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import FavoritePlace from '../favorites-place/favorites-place';
import FavoritePlaceProp from '../favorites-place/favorites-place.prop';

function FavoriteScreen(props) {
  const {offers} = props;
  const favoriteList = {};

  offers.map((offer) => {
    const currentCityArr = favoriteList[offer.city.name] || [];
    favoriteList[offer.city.name] = [...currentCityArr, offer];
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoriteList).map((item) => (
                <li key={item} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{item}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteList[item].map((offer) => (
                      <FavoritePlace key={offer.id} offer={offer} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

FavoriteScreen.propTypes = {
  offers: PropTypes.arrayOf(FavoritePlaceProp),
};

export default FavoriteScreen;
