import React, {useEffect, useMemo} from 'react';
import classnames from 'classnames/bind';
import {useSelector, useDispatch} from 'react-redux';
import {getPlacesList, getPlacesLoadedStatus} from '../../store/data/selectors';
import {getCity} from '../../store/ui/selectors';
import {getAuthStatus} from '../../store/user/selectors';
import {changeCity} from '../../store/actions';
import {fetchPlaces} from '../../store/api-actions';
import {CITIES} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Main from '../main/main';
import Cities from '../cities/cities';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

function PlacesScreen() {
  const dispatch = useDispatch();

  const city = useSelector(getCity);
  const places = useSelector(getPlacesList);
  const isPlacesLoaded = useSelector(getPlacesLoadedStatus);
  const authStatus = useSelector(getAuthStatus);

  const filteredPlaces = useMemo(() => places.filter((place) => place.city.name === city), [city, places]);

  const handleCityChange = (selectedCity) => dispatch(changeCity(selectedCity));

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch, authStatus]);

  if (!isPlacesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <Main className={classnames('page__main', 'page__main--index', {'page__main--index-empty' : !places.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities cities={CITIES} city={city} onChangeCity={handleCityChange} />
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

export default PlacesScreen;
