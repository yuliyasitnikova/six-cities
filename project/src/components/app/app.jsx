import React from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import AuthScreen from '../auth-screen/auth-screen';
import PlacesScreen from '../places-screen/places-screen';
import PlaceScreen from '../place-screen/place-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App({isPlacesLoaded}) {
  if (!isPlacesLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
          <FavoritesScreen places={[]} />
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
  isPlacesLoaded: PropsTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isPlacesLoaded: state.isPlacesLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
