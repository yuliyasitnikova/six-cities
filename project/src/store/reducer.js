import {ActionType} from './actions';
import {defaultCity} from '../const';

const initialState = {
  city: defaultCity,
  places: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
