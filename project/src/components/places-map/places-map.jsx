import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import {MAP_ICON_DEFAULT} from '../../const';

function PlacesMap({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: MAP_ICON_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach(({city: {location}}) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map">
      <div style={{'height': '100%'}} ref={mapRef}></div>
    </section>
  );
}

PlacesMap.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.shape({
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
};

export default PlacesMap;
