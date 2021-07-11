import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

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

  return map;
}

export default useMap;
