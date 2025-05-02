import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { LatLngTuple } from 'leaflet'
import { earthquake } from '../../types'
import PlotDisplay from '../PlotDisplay'
import QuakeInfo from '../QuakeInfo'
import ColorLegend from '../ColorLegend'
import { Box, LoadingOverlay, MediaQuery } from '@mantine/core'
import { useState } from 'react'

interface MapProps {
  data: Array<earthquake>,
  center: LatLngTuple,
  zoom: number,
  isLoading: boolean
}

const Container = ({ data, center, zoom, isLoading }: MapProps) => {
  const [selectedQuake, setSelectedQuake] = useState({ place: '', mag: 0, time: 0, url: '' })

  const mapUrl = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

  const southWest: LatLngTuple = [-80, -215]
  const northEast: LatLngTuple = [80, 230]
  const mapBounds = L.latLngBounds([
    southWest, northEast
  ])

  return (
    <MapContainer
      id="mapContainer"
      style={{
        height: '100vh'
      }}
      center={center}
      zoom={zoom}

      keyboard
      keyboardPanDelta={160}
      zoomControl={false} // Disable default zoom control
      minZoom={3}
      maxBounds={mapBounds}
      maxBoundsViscosity={1}
      worldCopyJump={true}
    >
      <TileLayer
        url={mapUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <ZoomControl position='topright' />

      <div className="leaflet-top leaflet-right">
        <Box
          sx={{
            marginRight: '0.7rem',
            marginTop: '6rem'
          }}
        >
          <ColorLegend />
        </Box>
      </div>

      <div className="leaflet-bottom leaflet-right" style={{ pointerEvents: 'auto' }}>
        <MediaQuery
          smallerThan="xs"
          styles={{
            marginRight: '2.5vw',
            marginBottom: window.innerHeight < 680 ? '10rem' : '7rem'
          }}
        >
          <Box
            sx={{
              marginRight: '0.7rem',
              marginBottom: '2rem'
            }}
          >
            <QuakeInfo selectedQuake={selectedQuake} />
          </Box>
        </MediaQuery>
      </div>

      {
        isLoading ? (
          <LoadingOverlay visible={isLoading} transitionDuration={500} />
        ) : (
          <PlotDisplay data={data} setSelectedQuake={setSelectedQuake} />
        )
      }

    </MapContainer>
  )
}

export default Container
