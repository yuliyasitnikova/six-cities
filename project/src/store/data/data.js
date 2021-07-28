import {createReducer} from '@reduxjs/toolkit';
import {loadUser, loadPlaces, loadPlace, loadReviews, clearPlace} from '../actions';

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

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.places.list = action.payload;
      state.places.isLoaded = true;
    })
    .addCase(loadPlace, (state, action) => {
      state.place = {
        properties: action.payload.properties,
        nearby: action.payload.nearby,
        reviews: action.payload.reviews,
        isLoaded: true,
      };
    })
    .addCase(loadReviews, (state, action) => {
      state.place.reviews = action.payload;
    })
    .addCase(clearPlace, (state) => {
      state.place = {
        properties: {},
        nearby: [],
        reviews: [],
        isLoaded: false,
      };
    });
});

export {data};
