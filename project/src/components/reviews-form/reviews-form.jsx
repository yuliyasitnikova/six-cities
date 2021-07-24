import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {ReviewSendStatus, COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '../../const';

const ratingValues = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

function ReviewsForm({place, reviewSendStatus, onSubmit}) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  const isReviewPosting = reviewSendStatus === ReviewSendStatus.POSTING;
  const isReviewAdding = reviewSendStatus === ReviewSendStatus.SUCCESS;

  const isButtonDisabled = rating === null || comment.length < COMMENT_MIN_LENGTH || isReviewPosting;

  useEffect(() => {
    setComment('');
    setRating(null);
  }, [isReviewAdding]);

  const handleRatingChange = ({target}) => setRating(Number(target.value));

  const handleCommentChange = ({target}) => {
    const value = target.value;
    if (value.length <= COMMENT_MAX_LENGTH) {
      setComment(value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      comment,
      rating,
    };
    onSubmit(place, data);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {ratingValues.map(({title, value}) => (
          <React.Fragment key={title}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={value === rating} disabled={isReviewPosting} onChange={handleRatingChange} />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={comment} placeholder="Tell how was your stay, what you like and what can be improved" disabled={isReviewPosting} onChange={handleCommentChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{COMMENT_MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  place: PropTypes.number.isRequired,
  reviewSendStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviewSendStatus: state.reviewSendStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (place, data) => {
    dispatch(postReview(place, data));
  },
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
