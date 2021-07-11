import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import AuthScreen from '../auth-screen/auth-screen';
import PlacesScreen from '../places-screen/places-screen';
import PlaceScreen from '../place-screen/place-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import placesItemProp from '../places-item/places-item.prop';

function App(props) {
  const {places} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <PlacesScreen />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <AuthScreen />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesScreen places={places} />
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
  places: PropTypes.arrayOf(placesItemProp),
};

export default App;
