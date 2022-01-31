import React from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'

const QuakeInfo = ({ selectedQuake }) => {
  return (
    <React.Fragment>
      <Heading as="h4" size="lg" mb={4}>
        EarthQuake Information
      </Heading>
      <Box w="220px">
        {
          selectedQuake.place !== '' &&
          <Text whiteSpace="nowrap" fontWeight="bold">{selectedQuake.place}</Text>
        }

        {
          selectedQuake.mag > 0 && <Text>{`Magnitude: ${selectedQuake.mag}`}</Text>
        }

        {
          (selectedQuake.mag == 0 && selectedQuake.place == '') && <span>Hover over a Circle</span>
        }
      </Box>
    </React.Fragment>
  )
}

export default QuakeInfo