import { LatLngTuple } from "leaflet"
import { useEffect, useState } from "react"
import MapContainer from "./components/MapContainer"
import Sidebar from "./components/Sidebar"

function App() {
  // Map States
  const [earthquakes, setEarthquakes] = useState([])
  const [center, setCenter] = useState<LatLngTuple>([36.2048, 138.2529])
  const [zoom, setZoom] = useState<number>(5)

  // Search States
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(2011, 2, 11),
    new Date(2011, 2, 12)
  ])

  const [minMagnitude, setMinMagnitude] = useState(3)
  const [maxMagnitude, setMaxMagnitude] = useState(7)

  const fetchData = () => {
    const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson'
    const startTime = `&starttime=${dateRange[0]?.toISOString()}`
    const endTime = `&endtime=${dateRange[1]?.toISOString()}`
    const minMag = minMagnitude > 0 ? `&minmagnitude=${minMagnitude}` : ''
    const maxMag = maxMagnitude > 0 ? `&maxmagnitude=${maxMagnitude}` : ''

    console.log(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)

    fetch(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
      })
  }

  useEffect(() => {
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200')
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
      })
  }, [])

  return (
    <main>
      <Sidebar
        dateRange={dateRange}
        setDateRange={setDateRange}
        minMagnitude={minMagnitude}
        maxMagnitude={maxMagnitude}
        setMinMagnitude={setMinMagnitude}
        setMaxMagnitude={setMaxMagnitude}
        handleFetch={fetchData}
      />
      <MapContainer data={earthquakes} center={center} zoom={zoom} />
    </main>
  )
}

export default App
