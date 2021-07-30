import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getPlace} from '../../store/data/selectors';
import {clearPlace} from '../../store/actions';
import {fetchPlace} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Main from '../main/main';
import PlaceDetail from '../place-detail/place-detail';

function PlaceScreen({id}) {
  const dispatch = useDispatch();

  const place = useSelector(getPlace);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearPlace());
    dispatch(fetchPlace(id));
  }, [id]);


  if (!place.isLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <Main className="page__main page__main--property">
        <PlaceDetail place={place} />
      </Main>
    </div>
  );
}

PlaceScreen.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PlaceScreen;
