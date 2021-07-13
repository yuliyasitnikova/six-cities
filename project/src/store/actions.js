export const ActionType = {
  LOAD_PLACES: 'LOAD_PLACES',
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_PLACES: 'FILL_PLACES',
};

export const ActionCreator = {
  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};
