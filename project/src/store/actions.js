export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  FILL_PLACES: 'FILL_PLACES',
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  fillPlaces: (places) => ({
    type: ActionType.FILL_PLACES,
    payload: places,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (type) => ({
    type: ActionType.CHANGE_SORT,
    payload: type,
  }),
};
