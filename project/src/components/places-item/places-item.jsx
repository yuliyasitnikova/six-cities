import React, {useCallback} from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {capitalize} from '../../utils';
import placesItemProp from './places-item.prop';

function PlacesItem({place, onHover}) {
  const {id, isPremium, isFavorite, previewImage, price, title, type, rating} = place;
  const ratingValue = `${20 * rating}%`;
  const detailHref = AppRoute.ROOM.replace(':id', id);

  const onItemHover = useCallback(() => {
    onHover(id);
  }, [id]);

  return (
    <article className="cities__place-card place-card" onMouseEnter={onItemHover}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
            <span style={{width: ratingValue}} />
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
  place: placesItemProp,
  onHover: PropTypes.func.isRequired,
};

export default PlacesItem;
