import React from 'react';

import { TileLayer } from 'react-leaflet';

import { CustomMap } from './styles';
import 'leaflet/dist/leaflet.css';
import PlotDisplay from '../PlotDisplay';

const MapContainer = ({ center, zoom, data }) => {
  return (
    <CustomMap id="mapContainer" center={center} zoom={zoom} >
      <TileLayer
        // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <PlotDisplay data={data} />
    </CustomMap>
  );
}

export default MapContainer;