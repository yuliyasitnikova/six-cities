import {loadUser, requireAuthorization, logout as closeSession, loadPlaces, loadPlace, loadReviews, disableReviewForm, enableReviewForm, resetReviewForm, redirectToRoute} from './actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptPlaceToClient, adaptReviewToClient, adaptUserToClient} from '../adapter';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => adaptUserToClient(data))
    .then((user) => dispatch(loadUser(user)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      return adaptUserToClient(data);
    })
    .then((user) => dispatch(loadUser(user)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const fetchPlaces = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PLACES)
    .then(({data}) => data.map(adaptPlaceToClient))
    .then((places) => dispatch(loadPlaces(places)))
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
      dispatch(loadPlace(data));
    })
);

export const postReview = (place, {comment, rating}) => (dispatch, _getState, api) => {
  dispatch(disableReviewForm());

  return api.post(APIRoute.REVIEWS.replace(':place_id', place), {comment, rating})
    .then(({data}) => {
      const reviews = data.map(adaptReviewToClient);
      dispatch(loadReviews(reviews));
      dispatch(resetReviewForm());
    })
    .catch(() => {
      //todo: showError
      dispatch(enableReviewForm());
    });
};
