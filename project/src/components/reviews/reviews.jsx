import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {isAuth} from '../../utils';
import dayjs from 'dayjs';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import reviewsItemProp from '../reviews-item/reviews-item.prop';
import {MAX_REVIEWS_COUNT} from '../../const';


function Reviews({reviews, place}) {
  const authorizationStatus = useSelector(getAuthStatus);
  const sortReviews = reviews.slice().sort((a, b) => dayjs(b.date).diff(dayjs(a.date))).slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortReviews.length}</span></h2>
      <ReviewsList reviews={sortReviews} />
      {isAuth(authorizationStatus) && <ReviewsForm place={place} />}
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsItemProp),
  place: PropTypes.number.isRequired,
};

export default Reviews;
