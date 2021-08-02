import {data} from './data';
import {ActionType} from '../actions';
import {ReviewSendStatus} from '../../const';

describe('Reducer: data', () => {
  it('should return the initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
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
      });
  });

  it('should update user by load user', () => {
    const state = {
      user: {},
    };

    const loadUserAction = {
      type: ActionType.LOAD_USER,
      payload: {id: 1},
    };

    expect(data(state, loadUserAction))
      .toEqual({
        user: {id: 1},
      });
  });

  it('should update places by load places', () => {
    const state = {
      places: {
        list: [],
        isLoaded: false,
      },
    };

    const loadPlacesAction = {
      type: ActionType.LOAD_PLACES,
      payload: [
        {id: 1},
        {id: 2},
      ],
    };

    expect(data(state, loadPlacesAction))
      .toEqual({
        places: {
          list: [
            {id: 1},
            {id: 2},
          ],
          isLoaded: true,
        },
      });
  });

  it('should update place by load place', () => {
    const state = {
      place: {
        properties: {},
        nearby: [],
        reviews: [],
        reviewSendStatus: null,
        isLoaded: false,
      },
    };

    const loadPlaceAction = {
      type: ActionType.LOAD_PLACE,
      payload: {
        properties: {id: 1},
        nearby: [
          {id: 4},
          {id: 7},
        ],
        reviews: [
          {id: 10},
        ],
      },
    };

    expect(data(state, loadPlaceAction))
      .toEqual({
        place: {
          properties: {id: 1},
          nearby: [
            {id: 4},
            {id: 7},
          ],
          reviews: [
            {id: 10},
          ],
          reviewSendStatus: ReviewSendStatus.DEFAULT,
          isLoaded: true,
        },
      });
  });

  it('should update place by clear place', () => {
    const state = {
      place: {
        properties: {id: 1},
        nearby: [
          {id: 4},
          {id: 7},
        ],
        reviews: [
          {id: 10},
        ],
        reviewSendStatus: ReviewSendStatus.ERROR,
        isLoaded: true,
      }
    };

    const clearPlaceAction = {
      type: ActionType.CLEAR_PLACE,
    };

    expect(data(state, clearPlaceAction))
      .toEqual({
        place: {
          properties: {},
          nearby: [],
          reviews: [],
          reviewSendStatus: null,
          isLoaded: false,
        },
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      place: {
        properties: {id: 1},
        nearby: [
          {id: 4},
          {id: 7},
        ],
        reviews: [
          {id: 10},
        ],
        isLoaded: true,
      }
    };

    const loadReviewAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: [
        {id: 10},
        {id: 11},
      ],
    };

    expect(data(state, loadReviewAction)).toEqual({
      place: {
        properties: {id: 1},
        nearby: [
          {id: 4},
          {id: 7},
        ],
        reviews: [
          {id: 10},
          {id: 11},
        ],
        isLoaded: true,
      },
    });
  });

  it('should update favorites by load favorites', () => {
    const state = {
      favorites: {
        list: [],
        isLoaded: false,
      },
    };

    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [
        {id: 1},
        {id: 2},
      ],
    };

    expect(data(state, loadFavoritesAction)).toEqual({
      favorites: {
        list: [
          {id: 1},
          {id: 2},
        ],
        isLoaded: true,
      },
    });
  });

  it('should update place by update place', () => {
    const updatePlaceAction = {
      type: ActionType.UPDATE_PLACE,
      payload: {
        id: 2,
        isFavorite: false,
      },
    };

    const stateWithLoadedPlaces = {
      places: {
        list: [
          {id: 1, isFavorite: false},
          {id: 2, isFavorite: true},
        ],
        isLoaded: true,
      },
      place: {
        properties: {},
        isLoaded: false,
      },
      favorites: {
        list: [],
        isLoaded: false,
      },
    };

    expect(data(stateWithLoadedPlaces, updatePlaceAction))
      .toEqual({
        places: {
          list: [
            {id: 1, isFavorite: false},
            {id: 2, isFavorite: false},
          ],
          isLoaded: true,
        },
        place: {
          properties: {},
          isLoaded: false,
        },
        favorites: {
          list: [],
          isLoaded: false,
        },
      });


    const stateWithLoadedPlace = {
      places: {
        list: [],
        isLoaded: false,
      },
      place: {
        properties: {
          id: 2,
          isFavorite: true,
        },
        isLoaded: true,
      },
      favorites: {
        list: [],
        isLoaded: false,
      },
    };

    expect(data(stateWithLoadedPlace, updatePlaceAction))
      .toEqual({
        places: {
          list: [],
          isLoaded: false,
        },
        place: {
          properties: {
            id: 2,
            isFavorite: false,
          },
          isLoaded: true,
        },
        favorites: {
          list: [],
          isLoaded: false,
        },
      });

    const stateWithLoadedFavorites = {
      places: {
        list: [],
        isLoaded: false,
      },
      place: {
        properties: {},
        isLoaded: false,
      },
      favorites: {
        list: [
          {id: 1, isFavorite: true},
          {id: 2, isFavorite: true},
        ],
        isLoaded: true,
      },
    };

    expect(data(stateWithLoadedFavorites, updatePlaceAction))
      .toEqual({
        places: {
          list: [],
          isLoaded: false,
        },
        place: {
          properties: {},
          isLoaded: false,
        },
        favorites: {
          list: [
            {id: 1, isFavorite: true},
          ],
          isLoaded: true,
        },
      });
  });

  it('should update review post status by change review post status', () => {
    const state = {
      place: {
        reviewSendStatus: ReviewSendStatus.DEFAULT,
      }
    };

    const changeReviewPostStatusAction = {
      type: ActionType.CHANGE_REVIEW_POST_STATUS,
      payload: ReviewSendStatus.POSTING,
    };

    expect(data(state, changeReviewPostStatusAction))
      .toEqual({
        place: {
          reviewSendStatus: ReviewSendStatus.POSTING,
        }
      });
  });
});
