import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef !== null && map === null) {
      const {location: {latitude, longitude, zoom}} = city;

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });
      // console.log(`setView`)
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
