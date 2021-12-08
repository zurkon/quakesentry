import React, { useEffect, useState } from "react";
import MapContainer from "./components/MapContainer";

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [center, setCenter] = useState([36.2048, 138.2529]);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=200')
      .then(response => response.json())
      .then(data => {
        setEarthquakes(data.features);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <MapContainer center={center} zoom={zoom} data={earthquakes} />
    </div>
  )
}

export default App
