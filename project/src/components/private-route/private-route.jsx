import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {AppRoute} from '../../const';
import {isAuth} from '../../utils';

function PrivateRoute({path, exact, render}) {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        isAuth(authorizationStatus)
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
