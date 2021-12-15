import React from 'react';

import { CustomCard } from './styles';

const Card = ({ children }) => {
  return (
    <CustomCard>
      {
        children
      }
    </CustomCard>
  );
}

export default Card;