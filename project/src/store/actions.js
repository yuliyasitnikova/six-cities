import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',

  LOAD_USER: 'data/loadUser',
  LOAD_PLACES: 'data/loadPlaces',
  LOAD_PLACE: 'data/loadPlace',
  LOAD_REVIEWS: 'data/loadReviews',
  CLEAR_PLACE: 'data/clearPlace',
  LOAD_REVIEWS: 'data/loadReviews',

  CHANGE_CITY: 'ui/changeCity',
  CHANGE_SORT: 'ui/changeSort',
  DISABLE_REVIEW_FORM: 'ui/disableReviewForm',
  ENABLE_REVIEW_FORM: 'ui/enableReviewForm',
  RESET_REVIEW_FORM: 'ui/resetReviewForm',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const loadUser = createAction(ActionType.LOAD_USER, (user) => ({
  payload: user,
}));

export const loadPlaces = createAction(ActionType.LOAD_PLACES, (places) => ({
  payload: places,
}));

export const loadPlace = createAction(ActionType.LOAD_PLACE, (data) => ({
  payload: data,
}));

export const clearPlace = createAction(ActionType.CLEAR_PLACE);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (type) => ({
  payload: type,
}));

export const disableReviewForm = createAction(ActionType.DISABLE_REVIEW_FORM);

export const enableReviewForm = createAction(ActionType.ENABLE_REVIEW_FORM);

export const resetReviewForm = createAction(ActionType.RESET_REVIEW_FORM);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
