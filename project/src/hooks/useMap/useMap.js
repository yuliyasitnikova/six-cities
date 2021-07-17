import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MAP_ICON_DEFAULT, MAP_ICON_ACTIVE} from '../../const';

function useMap(mapRef, points, activePoint) {
  const [map, setMap] = useState(null);
  const city = points[0].city;
  const markers = [];

  useEffect(() => {
    if (mapRef !== null) {
      const {location: {latitude, longitude, zoom}} = city;

      if (map !== null) {
        map.flyTo([latitude, longitude], zoom, {animate: true, duration: 2.5, maxZoom: 20});
        return;
      }

      const instance = leaflet.map(mapRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
        zoomControl: false,
      });

      instance.setView([latitude, longitude], zoom);

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {id, location: {latitude, longitude}} = point;
        const marker = leaflet.marker([latitude, longitude], {
          icon: (activePoint !== null && activePoint.id === id)
            ? leaflet.icon(MAP_ICON_ACTIVE)
            : leaflet.icon(MAP_ICON_DEFAULT),
        });
        marker.addTo(map);
        markers.push(marker);
      });

      return () => markers.forEach((marker) => marker.remove());
    }
  }, [map, points, activePoint]);

  return map;
}

export default useMap;
