import React, { useEffect, useState } from "react"
import MapContainer from "./components/MapContainer"
import Sidebar from "./components/Sidebar"
import { parseDate } from "./lib/utils"

function App() {
  const [earthquakes, setEarthquakes] = useState([])
  const [center, setCenter] = useState([36.2048, 138.2529])
  const [zoom, setZoom] = useState(5)
  const [startDate, setStartDate] = useState(new Date(2011, 2, 11))
  const [endDate, setEndDate] = useState(new Date(2011, 2, 12))
  const [magnitude, setMagnitude] = useState({
    min: 3,
    max: 6
  })
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = () => {
    const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson'
    const startTime = startDate ? `&starttime=${parseDate(startDate)}` : ''
    const endTime = endDate ? `&endtime=${parseDate(endDate)}` : ''
    const minMag = magnitude.min > 0 ? `&minmagnitude=${magnitude.min}` : ''
    const maxMag = magnitude.max > 0 ? `&maxmagnitude=${magnitude.max}` : ''

    setIsLoading(true)

    fetch(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
        // console.log(`${BASE_URL}${startTime}${endTime}${minMag}${maxMag}&limit=100`)
        // console.log(data.features)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200')
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features)
        // console.log(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <Sidebar
        startDate={startDate}
        endDate={endDate}
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleFetch={fetchData}
      />
      <MapContainer data={earthquakes} center={center} zoom={zoom} isLoading={isLoading} />
    </main>
  )
}

export default App
