import React from 'react'
import { Heading, Box, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
          selectedQuake.url !== '' &&
          <Link color="blue.500" href={selectedQuake.url} target="_blank">
            More Details on USGS <ExternalLinkIcon mx="2px" />
          </Link>
        }

        {
          (selectedQuake.mag == 0 && selectedQuake.place == '') && <span>Hover over a Circle</span>
        }
      </Box>
    </React.Fragment>
  )
}

export default QuakeInfo