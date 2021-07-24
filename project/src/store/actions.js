export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOGOUT: 'LOGOUT',
  LOAD_USER: 'LOAD_USER',
  LOAD_PLACES: 'LOAD_PLACES',
  LOAD_PLACE_DATA: 'LOAD_PLACE_DATA',
  CLEAR_PLACE_DATA: 'CLEAR_PLACE_DATA',
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
