import {createReducer} from '@reduxjs/toolkit';
import {
  loadUser,
  loadPlaces,
  loadPlace,
  loadReviews,
  changeReviewPostStatus,
  clearPlace,
  loadFavorites,
  updatePlace
} from '../actions';
import {ReviewSendStatus} from '../../const';

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
    reviewSendStatus: null,
    isLoaded: false,
  },
  favorites: {
    list: [],
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
      state.place.properties = action.payload.properties;
      state.place.nearby = action.payload.nearby;
      state.place.reviews  = action.payload.reviews;
      state.place.reviewSendStatus = ReviewSendStatus.DEFAULT;
      state.place.isLoaded = true;
    })
    .addCase(changeReviewPostStatus, (state, action) => {
      state.place.reviewSendStatus = action.payload;
    })
    .addCase(clearPlace, (state) => {
      state.place.properties = {};
      state.place.nearby = [];
      state.place.reviews = [];
      state.place.reviewSendStatus = null;
      state.place.isLoaded = false;
    })
    .addCase(loadReviews, (state, action) => {
      state.place.reviews = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = {
        list: action.payload,
        isLoaded: true,
      };
    })
    .addCase(updatePlace, (state, action) => {
      const updated = action.payload;
      if (state.places.isLoaded) {
        state.places.list = state.places.list.map((place) => place.id === updated.id ? updated : place);
      }
      if (state.place.isLoaded) {
        state.place.properties = state.place.properties.id === updated.id ? updated : state.place.properties;
        state.place.nearby = state.place.nearby.map((place) => place.id === updated.id ? updated : place);
      }
      if (state.favorites.isLoaded) {
        state.favorites.list = state.favorites.list.filter((place) => place.id !== updated.id);
      }
    });
});

export {data};
