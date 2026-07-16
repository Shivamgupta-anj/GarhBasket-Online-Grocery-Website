// 'use client'

// import React from 'react'
// import { MapContainer, TileLayer } from 'react-leaflet'
// import "leaflet/dist/leaflet.css"
// function MapView({position}:{position:[number,number]|null}) {
//     if(!position) return null
//   return (
    
//   )
// }

// export default MapView


'use client'

import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function MapView({ position }: { position: [number, number] | null }) {
  if (!position) return null

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default MapView