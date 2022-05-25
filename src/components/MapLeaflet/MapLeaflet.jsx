//Libs
import React from 'react';
//Components
import { MapContainer, TileLayer } from 'react-leaflet';
import { CustomMarker } from '../CustomMarker/CustomMarker';
//Redux
import { useSelector } from 'react-redux';
import { useAllMarkers } from '../../hooks/useAllMarkers';
import {getMarkersByWasteType} from "../../store/map/selector"

//Styles
import './map.css';

export const MapLeaflet = () => {
  if (process.env.REACT_APP_API_KEY == null) {
    throw new Error('You have to configure .env REACT_APP_API_KEY');
  }
  
  useAllMarkers();
  const markers = useSelector(getMarkersByWasteType)

  /* const markersIds = useSelector(getMarkersIds); */
  return (
    <MapContainer
      className="map-wrap"
      center={[28.47028, -16.2835444]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        id="map"
        className="map"
        url={`https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=${process.env.REACT_APP_API_KEY}`}
      />

      {markers.map(marker => (
        <CustomMarker key={marker.id} marker={marker} />
      ))}
    </MapContainer>
  );
};
