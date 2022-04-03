import { useEffect, useRef, useState } from 'react'
import { chakra, Spinner, useColorMode, Flex } from '@chakra-ui/react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Card from '../Card'
import ColorLegend from '../ColorLegend'
import PlotDisplay from '../PlotDisplay'
import QuakeInfo from '../QuakeInfo'

const CustomMap = chakra(MapContainer)

const Container = ({ data, center, zoom, isLoading }) => {
  const [selectedQuake, setSelectedQuake] = useState({ title: '', place: '', mag: 0, url: '' })
  const { colorMode } = useColorMode()

  const southWest = [-80, -215]
  const nortEast = [85, 240]
  const bounds = L.latLngBounds([
    southWest,
    nortEast
  ])

  const mapUrl = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

  return (
    <CustomMap
      id="mapContainer"
      h="100vh"
      center={center}
      zoom={zoom}
      zoomControl={false}
      minZoom={3}
      maxBounds={bounds}
      maxBoundsViscosity={1}
    >
      <TileLayer
        url={mapUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <div className="leaflet-top leaflet-right" style={{ pointerEvents: 'auto' }}>
        <Card>
          <ColorLegend />
        </Card>
      </div>
      <div className="leaflet-bottom leaflet-right">
        <Card minW="400px" w={['95vw', 'auto']} mr={['2.5vw', 3]}>
          <QuakeInfo selectedQuake={selectedQuake} />
        </Card>
      </div>
      {
        isLoading ?
          <Flex
            pos="relative"
            zIndex={1500}
            h="100vh"
            w="100vw"
            bg="blackAlpha.600"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Flex>
          : <PlotDisplay data={data} setSelectedQuake={setSelectedQuake} />
      }

    </CustomMap>
  )
}

export default Container