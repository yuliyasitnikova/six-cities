import {ActionType} from './actions';
import {AuthorizationStatus, defaultCity,  SortType} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
  city: defaultCity,
  sortType: SortType.DEFAULT,
  places: [],
  isAuthChecked: false,
  isPlacesLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        isAuthChecked: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {},
      };
    case ActionType.LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.LOAD_PLACES:
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
