import {MAX_RATING_VALUE} from './const';

export const capitalize = (string = '') => (
  string[0].toUpperCase() + string.slice(1)
);

export const getRatingWidth = (rating = 0) => {
  const maxWidthValue = 100;
  const multiplier = maxWidthValue / MAX_RATING_VALUE;
  return `${multiplier * rating}%`;
};
