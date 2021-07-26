export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOGOUT: 'LOGOUT',
  LOAD_USER: 'LOAD_USER',
  LOAD_PLACES: 'LOAD_PLACES',
  LOAD_PLACE_DATA: 'LOAD_PLACE_DATA',
  CLEAR_PLACE_DATA: 'CLEAR_PLACE_DATA',
  LOAD_REVIEWS: 'LOAD_REVIEWS',
  DISABLE_REVIEW_FORM: 'DISABLE_REVIEW_FORM',
  ENABLE_REVIEW_FORM: 'ENABLE_REVIEW_FORM',
  RESET_REVIEW_FORM: 'RESET_REVIEW_FORM',
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  loadUser: (user) => ({
    type: ActionType.LOAD_USER,
    payload: user,
  }),
  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places,
  }),
  loadPlaceData: (data) => ({
    type: ActionType.LOAD_PLACE_DATA,
    payload: data,
  }),
  clearPlaceData: () => ({
    type: ActionType.CLEAR_PLACE_DATA,
  }),
  disableReviewForm: () => ({
    type: ActionType.DISABLE_REVIEW_FORM,
  }),
  enableReviewForm: () => ({
    type: ActionType.ENABLE_REVIEW_FORM,
  }),
  resetReviewForm: () => ({
    type: ActionType.RESET_REVIEW_FORM,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (type) => ({
    type: ActionType.CHANGE_SORT,
    payload: type,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
