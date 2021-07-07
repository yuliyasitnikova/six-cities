import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useMap from '../../hooks/useMap/useMap';

function CitiesMap({city}) {
  const mapRef = useRef(null);
  useMap(mapRef, city);

  return (
    <section className="cities__map map">
      <div style={{'height': '100%'}} ref={mapRef}></div>
    </section>
  );
}

CitiesMap.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default CitiesMap;
