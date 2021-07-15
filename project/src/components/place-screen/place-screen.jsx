import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import PlaceDetail from '../place-detail/place-detail';
import PlacesNear from '../places-near/places-near';
import placeDetailProp from '../place-detail/place-detail.prop';

function PlaceScreen(props) {
  const {
    places,
    match: {params: {id: placeId}},
  } = props;

  const place = useMemo(() => places.find((placeItem) => placeItem.id === parseInt(placeId, 10)), [placeId]);
  const placesNear = places.slice(0, 3);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <PlaceDetail place={place} places={placesNear} />
        <div className="container">
          <PlacesNear places={placesNear} />
        </div>
      </main>
    </div>
  );
}

PlaceScreen.propTypes = {
  places: PropTypes.arrayOf(placeDetailProp),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
});

export {PlaceScreen};
export default connect(mapStateToProps, null)(PlaceScreen);
