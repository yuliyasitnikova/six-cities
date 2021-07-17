import React, {useRef} from 'react';
import useMap from '../../hooks/useMap/useMap';
import PropTypes from 'prop-types';

function PlaceMap({points}) {
  const mapRef = useRef(null);
  useMap(mapRef, points, null);

  return (
    <section className="property__map map">
      <div style={{width: '1144px', 'height': '100%', 'margin': '0 auto'}} ref={mapRef} />
    </section>
  );
}

PlaceMap.propTypes = {
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
};

export default PlaceMap;
