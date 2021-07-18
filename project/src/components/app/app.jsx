import React from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import AuthScreen from '../auth-screen/auth-screen';
import PlacesScreen from '../places-screen/places-screen';
import PlaceScreen from '../place-screen/place-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App({isAuthChecked, isPlacesLoaded}) {
  if (!isAuthChecked || !isPlacesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <PlacesScreen />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <AuthScreen />
        </Route>
        <PrivateRoute path={AppRoute.FAVORITES} exact render={() => <FavoritesScreen />} />
        <Route path={AppRoute.ROOM} exact component={PlaceScreen} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isAuthChecked: PropsTypes.bool.isRequired,
  isPlacesLoaded: PropsTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthChecked: state.isAuthChecked,
  isPlacesLoaded: state.isPlacesLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
