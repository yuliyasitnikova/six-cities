import {
  loadUser,
  requireAuthorization,
  logout as closeSession,
  loadPlaces,
  loadPlace,
  loadReviews,
  loadFavorites,
  updatePlaces,
  disableReviewForm,
  enableReviewForm,
  resetReviewForm,
  redirectToRoute
} from './actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptUserToClient, adaptPlaceToClient, adaptReviewToClient} from '../adapter';

export const checkAuth = () => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.get(APIRoute.LOGIN);
    dispatch(loadUser(adaptUserToClient(data)));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  } catch (err) {
    //todo: showError
  }
};

export const login = ({login: email, password}) => async (dispatch, _getState, api) => {
  const {data} = await api.post(APIRoute.LOGIN, {email, password});
  localStorage.setItem('token', data.token);
  dispatch(loadUser(adaptUserToClient(data)));
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(redirectToRoute(AppRoute.MAIN));
};

export const logout = () => async (dispatch, _getState, api) => {
  await api.delete(APIRoute.LOGOUT);
  localStorage.removeItem('token');
  dispatch(closeSession());
};

export const fetchPlaces = () => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.get(APIRoute.PLACES);
    const places = data.map(adaptPlaceToClient);
    dispatch(loadPlaces(places));
  }
  catch (err) {
    //todo: showError
  }
};

export const fetchPlace = (id) => async (dispatch, _getState, api) => {
  try {
    const [{data: place}, {data: nearby}, {data: reviews}] = await Promise.all([
      api.get(APIRoute.PLACE.replace(':id', id)),
      api.get(APIRoute.NEARBY.replace(':place_id', id)),
      api.get(APIRoute.REVIEWS.replace(':place_id', id)),
    ]);

    const data = {
      properties: adaptPlaceToClient(place),
      nearby: nearby.map(adaptPlaceToClient),
      reviews: reviews.map(adaptReviewToClient),
    };
    dispatch(loadPlace(data));
  }
  catch (err) {
    //todo: showError
  }
};

export const postReview = (place, {comment, rating}) => async (dispatch, _getState, api) => {
  dispatch(disableReviewForm());

  try {
    const {data} = await api.post(APIRoute.REVIEWS.replace(':place_id', place), {comment, rating});
    const reviews = data.map(adaptReviewToClient);
    dispatch(loadReviews(reviews));
    dispatch(resetReviewForm());
  }
  catch {
    //todo: showError
    dispatch(enableReviewForm());
  }
};

export const fetchFavorites = () => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.get(APIRoute.FAVORITES);
    const places = data.map(adaptPlaceToClient);
    dispatch(loadFavorites(places));
  }
  catch (err) {
    //todo: showError
  }
};

export const setFavorite = (id, status) => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.post(`${APIRoute.FAVORITES}/${id}/${status}`);
    const updated = adaptPlaceToClient(data);
    dispatch(updatePlaces(updated));
  }
  catch (err) {
    //todo: showError
  }
};
