import {ActionCreator} from './actions';
import {APIRoute} from '../const';

const adaptPlaceToClient = (place) => {
  const adaptPlace = {
    ...place,
    host: {
      ...place.host,
      avatarUrl: place.host.avatar_url,
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

export const getPlaces = () => (dispatch, _getState, api) => {
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(adaptPlaceToClient))
    .then((places) => dispatch(ActionCreator.fillPlaces(places)));
};
