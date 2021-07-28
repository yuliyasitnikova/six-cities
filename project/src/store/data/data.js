import {ActionType} from '../actions';

const initialState = {
  user: {},
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
};

const data = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.LOAD_PLACE:
      return {
        ...state,
        place: {
          properties: action.payload.properties,
          nearby: action.payload.nearby,
          reviews: action.payload.reviews,
          isLoaded: true,
        },
      };
    case ActionType.CLEAR_PLACE:
      return {
        ...state,
        place: {
          properties: {},
          nearby: [],
          reviews: [],
          isLoaded: false,
        },
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        place: {
          ...state.place,
          reviews: action.payload,
        },
      };
    default:
      return state;
  }
};

export {data};
