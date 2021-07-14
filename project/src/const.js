export const REQUEST_TIMEOUT = 5000;

export const API_URL = 'https://7.react.pages.academy/six-cities';

export const APIRoute = {
  HOTELS: '/hotels',
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
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


export const PlacesListClassModifier = {
  CITIES: 'cities__places-list',
  NEAR_PLACES: 'near-places__list',
};
