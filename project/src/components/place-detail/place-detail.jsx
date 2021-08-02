import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {capitalize, getRatingWidth} from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Reviews from '../reviews/reviews';
import PlaceMap from '../place-map/place-map';
import PlacesNear from '../places-near/places-near';
import placeDetailProp from './place-detail.prop';
import placesItemProp from '../places-item/places-item.prop';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function PlaceDetail({place}) {
  const {properties: currentPlace, nearby, reviews} = place;
  const {bedrooms, description, goods, host: {avatar: hostAvatar, name: hostName, isPro: hostIsPro}, id, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = currentPlace;

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, 6).map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <div className="property__mark"><span>Premium</span></div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <BookmarkButton className="property__bookmark-button" placeId={id} isActive={isFavorite}>
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </BookmarkButton>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getRatingWidth(rating)}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{capitalize(type)}</li>
              <li className="property__feature property__feature--bedrooms">{bedrooms} Bedroom{bedrooms !== 1 && 's'}</li>
              <li className="property__feature property__feature--adults">Max {maxAdults} adult{maxAdults !==1 && 's'}</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={good} className="property__inside-item">{good}</li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={classNames('property__avatar-wrapper', {'property__avatar-wrapper--pro': hostIsPro}, 'user__avatar-wrapper')}>
                  <img className="property__avatar user__avatar" src={hostAvatar} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">{hostName}</span>
                {hostIsPro && <span className="property__user-status">Pro</span>}
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <Reviews reviews={reviews} place={place.properties.id} />
          </div>
        </div>
        <PlaceMap points={[...nearby, currentPlace]} activePoint={id} />
      </section>
      <div className="container">
        {nearby.length > 0 && <PlacesNear places={nearby} />}
      </div>
    </>
  );
}

PlaceDetail.propTypes = {
  place: PropTypes.shape({
    properties: placeDetailProp,
    nearby: PropTypes.arrayOf(placesItemProp),
    reviews: PropTypes.arrayOf(reviewsItemProp),
  }).isRequired,
};

export default PlaceDetail;
