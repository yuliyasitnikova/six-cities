import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSort} from '../actions';
import {defaultCity, SortType} from '../../const';

const initialState = {
  city: defaultCity,
  sortType: SortType.DEFAULT,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    });
});

export {ui};
