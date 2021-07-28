import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPlace} from '../../store/data/selectors';
import {clearPlace} from '../../store/actions';
import {fetchPlace} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Main from '../main/main';
import PlaceDetail from '../place-detail/place-detail';
import placeDetailProp from '../place-detail/place-detail.prop';
import placesItemProp from '../places-item/places-item.prop';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function PlaceScreen({id, place, loadPlace}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    loadPlace(id);
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
  place: PropTypes.shape({
    properties: placeDetailProp,
    nearby: PropTypes.arrayOf(placesItemProp),
    reviews: PropTypes.arrayOf(reviewsItemProp),
    isLoaded: PropTypes.bool.isRequired,
  }).isRequired,
  loadPlace: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  place: getPlace(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPlace: (id) => {
    dispatch(clearPlace());
    dispatch(fetchPlace(id));
  },
});

export {PlaceScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceScreen);
