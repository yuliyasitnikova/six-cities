import React from 'react';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isCheckedAuth} from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';
import AuthScreen from '../auth-screen/auth-screen';
import PlacesScreen from '../places-screen/places-screen';
import PlaceScreen from '../place-screen/place-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App() {
  const authStatus = useSelector(getAuthStatus);

  if (isCheckedAuth(authStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <PlacesScreen />
      </Route>
      <Route
        path={AppRoute.ROOM}
        exact
        render={({match}) => <PlaceScreen id={parseInt(match.params.id, 10)} />}
      />
      <PrivateRoute
        path={AppRoute.FAVORITES}
        exact
        render={() => <FavoritesScreen />}
      />
      <Route path={AppRoute.LOGIN} exact>
        <AuthScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
