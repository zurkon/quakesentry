<h1 align="center">Quake Sentry</h1> 

<div align="center">

  <img src="https://raw.githubusercontent.com/Zurkon/repo-assets/main/quakesentry/quakesentry.png" />

A Earthquake Monitoring app built with [`React`](https://facebook.github.io/react/), [`leaflet`](https://github.com/Leaflet/Leaflet), [`mantine`](https://github.com/mantinedev/mantine/) and data from [`USGS`](https://earthquake.usgs.gov/).

</div>

## Libraries

This project was made using:

- [`React`](https://facebook.github.io/react/) - Library for building user interfaces.
- [`leaflet`](https://github.com/Leaflet/Leaflet) - A javaScript library for mobile-friendly interactive maps.
- [`react-leaflet`](https://github.com/PaulLeCam/react-leaflet) - React components for Leaflet maps.
- [`mantine`](https://github.com/mantinedev/mantine/) - A fully featured React components library.

# Features

- The app will always open with the last 100 earthquakes across the globe.
- Search and Filter for earthquakes.
- By **default** every search has a limit of 100 results.
- Color Scale to indicate the magnitude of each earthquake, following this [`scale`](http://www.geo.mtu.edu/UPSeis/magnitude.html).

# Setup

To run this project, install the dependencies:
```
npm install
```

Then run the dev enviroment:
```
npm run dev
```

# Available Scripts

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
