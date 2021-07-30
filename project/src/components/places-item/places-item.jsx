import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {capitalize, getRatingWidth} from '../../utils';
import placesItemProp from './places-item.prop';

function PlacesItem({className = '', place, onMouseEnter, onMouseLeave}) {
  const {id, isPremium, isFavorite, previewImage, price, title, type, rating} = place;
  const detailHref = AppRoute.ROOM.replace(':id', id);

  return (
    <article
      className={`place-card ${className}`}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(id) : undefined}
      onMouseLeave={onMouseLeave ? onMouseLeave : undefined}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="place-card__image-wrapper">
        <Link to={detailHref}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button', {'place-card__bookmark-button--active': isFavorite}, 'button')} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={detailHref}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

PlacesItem.propTypes = {
  className: PropTypes.string,
  place: placesItemProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default PlacesItem;
