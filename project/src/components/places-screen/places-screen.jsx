import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {connect} from 'react-redux';
import {changeCity} from '../../store/actions';
import Header from '../header/header';
import Main from '../main/main';
import Cities from '../cities/cities';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import {CITIES} from '../../const';
import placesItemProp from '../places-item/places-item.prop';

function PlacesScreen({city, places, onChangeCity}) {
  const filteredPlaces = useMemo(() => places.filter((place) => place.city.name === city), [city, places]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <Main className={classnames('page__main', 'page__main--index', {'page__main--index-empty' : !places.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities cities={CITIES} city={city} onChangeCity={onChangeCity} />
        </div>
        <div className="cities">
          {
            places.length
              ? <Places city={city} places={filteredPlaces} />
              : <PlacesEmpty />
          }
        </div>
      </Main>
    </div>
  );
}

PlacesScreen.propTypes = {
  city: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(placesItemProp),
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, UI}) => ({
  city: UI.city,
  places: DATA.places.list,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});

export {PlacesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
