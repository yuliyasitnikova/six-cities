export const ActionType = {
  FILL_PLACES: 'FILL_PLACES',
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
};

export const ActionCreator = {
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
