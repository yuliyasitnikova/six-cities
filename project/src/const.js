export const REQUEST_TIMEOUT = 5000;

export const API_URL = 'https://7.react.pages.academy/six-cities';

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  PLACES: '/hotels',
  PLACE: '/hotels/:id',
  NEARBY: '/hotels/:place_id/nearby',
  REVIEWS: '/comments/:place_id',
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const defaultCity = CITIES[0];

export const MAP_ICON_DEFAULT = {
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

export const MAP_ICON_ACTIVE = {
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

export const MAX_RATING_VALUE = 5;

export const PlacesListClassModifier = {
  CITIES: 'cities__places-list',
  NEAR_PLACES: 'near-places__list',
};

export const SortType = {
  DEFAULT: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  RATING_TO_LOW: 'Top rated first',
};
