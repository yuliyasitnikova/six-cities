import {ActionCreator} from './actions';
import {APIRoute, AuthorizationStatus} from '../const';

const adaptPlaceToClient = (place) => {
  const adaptPlace = {
    ...place,
    host: {
      ...place.host,
      avatar: place.host.avatar_url,
      isPro: place.host.is_pro,
    },
    isFavorite: place.is_favorite,
    isPremium: place.is_premium,
    maxAdults: place.max_adults,
    previewImage: place.preview_image,
  };

  delete adaptPlace.host.avatar_url;
  delete adaptPlace.host.is_pro;
  delete adaptPlace.is_favorite;
  delete adaptPlace.is_premium;
  delete adaptPlace.max_adults;
  delete adaptPlace.preview_image;

  return adaptPlace;
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const getPlaces = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(adaptPlaceToClient))
    .then((places) => dispatch(ActionCreator.fillPlaces(places)))
);
