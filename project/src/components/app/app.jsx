import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import AuthScreen from '../auth-screen/auth-screen';
import CitiesScreen from '../cities-screen/cities-screen';
import PlaceScreen from '../place-screen/place-screen';
import FavoriteScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import CitiesPlaceProp from '../cities-place/cities-place.prop';

function App(props) {
  const {placesCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <CitiesScreen
            placesCount={placesCount}
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <AuthScreen />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoriteScreen />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <PlaceScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(CitiesPlaceProp),
};

export default App;
