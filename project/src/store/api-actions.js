import {ActionCreator} from './actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptPlaceToClient, adaptReviewToClient, adaptUserToClient} from '../adapter';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => adaptUserToClient(data))
    .then((user) => dispatch(ActionCreator.loadUser(user)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      return adaptUserToClient(data);
    })
    .then((user) => dispatch(ActionCreator.loadUser(user)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const fetchPlaces = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PLACES)
    .then(({data}) => data.map(adaptPlaceToClient))
    .then((places) => dispatch(ActionCreator.loadPlaces(places)))
);

export const fetchPlace = (id) => (dispatch, _getState, api) => (
  Promise
    .all([
      api.get(APIRoute.PLACE.replace(':id', id)),
      api.get(APIRoute.NEARBY.replace(':place_id', id)),
      api.get(APIRoute.REVIEWS.replace(':place_id', id)),
    ])
    .then(([{data: place}, {data: nearby}, {data: reviews}]) => {
      const data = {
        properties: adaptPlaceToClient(place),
        nearby: nearby.map(adaptPlaceToClient),
        reviews: reviews.map(adaptReviewToClient),
      };
      dispatch(ActionCreator.loadPlaceData(data));
    })
);

