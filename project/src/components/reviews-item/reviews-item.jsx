import React from 'react';
import dayjs from 'dayjs';
import {getRatingWidth} from '../../utils';
import reviewsItemProp from './reviews-item.prop';

function ReviewsItem({review}) {
  const {comment, date, rating, user: {avatar, name}} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewsItemProp,
};

export default ReviewsItem;
