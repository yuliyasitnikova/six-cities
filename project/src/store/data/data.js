import {createReducer} from '@reduxjs/toolkit';
import {loadUser, loadPlaces, loadPlace, loadReviews, clearPlace, loadFavorites, updatePlaces} from '../actions';

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
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = {
        list: action.payload,
        isLoaded: true,
      };
    })
    .addCase(updatePlaces, (state, action) => {
      const updated = action.payload;
      if (state.places.isLoaded) {
        state.places.list = state.places.list.map((place) => place.id === updated.id ? updated : place);
      }
      if (state.place.isLoaded) {
        state.place.properties = updated;
      }
      if (state.favorites.isLoaded) {
        state.favorites.list = state.favorites.list.filter((place) => place.id !== updated.id);
      }
    });
});

export {data};
