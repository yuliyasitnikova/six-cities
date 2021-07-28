import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute} from '../../const';
import {isAuth} from '../../utils';

function PrivateRoute({path, exact, render, authorizationStatus}) {
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
