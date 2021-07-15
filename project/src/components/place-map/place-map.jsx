import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import useMap from '../../hooks/useMap/useMap';
import leaflet from 'leaflet';
import {MAP_ICON_DEFAULT} from '../../const';

function PlaceMap({points}) {
  const mapRef = useRef(null);
  const city = points[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {location: {latitude, longitude}} = point;
        const marker = leaflet.marker([latitude, longitude], {
          icon: leaflet.icon(MAP_ICON_DEFAULT),
        });
        marker.addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="property__map map">
      <div style={{width: '1144px', 'height': '100%', 'margin': '0 auto'}} ref={mapRef} />
    </section>
  );
}

PlaceMap.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
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
