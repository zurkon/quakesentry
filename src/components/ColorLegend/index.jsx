import { chakra, HStack } from '@chakra-ui/react'
import React from 'react'
import { colorScale } from '../../lib/utils'

const ColorLegend = () => {
  return (
    <React.Fragment>
      {
        colorScale.map(item => (
          <HStack key={item.color} alignItems="center" lineHeight="24px">
            <chakra.span display="block" w="24px" h="24px" bg={item.color} />
            <span>
              {item.scale}
            </span>
          </HStack>
        ))
      }
    </React.Fragment>
  )
}

export default ColorLegend