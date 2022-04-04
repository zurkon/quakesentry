import React from "react"
import { CircleMarker } from "react-leaflet"
import { earthquake } from "../../types"
import { getMagnitudeScaleColor } from "../../utils"

import './styles.css'

interface PlotDisplayProps {
  data: Array<earthquake>,
  setSelectedQuake: React.Dispatch<React.SetStateAction<{
    place: string,
    mag: number,
    time: number,
    url: string
  }>>
}

const PlotDisplay = ({ data, setSelectedQuake }: PlotDisplayProps) => {
  return (
    <>
      {
        data.length > 0 && data.map(quake => (
          <CircleMarker
            key={quake.id}
            center={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}
            fillOpacity={0.6}
            stroke
            color={getMagnitudeScaleColor(quake.properties.mag)}
            fillColor={getMagnitudeScaleColor(quake.properties.mag)}
            radius={20}

            eventHandlers={{
              mouseover: () => {
                setSelectedQuake({
                  place: quake.properties.place,
                  mag: quake.properties.mag,
                  time: quake.properties.time,
                  url: quake.properties.url
                })
              }
            }}
          />
        ))
      }

    </>
  )
}

export default PlotDisplay