import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isAuth} from '../../utils';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function Reviews({reviews, place, authorizationStatus}) {
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
