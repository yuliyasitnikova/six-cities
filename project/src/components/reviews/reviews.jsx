import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {isAuth} from '../../utils';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function Reviews({reviews, place}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews} />
      {isAuth(authorizationStatus) && <ReviewsForm place={place} />}
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsItemProp),
  place: PropTypes.number.isRequired,
};

export default Reviews;
