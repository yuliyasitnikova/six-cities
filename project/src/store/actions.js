export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_PLACES: 'FILL_PLACES',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillPlaces: (city) => ({
    type: ActionType.FILL_PLACES,
    payload: city,
  }),
};
