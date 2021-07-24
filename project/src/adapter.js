export const adaptPlaceToClient = (place) => {
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

export const adaptReviewToClient = (review) => {
  const adaptReview = {
    ...review,
    user: {
      ...review.user,
      avatar: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptReview.user.avatar_url;
  delete adaptReview.user.is_pro;

  return adaptReview;
};

export const adaptUserToClient = (user) => {
  const adaptUser = {
    ...user,
    avatar: user.avatar_url,
    isPro: user.is_pro,
  };

  delete adaptUser.avatar_url;
  delete adaptUser.is_pro;
  delete adaptUser.token;

  return adaptUser;
};
