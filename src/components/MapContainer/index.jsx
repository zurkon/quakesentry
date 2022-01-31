import { useEffect, useRef, useState } from 'react'
import { chakra, Spinner, Box, useColorMode, Flex } from '@chakra-ui/react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Card from '../Card'
import ColorLegend from '../ColorLegend'
import PlotDisplay from '../PlotDisplay'
import QuakeInfo from '../QuakeInfo'

const CustomMap = chakra(MapContainer)

const Container = ({ data, center, zoom, isLoading }) => {
  const ref = useRef(null)
  const [selectedQuake, setSelectedQuake] = useState({ title: '', place: '', mag: 0 })
  const { colorMode } = useColorMode()

  const southWest = [-80, -215]
  const nortEast = [85, 240]
  const bounds = L.latLngBounds([
    southWest,
    nortEast
  ])

  const darkUrl = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  const lightUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

  useEffect(() => {
    if (ref.current) {
      ref.current.setUrl(colorMode === 'light' ? lightUrl : darkUrl)
    }
  }, [colorMode])

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
        ref={ref}
        url={colorMode === 'light' ? lightUrl : darkUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <div className="leaflet-top leaflet-right">
        <Card>
          <QuakeInfo selectedQuake={selectedQuake} />
        </Card>
      </div>
      <div className="leaflet-bottom leaflet-right">
        <Card>
          <ColorLegend />
        </Card>
      </div>
      {
        isLoading ?
          <Flex
            pos="relative"
            zIndex={1500}
            h="100vh"
            w="100vw"
            bg="whiteAlpha.600"
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