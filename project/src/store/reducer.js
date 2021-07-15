import {ActionType} from './actions';
import {defaultCity,  SortType} from '../const';

const initialState = {
  city: defaultCity,
  sortType: SortType.DEFAULT,
  places: [],
  isPlacesLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILL_PLACES:
      return {
        ...state,
        places: action.payload,
        isPlacesLoaded: true,
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
