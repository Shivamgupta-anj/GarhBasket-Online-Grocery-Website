// // // // // 'use client'

// // // // // import axios from 'axios'
// // // // // import { useParams } from 'next/navigation'
// // // // // import React, { useEffect } from 'react'

// // // // // function TrackOrder({params}:{params:{orderId:string}}) {

// // // // //   const orderId = useParams()

// // // // //   useEffect(()=>{
// // // // //     const getOrder= async ()=>{
// // // // //       try{
// // // // //         const result = await axios.get(`/api/user/get-order/${orderId}`)
// // // // //         console.log(result)
// // // // //       }catch(err){
// // // // //         console.log(err)

// // // // //       }
// // // // //     }
// // // // //     getOrder()

// // // // //   },[])

// // // // //   return (
// // // // //     <div>
      
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default TrackOrder


// // // // 'use client'

// // // // import { Iuser } from '@/models/user.model'
// // // // import { Rootstate } from '@/redux/store'
// // // // // import { RootState } from '@reduxjs/toolkit/query/react'
// // // // import axios from 'axios'
// // // // import { ArrowLeft } from 'lucide-react'
// // // // import mongoose from 'mongoose'
// // // // import { useParams, useRouter } from 'next/navigation'
// // // // import React, { useEffect, useState } from 'react'
// // // // import { useSelector } from 'react-redux'


// // // // export interface IOrder {
// // // //     _id?: mongoose.Types.ObjectId
// // // //     user: mongoose.Types.ObjectId
// // // //     items: [
// // // //         {
// // // //             grocery: mongoose.Types.ObjectId,
// // // //             name: string,
// // // //             price: string,
// // // //             unit: string,
// // // //             image: string,
// // // //             quantity: number
// // // //         }
// // // //     ],

// // // //     isPaid:boolean
// // // //     totalAmount: number,
// // // //     paymentMethod: "cod" | "online"
// // // //     address: {
// // // //         fullName: string,
// // // //         mobile: string,
// // // //         city: string,
// // // //         pincode: string,
// // // //         fullAddress: string,
// // // //         latitude: number,
// // // //         longitude: number
// // // //     }
// // // //     assignment?:mongoose.Types.ObjectId
// // // //     assignedDeliveryBoy?:Iuser
// // // //     status: "pending" | "Out for Delivery" | "Delivered"  // ✅ fixed typo "Out of" → "Out for"
// // // //     createdAt?: Date
// // // //     updatedAt?: Date
// // // // }

// // // // interface ILocation{
// // // //   latitude:number,
// // // //   longitude:number
// // // // }


// // // // function TrackOrder() {
  
// // // //   const {userData}= useSelector((state:Rootstate)=>state.user)
// // // //   const { orderId } = useParams<{ orderId: string }>()
// // // //   const [order,setOrder]=useState<IOrder>()
// // // //   const router = useRouter()
// // // //   const [userLocation,setUserLocation]=useState<ILocation>(
// // // //     {
// // // //       latitude : 0,
// // // //       longitude : 0
// // // //     }
// // // //   )

// // // //   const [deliveryBoyLocation,setDeliveryBoyLocation]=useState<ILocation>(
// // // //     {
// // // //       latitude : 0,
// // // //       longitude : 0
// // // //     }
// // // //   )

// // // //   useEffect(() => {
// // // //     if (!orderId) return

// // // //     const getOrder = async () => {
// // // //       try {
// // // //         const result = await axios.get(`/api/user/get-order/${orderId}`)
// // // //         setOrder(result.data)
// // // //         // console.log(result)
// // // //         setUserLocation({
// // // //           latitude: result.data.address.latitude,
// // // //           longitude: result.data.address.longitude
// // // //         })

// // // //         setDeliveryBoyLocation({
// // // //           latitude:result.data.assignedDeliveryBoy.location.coordinates[1],
// // // //           longitude:result.data.assignedDeliveryBoy.location.coordinates[0]
// // // //         })

// // // //       } catch (err) {
// // // //         console.log(err)
// // // //       }
// // // //     }
// // // //     getOrder()

// // // //   }, [orderId?._id])

// // // //   return (
// // // //     <div className='w-full min-h-screen bg-linear-to-b from-green-50 to-white'>
// // // //       <div className='max-w-2xl mx-auto pb-24'>
// // // //         <div className='sticky top-0 bg-white/80 backdrop-blur-xl p-4 border-b shadow flex gap-3 items-center z-999'>
// // // //           <button className='p-2 bg-green-100 rounded-full' onClick={()=>router.back}><ArrowLeft className="text-gray-700 " size={20}/></button>
// // // //         </div>

// // // //         <h2 className="text-xl font-bold">Track Order</h2>
// // // //         <p className='text-sm text-gray-600'>order#{order?._id?.toString().slice(-6)} <span className='text-gray-700 font-semibold'>{order?.status}</span></p>

// // // //       </div>

// // // //     </div>
// // // //   )
// // // // }

// // // // export default TrackOrder


// // // 'use client'

// // // import dynamic from 'next/dynamic'

// // // const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false })
// // // import { Iuser } from '@/models/user.model'
// // // import { Rootstate } from '@/redux/store'
// // // import axios from 'axios'
// // // import { ArrowLeft, Send } from 'lucide-react'
// // // import mongoose from 'mongoose'
// // // import { useParams, useRouter } from 'next/navigation'
// // // import React, { useEffect, useRef, useState } from 'react'
// // // import { useSelector } from 'react-redux'
// // // import { getSocket } from '@/lib/socket'  
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { IMessage } from '@/models/message.model'

// // // export interface IOrder {
// // //     _id?: mongoose.Types.ObjectId
// // //     user: mongoose.Types.ObjectId
// // //     items: [
// // //         {
// // //             grocery: mongoose.Types.ObjectId,
// // //             name: string,
// // //             price: string,
// // //             unit: string,
// // //             image: string,
// // //             quantity: number
// // //         }
// // //     ],

// // //     isPaid:boolean
// // //     totalAmount: number,
// // //     paymentMethod: "cod" | "online"
// // //     address: {
// // //         fullName: string,
// // //         mobile: string,
// // //         city: string,
// // //         pincode: string,
// // //         fullAddress: string,
// // //         latitude: number,
// // //         longitude: number
// // //     }
// // //     assignment?:mongoose.Types.ObjectId
// // //     assignedDeliveryBoy?:Iuser
// // //     status: "pending" | "Out for Delivery" | "Delivered"
// // //     createdAt?: Date
// // //     updatedAt?: Date
// // // }

// // // interface ILocation{
// // //   latitude:number,
// // //   longitude:number
// // // }


// // // function TrackOrder() {
  
// // //   const {userData}= useSelector((state:Rootstate)=>state.user)
// // //   const { orderId } = useParams<{ orderId: string }>()
// // //   const [order,setOrder]=useState<IOrder>()
// // //   const router = useRouter()
// // //   const [newMessage,setNewMessage]=useState("")
// // //   const [messages,setMessages]=useState<IMessage[]>()
// // //   const chatBoxRef=useRef<HTMLDivElement>(null)
// // //   const [userLocation,setUserLocation]=useState<ILocation>(
// // //     {
// // //       latitude : 0,
// // //       longitude : 0
// // //     }
// // //   )

// // //   const [deliveryBoyLocation,setDeliveryBoyLocation]=useState<ILocation>(
// // //     {
// // //       latitude : 0,
// // //       longitude : 0
// // //     }
// // //   )

// // //   useEffect(() => {
// // //     if (!orderId) return

// // //     const getOrder = async () => {
// // //       try {
// // //         const result = await axios.get(`/api/user/get-order/${orderId}`)
// // //         setOrder(result.data)

// // //         setUserLocation({
// // //           latitude: result.data.address.latitude,
// // //           longitude: result.data.address.longitude
// // //         })

// // //         setDeliveryBoyLocation({
// // //           latitude: result.data.assignedDeliveryBoy?.location?.coordinates[1] ?? 0,
// // //           longitude: result.data.assignedDeliveryBoy?.location?.coordinates[0] ?? 0
// // //         })
// // //         console.log(result.data)

// // //       } catch (err) {
// // //         console.log(err)
// // //       }
// // //     }
// // //     getOrder()

// // //   }, [orderId])

// // //   // useEffect(():any=>{
// // //   //   const socket = getSocket()
// // //   //   socket.on("update-deliveryBoy-location",({userId,location})=>{
// // //   //     if(userId.toString()===order?.assignedDeliveryBoy?._id?.toString()){
// // //   //       setDeliveryBoyLocation({
// // //   //         latitude:location.coordinates[1],
// // //   //         longitude:location.coordinates[0]

// // //   //       })
// // //   //     }
// // //   //   })
// // //   //   return ()=> socket.off("update-deliveryBoy-location")
// // //   // },[order])


// // // //   useEffect(() => {
// // // //   const socket = getSocket()
// // // //   socket.on("update-deliveryBoy-location", ({ data }) => {
// // // //     // if (userId.toString() === order?.assignedDeliveryBoy?._id?.toString()) {
// // // //     //   setDeliveryBoyLocation({
// // // //     //     latitude: location.coordinates[1],
// // // //     //     longitude: location.coordinates[0]
// // // //     //   })

// // // //     setDeliveryBoyLocation({
// // // //       latitude:data.location.coordinates?.[1] ?? data.location.latitude,
// // // //       longitude:data.location.coordinates?.[0] ?? data.location.longitude
// // // //     })
// // // //     })
// // // //   })
// // // //   return () => socket.off("update-deliveryBoy-location")
// // // // }, [order])

// // // useEffect(() => {
// // //     const socket = getSocket()

// // //     socket.on("update-deliveryBoy-location", ({ userId, location }) => {
// // //       if (userId?.toString() === order?.assignedDeliveryBoy?._id?.toString()) {
// // //         setDeliveryBoyLocation({
// // //           latitude: location.coordinates?.[1] ?? location.latitude,
// // //           longitude: location.coordinates?.[0] ?? location.longitude
// // //         })
// // //       }
// // //     })

// // //     return () => {
// // //       socket.off("update-deliveryBoy-location")
// // //     }
// // //   }, [order])


// // //   useEffect(() => {
// // //           const socket = getSocket()
// // //           socket.emit("join-room", orderId)
// // //           socket.on("send-message",(message)=>{
// // //               if(message.roomId===orderId){
// // //                   setMessages((prev)=>[...prev!,message])
// // //               }
// // //           })

// // //           return ()=>{
// // //             socket.off("send-message")
// // //           }
  
// // //       }, [])

// // //        useEffect(()=>{
// // //               chatBoxRef.current?.scrollTo({
// // //                   top:chatBoxRef.current.scrollHeight,
// // //                   behavior:"smooth"
// // //               })
// // //           },[messages])
      
  
// // //       const sendMsg = () => {
// // //           const socket = getSocket()
  
// // //           const message = {
// // //               roomId: orderId,
// // //               text: newMessage,
// // //               senderId: userData?._id,
// // //               time: new Date().toLocaleTimeString([], {
// // //                   hour: "2-digit",
// // //                   minute: "2-digit"
// // //               })
// // //           }
// // //           socket.emit("send-message", message)
          
// // //           setNewMessage("")
  
// // //       }

// // //       useEffect(() => {
// // //               const getAllMessages = async () => {
// // //                   try {
// // //                       const result = await axios.post("/api/chat/messages", { roomId: orderId })
// // //                       setMessages(result.data)
      
// // //                   } catch (err) {
// // //                       console.log(err)
      
// // //                   }
// // //               }
// // //               getAllMessages()
// // //           }, [])

// // //   return (
// // //     <div className='w-full min-h-screen bg-linear-to-b from-green-50 to-white'>
// // //       <div className='max-w-2xl mx-auto pb-24'>
// // //         <div className='sticky top-0 bg-white/80 backdrop-blur-xl p-4 border-b shadow flex gap-3 items-center z-999'>
// // //           <button className='p-2 bg-green-100 rounded-full' onClick={()=>router.back()}><ArrowLeft className="text-gray-700 " size={20}/></button>

// // //           <h2 className="text-xl font-bold">Track Order</h2>
// // //         <p className='text-sm text-gray-600'>order#{order?._id?.toString().slice(-6)} <span className='text-gray-700 font-semibold'>{order?.status}</span></p>

// // //         </div>
        


// // //         <div className='px-4 mt-6 space-y-4'>
// // //           <div className='rounded-3xl overflow-hidden border shadow'>
// // //             <LiveMap userLocation={userLocation} deliveryBoyLocation={deliveryBoyLocation}/>

// // //           </div>



// // //           <div className="bg-white rounded-3xl shadow-lg border p-4 h-[430px] flex flex-col">
          
// // //                       <div className="flex-1 overflow-y-auto p-2 space-y-3" ref={chatBoxRef}> 
// // //                           <AnimatePresence>
// // //                               {messages?.map((msg, index) => {
// // //                                   return (
// // //                                       <motion.div
// // //                                           key={msg._id?.toString()}
// // //                                           initial={{ opacity: 0, y: 15 }}
// // //                                           animate={{ opacity: 1, y: 0 }}
// // //                                           exit={{ opacity: 0 }}
// // //                                           transition={{ duration: 0.2 }}
// // //                                           className={`flex ${msg.senderId == userData?._id ? "justify-end" : "justify-start"}`}
          
// // //                                       >
// // //                                           <div className={`px-4 py-2 max-w-[75%] rounded-2xl shadow ${msg.senderId=== userData?._id ? "bg-green-600 text-white rounded-br-none":"bg-gray-100 text-gray-800 rounded-bl-none"}`}>
          
// // //                                               <p>{msg.text}</p>
// // //                                               <p className='text-[10px] opacity-70 mt-1 text-right'>{msg.time}</p>
          
// // //                                           </div>
          
// // //                                       </motion.div>
// // //                                   )
// // //                               })}
// // //                           </AnimatePresence>
          
// // //                       </div>
          
          
          
          
// // //                       <div className='flex gap-2 mt-3 border-t pt-3'>
// // //                           <input type="text" placeholder="Type a Message..." className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
// // //                           <button className="bg-gray-600 hover:bg-green-700 p-3 rounded-xl text-white" onClick={sendMsg}>
// // //                               <Send size={18} />
// // //                           </button>
// // //                       </div>
          
// // //                   </div>

// // //         </div>

// // //       </div>

// // //     </div>
// // //   )
// // // }

// // // export default TrackOrder




// // 'use client'

// // import dynamic from 'next/dynamic'

// // const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false })
// // import { Iuser } from '@/models/user.model'
// // import { RootState } from '@/redux/store'
// // import axios from 'axios'
// // import { ArrowLeft, Loader, Send, Sparkle } from 'lucide-react'
// // // import mongoose from 'mongoose'
// // import { useParams, useRouter } from 'next/navigation'
// // import React, { useEffect, useRef, useState } from 'react'
// // import { useSelector } from 'react-redux'
// // import { getSocket } from '@/lib/socket'
// // import { AnimatePresence, motion } from "framer-motion";
// // import { IMessage } from '@/models/message.model'

// // export interface IOrder {
// //     _id?: string
// //     user: string
// //     items: [
// //         {
// //             grocery:string,
// //             name: string,
// //             price: string,
// //             unit: string,
// //             image: string,
// //             quantity: number
// //         }
// //     ],

// //     isPaid: boolean
// //     totalAmount: number,
// //     paymentMethod: "cod" | "online"
// //     address: {
// //         fullName: string,
// //         mobile: string,
// //         city: string,
// //         pincode: string,
// //         fullAddress: string,
// //         latitude: number,
// //         longitude: number
// //     }
// //     assignment?:string
// //     assignedDeliveryBoy?: Iuser
// //     status: "pending" | "Out for Delivery" | "Delivered"
// //     createdAt?: Date
// //     updatedAt?: Date
// // }

// // interface ILocation {
// //     latitude: number,
// //     longitude: number
// // }

// // function TrackOrder() {

// //     const { userData } =useSelector((state: RootState) => state.user)
// //     const { orderId } = useParams<{ orderId: string }>()
// //     const [order, setOrder] = useState<IOrder>()
// //     const router = useRouter()
// //     const [newMessage, setNewMessage] = useState("")
// //     const [messages, setMessages] = useState<IMessage[]>()
// //     const chatBoxRef = useRef<HTMLDivElement>(null)
// //     const [userLocation, setUserLocation] = useState<ILocation>({
// //         latitude: 0,
// //         longitude: 0
// //     })

// //     const [deliveryBoyLocation, setDeliveryBoyLocation] = useState<ILocation>({
// //         latitude: 0,
// //         longitude: 0
// //     })
// //     // const [suggestions,setSuggestions]= useState([
// //     //     // "hello", "thank you" , "hii"
// //     // ])

// //     const [loading,setLoading]=useState(false)
// //     const [suggestions,setSuggestions]=useState([])

// //     useEffect(() => {
// //         if (!orderId) return

// //         const getOrder = async () => {
// //             try {
// //                 const result = await axios.get(`/api/user/get-order/${orderId}`)
// //                 setOrder(result.data)

// //                 setUserLocation({
// //                     latitude: result.data.address.latitude,
// //                     longitude: result.data.address.longitude
// //                 })

// //                 setDeliveryBoyLocation({
// //                     latitude: result.data.assignedDeliveryBoy?.location?.coordinates[1] ?? 0,
// //                     longitude: result.data.assignedDeliveryBoy?.location?.coordinates[0] ?? 0
// //                 })
// //                 console.log(result.data)

// //             } catch (err) {
// //                 console.log(err)
// //             }
// //         }
// //         getOrder()

// //     }, [orderId])

// //     // Live delivery boy location updates
// //     useEffect(() => {
// //         const socket = getSocket()

// //         const handleLocationUpdate = ({ userId, location }: any) => {
// //             if (userId?.toString() === order?.assignedDeliveryBoy?._id?.toString()) {
// //                 setDeliveryBoyLocation({
// //                     latitude: location.coordinates?.[1] ?? location.latitude,
// //                     longitude: location.coordinates?.[0] ?? location.longitude
// //                 })
// //             }
// //         }

// //         socket.on("update-deliveryBoy-location", handleLocationUpdate)

// //         return () => {
// //             socket.off("update-deliveryBoy-location", handleLocationUpdate)
// //         }
// //     }, [order])

// //     // ✅ Join room + listen for incoming chat messages (fixed roomId comparison + dependency)
// //     useEffect(() => {
// //         const socket = getSocket()
// //         socket.emit("join-room", orderId)

// //         const handleIncoming = (message: any) => {
// //             console.log("TrackOrder received:", message, "expected roomId:", orderId)
// //             if (message.roomId?.toString() === orderId?.toString()) {
// //                 setMessages((prev) => [...(prev ?? []), message])
// //             }
// //         }

// //         socket.on("send-message", handleIncoming)

// //         return () => {
// //             socket.off("send-message", handleIncoming)
// //         }

// //     }, [orderId])

// //     useEffect(() => {
// //         chatBoxRef.current?.scrollTo({
// //             top: chatBoxRef.current.scrollHeight,
// //             behavior: "smooth"
// //         })
// //     }, [messages])

// //     const sendMsg = () => {
// //         const socket = getSocket()

// //         const message = {
// //             roomId: orderId,
// //             text: newMessage,
// //             senderId: userData?._id,
// //             time: new Date().toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit"
// //             })
// //         }
// //         socket.emit("send-message", message)

// //         setNewMessage("")
// //     }

// //     useEffect(() => {
// //         const getAllMessages = async () => {
// //             try {
// //                 const result = await axios.post("/api/chat/messages", { roomId: orderId })
// //                 setMessages(result.data)

// //             } catch (err) {
// //                 console.log(err)

// //             }
// //         }
// //         getAllMessages()
// //     }, [orderId])

    
// //     const getSuggestion = async () => {
// //         setLoading(true)
// //     try {
// //         const lastMessage = messages?.filter(m => m.senderId.toString() !== userData?._id)?.at(-1)
// //         const result = await axios.post("/api/chat/ai-suggestions", {
// //             message: lastMessage?.text,
// //             role: "user"
// //         })

// //         if (Array.isArray(result.data?.suggestions) && result.data.suggestions.length) {
// //             setSuggestions(result.data.suggestions)
// //         } else {
// //             console.warn("Unexpected suggestions response:", result.data)
// //         }
// //         setLoading(false)
// //     } catch (err) {
// //         console.log(err)
// //         setLoading(false)
// //         // Keep old suggestions instead of breaking state
// //     }
// // }


// //     return (
// //         <div className='w-full min-h-screen bg-linear-to-b from-green-50 to-white'>
// //             <div className='max-w-2xl mx-auto pb-24'>
// //                 <div className='sticky top-0 bg-white/80 backdrop-blur-xl p-4 border-b shadow flex gap-3 items-center z-999'>
// //                     <button className='p-2 bg-green-100 rounded-full' onClick={() => router.back()}><ArrowLeft className="text-gray-700 " size={20} /></button>

// //                     <h2 className="text-xl font-bold">Track Order</h2>
// //                     <p className='text-sm text-gray-600'>order#{order?._id?.toString().slice(-6)} <span className='text-gray-700 font-semibold'>{order?.status}</span></p>

// //                 </div>



// //                 <div className='px-4 mt-6 space-y-4'>
// //                     <div className='rounded-3xl overflow-hidden border shadow'>
// //                         <LiveMap userLocation={userLocation} deliveryBoyLocation={deliveryBoyLocation} />
// //                     </div>

// //                     <div className="bg-white rounded-3xl shadow-lg border p-4 h-[430px] flex flex-col">

// //                         <div className='fkex justify-between items-center mb-3'>
// //                                         <span className='font-semibold text-gray-700 text-sm'>Quick Replies</span>
// //                                         <motion.button
// //                                         disabled={loading}
// //                                             whileTap={{scale:0.9}}
// //                                             className='px-3 py-1 text-xs flex items-center gap-1 bg-purple-100 text-purple-700 rounded-full shadow-sm border border-purple-200 '
// //                                             onClick={getSuggestion}
// //                                         ><Sparkle size={14}/> {loading?<Loader className='w-5 h-5 animate-spin'/>:"AI suggest"}</motion.button>
                        
// //                                     </div>
                        
// //                                     <div className='flex gap-2 flex-wrap mb-3'>
// //                                         {suggestions.map((s,i)=>(
// //                                             <motion.div key={s}
// //                                             whileTap={{scale:0.92}}
// //                                             className='px-3 py-1 text-xs bg-green-50 border border-green-200 text-green-700 rounded-full cursor-pointer'
// //                                             onClick={()=>setNewMessage(s)}
// //                                             >
// //                                                 {s}
                        
// //                                             </motion.div>
// //                                         ))}
                        
                        
// //                                     </div>

// //                         <div className="flex-1 overflow-y-auto p-2 space-y-3" ref={chatBoxRef}>
// //                             <AnimatePresence>
// //                                 {messages?.map((msg) => (
// //                                     <motion.div
// //                                         key={msg._id?.toString()}
// //                                         initial={{ opacity: 0, y: 15 }}
// //                                         animate={{ opacity: 1, y: 0 }}
// //                                         exit={{ opacity: 0 }}
// //                                         transition={{ duration: 0.2 }}
// //                                         className={`flex ${msg.senderId.toString() == userData?._id ? "justify-end" : "justify-start"}`}
// //                                     >
// //                                         <div className={`px-4 py-2 max-w-[75%] rounded-2xl shadow ${msg.senderId.toString() === userData?._id ? "bg-green-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`}>

// //                                             <p>{msg.text}</p>
// //                                             <p className='text-[10px] opacity-70 mt-1 text-right'>{msg.time}</p>

// //                                         </div>

// //                                     </motion.div>
// //                                 ))}
// //                             </AnimatePresence>

// //                         </div>

// //                         <div className='flex gap-2 mt-3 border-t pt-3'>
// //                             <input type="text" placeholder="Type a Message..." className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
// //                             <button className="bg-gray-600 hover:bg-green-700 p-3 rounded-xl text-white" onClick={sendMsg}>
// //                                 <Send size={18} />
// //                             </button>
// //                         </div>

// //                     </div>

// //                 </div>

// //             </div>

// //         </div>
// //     )
// // }

// // export default TrackOrder

// 'use client'

// import dynamic from 'next/dynamic'

// const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false })
// import { Iuser } from '@/models/user.model'
// import { RootState } from '@/redux/store'
// import axios from 'axios'
// import { ArrowLeft, Loader, Send, Sparkle } from 'lucide-react'
// import { useParams, useRouter } from 'next/navigation'
// import React, { useEffect, useRef, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { getSocket } from '@/lib/socket'
// import { AnimatePresence, motion } from "framer-motion";
// import { IMessage } from '@/models/message.model'

// export interface IOrder {
//     _id?: string
//     user: string
//     items: [
//         {
//             grocery: string,
//             name: string,
//             price: string,
//             unit: string,
//             image: string,
//             quantity: number
//         }
//     ],

//     isPaid: boolean
//     totalAmount: number,
//     paymentMethod: "cod" | "online"
//     address: {
//         fullName: string,
//         mobile: string,
//         city: string,
//         pincode: string,
//         fullAddress: string,
//         latitude: number,
//         longitude: number
//     }
//     assignment?: string
//     assignedDeliveryBoy?: Iuser
//     status: "pending" | "Out for Delivery" | "Delivered"
//     createdAt?: Date
//     updatedAt?: Date
// }

// interface ILocation {
//     latitude: number,
//     longitude: number
// }

// function TrackOrder() {

//     const { userData } = useSelector((state: RootState) => state.user)
//     const { orderId } = useParams<{ orderId: string }>()
//     const [order, setOrder] = useState<IOrder>()
//     const router = useRouter()
//     const [newMessage, setNewMessage] = useState("")
//     const [messages, setMessages] = useState<IMessage[]>()
//     const chatBoxRef = useRef<HTMLDivElement>(null)
//     const [userLocation, setUserLocation] = useState<ILocation>({
//         latitude: 0,
//         longitude: 0
//     })

//     const [deliveryBoyLocation, setDeliveryBoyLocation] = useState<ILocation>({
//         latitude: 0,
//         longitude: 0
//     })

//     const [loading, setLoading] = useState(false)
//     const [suggestions, setSuggestions] = useState([])

//     useEffect(() => {
//         if (!orderId) return

//         const getOrder = async () => {
//             try {
//                 const result = await axios.get(`/api/user/get-order/${orderId}`)
//                 setOrder(result.data)

//                 setUserLocation({
//                     latitude: result.data.address.latitude,
//                     longitude: result.data.address.longitude
//                 })

//                 setDeliveryBoyLocation({
//                     latitude: result.data.assignedDeliveryBoy?.location?.coordinates[1] ?? 0,
//                     longitude: result.data.assignedDeliveryBoy?.location?.coordinates[0] ?? 0
//                 })
//                 console.log(result.data)

//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         getOrder()

//     }, [orderId])

//     // Live delivery boy location updates
//     useEffect(() => {
//         const socket = getSocket()

//         const handleLocationUpdate = ({ userId, location }: any) => {
//             if (userId?.toString() === order?.assignedDeliveryBoy?._id?.toString()) {
//                 setDeliveryBoyLocation({
//                     latitude: location.coordinates?.[1] ?? location.latitude,
//                     longitude: location.coordinates?.[0] ?? location.longitude
//                 })
//             }
//         }

//         socket.on("update-deliveryBoy-location", handleLocationUpdate)

//         return () => {
//             socket.off("update-deliveryBoy-location", handleLocationUpdate)
//         }
//     }, [order])

//     // Join room + listen for incoming chat messages
//     useEffect(() => {
//         const socket = getSocket()
//         socket.emit("join-room", orderId)

//         const handleIncoming = (message: any) => {
//             console.log("TrackOrder received:", message, "expected roomId:", orderId)
//             if (message.roomId?.toString() === orderId?.toString()) {
//                 setMessages((prev) => [...(prev ?? []), message])
//             }
//         }

//         socket.on("send-message", handleIncoming)

//         return () => {
//             socket.off("send-message", handleIncoming)
//         }

//     }, [orderId])

//     useEffect(() => {
//         chatBoxRef.current?.scrollTo({
//             top: chatBoxRef.current.scrollHeight,
//             behavior: "smooth"
//         })
//     }, [messages])

//     const sendMsg = () => {
//         const socket = getSocket()

//         const message = {
//             roomId: orderId,
//             text: newMessage,
//             senderId: userData?._id,
//             time: new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit"
//             })
//         }
//         socket.emit("send-message", message)

//         setNewMessage("")
//     }

//     useEffect(() => {
//         const getAllMessages = async () => {
//             try {
//                 const result = await axios.post("/api/chat/messages", { roomId: orderId })
//                 setMessages(result.data)

//             } catch (err) {
//                 console.log(err)

//             }
//         }
//         getAllMessages()
//     }, [orderId])


//     const getSuggestion = async () => {
//         setLoading(true)
//         try {
//             const lastMessage = messages?.filter(m => m.senderId.toString() !== userData?._id?.toString())?.at(-1)
//             const result = await axios.post("/api/chat/ai-suggestions", {
//                 message: lastMessage?.text,
//                 role: "user"
//             })

//             if (Array.isArray(result.data?.suggestions) && result.data.suggestions.length) {
//                 setSuggestions(result.data.suggestions)
//             } else {
//                 console.warn("Unexpected suggestions response:", result.data)
//             }
//             setLoading(false)
//         } catch (err) {
//             console.log(err)
//             setLoading(false)
//             // Keep old suggestions instead of breaking state
//         }
//     }


//     return (
//         <div className='w-full min-h-screen bg-linear-to-b from-green-50 to-white'>
//             <div className='max-w-2xl mx-auto pb-24'>
//                 <div className='sticky top-0 bg-white/80 backdrop-blur-xl p-4 border-b shadow flex gap-3 items-center z-999'>
//                     <button className='p-2 bg-green-100 rounded-full' onClick={() => router.back()}><ArrowLeft className="text-gray-700 " size={20} /></button>

//                     <h2 className="text-xl font-bold">Track Order</h2>
//                     <p className='text-sm text-gray-600'>order#{order?._id?.toString().slice(-6)} <span className='text-gray-700 font-semibold'>{order?.status}</span></p>

//                 </div>



//                 <div className='px-4 mt-6 space-y-4'>
//                     <div className='rounded-3xl overflow-hidden border shadow'>
//                         <LiveMap userLocation={userLocation} deliveryBoyLocation={deliveryBoyLocation} />
//                     </div>

//                     <div className="bg-white rounded-3xl shadow-lg border p-4 h-[430px] flex flex-col">

//                         <div className='fkex justify-between items-center mb-3'>
//                             <span className='font-semibold text-gray-700 text-sm'>Quick Replies</span>
//                             <motion.button
//                                 disabled={loading}
//                                 whileTap={{ scale: 0.9 }}
//                                 className='px-3 py-1 text-xs flex items-center gap-1 bg-purple-100 text-purple-700 rounded-full shadow-sm border border-purple-200 '
//                                 onClick={getSuggestion}
//                             ><Sparkle size={14} /> {loading ? <Loader className='w-5 h-5 animate-spin' /> : "AI suggest"}</motion.button>

//                         </div>

//                         <div className='flex gap-2 flex-wrap mb-3'>
//                             {suggestions.map((s, i) => (
//                                 <motion.div key={s}
//                                     whileTap={{ scale: 0.92 }}
//                                     className='px-3 py-1 text-xs bg-green-50 border border-green-200 text-green-700 rounded-full cursor-pointer'
//                                     onClick={() => setNewMessage(s)}
//                                 >
//                                     {s}

//                                 </motion.div>
//                             ))}


//                         </div>

//                         <div className="flex-1 overflow-y-auto p-2 space-y-3" ref={chatBoxRef}>
//                             <AnimatePresence>
//                                 {messages?.map((msg) => (
//                                     <motion.div
//                                         key={msg._id?.toString()}
//                                         initial={{ opacity: 0, y: 15 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0 }}
//                                         transition={{ duration: 0.2 }}
//                                         className={`flex ${msg.senderId.toString() == userData?._id?.toString() ? "justify-end" : "justify-start"}`}
//                                     >
//                                         <div className={`px-4 py-2 max-w-[75%] rounded-2xl shadow ${msg.senderId.toString() === userData?._id?.toString() ? "bg-green-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`}>

//                                             <p>{msg.text}</p>
//                                             <p className='text-[10px] opacity-70 mt-1 text-right'>{msg.time}</p>

//                                         </div>

//                                     </motion.div>
//                                 ))}
//                             </AnimatePresence>

//                         </div>

//                         <div className='flex gap-2 mt-3 border-t pt-3'>
//                             <input type="text" placeholder="Type a Message..." className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
//                             <button className="bg-gray-600 hover:bg-green-700 p-3 rounded-xl text-white" onClick={sendMsg}>
//                                 <Send size={18} />
//                             </button>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default TrackOrder

'use client'

import dynamic from 'next/dynamic'

const LiveMap = dynamic(() => import('@/components/LiveMap'), { ssr: false })
import { Iuser } from '@/models/user.model'
import { RootState } from '@/redux/store'
import { ILocation } from '@/models/location'
import axios from 'axios'
import { ArrowLeft, Loader, Send, Sparkle } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSocket } from '@/lib/socket'
import { AnimatePresence, motion } from "framer-motion";
import { IMessage } from '@/models/message.model'

export interface IOrder {
    _id?: string
    user: string
    items: [
        {
            grocery: string,
            name: string,
            price: string,
            unit: string,
            image: string,
            quantity: number
        }
    ],

    isPaid: boolean
    totalAmount: number,
    paymentMethod: "cod" | "online"
    address: {
        fullName: string,
        mobile: string,
        city: string,
        pincode: string,
        fullAddress: string,
        latitude: number,
        longitude: number
    }
    assignment?: string
    assignedDeliveryBoy?: Iuser
    status: "pending" | "Out for Delivery" | "Delivered"
    createdAt?: Date
    updatedAt?: Date
}

function TrackOrder() {

    const { userData } = useSelector((state: RootState) => state.user)
    const { orderId } = useParams<{ orderId: string }>()
    const [order, setOrder] = useState<IOrder>()
    const router = useRouter()
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState<IMessage[]>()
    const chatBoxRef = useRef<HTMLDivElement>(null)
    const [userLocation, setUserLocation] = useState<ILocation>({
        lat: 0,
        lng: 0
    })

    const [deliveryBoyLocation, setDeliveryBoyLocation] = useState<ILocation>({
        lat: 0,
        lng: 0
    })

    const [loading, setLoading] = useState(false)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (!orderId) return

        const getOrder = async () => {
            try {
                const result = await axios.get(`/api/user/get-order/${orderId}`)
                setOrder(result.data)

                setUserLocation({
                    lat: result.data.address.latitude,
                    lng: result.data.address.longitude
                })

                setDeliveryBoyLocation({
                    lat: result.data.assignedDeliveryBoy?.location?.coordinates[1] ?? 0,
                    lng: result.data.assignedDeliveryBoy?.location?.coordinates[0] ?? 0
                })
                console.log(result.data)

            } catch (err) {
                console.log(err)
            }
        }
        getOrder()

    }, [orderId])

    // Live delivery boy location updates
    useEffect(() => {
        const socket = getSocket()

        const handleLocationUpdate = ({ userId, location }: any) => {
            if (userId?.toString() === order?.assignedDeliveryBoy?._id?.toString()) {
                setDeliveryBoyLocation({
                    lat: location.coordinates?.[1] ?? location.latitude,
                    lng: location.coordinates?.[0] ?? location.longitude
                })
            }
        }

        socket.on("update-deliveryBoy-location", handleLocationUpdate)

        return () => {
            socket.off("update-deliveryBoy-location", handleLocationUpdate)
        }
    }, [order])

    // Join room + listen for incoming chat messages
    useEffect(() => {
        const socket = getSocket()
        socket.emit("join-room", orderId)

        const handleIncoming = (message: any) => {
            console.log("TrackOrder received:", message, "expected roomId:", orderId)
            if (message.roomId?.toString() === orderId?.toString()) {
                setMessages((prev) => [...(prev ?? []), message])
            }
        }

        socket.on("send-message", handleIncoming)

        return () => {
            socket.off("send-message", handleIncoming)
        }

    }, [orderId])

    useEffect(() => {
        chatBoxRef.current?.scrollTo({
            top: chatBoxRef.current.scrollHeight,
            behavior: "smooth"
        })
    }, [messages])

    const sendMsg = () => {
        const socket = getSocket()

        const message = {
            roomId: orderId,
            text: newMessage,
            senderId: userData?._id,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        }
        socket.emit("send-message", message)

        setNewMessage("")
    }

    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const result = await axios.post("/api/chat/messages", { roomId: orderId })
                setMessages(result.data)

            } catch (err) {
                console.log(err)

            }
        }
        getAllMessages()
    }, [orderId])


    const getSuggestion = async () => {
        setLoading(true)
        try {
            const lastMessage = messages?.filter(m => m.senderId.toString() !== userData?._id?.toString())?.at(-1)
            const result = await axios.post("/api/chat/ai-suggestions", {
                message: lastMessage?.text,
                role: "user"
            })

            if (Array.isArray(result.data?.suggestions) && result.data.suggestions.length) {
                setSuggestions(result.data.suggestions)
            } else {
                console.warn("Unexpected suggestions response:", result.data)
            }
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
            // Keep old suggestions instead of breaking state
        }
    }


    return (
        <div className='w-full min-h-screen bg-linear-to-b from-green-50 to-white'>
            <div className='max-w-2xl mx-auto pb-24'>
                <div className='sticky top-0 bg-white/80 backdrop-blur-xl p-4 border-b shadow flex gap-3 items-center z-999'>
                    <button className='p-2 bg-green-100 rounded-full' onClick={() => router.back()}><ArrowLeft className="text-gray-700 " size={20} /></button>

                    <h2 className="text-xl font-bold">Track Order</h2>
                    <p className='text-sm text-gray-600'>order#{order?._id?.toString().slice(-6)} <span className='text-gray-700 font-semibold'>{order?.status}</span></p>

                </div>



                <div className='px-4 mt-6 space-y-4'>
                    <div className='rounded-3xl overflow-hidden border shadow'>
                        <LiveMap userLocation={userLocation} deliveryBoyLocation={deliveryBoyLocation} />
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border p-4 h-[430px] flex flex-col">

                        <div className='fkex justify-between items-center mb-3'>
                            <span className='font-semibold text-gray-700 text-sm'>Quick Replies</span>
                            <motion.button
                                disabled={loading}
                                whileTap={{ scale: 0.9 }}
                                className='px-3 py-1 text-xs flex items-center gap-1 bg-purple-100 text-purple-700 rounded-full shadow-sm border border-purple-200 '
                                onClick={getSuggestion}
                            ><Sparkle size={14} /> {loading ? <Loader className='w-5 h-5 animate-spin' /> : "AI suggest"}</motion.button>

                        </div>

                        <div className='flex gap-2 flex-wrap mb-3'>
                            {suggestions.map((s, i) => (
                                <motion.div key={s}
                                    whileTap={{ scale: 0.92 }}
                                    className='px-3 py-1 text-xs bg-green-50 border border-green-200 text-green-700 rounded-full cursor-pointer'
                                    onClick={() => setNewMessage(s)}
                                >
                                    {s}

                                </motion.div>
                            ))}


                        </div>

                        <div className="flex-1 overflow-y-auto p-2 space-y-3" ref={chatBoxRef}>
                            <AnimatePresence>
                                {messages?.map((msg) => (
                                    <motion.div
                                        key={msg._id?.toString()}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex ${msg.senderId.toString() == userData?._id?.toString() ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`px-4 py-2 max-w-[75%] rounded-2xl shadow ${msg.senderId.toString() === userData?._id?.toString() ? "bg-green-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`}>

                                            <p>{msg.text}</p>
                                            <p className='text-[10px] opacity-70 mt-1 text-right'>{msg.time}</p>

                                        </div>

                                    </motion.div>
                                ))}
                            </AnimatePresence>

                        </div>

                        <div className='flex gap-2 mt-3 border-t pt-3'>
                            <input type="text" placeholder="Type a Message..." className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                            <button className="bg-gray-600 hover:bg-green-700 p-3 rounded-xl text-white" onClick={sendMsg}>
                                <Send size={18} />
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TrackOrder