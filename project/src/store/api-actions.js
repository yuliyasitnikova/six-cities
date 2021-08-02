import {
  loadUser,
  requireAuthorization,
  logout as closeSession,
  loadPlaces,
  loadPlace,
  loadReviews,
  changeReviewPostStatus,
  loadFavorites,
  updatePlace,
  redirectToRoute
} from './actions';
import {APIRoute, AppRoute, AuthorizationStatus, ReviewSendStatus} from '../const';
import {adaptPlaceToClient, adaptReviewToClient, adaptUserToClient} from '../adapter';

export const checkAuth = () => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.get(APIRoute.LOGIN);
    const user = adaptUserToClient(data);
    dispatch(loadUser(user));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

export const login = ({email, password}) => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.post(APIRoute.LOGIN, {email, password});
    const user = adaptUserToClient(data);
    dispatch(loadUser(user));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(redirectToRoute(AppRoute.MAIN));
    localStorage.setItem('token', data.token);
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

export const logout = () => async (dispatch, _getState, api) => {
  await api.delete(APIRoute.LOGOUT);
  dispatch(closeSession());
  localStorage.removeItem('token');
};

export const fetchPlaces = () => async (dispatch, _getState, api) => {
  let places = [];
  try {
    const {data} = await api.get(APIRoute.PLACES);
    places = data.map(adaptPlaceToClient);
    dispatch(loadPlaces(places));
  } catch {
    dispatch(loadPlaces(places));
  }
};

const fetchPlaceProperties = async (api, id) => {
  try {
    const {data} = await api.get(`${APIRoute.PLACES}/${id}`);
    return adaptPlaceToClient(data);
  } catch {
    return null;
  }
};

const fetchPlaceNearby = async (api, id) => {
  try {
    const {data} = await api.get(`${APIRoute.PLACES}/${id}${APIRoute.NEARBY}`);
    return data.map(adaptPlaceToClient);
  } catch {
    return [];
  }
};

const fetchPlaceReviews = async (api, id) => {
  try {
    const {data} = await api.get(`${APIRoute.REVIEWS}/${id}`);
    return data.map(adaptReviewToClient);
  } catch {
    return [];
  }
};

export const fetchPlace = (id) => async (dispatch, _getState, api) => {
  const [properties, nearby, reviews] = await Promise.all([
    fetchPlaceProperties(api, id),
    fetchPlaceNearby(api, id),
    fetchPlaceReviews(api, id),
  ]);

  dispatch(loadPlace({properties, nearby, reviews}));
};

export const postReview = (id, {comment, rating}) => async (dispatch, _getState, api) => {
  dispatch(changeReviewPostStatus(ReviewSendStatus.POSTING));

  try {
    const {data} = await api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating});
    const reviews = data.map(adaptReviewToClient);
    dispatch(loadReviews(reviews));
    dispatch(changeReviewPostStatus(ReviewSendStatus.SUCCESS));
  } catch {
    dispatch(changeReviewPostStatus(ReviewSendStatus.ERROR));
  }
};

export const fetchFavorites = () => async (dispatch, _getState, api) => {
  let places = [];
  try {
    const {data} = await api.get(APIRoute.FAVORITES);
    places = data.map(adaptPlaceToClient);
    dispatch(loadFavorites(places));
  } catch {
    dispatch(loadFavorites(places));
  }
};

export const setFavorite = (id, status) => async (dispatch, _getState, api) => {
  try {
    const {data} = await api.post(`${APIRoute.FAVORITES}/${id}/${status}`);
    const updated = adaptPlaceToClient(data);
    dispatch(updatePlace(updated));
  } catch {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  }
};
