// // // 'use client'

// // // import React, { useState,useEffect } from 'react'
// // // import {motion} from 'framer-motion'
// // // import { ArrowLeft, MapPin, User , Phone, Home, Building, Locate } from 'lucide-react'
// // // import { useRouter} from 'next/navigation'
// // // import { useSelector  } from 'react-redux'
// // // import { RootState } from '@/redux/store'

// // // function Checkout() {
// // //     const router = useRouter()
// // //     const {userData}=useSelector((state:RootState)=>state.user)
    
// // //     const [address,setAddress]=useState({
// // //         fullName:userData?.name || "",
// // //         mobile:userData?.mobile || "",
// // //         city:"",
// // //         pincode:"",
// // //         fullAddress:"",
// // //     })
// // //     useEffect(() => {
// // //     if (userData) {
// // //         setAddress({
// // //             fullName: userData.name || "",
// // //             mobile: userData.mobile || "",
// // //             city: "",
// // //             pincode: "",
// // //             fullAddress: "",
// // //         })
// // //     }
// // // }, [userData])

// // // const [position,setPosition]=useState<[number,number]|null>(null)

// // // useEffect(()=>{
// // //     if(navigator.geolocation){
// // //         navigator.geolocation.getCurrentPosition((pos)=>console.log(pos))
// // //     }
// // // },[])


// // //   return (
// // //     <div className="w-[92%] md:w-[80%] mx-auto py-10 relative">

// // //         <motion.div className="absolute left-0 top-2 flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
        
// // //         whileTap={{scale:0.97}}
// // //         onClick={()=>router.push("/user/cart")}
// // //         >

// // //             <ArrowLeft size={16}/>
// // //             <span>Back to cart</span>

// // //         </motion.div>

// // //          <motion.h1
                
// // //                 className='text-3xl md:text-4xl font-bold text-green-700 text-center mb-10'
// // //             >
// // //                 Checkout
// // //             </motion.h1>

// // //             <div className='grid md:grid-cols-2 gap-8'>
// // //                 <motion.div
// // //                 initial={{opacity:0,x:-20}}
// // //                 animate={{opacity:1,x:0}}
// // //                 transition={{duration:0.3}}

// // //                 className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100'
// // //                 >
// // //                     <h2 className='text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2'>
// // //                         <MapPin className='text-gray-700' /> Delivery Address
// // //                     </h2>

// // //                     <div className='space-y-4'>
// // //                         <div className='relative'>
// // //                             <User className='absolute left-3 top-3 text-gray-600' size={20}/>
// // //                            <input
// // //                                 type='text'
// // //                                 value={address.fullName || ""}
// // //                                 onChange={(e)=>setAddress({...address,fullName:e.target.value})}
// // //                             />

// // //                         <div className='relative'>
// // //                             <Phone className='absolute left-3 top-3 text-gray-600' size={20}/>
// // //                            <input
// // //                                 type='text'
// // //                                 value={address.mobile || ""}
// // //                                 onChange={(e)=>setAddress({...address,mobile:e.target.value})}
// // //                             />
// // //                         </div>


// // //                         <div className='relative'>
// // //                             <Home className='absolute left-3 top-3 text-gray-600' size={20}/>
// // //                             <input type='text' value={address.fullAddress } onChange={(e)=>setAddress({...address,fullAddress:e.target.value})} className='pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50' placeholder='Full Address'/>
// // //                         </div>


// // //                         <div className='grid grid-cols-3 gap-3'>
// // //                             <div className='relative'>
// // //                                 <Building className='absolute left-3 top-3 text-gray-600' size={20}/>
// // //                                 <input type='text' value={address.city } onChange={(e)=>setAddress({...address,city:e.target.value})} className='pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50' placeholder='Enter City'/>
// // //                             </div>
// // //                             <div className='relative'>
// // //                                 <Locate className='absolute left-3 top-3 text-gray-600' size={20}/>
// // //                                 <input type='text' value={address.pincode } onChange={(e)=>setAddress({...address,pincode:e.target.value})} className='pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50' placeholder='Pin Code'/>
// // //                             </div>

// // //                         </div>

// // //                         <div className='flex gap-2 mt-3'>
// // //                             <input type="text" placeholder='Search CIty or Area....' className='flex-1 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-500 outline-none' />
// // //                             <button className='bg-gray-600 hover:bg-green-600 transiton-all font-medium text-white px-5 rounded-lg '>Search</button>
// // //                         </div>


// // //                     </div>

// // //                 </motion.div>

// // //             </div>
      
// // //     </div>
// // //   )
// // // }

// // // export default Checkout

// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import { motion } from 'framer-motion'
// // import {
// //     ArrowLeft,
// //     MapPin,
// //     User,
// //     Phone,
// //     Home,
// //     Building,
// //     Locate
// // } from 'lucide-react'
// // import { useRouter } from 'next/navigation'
// // import { useSelector } from 'react-redux'
// // import { RootState } from '@/redux/store'
// // import L, { LatLngExpression} from 'leaflet'
// // import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
// // import "leaflet/dist/leaflet.css"
// // import axios from 'axios'
// // import { OpenStreetMapProvider } from 'leaflet-geosearch'

// // const markerIcon= new L.Icon({
// //     iconUrl:"https://cdn-icons-png.flaticon.com/128/684/684908.png",
// //     iconSize:[40,40],
// //     iconAnchor:[20,40]
// // })
// // function Checkout() {
// //     const router = useRouter()

// //     const { userData } = useSelector(
// //         (state: RootState) => state.user
// //     )

// //     const [address, setAddress] = useState({
// //         fullName: userData?.name || "",
// //         mobile: userData?.mobile || "",
// //         city: "",
// //         pincode: "",
// //         fullAddress: "",
// //     })

// //     const [searchQuery,setSearchQuery]=useState("")

// //     useEffect(() => {
// //         if (userData) {
// //             setAddress({
// //                 fullName: userData.name || "",
// //                 mobile: userData.mobile || "",
// //                 city: "",
// //                 pincode: "",
// //                 fullAddress: "",
// //             })
// //         }
// //     }, [userData]) 

// //     const [position, setPosition] = useState<[number, number] | null>(null)

// //     useEffect(() => {
// //         if (navigator.geolocation) {
// //             navigator.geolocation.getCurrentPosition((pos) =>{
// //                 const {latitude,longitude}=pos.coords
// //                 setPosition([latitude,longitude])
// //             },(err)=>{console.log('location error',err)},{enableHighAccuracy:true,maximumAge:0,timeout:10000}
                
// //             )
// //         }
// //     }, [])

// //     const DraggableMarker : React.FC=()=>{
// //         const map = useMap()
// //         useEffect(()=>{
// //             map.setView(position as LatLngExpression,15,{animate:true})
// //         },[position,map])
       


// //         return <Marker icon={markerIcon} position={position as LatLngExpression} draggable={true} eventHandlers={{dragend:(e:L.LeafletEvent)=>{
// //                                 const marker = e.target as L.Marker
// //                                 const {lat,lng}=marker.getLatLng()
// //                                 setPosition([lat,lng])
// //                             }}}/>
// //     }

// //     // const handleSearchQuery=async()=>{
// //     //     const provider = new OpenStreetMapProvider();
// //     //     const results = await provider.search({query: searchQuery})
// //     //     // console.log(results)
// //     //     if(results){
// //     //         setPosition([results[0].y, results[0].x])
// //     //     }
// //     // }

// //     const handleSearchQuery = async () => {
// //     if (!searchQuery.trim()) return
// //     try {
// //         const result = await axios.get(
// //             `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=5`
// //         )

// //         if (result.data.length === 0) {
// //             alert("No results found")
// //             return
// //         }

// //         const { lat, lon } = result.data[0]
// //         setPosition([parseFloat(lat), parseFloat(lon)])  // moves map + triggers fetchAddress

// //     } catch (err) {
// //         console.log("Search error:", err)
// //     }
// // }


// //     useEffect(()=>{
// //         const fetchAddress = async ()=>{
// //             if(!position) return
// //             try{
// //                 const result = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`)
// //                 console.log(result.data)
// //                 setAddress(prev=>({...prev,city:result.data.address.town,
// //                     fullAddress:result.data.display_name
// //                 }))
// //             }catch(err){
// //                 console.log(err)
// //             }
// //         }
// //         fetchAddress()
// //     },[position])

// //     return (
// //         <div className="w-[92%] md:w-[80%] mx-auto py-10 relative">
// //             <motion.div
// //                 className="absolute left-0 top-2 flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
// //                 whileTap={{ scale: 0.97 }}
// //                 onClick={() => router.push('/user/cart')}
// //             >
// //                 <ArrowLeft size={16} />
// //                 <span>Back to cart</span>
// //             </motion.div>

// //             <motion.h1
// //                 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10"
// //             >
// //                 Checkout
// //             </motion.h1>

// //             <div className="grid md:grid-cols-2 gap-8">
// //                 <motion.div
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
// //                 >
// //                     <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
// //                         <MapPin className="text-gray-700" />
// //                         Delivery Address
// //                     </h2>

// //                     <div className="space-y-4">
// //                         <div className="relative">
// //                             <User
// //                                 className="absolute left-3 top-3 text-gray-600"
// //                                 size={20}
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={address.fullName || ""}
// //                                 onChange={(e) =>
// //                                     setAddress({
// //                                         ...address,
// //                                         fullName: e.target.value,
// //                                     })
// //                                 }
// //                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
// //                             />
// //                         </div>

// //                         <div className="relative">
// //                             <Phone
// //                                 className="absolute left-3 top-3 text-gray-600"
// //                                 size={20}
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={address.mobile || ""}
// //                                 onChange={(e) =>
// //                                     setAddress({
// //                                         ...address,
// //                                         mobile: e.target.value,
// //                                     })
// //                                 }
// //                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
// //                             />
// //                         </div>

// //                         <div className="relative">
// //                             <Home
// //                                 className="absolute left-3 top-3 text-gray-600"
// //                                 size={20}
// //                             />
// //                             <input
// //                                 type="text"
// //                                 value={address.fullAddress || ""}
// //                                 onChange={(e) =>
// //                                     setAddress({
// //                                         ...address,
// //                                         fullAddress: e.target.value,
// //                                     })
// //                                 }
// //                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
// //                                 placeholder="Full Address"
// //                             />
// //                         </div>

// //                         <div className="grid grid-cols-3 gap-3">
// //                             <div className="relative">
// //                                 <Building
// //                                     className="absolute left-3 top-3 text-gray-600"
// //                                     size={20}
// //                                 />
// //                                 <input
// //                                     type="text"
// //                                     value={address.city || ""}
// //                                     onChange={(e) =>
// //                                         setAddress({
// //                                             ...address,
// //                                             city: e.target.value,
// //                                         })
// //                                     }
// //                                     className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
// //                                     placeholder="Enter City"
// //                                 />
// //                             </div>

// //                             <div className="relative">
// //                                 <Locate
// //                                     className="absolute left-3 top-3 text-gray-600"
// //                                     size={20}
// //                                 />
// //                                 <input
// //                                     type="text"
// //                                     value={address.pincode || ""}
// //                                     onChange={(e) =>
// //                                         setAddress({
// //                                             ...address,
// //                                             pincode: e.target.value,
// //                                         })
// //                                     }
// //                                     className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
// //                                     placeholder="Pin Code"
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="flex gap-2 mt-3">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Search CIty or Area...."
// //                                 className="flex-1 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-500 outline-none" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onClick={handleSearchQuery}
// //                             />
// //                             <button className="bg-gray-600 hover:bg-green-600 transition-all font-medium text-white px-5 rounded-lg">
// //                                 Search
// //                             </button>
// //                         </div>

// //                         {/* map  */}


// //                         <div className='relative mt-6 h-[330px] roundex-xl overflow-hidden border border-gray-200 shadow-inner'>

// //                            {position && <MapContainer key={position.toString()} center={position as LatLngExpression} zoom={15}  scrollWheelZoom={true} className='w-full h-full'>
// //                             <TileLayer
// //                             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                             />
// //                             {/* <Marker position={position}>
// //                             <Popup>
// //                                 A pretty CSS3 popup. <br /> Easily customizable.
// //                             </Popup>
// //                             </Marker> */}
// //                             <DraggableMarker />
// //                         </MapContainer>}
                            
// //                         </div>


// //                     </div>
// //                 </motion.div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Checkout




// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import {
//     ArrowLeft,
//     MapPin,
//     User,
//     Phone,
//     Home,
//     Building,
//     Locate,
//     Search,
//     LocateFixed,
//     CreditCard,
//     CreditCardIcon,
//     Truck
// } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'
// import axios from 'axios'
// import dynamic from 'next/dynamic'
// // ✅ Add at top level
// import 'leaflet/dist/leaflet.css'
// const Map = dynamic(() => import('react-leaflet').then(async (mod) => {
//     const L = (await import('leaflet')).default

    
    

//     // const markerIcon = new L.Icon({
//     //     iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
//     //     iconSize: [40, 40],
//     //     iconAnchor: [20, 40]
//     // })

//     const { MapContainer, TileLayer, Marker, useMap } = mod

//     const RecenterMap = ({ position }: { position: [number, number] }) => {
//         const map = useMap()
//         useEffect(() => {
//             map.setView(position, 15, { animate: true })
//         }, [position, map])
//         return null
//     }

//     // const DraggableMarker = ({ position, setPosition }: { position: [number, number], setPosition: (p: [number, number]) => void }) => {
//     //     return (
//     //         <Marker
//     //             icon={markerIcon}
//     //             position={position}
//     //             draggable={true}
//     //             eventHandlers={{
//     //                 dragend: (e: L.LeafletEvent) => {
//     //                     const marker = e.target as L.Marker
//     //                     const { lat, lng } = marker.getLatLng()
//     //                     setPosition([lat, lng])
//     //                 }
//     //             }}
//     //         />
//     //     )
//     // }

//     const MapComponent = ({ position, setPosition }: { position: [number, number], setPosition: (p: [number, number]) => void }) => {
//         return (
//             <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="w-full h-full">
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <RecenterMap position={position} />
//                 <DraggableMarker position={position} setPosition={setPosition} />
//             </MapContainer>
//         )
//     }

//     return MapComponent
// }), { ssr: false })

// function Checkout() {
//     const router = useRouter()
//     const [paymentMethod,setPaymentMethod]=useState<"cod"| "online">("cod")

//     const { userData } = useSelector((state: RootState) => state.user)
//     const { subTotal,deliveryFee,finalTotal,cartData } = useSelector((state: RootState) => state.cart)

//     const [address, setAddress] = useState({
//         fullName: userData?.name || "",
//         mobile: userData?.mobile || "",
//         city: "",
//         pincode: "",
//         fullAddress: "",
//     })

//     const [searchQuery, setSearchQuery] = useState("")
//     const [position, setPosition] = useState<[number, number] | null>(null)

//     useEffect(() => {
//         if (userData) {
//             setAddress({
//                 fullName: userData.name || "",
//                 mobile: userData.mobile || "",
//                 city: "",
//                 pincode: "",
//                 fullAddress: "",
//             })
//         }
//     }, [userData])



//     const handleCod=async()=>{
//         if(!position){
//             return  null
//         }
//         try{
//             const result = await axios.post("/api/user/order",{
//                 userId:userData?._id,
//                 items:cartData.map(item=>(
//                     {
//                         grocery:item._id,
//                         name:item.name,
//                         price:item.price,
//                         unit:item.unit,
//                         quantity:item.quantity,
//                         image:item.image
//                     }
//                 )),
//                 totalAmount:finalTotal,
//                 address:{
//                     fullName:address.fullName,
//                     mobile:address.mobile,
//                     city:address.city,
//                     fullAddress:address.fullAddress,
//                     pincode:address.pincode,
//                     latitude:position[0],
//                     longitude:position[1]
//                 },
//                 paymentMethod
//             })
//             router.push("/user/order-success")
//         }catch(err){
//             console.log(err)

//         }
//     }

//     const handleOnlinePayment = async ()=>{
//          if(!position){
//             return  null
//         }
//         try{
//             const result = await axios.post("/api/user/payment",{
//                 userId:userData?._id,
//                 items:cartData.map(item=>(
//                     {
//                         grocery:item._id,
//                         name:item.name,
//                         price:item.price,
//                         unit:item.unit,
//                         quantity:item.quantity,
//                         image:item.image
//                     }
//                 )),
//                 totalAmount:finalTotal,
//                 address:{
//                     fullName:address.fullName,
//                     mobile:address.mobile,
//                     city:address.city,
//                     fullAddress:address.fullAddress,
//                     pincode:address.pincode,
//                     latitude:position[0],
//                     longitude:position[1]
//                 },
//                 paymentMethod
//             })
//             window.location.href=result.data.url

//         }catch(err){
//             console.log(err)
//         }

//     }


//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (pos) => {
//                     const { latitude, longitude } = pos.coords
//                     setPosition([latitude, longitude])
//                 },
//                 (err) => { console.log('location error', err) },
//                 { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
//             )
//         }
//     }, [])

//     useEffect(() => {
//         const fetchAddress = async () => {
//             if (!position) return
//             try {
//                 const result = await axios.get(
//                     `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
//                 )
//                 const addr = result.data.address
//                 setAddress(prev => ({
//                     ...prev,
//                     city: addr.city || addr.town || addr.village || addr.county || "",
//                     pincode: addr.postcode || prev.pincode,
//                     fullAddress: result.data.display_name
//                 }))
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         fetchAddress()
//     }, [position])

//     const handleSearchQuery = async () => {
//         if (!searchQuery.trim()) return
//         try {
//             const result = await axios.get(
//                 `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=5`
//             )
//             if (result.data.length === 0) {
//                 alert("No results found")
//                 return
//             }
//             const { lat, lon } = result.data[0]
//             setPosition([parseFloat(lat), parseFloat(lon)])
//         } catch (err) {
//             console.log("Search error:", err)
//         }
//     }

//     return (
//         <div className="w-[92%] md:w-[80%] mx-auto py-10 relative">
//             <motion.div
//                 className="absolute left-0 top-2 flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => router.push('/user/cart')}
//             >
//                 <ArrowLeft size={16} />
//                 <span>Back to cart</span>
//             </motion.div>

//             <motion.h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
//                 Checkout
//             </motion.h1>

//             <div className="grid md:grid-cols-2 gap-8">
//                 <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
//                 >
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                         <MapPin className="text-gray-700" />
//                         Delivery Address
//                     </h2>

//                     <div className="space-y-4">
//                         <div className="relative">
//                             <User className="absolute left-3 top-3 text-gray-600" size={20} />
//                             <input
//                                 type="text"
//                                 value={address.fullName || ""}
//                                 onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
//                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
//                                 placeholder="Full Name"
//                             />
//                         </div>

//                         <div className="relative">
//                             <Phone className="absolute left-3 top-3 text-gray-600" size={20} />
//                             <input
//                                 type="text"
//                                 value={address.mobile || ""}
//                                 onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
//                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
//                                 placeholder="Mobile"
//                             />
//                         </div>

//                         <div className="relative">
//                             <Home className="absolute left-3 top-3 text-gray-600" size={20} />
//                             <input
//                                 type="text"
//                                 value={address.fullAddress || ""}
//                                 onChange={(e) => setAddress({ ...address, fullAddress: e.target.value })}
//                                 className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
//                                 placeholder="Full Address"
//                             />
//                         </div>

//                         <div className="grid grid-cols-3 gap-3">
//                             <div className="relative">
//                                 <Building className="absolute left-3 top-3 text-gray-600" size={20} />
//                                 <input
//                                     type="text"
//                                     value={address.city || ""}
//                                     onChange={(e) => setAddress({ ...address, city: e.target.value })}
//                                     className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
//                                     placeholder="Enter City"
//                                 />
//                             </div>

//                             <div className="relative">
//                                 <Locate className="absolute left-3 top-3 text-gray-600" size={20} />
//                                 <input
//                                     type="text"
//                                     value={address.pincode || ""}
//                                     onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
//                                     className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
//                                     placeholder="Pin Code"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex gap-2 mt-3">
//                             <input
//                                 type="text"
//                                 placeholder="Search City or Area...."
//                                 className="flex-1 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-500 outline-none"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 onKeyDown={(e) => e.key === "Enter" && handleSearchQuery()}
//                             />
//                             <button
//                                 onClick={handleSearchQuery}
//                                 className="bg-gray-600 hover:bg-green-600 transition-all font-medium text-white px-5 rounded-lg"
//                             >
//                                 Search
//                             </button>
//                         </div>

//                         <div className='relative mt-6 h-[330px] rounded-xl overflow-hidden border border-gray-200 shadow-inner'>
//                             {position && 
//                             (
//                                 <Map position={position} setPosition={setPosition} />
//                             )}
//                              <motion.button
//                                 whileTap={{ scale: 0.9 }}
//                                 onClick={() => {
//                                     navigator.geolocation.getCurrentPosition((pos) => {
//                                         setPosition([pos.coords.latitude, pos.coords.longitude])
//                                     })
//                                 }}
//                                 className='absolute bottom-4 right-4 bg-gray-600 text-white shadow-lg rounded-full p-3 hover:bg-green-700 transition-all flex items-center justify-center z-[999]'
//                             >
//                                 <LocateFixed size={22} />
//                             </motion.button>
//                         </div>

                        
//                     </div>
//                 </motion.div>

//                 <motion.div 
//                 initial={{opacity:0,x:20}}
//                 animate={{opacity:1,x:0}}
//                 transition={{duration:0.3}}
//                 className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-fit'
//                 >
//                     <h2 className='text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2'> <CreditCard className='text-black-500'/> Payment Method</h2>

//                     <div className='space-y-4 mb-6'>
//                         {/* online */}
//                         <button onClick={()=>setPaymentMethod("online")}
//                         className={`flex items-center gap-3 w-full border rounded-lg p-3 transition-all ${paymentMethod==="online"?"border-green-600 bg-green-50 shadow-sm":"hover:bg-gray-50"}`}>
//                             <CreditCardIcon className='text-gray-600'/> <span className='font-medium text-gray-700'>Pay Online (stripe)</span>
//                         </button>


//                         {/* cod */}
//                         <button 
//                         onClick={()=>setPaymentMethod("cod")}
//                         className={`flex items-center gap-3 w-full border rounded-lg p-3 transition-all ${paymentMethod==="cod"?"border-green-600 bg-green-50 shadow-sm":"hover:bg-gray-50"}`}>
//                             <Truck className='text-gray-600'/> <span className='font-medium text-gray-700'>Cash On Delivery</span>
//                         </button>

//                     </div>

//                     <div className='border-t pt-4 text-gray-700 space-y-2 text-sm sm:text-base'>

//                         <div className='flex justify-between'>
//                             <span>Sub-Total : </span>
//                             <span className='font-semibold text-black'>₹ {subTotal}</span>
//                         </div>

//                         <div className='flex justify-between'>
//                             <span>Deliver Fee : </span>
//                             <span className='font-semibold text-black'>{deliveryFee}</span>
//                         </div>

//                         <div className='flex justify-between font-bold text-lg border-t pt-3'>
//                             <span>Final Total : </span>
//                             <span className='font-semibold text-black'>{finalTotal}</span>
//                         </div>

//                     </div>

//                     <motion.button whileTap={{scale:0.93}} className='w-full mt-6 bg-gray-600 text-white py-3 rounded-full hover:bg-green-700 transition-all font-semibold'
//                     onClick={()=>{
//                         if(paymentMethod=="cod"){
//                             handleCod()
//                         }else{
                           
//                             handleOnlinePayment()
//                         }

//                     }}
//                     >
//                         {paymentMethod=="cod"?"Place Order":"Pay & Place Order"}
//                     </motion.button>
                    

//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default Checkout

'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    MapPin,
    User,
    Phone,
    Home,
    Building,
    Locate,
    Search,
    LocateFixed,
    CreditCard,
    CreditCardIcon,
    Truck
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import axios from 'axios'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const Map = dynamic(() => import('react-leaflet').then(async (mod) => {
    const L = (await import('leaflet')).default

    const markerIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    })

    const { MapContainer, TileLayer, Marker, useMap } = mod

    const RecenterMap = ({ position }: { position: [number, number] }) => {
        const map = useMap()
        useEffect(() => {
            map.setView(position, 15, { animate: true })
        }, [position, map])
        return null
    }

    const DraggableMarker = ({ position, setPosition }: { position: [number, number], setPosition: (p: [number, number]) => void }) => {
        return (
            <Marker
                icon={markerIcon}
                position={position}
                draggable={true}
                eventHandlers={{
                    dragend: (e: L.LeafletEvent) => {
                        const marker = e.target as L.Marker
                        const { lat, lng } = marker.getLatLng()
                        setPosition([lat, lng])
                    }
                }}
            />
        )
    }

    const MapComponent = ({ position, setPosition }: { position: [number, number], setPosition: (p: [number, number]) => void }) => {
        return (
            <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RecenterMap position={position} />
                <DraggableMarker position={position} setPosition={setPosition} />
            </MapContainer>
        )
    }

    return MapComponent
}), { ssr: false })

function Checkout() {
    const router = useRouter()
    const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod")

    const { userData } = useSelector((state: RootState) => state.user)
    const { subTotal, deliveryFee, finalTotal, cartData } = useSelector((state: RootState) => state.cart)

    const [address, setAddress] = useState({
        fullName: userData?.name || "",
        mobile: userData?.mobile || "",
        city: "",
        pincode: "",
        fullAddress: "",
    })

    const [searchQuery, setSearchQuery] = useState("")
    const [position, setPosition] = useState<[number, number] | null>(null)

    useEffect(() => {
        if (userData) {
            setAddress({
                fullName: userData.name || "",
                mobile: userData.mobile || "",
                city: "",
                pincode: "",
                fullAddress: "",
            })
        }
    }, [userData])

    const handleCod = async () => {
        if (!position) {
            return null
        }
        try {
            const result = await axios.post("/api/user/order", {
                userId: userData?._id,
                items: cartData.map(item => (
                    {
                        grocery: item._id,
                        name: item.name,
                        price: item.price,
                        unit: item.unit,
                        quantity: item.quantity,
                        image: item.image
                    }
                )),
                totalAmount: finalTotal,
                address: {
                    fullName: address.fullName,
                    mobile: address.mobile,
                    city: address.city,
                    fullAddress: address.fullAddress,
                    pincode: address.pincode,
                    latitude: position[0],
                    longitude: position[1]
                },
                paymentMethod
            })
            router.push("/user/order-success")
        } catch (err) {
            console.log(err)
        }
    }

    const handleOnlinePayment = async () => {
        if (!position) {
            return null
        }
        try {
            const result = await axios.post("/api/user/payment", {
                userId: userData?._id,
                items: cartData.map(item => (
                    {
                        grocery: item._id,
                        name: item.name,
                        price: item.price,
                        unit: item.unit,
                        quantity: item.quantity,
                        image: item.image
                    }
                )),
                totalAmount: finalTotal,
                address: {
                    fullName: address.fullName,
                    mobile: address.mobile,
                    city: address.city,
                    fullAddress: address.fullAddress,
                    pincode: address.pincode,
                    latitude: position[0],
                    longitude: position[1]
                },
                paymentMethod
            })
            window.location.href = result.data.url

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords
                    setPosition([latitude, longitude])
                },
                (err) => { console.log('location error', err) },
                { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
            )
        }
    }, [])

    useEffect(() => {
        const fetchAddress = async () => {
            if (!position) return
            try {
                const result = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
                )
                const addr = result.data.address
                setAddress(prev => ({
                    ...prev,
                    city: addr.city || addr.town || addr.village || addr.county || "",
                    pincode: addr.postcode || prev.pincode,
                    fullAddress: result.data.display_name
                }))
            } catch (err) {
                console.log(err)
            }
        }
        fetchAddress()
    }, [position])

    const handleSearchQuery = async () => {
        if (!searchQuery.trim()) return
        try {
            const result = await axios.get(
                `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=5`
            )
            if (result.data.length === 0) {
                alert("No results found")
                return
            }
            const { lat, lon } = result.data[0]
            setPosition([parseFloat(lat), parseFloat(lon)])
        } catch (err) {
            console.log("Search error:", err)
        }
    }

    return (
        <div className="w-[92%] md:w-[80%] mx-auto py-10 relative">
            <motion.div
                className="absolute left-0 top-2 flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/user/cart')}
            >
                <ArrowLeft size={16} />
                <span>Back to cart</span>
            </motion.div>

            <motion.h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
                Checkout
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <MapPin className="text-gray-700" />
                        Delivery Address
                    </h2>

                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-600" size={20} />
                            <input
                                type="text"
                                value={address.fullName || ""}
                                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                                className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-600" size={20} />
                            <input
                                type="text"
                                value={address.mobile || ""}
                                onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
                                className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
                                placeholder="Mobile"
                            />
                        </div>

                        <div className="relative">
                            <Home className="absolute left-3 top-3 text-gray-600" size={20} />
                            <input
                                type="text"
                                value={address.fullAddress || ""}
                                onChange={(e) => setAddress({ ...address, fullAddress: e.target.value })}
                                className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
                                placeholder="Full Address"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="relative">
                                <Building className="absolute left-3 top-3 text-gray-600" size={20} />
                                <input
                                    type="text"
                                    value={address.city || ""}
                                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                    className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
                                    placeholder="Enter City"
                                />
                            </div>

                            <div className="relative">
                                <Locate className="absolute left-3 top-3 text-gray-600" size={20} />
                                <input
                                    type="text"
                                    value={address.pincode || ""}
                                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                                    className="pl-10 w-full border rounded-lg p-3 text-sm bg-gray-50"
                                    placeholder="Pin Code"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                            <input
                                type="text"
                                placeholder="Search City or Area...."
                                className="flex-1 border rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-500 outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearchQuery()}
                            />
                            <button
                                onClick={handleSearchQuery}
                                className="bg-gray-600 hover:bg-green-600 transition-all font-medium text-white px-5 rounded-lg"
                            >
                                Search
                            </button>
                        </div>

                        <div className='relative mt-6 h-[330px] rounded-xl overflow-hidden border border-gray-200 shadow-inner'>
                            {position &&
                                (
                                    <Map position={position} setPosition={setPosition} />
                                )}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    navigator.geolocation.getCurrentPosition((pos) => {
                                        setPosition([pos.coords.latitude, pos.coords.longitude])
                                    })
                                }}
                                className='absolute bottom-4 right-4 bg-gray-600 text-white shadow-lg rounded-full p-3 hover:bg-green-700 transition-all flex items-center justify-center z-[999]'
                            >
                                <LocateFixed size={22} />
                            </motion.button>
                        </div>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-fit'
                >
                    <h2 className='text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2'> <CreditCard className='text-black-500' /> Payment Method</h2>

                    <div className='space-y-4 mb-6'>
                        {/* online */}
                        <button onClick={() => setPaymentMethod("online")}
                            className={`flex items-center gap-3 w-full border rounded-lg p-3 transition-all ${paymentMethod === "online" ? "border-green-600 bg-green-50 shadow-sm" : "hover:bg-gray-50"}`}>
                            <CreditCardIcon className='text-gray-600' /> <span className='font-medium text-gray-700'>Pay Online (stripe)</span>
                        </button>

                        {/* cod */}
                        <button
                            onClick={() => setPaymentMethod("cod")}
                            className={`flex items-center gap-3 w-full border rounded-lg p-3 transition-all ${paymentMethod === "cod" ? "border-green-600 bg-green-50 shadow-sm" : "hover:bg-gray-50"}`}>
                            <Truck className='text-gray-600' /> <span className='font-medium text-gray-700'>Cash On Delivery</span>
                        </button>
                    </div>

                    <div className='border-t pt-4 text-gray-700 space-y-2 text-sm sm:text-base'>
                        <div className='flex justify-between'>
                            <span>Sub-Total : </span>
                            <span className='font-semibold text-black'>₹ {subTotal}</span>
                        </div>

                        <div className='flex justify-between'>
                            <span>Deliver Fee : </span>
                            <span className='font-semibold text-black'>{deliveryFee}</span>
                        </div>

                        <div className='flex justify-between font-bold text-lg border-t pt-3'>
                            <span>Final Total : </span>
                            <span className='font-semibold text-black'>{finalTotal}</span>
                        </div>
                    </div>

                    <motion.button whileTap={{ scale: 0.93 }} className='w-full mt-6 bg-gray-600 text-white py-3 rounded-full hover:bg-green-700 transition-all font-semibold'
                        onClick={() => {
                            if (paymentMethod == "cod") {
                                handleCod()
                            } else {
                                handleOnlinePayment()
                            }
                        }}
                    >
                        {paymentMethod == "cod" ? "Place Order" : "Pay & Place Order"}
                    </motion.button>

                </motion.div>
            </div>
        </div>
    )
}

export default Checkout