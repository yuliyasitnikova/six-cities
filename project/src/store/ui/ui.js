import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSort, disableReviewForm, enableReviewForm, resetReviewForm} from '../actions';
import {defaultCity, ReviewSendStatus, SortType} from '../../const';

const initialState = {
  city: defaultCity,
  sortType: SortType.DEFAULT,
  reviewSendStatus: ReviewSendStatus.DEFAULT,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(disableReviewForm, (state, action) => {
      state.reviewSendStatus = ReviewSendStatus.POSTING;
    })
    .addCase(enableReviewForm, (state, action) => {
      state.reviewSendStatus = ReviewSendStatus.DEFAULT;
    })
    .addCase(resetReviewForm, (state, action) => {
      state.reviewSendStatus = ReviewSendStatus.SUCCESS;
    });
});

export {ui};
