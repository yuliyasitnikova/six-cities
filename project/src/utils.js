import {AppRoute, AuthorizationStatus, MAX_RATING_VALUE} from './const';

export const capitalize = (string = '') => (
  string[0].toUpperCase() + string.slice(1)
);

export const getPlaceLink = (id) => (
  AppRoute.ROOM.replace(':id', id)
);

export const getRatingWidth = (rating = 0) => {
  const maxWidthValue = 100;
  const multiplier = maxWidthValue / MAX_RATING_VALUE;
  return `${multiplier * rating}%`;
};

export const isAuth = (authorizationStatus) => (
  authorizationStatus === AuthorizationStatus.AUTH
);
