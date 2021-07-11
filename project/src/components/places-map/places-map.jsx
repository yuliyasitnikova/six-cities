import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import {MAP_ICON_DEFAULT, MAP_ICON_ACTIVE} from '../../const';

function PlacesMap({points, activePoint}) {
  const mapRef = useRef(null);
  const city = points[0].city;
  const map = useMap(mapRef, city);
  const markers = [];

  const defaultIcon = leaflet.icon({
    iconUrl: MAP_ICON_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const activeIcon = leaflet.icon({
    iconUrl: MAP_ICON_ACTIVE,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {id, location: {latitude, longitude}} = point;
        const marker = leaflet.marker([latitude, longitude], {
          icon: (id === activePoint.id)
            ? activeIcon
            : defaultIcon,
        });
        marker.addTo(map);
        markers.push(marker);
      });

      return () => markers.forEach((marker) => marker.remove());
    }
  }, [map, points, activePoint]);

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
  activePoint: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default PlacesMap;
