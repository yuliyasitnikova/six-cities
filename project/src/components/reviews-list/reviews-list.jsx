import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={`review-${review.id}`} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsItemProp),
};

export default ReviewsList;
