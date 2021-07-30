import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MAP_ICON_DEFAULT, MAP_ICON_ACTIVE} from '../../const';

function useMap(mapRef, points, activePoint) {
  const [map, setMap] = useState(null);
  const {latitude, longitude, zoom} = points[0].city.location;
  const markers = [];

  useEffect(() => {
    if (mapRef !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
        zoomControl: false,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map) {
      map.flyTo([latitude, longitude], zoom, {animate: true, duration: 2.5});
    }
  }, [latitude, longitude, zoom]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {id} = point;
        const {latitude: pointLat, longitude: pointLng} = point.location;
        const marker = leaflet.marker([pointLat, pointLng], {
          icon: (id === activePoint)
            ? leaflet.icon(MAP_ICON_ACTIVE)
            : leaflet.icon(MAP_ICON_DEFAULT),
        });
        marker.addTo(map);
        markers.push(marker);
      });

      return () => markers.forEach((marker) => marker.remove());
    }
  }, [map, points, activePoint]);
}

export default useMap;
