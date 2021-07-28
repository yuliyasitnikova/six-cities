export const ActionType = {
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',

  LOAD_USER: 'data/load_user',
  LOAD_PLACES: 'data/loadPlaces',
  LOAD_PLACE: 'data/loadPlace',
  CLEAR_PLACE: 'data/clearPlace',
  LOAD_REVIEWS: 'data/loadReviews',

  CHANGE_CITY: 'ui/change_city',
  CHANGE_SORT: 'ui/change_sort',
  DISABLE_REVIEW_FORM: 'ui/disable_review_form',
  ENABLE_REVIEW_FORM: 'ui/enable_review_form',
  RESET_REVIEW_FORM: 'ui/reset_review_form',
  REDIRECT_TO_ROUTE: 'ui/redirect_to_route',
};

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user,
});

export const loadPlaces = (places) => ({
  type: ActionType.LOAD_PLACES,
  payload: places,
});

export const loadPlace = (data) => ({
  type: ActionType.LOAD_PLACE,
  payload: data,
});

export const clearPlace = () => ({
  type: ActionType.CLEAR_PLACE,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSort = (type) => ({
  type: ActionType.CHANGE_SORT,
  payload: type,
});

export const disableReviewForm = () => ({
  type: ActionType.DISABLE_REVIEW_FORM,
});

export const enableReviewForm = () => ({
  type: ActionType.ENABLE_REVIEW_FORM,
});

export const resetReviewForm = () => ({
  type: ActionType.RESET_REVIEW_FORM,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
