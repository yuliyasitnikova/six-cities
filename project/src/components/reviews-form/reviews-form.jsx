import React, {useState} from 'react';
import {COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '../../const';

const ratingValues = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

function ReviewsForm() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const isButtonDisabled = (rating === null || comment.length < COMMENT_MIN_LENGTH);


  const handleRatingChange = ({target}) => setRating(Number(target.value));

  const handleCommentChange = ({target}) => {
    const value = target.value;
    if (value.length <= COMMENT_MAX_LENGTH) {
      setComment(value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {ratingValues.map(({title, value}) => (
          <React.Fragment key={title}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={value === rating} onChange={handleRatingChange} />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={handleCommentChange} />
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

export default ReviewsForm;
