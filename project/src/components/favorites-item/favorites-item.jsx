import React from 'react';
import {Link} from 'react-router-dom';
import {capitalize, getPlaceLink, getRatingWidth} from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import favoritesItemProp from './favorites-item.prop';

function FavoritesItem({place}) {
  const {id, isFavorite, previewImage, price, title, type, rating} = place;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={getPlaceLink(id)}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton className="place-card__bookmark-button" placeId={id} isActive={isFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </BookmarkButton>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}} />
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

FavoritesItem.propTypes = {
  place: favoritesItemProp,
};

export default FavoritesItem;
