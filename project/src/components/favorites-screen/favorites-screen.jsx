import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FavoritePlace from '../favorites-place/favorites-place';
import Footer from '../footer/footer';
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
      <Header />
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
      <Footer />
    </div>
  );
}

FavoriteScreen.propTypes = {
  offers: PropTypes.arrayOf(FavoritePlaceProp),
};

export default FavoriteScreen;
