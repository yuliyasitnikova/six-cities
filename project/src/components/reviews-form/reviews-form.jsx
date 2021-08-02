import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getReviewSendStatus} from '../../store/data/selectors';
import {postReview} from '../../store/api-actions';
import {ReviewSendStatus, COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '../../const';
import Alert from '../alert/alert';

const ratingValues = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

function ReviewsForm({place}) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  const reviewSendStatus = useSelector(getReviewSendStatus);
  const dispatch = useDispatch();

  const isReviewPosting = reviewSendStatus === ReviewSendStatus.POSTING;
  const isReviewPostSuccess = reviewSendStatus === ReviewSendStatus.SUCCESS;
  const isReviewPostFailed = reviewSendStatus === ReviewSendStatus.ERROR;
  const isButtonDisabled = rating === null || comment.length < COMMENT_MIN_LENGTH || isReviewPosting;

  const handleRatingChange = ({target}) => setRating(Number(target.value));

  const handleCommentChange = ({target}) => setComment(target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview(place, {
      comment,
      rating,
    }));
  };

  useEffect(() => {
    setComment('');
    setRating(null);
  }, [isReviewPostSuccess]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      {isReviewPostFailed && <Alert message="Review post failed" />}

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

      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={comment} maxLength={COMMENT_MAX_LENGTH} placeholder="Tell how was your stay, what you like and what can be improved" disabled={isReviewPosting} onChange={handleCommentChange} />
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
};

export default ReviewsForm;
