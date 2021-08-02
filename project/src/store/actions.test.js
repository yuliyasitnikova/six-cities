import {
  logout,
  loadUser,
  loadPlaces,
  loadPlace,
  changeReviewPostStatus,
  clearPlace,
  loadReviews,
  loadFavorites,
  updatePlace,
  changeCity,
  changeSort,
  redirectToRoute,
  ActionType,
} from './actions';
import {ReviewSendStatus} from '../const';

const user = {
  avatar: 'avatar.png',
  email: 'test@test.com',
  id: 1,
  isPro: false,
  name: 'test',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
};

const place = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatar: 'avatar.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatar: 'avatar.png',
    id: 4,
    isPro: false,
    name: 'Max'
  },
};

describe('Actions', () => {
  it('action creator for logout returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for load user returns correct action', () => {
    const payload = user;

    const expectedAction = {
      type: ActionType.LOAD_USER,
      payload,
    }

    expect(loadUser(payload)).toEqual(expectedAction);
  });

  it('action creator for load places returns correct action', () => {
    const payload = [place, place, place];

    const expectedAction = {
      type: ActionType.LOAD_PLACES,
      payload,
    };

    expect(loadPlaces(payload)).toEqual(expectedAction);
  });

  it('action creator for load place returns correct action', () => {
    const payload = {
      properties: place,
      nearby: [place, place, place],
      reviews: [review],
    };

    const expectedAction = {
      type: ActionType.LOAD_PLACE,
      payload,
    };

    expect(loadPlace(payload)).toEqual(expectedAction);
  });

  it('action creator for change review post status returns correct action', () => {
    const payload = ReviewSendStatus.POSTING;

    const expectedAction = {
      type: ActionType.CHANGE_REVIEW_POST_STATUS,
      payload,
    };

    expect(changeReviewPostStatus(payload)).toEqual(expectedAction);
  });

  it('action creator for clear place returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.CLEAR_PLACE,
    };

    expect(clearPlace()).toEqual(expectedAction);
  });

  it('action creator for load reviews returns correct action', () => {
    const payload = [review, review];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload,
    };

    expect(loadReviews(payload)).toEqual(expectedAction);
  });

  it('action creator for load favorites returns correct action', () => {
    const payload = [place, place];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload,
    };

    expect(loadFavorites(payload)).toEqual(expectedAction);
  });

  it('action creator for update place returns correct action', () => {
    const payload = place;

    const expectedAction = {
      type: ActionType.UPDATE_PLACE,
      payload,
    };

    expect(updatePlace(payload)).toEqual(expectedAction);
  });

  it('action creator for change city returns correct action', () => {
    const payload = 'City';

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload,
    };

    expect(changeCity(payload)).toEqual(expectedAction);
  });

  it('action creator for change sort returns correct action', () => {
    const payload = 'Sort type';

    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload,
    };

    expect(changeSort(payload)).toEqual(expectedAction);
  });

  it('action creator for redirect returns correct action', () => {
    const payload = 'Route';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload,
    };

    expect(redirectToRoute(payload)).toEqual(expectedAction);
  });
});
