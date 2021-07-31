import {ui} from './ui';
import {ActionType} from '../actions';
import {defaultCity, ReviewSendStatus, SortType} from '../../const';

describe('Reducer: ui', () => {
  it('should returns the initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({
        city: defaultCity,
        sortType: SortType.DEFAULT,
        reviewSendStatus: ReviewSendStatus.DEFAULT,
      });
  });

  it('should update city by change city', () => {
    const state = {
      city: 'Old city',
    };

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'City',
    };

    expect(ui(state, changeCityAction))
      .toEqual({
        city: 'City',
      });
  });

  it('should update sort type by change sort', () => {
    const state = {
      sortType: 'Old sort type',
    };

    const changeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: 'Sort type',
    };

    expect(ui(state, changeSortAction))
      .toEqual({
        sortType: 'Sort type',
      });
  });

  it('should update review send status by disable review form', () => {
    const state = {
      reviewSendStatus: ReviewSendStatus.DEFAULT,
    };

    const disableReviewFormAction = {
      type: ActionType.DISABLE_REVIEW_FORM,
    };

    expect(ui(state, disableReviewFormAction))
      .toEqual({
        reviewSendStatus: ReviewSendStatus.POSTING,
      });
  });

  it('should update review send status by enable review form', () => {
    const state = {
      reviewSendStatus: ReviewSendStatus.POSTING,
    };

    const enableReviewFormAction = {
      type: ActionType.ENABLE_REVIEW_FORM,
    };

    expect(ui(state, enableReviewFormAction))
      .toEqual({
        reviewSendStatus: ReviewSendStatus.DEFAULT,
      });
  });

  it('should update review send status by reset review form', () => {
    const state = {
      reviewSendStatus: ReviewSendStatus.POSTING,
    };

    const resetReviewFormAction = {
      type: ActionType.RESET_REVIEW_FORM,
    };

    expect(ui(state, resetReviewFormAction))
      .toEqual({
        reviewSendStatus: ReviewSendStatus.SUCCESS,
      });
  });
});
