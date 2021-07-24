import {ActionType} from './actions';
import {AuthorizationStatus, defaultCity,  SortType, ReviewSendStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {},
  city: defaultCity,
  sortType: SortType.DEFAULT,
  places: {
    list: [],
    isLoaded: false,
  },
  place: {
    properties: {},
    nearby: [],
    reviews: [],
    isLoaded: false,
  },
  reviewSendStatus: ReviewSendStatus.DEFAULT,
  isAuthChecked: false,

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
        places: {
          list: action.payload,
          isLoaded: true,
        },
      };
    case ActionType.LOAD_PLACE_DATA:
      return {
        ...state,
        place: {
          properties: action.payload.properties,
          nearby: action.payload.nearby,
          reviews: action.payload.reviews,
          isLoaded: true,
        },
      };
    case ActionType.CLEAR_PLACE_DATA:
      return {
        ...state,
        place: {
          properties: {},
          nearby: [],
          reviews: [],
          isLoaded: false,
        },
      };
    case ActionType.DISABLE_REVIEW_FORM:
      return {
        ...state,
        reviewSendStatus: ReviewSendStatus.POSTING,
      };
    case ActionType.ENABLE_REVIEW_FORM:
      return {
        ...state,
        reviewSendStatus: ReviewSendStatus.DEFAULT,
      };
    case ActionType.RESET_REVIEW_FORM:
      return {
        ...state,
        reviewSendStatus: ReviewSendStatus.SUCCESS,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        place: {
          ...state.place,
          reviews: action.payload,
        },
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
