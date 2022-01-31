import React from "react"
import { getMagnitudeScaleColor } from "../../lib/utils"
import { CircleMarker } from "react-leaflet"
import { chakra, useColorModeValue } from '@chakra-ui/react'

const CustomMarker = chakra(CircleMarker)

// #27272a light
// #fafafa dark

const PlotDisplay = ({ data, setSelectedQuake }) => {

  return (
    <React.Fragment>
      {
        data.length > 0 && data.map(quake => (
          <CustomMarker
            key={quake.id}
            center={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}
            fillOpacity={0.6}
            stroke={getMagnitudeScaleColor(quake.properties.mag)}
            color={getMagnitudeScaleColor(quake.properties.mag)}
            fillColor={getMagnitudeScaleColor(quake.properties.mag)}
            radius={20}
            _hover={{
              stroke: '#fafafa',
              strokeWidth: '5px'
            }}
            eventHandlers={{
              mouseover: () => {
                // console.log(quake.properties)
                setSelectedQuake({
                  title: quake.properties.title,
                  place: quake.properties.place,
                  mag: quake.properties.mag
                })
              },
              mouseout: () => {
                setSelectedQuake({
                  title: '',
                  place: '',
                  mag: 0
                })
              }
            }}
          />
        ))
      }
    </React.Fragment>
  )
}

export default PlotDisplay