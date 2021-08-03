import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {capitalize, getPlaceLink, getRatingWidth} from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import placesItemProp from './places-item.prop';

function PlacesItem({className = '', place, onMouseEnter, onMouseLeave}) {

  const {id, isPremium, isFavorite, previewImage, price, title, type, rating} = place;

  return (
    <article
      className={`place-card ${className}`}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(id) : undefined}
      onMouseLeave={onMouseLeave ? onMouseLeave : undefined}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="place-card__image-wrapper">
        <Link to={getPlaceLink(id)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton className="place-card__bookmark-button" placeId={id} isActive={isFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </BookmarkButton>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(Math.round(rating))}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getPlaceLink(id)}>{title}</Link>
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
