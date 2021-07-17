import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {capitalize, getRatingWidth} from '../../utils';
import favoritesItemProp from './favorites-item.prop';

function FavoritesItem({offer}) {
  const {id, previewImage, price, title, type, rating} = offer;
  const detailHref = AppRoute.ROOM.replace(':id', id);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={detailHref}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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

FavoritesItem.propTypes = {
  offer: favoritesItemProp,
};

export default FavoritesItem;
