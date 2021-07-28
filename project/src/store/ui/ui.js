import {ActionType} from '../actions';
import {defaultCity, ReviewSendStatus, SortType} from '../../const';

const initialState = {
  city: defaultCity,
  sortType: SortType.DEFAULT,
  reviewSendStatus: ReviewSendStatus.DEFAULT,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export {ui};
