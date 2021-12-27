import React, { useEffect, useState } from 'react';

import { TileLayer } from 'react-leaflet';

import { CustomMap } from './styles';
import 'leaflet/dist/leaflet.css';
import PlotDisplay from '../PlotDisplay';
import Card from '../Card';
import ColorLegend from '../ColorLegend';
import QuakeInfo from '../QuakeInfo';

const MapContainer = ({ center, zoom, data }) => {
  const [selectedQuake, setSelectedQuake] = useState({ title: '', place: '', mag: 0 });

  // useEffect(() => {
  //   console.log('state changed');
  //   console.log(selectedQuake);
  // }, [selectedQuake])

  return (
    <CustomMap id="mapContainer" center={center} zoom={zoom} >
      <TileLayer
        // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <div className="leaflet-top leaflet-right">
        <Card>
          <QuakeInfo selectedQuake={selectedQuake} />
        </Card>
      </div>
      <div className="leaflet-bottom leaflet-right">
        <Card>
          <ColorLegend />
        </Card>
      </div>
      <PlotDisplay data={data} setSelectedQuake={setSelectedQuake} />
    </CustomMap>
  );
}

export default MapContainer;