import React, {memo, useRef} from 'react';
import useMap from '../../hooks/useMap/useMap';
import PropTypes from 'prop-types';

function PlacesMap({points, activePoint}) {
  const mapRef = useRef(null);
  useMap(mapRef, points, activePoint);

  return (
    <section className="cities__map map">
      <div style={{'height': '100%'}} ref={mapRef} />
    </section>
  );
}

PlacesMap.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.shape({
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
  activePoint: PropTypes.number,
};

export {PlacesMap};
export default memo(PlacesMap);
