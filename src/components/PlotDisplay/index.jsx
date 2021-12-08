import React from 'react';

import { CustomMarker, CustomTooltip } from './styles';

import { getMagnitudeScaleColor } from '../../utils';

const PlotDisplay = ({ data }) => {
  return (
    <React.Fragment>
      {
        data.length > 0 && data.map(quake => (
          <CustomMarker
            key={quake.id}
            center={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}
            fillOpacity={0.6}
            color={getMagnitudeScaleColor(quake.properties.mag)}
            fillColor={getMagnitudeScaleColor(quake.properties.mag)}
            eventHandlers={{
              mouseover: () => {
                console.log('Mouse Over ' + quake.properties.mag);
              },
              mouseout: () => {
                console.log('Mouse Out of ' + quake.properties.mag);
              },
              click: () => {
                console.log('Click on ' + quake.properties.mag);
              }
            }}
            radius={10}
          >
            {/* <CustomTooltip direction="center" opacity={1} permanent> {quake.properties.mag} </CustomTooltip> */}
          </CustomMarker>
        ))
      }
    </React.Fragment>
  );
}

export default PlotDisplay;