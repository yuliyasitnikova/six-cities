import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ReviewsItem from '../reviews-item/reviews-item';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function ReviewsList({reviews}) {
  const sortReviews = reviews.slice().sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  return (
    <ul className="reviews__list">
      {sortReviews.map((review) => (
        <ReviewsItem key={`review-${review.id}`} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsItemProp),
};

export default ReviewsList;
