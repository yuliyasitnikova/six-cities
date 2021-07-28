import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearPlace} from '../../store/actions';
import {fetchPlace} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import Main from '../main/main';
import PlaceDetail from '../place-detail/place-detail';
import placeDetailProp from '../place-detail/place-detail.prop';
import placesItemProp from '../places-item/places-item.prop';
import reviewsItemProp from '../reviews-item/reviews-item.prop';

function PlaceScreen({id, place, getPlace}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    getPlace(id);
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
  getPlace: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  place: DATA.place,
});

const mapDispatchToProps = (dispatch) => ({
  getPlace: (id) => {
    dispatch(clearPlace());
    dispatch(fetchPlace(id));
  },
});

export {PlaceScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceScreen);
