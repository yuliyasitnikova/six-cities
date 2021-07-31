import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AppRoute, AuthorizationStatus, defaultCity,  SortType, ReviewSendStatus} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

window.scrollTo = jest.fn();

const places = [
  {
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
  }
];

const reviews = [
  {
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
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 4,
    user: {
      avatar: 'avatar.png',
      id: 4,
      isPro: false,
      name: 'Max'
    },
  },
];

const fakeState = {
  DATA: {
    user: {
      avatarUrl: 'avatar.png',
      email: 'test@test.com',
      id: 1,
      isPro: false,
      name: 'test',
      token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    },
    places: {
      list: places,
      isLoaded: true,
    },
    place: {
      properties: places[0],
      nearby: places,
      reviews,
      isLoaded: true,
    },
    favorites: {
      list: places,
      isLoaded: true,
    },
  },
  UI: {
    city: 'Cologne',
    sortType: SortType.DEFAULT,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
};

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore(fakeState);

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "PlacesScreen" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText('1 places to stay in Cologne')).toBeInTheDocument();
  });

  it('should render "PlaceScreen" when user navigate to "/offer/id"', () => {
    history.push(AppRoute.ROOM);
    render(fakeApp);

    expect(screen.getByText('What\'s inside')).toBeInTheDocument();
    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByText('Sign in', { selector: 'button' })).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toBeInTheDocument();
  });
});

