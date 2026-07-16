// 'use client'

// // import { getScoket } from '@/lib/socket'
// import { getSocket } from '@/lib/socket'
// import React, { useEffect } from 'react'

// function GeoUpdater({userId}:{userId:string}) {

//         let socket = getScoket()
//         socket.emit("identity",userId)
//         useEffect(()=>{
//             if(!userId) return
//             if(!navigator.geolocation) return
//             const watcher = navigator.geolocation.watchPosition((pos)=>{
//                 const lat= pos.coords.latitude
//                 const los=pos.coords.longitude
//                 socket.emit("update-location",{
//                     userId,
//                     latitude:lat,
//                     longitude:los
//                 })
//             },(err)=>{
//                 console.log(err)
//             },{enableHighAccuracy:true})
//             return ()=>navigator.geolocation.clearWatch(watcher)
//         },[userId])

//   return null


// }

// export default GeoUpdater



'use client'

import { getSocket } from '@/lib/socket'
import React, { useEffect } from 'react'

function GeoUpdater({ userId }: { userId: string }) {

  useEffect(() => {
    if (!userId) return
    if (!navigator.geolocation) return

    const socket = getSocket()
    socket.emit("identity", userId)

    const watcher = navigator.geolocation.watchPosition((pos) => {
      const lat = pos.coords.latitude
      const los = pos.coords.longitude
      socket.emit("update-location", {
        userId,
        latitude: lat,
        longitude: los
      })
    }, (err) => {
      console.log(err)
    }, { enableHighAccuracy: true })

    return () => navigator.geolocation.clearWatch(watcher)
  }, [userId])

  return null
}

export default GeoUpdater