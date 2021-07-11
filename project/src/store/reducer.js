import {ActionType} from './actions';
import {filterPlaces} from '../utils';
import {CITIES} from '../const';
import places from '../mocks/places';

const defaultCity = CITIES[3];

const initialState = {
  city: defaultCity,
  places: filterPlaces(places, defaultCity),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_PLACES:
      return {
        ...state,
        places: filterPlaces(places, action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
