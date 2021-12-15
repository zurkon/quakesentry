import React from 'react';

import { CustomDiv, ColorBox } from './styles';
import { colorScale } from '../../utils';

const ColorLegend = () => {
  return (
    <React.Fragment>
      {
        colorScale.map(item => (
          <CustomDiv key={item.color}>
            <ColorBox style={{ backgroundColor: item.color }} />
            <span>
              {item.scale}
            </span>
          </CustomDiv>
        ))
      }

    </React.Fragment>
  );
}

export default ColorLegend;