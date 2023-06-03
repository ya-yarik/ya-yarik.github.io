import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, Tooltip, CircleMarker, Polygon} from 'react-leaflet'

const colorOptions={color:'purple'}

// const centerPolygon=[
//   [55.767089520253435,37.32390050571038]
//   [55.94071485511263,37.60951570445349]
//   [55.7676828218433,37.8855471985941]
//   [55.554973984901125,37.63698152476597]
// ]

const center=[55.769667, 37.627671]
const Aboutus = () => {
  return (
    <div>
      <MapContainer
      center={center}
      zoom={10} 
      style={{
          width:'100%',
          height:"500px"
      }}>
        <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />

        <CircleMarker
        center={center}
        pathOptions={{color:'black'}}
        radius={10}       
        />

        {/* <Marker position={center}>
          <Popup>Мы здесь!</Popup>
          <Tooltip>Привет!</Tooltip> 
        </Marker> */}
        {/* <Polygon positions={centerPolygon} pathOptions={colorOptions}/> */}
        </MapContainer>    
    </div>
  )
}

export default Aboutus