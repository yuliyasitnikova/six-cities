import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import {MAP_ICON_DEFAULT, MAP_ICON_ACTIVE} from '../../const';

function PlacesMap({city, points, activePoint}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: MAP_ICON_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const activeIcon = leaflet.icon({
    iconUrl: MAP_ICON_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {id, city: {location}} = point;
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: (id === activePoint.id)
              ? activeIcon
              : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activePoint]);

  return (
    <section className="cities__map map">
      <div style={{'height': '100%'}} ref={mapRef} />
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
      id: PropTypes.number.isRequired,
      city: PropTypes.shape({
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
  activePoint: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default PlacesMap;
