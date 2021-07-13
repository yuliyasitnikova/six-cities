import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import Header from '../header/header';
import Cities from '../cities/cities';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import {CITIES} from '../../const';
import {filterPlaces} from '../../utils';
import placesItemProp from '../places-item/places-item.prop';

function PlacesScreen({city, places, onChangeCity}) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty' : !places.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities cities={CITIES} city={city} onChangeCity={onChangeCity} />
        </div>
        <div className="cities">
          {
            places.length
              ? <Places city={city} places={filterPlaces(places, city)} />
              : <PlacesEmpty />
          }
        </div>
      </main>
    </div>
  );
}

PlacesScreen.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placesItemProp),
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  places: state.places,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {PlacesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
