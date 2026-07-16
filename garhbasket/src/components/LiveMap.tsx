// // import React from 'react'
// // import L, { LatLngExpression } from "leaflet"
// // import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
// // import "leaflet/dist/leaflet.css"

// // interface ILocation {
// //   latitude: number,
// //   longitude: number
// // }

// // interface Iprops {
// //   userLocation: ILocation,
// //   deliveryBoyLocation?: ILocation
// // }

// // function Recenter ({positions}:{positions:[number,number]}){
  
// //   const map= useMap()

// //   useEffect(()=>{
// //     if(positions[0]!==0 && positions[1]!==0){
// //       map.setView(positions,map.getZoom(),{
// //         animate:true
// //       })
// //     }
// //   },[positions,map])
  
// //   return null
// // }

// // function LiveMap({ userLocation, deliveryBoyLocation }: Iprops) {

// //   const deliveryBoyIcon = L.icon({
// //     iconUrl: "https://cdn-icons-png.flaticon.com/128/9518/9518023.png",
// //     iconSize: [45, 45]
// //   })
// //   const userIcon = L.icon({
// //     iconUrl: "https://cdn-icons-png.flaticon.com/128/4821/4821951.png",
// //     iconSize: [45, 45]
// //   })

// //   const linePositions =
// //     deliveryBoyLocation && userLocation
// //       ? [
// //           [userLocation.latitude, userLocation.longitude],
// //           [deliveryBoyLocation.latitude, deliveryBoyLocation.longitude]
// //         ]
// //       : []

// //   const center = [userLocation.latitude, userLocation.longitude]

// //   return (
// //     <div className="w-full h-[500px] rounded-xl overflow-hidden shadow relative">

// //       <MapContainer center={center as LatLngExpression} zoom={13} scrollWheelZoom={true} className="w-full h-full">
// //         <Recenter positions={center as any}/>
// //         <TileLayer
// //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// //         />

// //         <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
// //           <Popup>Delivery Address</Popup>
// //         </Marker>

// //         {deliveryBoyLocation && (
// //           <Marker position={[deliveryBoyLocation.latitude, deliveryBoyLocation.longitude]} icon={deliveryBoyIcon}>
// //             <Popup>Delivery Boy</Popup>
// //           </Marker>
// //         )}

// //         <Polyline positions={linePositions as any} color="black" />

// //       </MapContainer>

// //     </div>
// //   )
// // }

// // export default LiveMap


// import React, { useEffect } from 'react'
// import L, { LatLngExpression } from "leaflet"
// import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
// import "leaflet/dist/leaflet.css"

// interface ILocation {
//   latitude: number,
//   longitude: number
// }

// interface Iprops {
//   userLocation: ILocation,
//   deliveryBoyLocation?: ILocation
// }

// function Recenter({ positions }: { positions: [number, number] }) {
//   const map = useMap()

//   useEffect(() => {
//     if (positions[0] !== 0 && positions[1] !== 0) {
//       map.setView(positions, map.getZoom(), {
//         animate: true
//       })
//     }
//   }, [positions, map])

//   return null
// }

// function LiveMap({ userLocation, deliveryBoyLocation }: Iprops) {

//   const deliveryBoyIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/128/9518/9518023.png",
//     iconSize: [45, 45]
//   })
//   const userIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/128/4821/4821951.png",
//     iconSize: [45, 45]
//   })

//   const linePositions =
//     deliveryBoyLocation && userLocation
//       ? [
//           [userLocation.latitude, userLocation.longitude],
//           [deliveryBoyLocation.latitude, deliveryBoyLocation.longitude]
//         ]
//       : []

//   const center = [userLocation.latitude, userLocation.longitude]

//   return (
//     <div className="w-full h-[500px] rounded-xl overflow-hidden shadow relative z-2">

//       <MapContainer center={center as LatLngExpression} zoom={13} scrollWheelZoom={true} className="w-full h-full">
//         <Recenter positions={center as [number, number]} />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         />

//         <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
//           <Popup>Delivery Address</Popup>
//         </Marker>

//         {deliveryBoyLocation && (
//           <Marker position={[deliveryBoyLocation.latitude, deliveryBoyLocation.longitude]} icon={deliveryBoyIcon}>
//             <Popup>Delivery Boy</Popup>
//           </Marker>
//         )}

//         <Polyline positions={linePositions as LatLngExpression[]} color="black" />

//       </MapContainer>

//     </div>
//   )
// }

// export default LiveMap


import React, { useEffect } from 'react'
import L, { LatLngExpression } from "leaflet"
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { ILocation } from "@/models/location"

interface Iprops {
  userLocation: ILocation,
  deliveryBoyLocation?: ILocation
}

function Recenter({ positions }: { positions: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    if (positions[0] !== 0 && positions[1] !== 0) {
      map.setView(positions, map.getZoom(), {
        animate: true
      })
    }
  }, [positions, map])

  return null
}

function LiveMap({ userLocation, deliveryBoyLocation }: Iprops) {

  const deliveryBoyIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/9518/9518023.png",
    iconSize: [45, 45]
  })
  const userIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/4821/4821951.png",
    iconSize: [45, 45]
  })

  const linePositions =
    deliveryBoyLocation && userLocation
      ? [
          [userLocation.lat, userLocation.lng],
          [deliveryBoyLocation.lat, deliveryBoyLocation.lng]
        ]
      : []

  const center = [userLocation.lat, userLocation.lng]

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow relative z-2">

      <MapContainer center={center as LatLngExpression} zoom={13} scrollWheelZoom={true} className="w-full h-full">
        <Recenter positions={center as [number, number]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>Delivery Address</Popup>
        </Marker>

        {deliveryBoyLocation && (
          <Marker position={[deliveryBoyLocation.lat, deliveryBoyLocation.lng]} icon={deliveryBoyIcon}>
            <Popup>Delivery Boy</Popup>
          </Marker>
        )}

        <Polyline positions={linePositions as LatLngExpression[]} color="black" />

      </MapContainer>

    </div>
  )
}

export default LiveMap