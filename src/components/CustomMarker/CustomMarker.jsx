//Libs
import React from 'react';
import L from 'leaflet';
//Components
import { Marker } from 'react-leaflet';
//Redux

//Styles
import papel from './icons/papel-marker.png';
import plastico from './icons/plastico-marker.png';
import vidrio from './icons/vidrio-marker.png';
import electronicos from './icons/electronicos-marker.png';
import aceite from './icons/aceite-marker.png';
import ropa from './icons/ropa-marker.png';

const getMarkerColor = wasteType => {
  switch (wasteType) {
    case 'Papel y cartón':
      return papel;
    case 'Plástico':
      return plastico;
    case 'Vidrio':
      return vidrio;
    case 'Residuos electrónicos':
      return electronicos;
    case 'Aceite':
      return aceite;
    case 'Ropa y calzado':
      return ropa;
    default:
      break;
  }
};

export const CustomMarker = ({ marker }) => {
  const icon = L.icon({ iconUrl: getMarkerColor(marker.wasteType) });
  return (
    <Marker
      key={marker.id}
      position={[marker.coordinateX, marker.coordinateY]}
      icon={icon}
    ></Marker>
  );
};
