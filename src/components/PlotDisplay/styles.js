import styled from 'styled-components';
import { CircleMarker, Tooltip } from 'react-leaflet';

export const CustomTooltip = styled(Tooltip)`
  color: #fff;
  background-color: transparent;
  border: none;
  box-shadow: none;

  z-index: 500;

`;

export const CustomMarker = styled(CircleMarker)`
  stroke: ${props => props.color};
  color: ${props => props.color};

  &:hover {
    stroke: #333;
    stroke-width: 5px;
  }
`;
