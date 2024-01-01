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
    new Date(),
    new Date()
  ])
  const [minMagnitude, setMinMagnitude] = useState(3)
  const [maxMagnitude, setMaxMagnitude] = useState(7)

  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson'
    const startTime = `&starttime=${dateRange[0]?.toISOString()}`
    const endTime = `&endtime=${dateRange[1]?.toISOString()}`
    const minMag = minMagnitude > 0 ? `&minmagnitude=${minMagnitude}` : ''
    const maxMag = maxMagnitude > 0 ? `&maxmagnitude=${maxMagnitude}` : ''

    // console.log(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`);

    fetch(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200')
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
        const currentDate = new Date()
        const yesterday = new Date()
        yesterday.setDate(currentDate.getDate() - 1)
        setDateRange([yesterday, currentDate])
        setIsLoading(false)
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
      <MapContainer data={earthquakes} center={center} zoom={zoom} isLoading={isLoading} />
    </main>
  )
}

export default App
