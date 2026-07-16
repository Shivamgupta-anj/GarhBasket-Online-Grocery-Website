// // // // 'use client'


// // // // import React, { useEffect, useState } from 'react'
// // // // import { motion } from 'framer-motion'
// // // // import { ChevronDown, ChevronUp, CreditCard, MapPin, Package, Truck, UserCheck } from 'lucide-react'
// // // // import Image from 'next/image'

// // // // import { getScoket } from '@/lib/socket'
// // // // import mongoose from 'mongoose'
// // // // import { Iuser } from '@/models/user.model'
// // // // import { useRouter } from 'next/navigation'

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

// // // // function UserOrderCard({order}:{order:IOrder}) {
// // // //     const [expanded,setExpanded]=useState(false)
// // // //     const [status,setStatus]=useState(order.status)
// // // //     const router = useRouter()

// // // //     const getStatusColor=(status:string)=>{
// // // //         switch(status){
// // // //             case "pending":
// // // //                 return "bg-yellow-100 text-yellow-700 border-yellow-300"
// // // //             case "out of delivery":
// // // //                 return "bg-blue-100 text-blue-700 border-blue-300"
// // // //             case "delivered":
// // // //                 return "bg-green-100 text-green-700 border-green-300"
// // // //             default:
// // // //                 return "bg-gray-100 text-gray-600 border-gray-300"
// // // //         }
// // // //     }

// // // // //    useEffect(() => {
// // // // //     const socket = getScoket()
// // // // //     socket?.on("order-status-update", (data) => {
// // // // //         if (data.orderId == order._id) {
// // // // //             setStatus(data.status)
// // // // //         }
// // // // //     })
// // // // //     return () => { socket?.off("order-status-update") }
// // // // // }, [])

// // // // // useEffect(() => {
// // // // //     const socket = getScoket()
// // // // //      console.log("Socket connected:", socket?.connected)
// // // // //     socket?.on("order-status-update", (data) => {
// // // // //         if (data.orderId.toString() == order?._id!.toString()) {
// // // // //             setStatus(data.status)
// // // // //         }
// // // // //     })
// // // // //     return () => { socket?.off("order-status-update") }
// // // // // }, [])

// // // // useEffect(() => {
// // // //     const socket = getScoket()
    
// // // //     const handleStatusUpdate = (data: any) => {
// // // //         console.log("Received event:", data)


// // // //         // if (data.orderId.toString() == order?._id!.toString()) {
// // // //         //     setStatus(data.status)
// // // //         // }

// // // //         console.log("Comparing:", data.orderId.toString(), "vs", order?._id?.toString())
// // // // if (data.orderId.toString() === order?._id?.toString()) {
// // // //     setStatus(data.status)
// // // // }
// // // //     }

// // // //     if (socket?.connected) {
// // // //         socket.on("order-status-update", handleStatusUpdate)
// // // //     } else {
// // // //         socket?.on("connect", () => {
// // // //             socket.on("order-status-update", handleStatusUpdate)
// // // //         })
// // // //     }

// // // //     return () => { socket?.off("order-status-update", handleStatusUpdate) }
// // // // }, [])


// // // //   return (
// // // //     <motion.div
// // // //     initial={{opacity:0,y:15}}
// // // //     animate={{opacity:1,y:0}}
// // // //     transition={{duration:0.4}}
// // // //     className='bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
// // // //     >

// // // //         <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-gray-100 px-5 py-4 bg-linear-to-r from-green-50 to-white'>

// // // //             <div>
// // // //                 <h3 className='text-lg font-semibold text-gray-800'>order <span className='text-gray-700 font-bold'>#{order?._id?.toString()?.slice(-6)}</span></h3>

// // // //                 <p className='text-xs text-gray-500 mt-1'>{new Date(order.createdAt!).toLocaleString()}</p>

// // // //             </div>

// // // //             <div className='flex flex-wrap items-center gap-2'>
// // // //                 <span className={`px-3 py-1 text-xs font-semibold rounded-full bprder ${order.isPaid
// // // //                     ?"bg-green-100 text-gray-600 border-green-300":"bg-red-100 text-red-700 border-red-300"
// // // //                 }`}>
// // // //                     {order.isPaid?"Paid":"Unpaid"}
// // // //                 </span>

// // // //                 <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getStatusColor(status)}`}>
// // // //                     {status}
// // // //                 </span>

// // // //             </div>

// // // //         </div>

        

// // // //         <div className='p-5 space-y-4'>
// // // //             {order.paymentMethod=="cod"? <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // // //                 <Truck size={16} className='text-gray-600' />
// // // //                 Cash On Delivery
                
// // // //             </div>: <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // // //                 <CreditCard size={16} className='text-gray-600'/> 
// // // //                 Online Payment</div>}
// // // //                 {order.assignedDeliveryBoy && <> <div className='mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between'>
// // // //             <div className='flex items-center gap-3 text-sm text-gray-700'>
// // // //               <UserCheck className='text-blue-600' size={18}/>
// // // //               <div className='font-semibold text-gray-800'>
// // // //                 <p>Assigned to : <span>{order.assignedDeliveryBoy.name}</span> </p>
// // // //                 <p className='text-xs text-gray-600'>📞 +91 {order.assignedDeliveryBoy.mobile}</p>
// // // //               </div>

// // // //             </div>

// // // //             <a href={`tel:${order.assignedDeliveryBoy.mobile}`} className='bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-blue-700 transition'>Call</a>

// // // //             </div>

// // // //             <button className='w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-700' onClick={()=>router.push(`/user/track-order ${order._id?.toString()}`)}> <Truck size={18}/> Track Your Order</button>

// // // //             </>
// // // //             }

            

// // // //                 <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // // //                     <MapPin size={16} className='text-gray-600' />
// // // //                     <span className='truncate'>
// // // //                         {order.address.fullAddress}

// // // //                     </span>
                    
// // // //                 </div>

// // // //                 <div className='border-t border-gray-2200 pt-3'>
// // // //                     <button
// // // //                     onClick={()=>setExpanded(prev=>!prev)}
// // // //                     className='w-full flex justify-between items-center text-sm font-medium text-gray-700 hover:text-green-700 transition'
// // // //                     >
// // // //                         <span className='flex items-center gap-2'>
// // // //                             <Package size={16} className='text-gray-600'/>
// // // //                             {expanded?"Hide Order Items":`view ${order.items.length} Items`}
// // // //                         </span>
// // // //                         {expanded?<ChevronUp size={16} className='text-green-600'/>:<ChevronDown size={16} className='text-green-600'/>}

// // // //                     </button>

// // // //                     <motion.div
// // // //                     initial={{height:0,opacity:0}}
// // // //                     animate={{
// // // //                         height:expanded?"auto":0,
// // // //                         opacity:expanded ? 1:0,
// // // //                     }}
// // // //                     transition={{duration:0.3}}
// // // //                     className='overflow-hidden'
// // // //                     >
// // // //                         <div className='mt-3 space-y-3'>
// // // //                         {order.items.map((item, index) => (
// // // //                             <div
// // // //                                 key={index}
// // // //                                 className='flex justify-between items-center bg-gray-50 rounded-xl px-3 py-2 hover:bg-gray-100 transition'
// // // //                             >
// // // //                                 <div className='flex items-center gap-3'>
// // // //                                     <Image
// // // //                                         src={item.image}
// // // //                                         alt={item.name}
// // // //                                         width={48}
// // // //                                         height={48}
// // // //                                         className='rounded-lg object-cover border border-gray-200'
// // // //                                     />
// // // //                                     <div>
// // // //                                         <p className='text-sm font-medium text-gray-800'>{item.name}</p>
// // // //                                         <p className='text-xs text-gray-500'>Qty: {item.quantity} x {item.unit}</p>
// // // //                                     </div>
// // // //                                 </div>

// // // //                                 <p className='text-sm font-semibold text-gray-800'>₹ {Number(item.price)*item.quantity}</p>

// // // //                             </div>
// // // //                         ))}
// // // //                     </div>

// // // //                     </motion.div>

// // // //                 </div>

// // // //                 {/* total amount */}

// // // //                 <div className='border-t pt-3 flex justify-between item-center text-sm font-semibold text-gray-800'>
// // // //                     <div>
// // // //                         <Truck size={16} className='text-gray-600'/>
// // // //                         <span>Delivery : <span className='text-gray-600 font-semibold'>{status}</span> </span>
// // // //                     </div>
// // // //                     <div>
// // // //                         Total: <span className='text-gray-700 font-bold'>₹ {order.totalAmount}</span>
// // // //                     </div>

// // // //                 </div>

// // // //         </div>

// // // //     </motion.div>
// // // //   )
// // // // }

// // // // export default UserOrderCard

// // // 'use client'


// // // import React, { useEffect, useState } from 'react'
// // // import { motion } from 'framer-motion'
// // // import { ChevronDown, ChevronUp, CreditCard, MapPin, Package, Truck, UserCheck } from 'lucide-react'
// // // import Image from 'next/image'

// // // // import { getScoket } from '@/lib/socket'
// // // // import { getSocket } from '@/lib/socket'
// // // import { getSocket } from '@/lib/socket'
// // // import mongoose from 'mongoose'
// // // import { Iuser } from '@/models/user.model'
// // // import { useRouter } from 'next/navigation'

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
// // //     status: "pending" | "Out for Delivery" | "Delivered"  // ✅ fixed typo "Out of" → "Out for"
// // //     createdAt?: Date
// // //     updatedAt?: Date
// // // }

// // // function UserOrderCard({order}:{order:IOrder}) {
// // //     const [expanded,setExpanded]=useState(false)
// // //     const [status,setStatus]=useState(order.status)
// // //     const router = useRouter()

// // //     const getStatusColor=(status:string)=>{
// // //         switch(status){
// // //             case "pending":
// // //                 return "bg-yellow-100 text-yellow-700 border-yellow-300"
// // //             case "Out for Delivery":
// // //                 return "bg-blue-100 text-blue-700 border-blue-300"
// // //             case "Delivered":
// // //                 return "bg-green-100 text-green-700 border-green-300"
// // //             default:
// // //                 return "bg-gray-100 text-gray-600 border-gray-300"
// // //         }
// // //     }

// // // useEffect(() => {
// // //     const socket = getScoket()
    
// // //     const handleStatusUpdate = (data: any) => {
// // //         console.log("Received event:", data)
// // //         console.log("Comparing:", data.orderId.toString(), "vs", order?._id?.toString())
// // //         if (data.orderId.toString() === order?._id?.toString()) {
// // //             setStatus(data.status)
// // //         }
// // //     }

// // //     if (socket?.connected) {
// // //         socket.on("order-status-update", handleStatusUpdate)
// // //     } else {
// // //         socket?.on("connect", () => {
// // //             socket.on("order-status-update", handleStatusUpdate)
// // //         })
// // //     }

// // //     return () => { socket?.off("order-status-update", handleStatusUpdate) }
// // // }, [])


// // //   return (
// // //     <motion.div
// // //     initial={{opacity:0,y:15}}
// // //     animate={{opacity:1,y:0}}
// // //     transition={{duration:0.4}}
// // //     className='bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
// // //     >

// // //         <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-gray-100 px-5 py-4 bg-linear-to-r from-green-50 to-white'>

// // //             <div>
// // //                 <h3 className='text-lg font-semibold text-gray-800'>order <span className='text-gray-700 font-bold'>#{order?._id?.toString()?.slice(-6)}</span></h3>

// // //                 <p className='text-xs text-gray-500 mt-1'>{new Date(order.createdAt!).toLocaleString()}</p>

// // //             </div>

// // //             <div className='flex flex-wrap items-center gap-2'>
// // //                 <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${order.isPaid
// // //                     ?"bg-green-100 text-gray-600 border-green-300":"bg-red-100 text-red-700 border-red-300"
// // //                 }`}>
// // //                     {order.isPaid?"Paid":"Unpaid"}
// // //                 </span>

// // //                 <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getStatusColor(status)}`}>
// // //                     {status}
// // //                 </span>

// // //             </div>

// // //         </div>

        

// // //         <div className='p-5 space-y-4'>
// // //             {order.paymentMethod=="cod"? <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // //                 <Truck size={16} className='text-gray-600' />
// // //                 Cash On Delivery
                
// // //             </div>: <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // //                 <CreditCard size={16} className='text-gray-600'/> 
// // //                 Online Payment</div>}
// // //                 {order.assignedDeliveryBoy && <> <div className='mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between'>
// // //             <div className='flex items-center gap-3 text-sm text-gray-700'>
// // //               <UserCheck className='text-blue-600' size={18}/>
// // //               <div className='font-semibold text-gray-800'>
// // //                 <p>Assigned to : <span>{order.assignedDeliveryBoy.name}</span> </p>
// // //                 <p className='text-xs text-gray-600'>📞 +91 {order.assignedDeliveryBoy.mobile}</p>
// // //               </div>

// // //             </div>

// // //             <a href={`tel:${order.assignedDeliveryBoy.mobile}`} className='bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-blue-700 transition'>Call</a>

// // //             </div>

// // //             <button className='w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-700' onClick={()=>router.push(`/user/track-order/${order._id?.toString()}`)}> <Truck size={18}/> Track Your Order</button>

// // //             </>
// // //             }

            

// // //                 <div className='flex items-center gap-2 text-gray-700 text-sm'>
// // //                     <MapPin size={16} className='text-gray-600' />
// // //                     <span className='truncate'>
// // //                         {order.address.fullAddress}

// // //                     </span>
                    
// // //                 </div>

// // //                 <div className='border-t border-gray-2200 pt-3'>
// // //                     <button
// // //                     onClick={()=>setExpanded(prev=>!prev)}
// // //                     className='w-full flex justify-between items-center text-sm font-medium text-gray-700 hover:text-green-700 transition'
// // //                     >
// // //                         <span className='flex items-center gap-2'>
// // //                             <Package size={16} className='text-gray-600'/>
// // //                             {expanded?"Hide Order Items":`view ${order.items.length} Items`}
// // //                         </span>
// // //                         {expanded?<ChevronUp size={16} className='text-green-600'/>:<ChevronDown size={16} className='text-green-600'/>}

// // //                     </button>

// // //                     <motion.div
// // //                     initial={{height:0,opacity:0}}
// // //                     animate={{
// // //                         height:expanded?"auto":0,
// // //                         opacity:expanded ? 1:0,
// // //                     }}
// // //                     transition={{duration:0.3}}
// // //                     className='overflow-hidden'
// // //                     >
// // //                         <div className='mt-3 space-y-3'>
// // //                         {order.items.map((item, index) => (
// // //                             <div
// // //                                 key={index}
// // //                                 className='flex justify-between items-center bg-gray-50 rounded-xl px-3 py-2 hover:bg-gray-100 transition'
// // //                             >
// // //                                 <div className='flex items-center gap-3'>
// // //                                     <Image
// // //                                         src={item.image}
// // //                                         alt={item.name}
// // //                                         width={48}
// // //                                         height={48}
// // //                                         className='rounded-lg object-cover border border-gray-200'
// // //                                     />
// // //                                     <div>
// // //                                         <p className='text-sm font-medium text-gray-800'>{item.name}</p>
// // //                                         <p className='text-xs text-gray-500'>Qty: {item.quantity} x {item.unit}</p>
// // //                                     </div>
// // //                                 </div>

// // //                                 <p className='text-sm font-semibold text-gray-800'>₹ {Number(item.price)*item.quantity}</p>

// // //                             </div>
// // //                         ))}
// // //                     </div>

// // //                     </motion.div>

// // //                 </div>

// // //                 {/* total amount */}

// // //                 <div className='border-t pt-3 flex justify-between item-center text-sm font-semibold text-gray-800'>
// // //                     <div>
// // //                         <Truck size={16} className='text-gray-600'/>
// // //                         <span>Delivery : <span className='text-gray-600 font-semibold'>{status}</span> </span>
// // //                     </div>
// // //                     <div>
// // //                         Total: <span className='text-gray-700 font-bold'>₹ {order.totalAmount}</span>
// // //                     </div>

// // //                 </div>

// // //         </div>

// // //     </motion.div>
// // //   )
// // // }

// // // export default UserOrderCard



// // 'use client'

// // import React, { useEffect, useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { ChevronDown, ChevronUp, CreditCard, MapPin, Package, Truck, UserCheck } from 'lucide-react'
// // import Image from 'next/image'
// // import { getSocket } from '@/lib/socket'
// // import mongoose from 'mongoose'
// // import { Iuser } from '@/models/user.model'
// // import { useRouter } from 'next/navigation'

// // export interface IOrder {
// //     _id?: mongoose.Types.ObjectId
// //     user: mongoose.Types.ObjectId
// //     items: [
// //         {
// //             grocery: mongoose.Types.ObjectId,
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
// //     assignment?: mongoose.Types.ObjectId
// //     assignedDeliveryBoy?: Iuser
// //     status: "pending" | "Out for Delivery" | "Delivered"
// //     createdAt?: Date
// //     updatedAt?: Date
// // }

// // function UserOrderCard({ order }: { order: IOrder }) {
// //     const [expanded, setExpanded] = useState(false)
// //     const [status, setStatus] = useState(order.status)
// //     const router = useRouter()

// //     const getStatusColor = (status: string) => {
// //         switch (status) {
// //             case "pending":
// //                 return "bg-yellow-100 text-yellow-700 border-yellow-300"
// //             case "Out for Delivery":
// //                 return "bg-blue-100 text-blue-700 border-blue-300"
// //             case "Delivered":
// //                 return "bg-green-100 text-green-700 border-green-300"
// //             default:
// //                 return "bg-gray-100 text-gray-600 border-gray-300"
// //         }
// //     }

// //     useEffect(() => {
// //         const socket = getSocket()

// //         const handleStatusUpdate = (data: any) => {
// //             console.log("Received event:", data)
// //             console.log("Comparing:", data.orderId.toString(), "vs", order?._id?.toString())
// //             if (data.orderId.toString() === order?._id?.toString()) {
// //                 setStatus(data.status)
// //             }
// //         }

// //         if (socket?.connected) {
// //             socket.on("order-status-update", handleStatusUpdate)
// //         } else {
// //             socket?.on("connect", () => {
// //                 socket.on("order-status-update", handleStatusUpdate)
// //             })
// //         }

// //         return () => { socket?.off("order-status-update", handleStatusUpdate) }
// //     }, [])

// //     return (
// //         <motion.div
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.4 }}
// //             className='bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
// //         >
// //             <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-gray-100 px-5 py-4 bg-linear-to-r from-green-50 to-white'>
// //                 <div>
// //                     <h3 className='text-lg font-semibold text-gray-800'>order <span className='text-gray-700 font-bold'>#{order?._id?.toString()?.slice(-6)}</span></h3>
// //                     <p className='text-xs text-gray-500 mt-1'>{new Date(order.createdAt!).toLocaleString()}</p>
// //                 </div>

// //                 <div className='flex flex-wrap items-center gap-2'>

// //                     {status!=="Delivered" &&  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${order.isPaid
// //                         ? "bg-green-100 text-gray-600 border-green-300" : "bg-red-100 text-red-700 border-red-300"
// //                         }`}>
// //                         {order.isPaid ? "Paid" : "Unpaid"}
// //                     </span>}
                   

// //                     <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getStatusColor(status)}`}>
// //                         {status}
// //                     </span>
// //                 </div>
// //             </div>

// //             {status !="Delivered" && <div className='p-5 space-y-4'>
// //                 {order.paymentMethod == "cod" ? (
// //                     <div className='flex items-center gap-2 text-gray-700 text-sm'>
// //                         <Truck size={16} className='text-gray-600' />
// //                         Cash On Delivery
// //                     </div>
// //                 ) : (
// //                     <div className='flex items-center gap-2 text-gray-700 text-sm'>
// //                         <CreditCard size={16} className='text-gray-600' />
// //                         Online Payment
// //                     </div>
// //                 )}

// //                 {order.assignedDeliveryBoy && (
// //                     <>
// //                         <div className='mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between'>
// //                             <div className='flex items-center gap-3 text-sm text-gray-700'>
// //                                 <UserCheck className='text-blue-600' size={18} />
// //                                 <div className='font-semibold text-gray-800'>
// //                                     <p>Assigned to : <span>{order.assignedDeliveryBoy.name}</span></p>
// //                                     <p className='text-xs text-gray-600'>📞 +91 {order.assignedDeliveryBoy.mobile}</p>
// //                                 </div>
// //                             </div>

// //                             <a href={`tel:${order.assignedDeliveryBoy.mobile}`} className='bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-blue-700 transition'>Call</a>
// //                         </div>

// //                         <button
// //                             className='w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-700'
// //                             onClick={() => router.push(`/user/track-order/${order._id?.toString()}`)}
// //                         >
// //                             <Truck size={18} /> Track Your Order
// //                         </button>
// //                     </>
// //                 )}

// //                 <div className='flex items-center gap-2 text-gray-700 text-sm'>
// //                     <MapPin size={16} className='text-gray-600' />
// //                     <span className='truncate'>
// //                         {order.address.fullAddress}
// //                     </span>
// //                 </div>

// //                 <div className='border-t border-gray-200 pt-3'>
// //                     <button
// //                         onClick={() => setExpanded(prev => !prev)}
// //                         className='w-full flex justify-between items-center text-sm font-medium text-gray-700 hover:text-green-700 transition'
// //                     >
// //                         <span className='flex items-center gap-2'>
// //                             <Package size={16} className='text-gray-600' />
// //                             {expanded ? "Hide Order Items" : `view ${order.items.length} Items`}
// //                         </span>
// //                         {expanded ? <ChevronUp size={16} className='text-green-600' /> : <ChevronDown size={16} className='text-green-600' />}
// //                     </button>

// //                     <motion.div
// //                         initial={{ height: 0, opacity: 0 }}
// //                         animate={{
// //                             height: expanded ? "auto" : 0,
// //                             opacity: expanded ? 1 : 0,
// //                         }}
// //                         transition={{ duration: 0.3 }}
// //                         className='overflow-hidden'
// //                     >
// //                         <div className='mt-3 space-y-3'>
// //                             {order.items.map((item, index) => (
// //                                 <div
// //                                     key={index}
// //                                     className='flex justify-between items-center bg-gray-50 rounded-xl px-3 py-2 hover:bg-gray-100 transition'
// //                                 >
// //                                     <div className='flex items-center gap-3'>
// //                                         <Image
// //                                             src={item.image}
// //                                             alt={item.name}
// //                                             width={48}
// //                                             height={48}
// //                                             className='rounded-lg object-cover border border-gray-200'
// //                                         />
// //                                         <div>
// //                                             <p className='text-sm font-medium text-gray-800'>{item.name}</p>
// //                                             <p className='text-xs text-gray-500'>Qty: {item.quantity} x {item.unit}</p>
// //                                         </div>
// //                                     </div>

// //                                     <p className='text-sm font-semibold text-gray-800'>₹ {Number(item.price) * item.quantity}</p>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </motion.div>
// //                 </div>

// //                 <div className='border-t pt-3 flex justify-between item-center text-sm font-semibold text-gray-800'>
// //                     <div>
// //                         <Truck size={16} className='text-gray-600' />
// //                         <span>Delivery : <span className='text-gray-600 font-semibold'>{status}</span></span>
// //                     </div>
// //                     <div>
// //                         Total: <span className='text-gray-700 font-bold'>₹ {order.totalAmount}</span>
// //                     </div>
// //                 </div>
// //             </div>}

            
// //         </motion.div>
// //     )
// // }

// // export default UserOrderCard


// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronUp, CreditCard, MapPin, Package, Phone, Truck, UserCheck } from 'lucide-react'
// import Image from 'next/image'
// import { getSocket } from '@/lib/socket'
// import mongoose from 'mongoose'
// import { Iuser } from '@/models/user.model'
// import { useRouter } from 'next/navigation'

// export interface IOrder {
//     _id?: mongoose.Types.ObjectId
//     user: mongoose.Types.ObjectId
//     items: [
//         {
//             grocery: mongoose.Types.ObjectId,
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
//     assignment?: mongoose.Types.ObjectId
//     assignedDeliveryBoy?: Iuser
//     status: "pending" | "Out for Delivery" | "Delivered"
//     createdAt?: Date
//     updatedAt?: Date
// }

// // Same status → color language as the admin card, so the two views feel
// // like one product instead of two separately-styled screens.
// const STATUS_STYLES: Record<string, { bar: string; badge: string; icon: string }> = {
//     "pending": {
//         bar: "bg-amber-400",
//         badge: "bg-amber-50 text-amber-700 border-amber-200",
//         icon: "text-amber-600",
//     },
//     "Out for Delivery": {
//         bar: "bg-blue-500",
//         badge: "bg-blue-50 text-blue-700 border-blue-200",
//         icon: "text-blue-600",
//     },
//     "Delivered": {
//         bar: "bg-emerald-500",
//         badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
//         icon: "text-emerald-600",
//     },
// }

// function getInitials(name?: string) {
//     if (!name) return "?"
//     return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join("")
// }

// function UserOrderCard({ order }: { order: IOrder }) {
//     const [expanded, setExpanded] = useState(false)
//     const [status, setStatus] = useState(order.status)
//     const router = useRouter()

//     const styles = STATUS_STYLES[status] ?? STATUS_STYLES["pending"]

//     useEffect(() => {
//         const socket = getSocket()

//         const handleStatusUpdate = (data: any) => {
//             if (data.orderId.toString() === order?._id?.toString()) {
//                 setStatus(data.status)
//             }
//         }

//         if (socket?.connected) {
//             socket.on("order-status-update", handleStatusUpdate)
//         } else {
//             socket?.on("connect", () => {
//                 socket.on("order-status-update", handleStatusUpdate)
//             })
//         }

//         return () => { socket?.off("order-status-update", handleStatusUpdate) }
//     }, [])

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="relative bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl overflow-hidden transition-shadow"
//         >
//             {/* Status accent bar — glance-readable without reading any text */}
//             <div className={`absolute left-0 top-0 h-full w-1.5 ${styles.bar}`} />

//             <div className="p-6 pl-7">
//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
//                     <div>
//                         <p className="text-lg font-bold text-gray-800 tracking-tight tabular-nums flex items-center gap-2">
//                             <Package size={18} className="text-gray-400" />
//                             Order #{order?._id?.toString()?.slice(-6)}
//                         </p>
//                         <p className="text-gray-400 text-xs font-medium mt-1">
//                             {new Date(order.createdAt!).toLocaleString()}
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-2">
//                         {status !== "Delivered" && (
//                             <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${order.isPaid
//                                 ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                                 : "bg-red-50 text-red-600 border-red-200"
//                                 }`}>
//                                 {order.isPaid ? "Paid" : "Unpaid"}
//                             </span>
//                         )}

//                         <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${styles.badge}`}>
//                             {status}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Payment + address — always visible, regardless of status */}
//                 <div className="space-y-2 text-sm pt-4">
//                     <p className="flex items-center gap-2.5 text-gray-700">
//                         <span className="bg-gray-50 text-gray-500 rounded-full p-1.5">
//                             {order.paymentMethod === "cod" ? <Truck size={14} /> : <CreditCard size={14} />}
//                         </span>
//                         <span className="font-medium">
//                             {order.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}
//                         </span>
//                     </p>
//                     <p className="flex items-center gap-2.5 text-gray-700">
//                         <span className="bg-gray-50 text-gray-500 rounded-full p-1.5"><MapPin size={14} /></span>
//                         <span className="font-medium">{order.address.fullAddress}</span>
//                     </p>
//                 </div>

//                 {/* Assigned delivery partner + track button — only while it's still moving */}
//                 {order.assignedDeliveryBoy && status === "Out for Delivery" && (
//                     <div className="mt-4 space-y-3">
//                         <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                                 <div className="bg-blue-100 text-blue-700 font-semibold text-sm rounded-full w-9 h-9 flex items-center justify-center shrink-0">
//                                     {getInitials(order.assignedDeliveryBoy.name)}
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
//                                         <UserCheck size={13} className="text-blue-600" />
//                                         {order.assignedDeliveryBoy.name}
//                                     </p>
//                                     <p className="text-xs text-gray-500">+91 {order.assignedDeliveryBoy.mobile}</p>
//                                 </div>
//                             </div>

//                             <a
//                                 href={`tel:${order.assignedDeliveryBoy.mobile}`}
//                                 className="bg-blue-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg hover:bg-blue-700 transition"
//                             >
//                                 Call
//                             </a>
//                         </div>

//                         <button
//                             className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:bg-emerald-700 transition"
//                             onClick={() => router.push(`/user/track-order/${order._id?.toString()}`)}
//                         >
//                             <Truck size={16} /> Track Your Order
//                         </button>
//                     </div>
//                 )}

//                 {/* Items — collapsible, always available */}
//                 <div className="border-t border-gray-100 mt-5 pt-4">
//                     <button
//                         onClick={() => setExpanded(prev => !prev)}
//                         className="w-full flex justify-between items-center text-sm font-medium text-gray-600 hover:text-emerald-700 transition"
//                     >
//                         <span className="flex items-center gap-2">
//                             <Package size={15} />
//                             {expanded ? "Hide order items" : `View ${order.items.length} item${order.items.length !== 1 ? "s" : ""}`}
//                         </span>
//                         {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
//                     </button>

//                     <AnimatePresence initial={false}>
//                         {expanded && (
//                             <motion.div
//                                 initial={{ height: 0, opacity: 0 }}
//                                 animate={{ height: "auto", opacity: 1 }}
//                                 exit={{ height: 0, opacity: 0 }}
//                                 transition={{ duration: 0.25 }}
//                                 className="overflow-hidden"
//                             >
//                                 <div className="mt-3 space-y-2">
//                                     {order.items.map((item, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex justify-between items-center bg-gray-50/70 rounded-xl px-3 py-2.5 hover:bg-gray-50 transition"
//                                         >
//                                             <div className="flex items-center gap-3">
//                                                 <Image
//                                                     src={item.image}
//                                                     alt={item.name}
//                                                     width={44}
//                                                     height={44}
//                                                     className="rounded-lg object-cover border border-gray-200"
//                                                 />
//                                                 <div>
//                                                     <p className="text-sm font-medium text-gray-800">{item.name}</p>
//                                                     <p className="text-xs text-gray-400">Qty: {item.quantity} · {item.unit}</p>
//                                                 </div>
//                                             </div>
//                                             <p className="text-sm font-semibold text-gray-800 tabular-nums">
//                                                 ₹{Number(item.price) * item.quantity}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>

//                 {/* Footer — always visible */}
//                 <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <Truck size={15} className={styles.icon} />
//                         <span>Delivery: <span className="font-semibold text-gray-700">{status}</span></span>
//                     </div>
//                     <div className="text-sm text-gray-500">
//                         Total <span className="text-gray-900 font-bold tabular-nums">₹{order.totalAmount}</span>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }

// export default UserOrderCard


'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Clock,
    CreditCard,
    MapPin,
    Package,
    Phone,
    Truck,
} from 'lucide-react'
import Image from 'next/image'
import { getSocket } from '@/lib/socket'
import mongoose from 'mongoose'
import { Iuser } from '@/models/user.model'
import { useRouter } from 'next/navigation'

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

// Quick-commerce palette: ink-black text, grocery green for progress/CTAs,
// brand yellow as the single accent, amber only for "needs attention".
const STATUS_STYLES: Record<
    string,
    { band: string; badge: string; icon: string; iconBg: string; Icon: typeof Clock; label: string }
> = {
    "pending": {
        band: "bg-[#FF9F00]",
        badge: "bg-[#FFF4E0] text-[#B75E00] border-[#FFE0A3]",
        icon: "text-[#B75E00]",
        iconBg: "bg-[#FFF4E0]",
        Icon: Clock,
        label: "Order placed",
    },
    "Out for Delivery": {
        band: "bg-[#0C831F]",
        badge: "bg-[#EAF7EC] text-[#0C831F] border-[#BEEAC5]",
        icon: "text-[#0C831F]",
        iconBg: "bg-[#EAF7EC]",
        Icon: Truck,
        label: "On the way",
    },
    "Delivered": {
        band: "bg-[#1C1C1C]",
        badge: "bg-gray-100 text-gray-700 border-gray-200",
        icon: "text-gray-700",
        iconBg: "bg-gray-100",
        Icon: CheckCircle2,
        label: "Delivered",
    },
}

function getInitials(name?: string) {
    if (!name) return "?"
    return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join("")
}

function UserOrderCard({ order }: { order: IOrder }) {
    const [expanded, setExpanded] = useState(false)
    const [status, setStatus] = useState(order.status)
    const router = useRouter()

    const styles = STATUS_STYLES[status] ?? STATUS_STYLES["pending"]
    const StatusIcon = styles.Icon
    const previewItems = order.items.slice(0, 4)
    const overflowCount = order.items.length - previewItems.length

    useEffect(() => {
        const socket = getSocket()

        const handleStatusUpdate = (data: any) => {
            if (data.orderId.toString() === order?._id?.toString()) {
                setStatus(data.status)
            }
        }

        if (socket?.connected) {
            socket.on("order-status-update", handleStatusUpdate)
        } else {
            socket?.on("connect", () => {
                socket.on("order-status-update", handleStatusUpdate)
            })
        }

        return () => { socket?.off("order-status-update", handleStatusUpdate) }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
            {/* Status band — the one loud element on the card */}
            <div className={`${styles.band} px-5 py-2.5 flex items-center justify-between`}>
                <span className="flex items-center gap-1.5 text-white text-xs font-bold tracking-wide">
                    <StatusIcon size={14} strokeWidth={2.5} />
                    {styles.label.toUpperCase()}
                </span>
                {status !== "Delivered" && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.isPaid ? "bg-white/20 text-white" : "bg-white text-red-600"
                        }`}>
                        {order.isPaid ? "PAID" : "PAY ON DELIVERY"}
                    </span>
                )}
            </div>

            <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-base font-extrabold text-[#1C1C1C] tracking-tight tabular-nums">
                            Order #{order?._id?.toString()?.slice(-6)}
                        </p>
                        <p className="text-gray-400 text-xs font-medium mt-0.5">
                            {new Date(order.createdAt!).toLocaleString()}
                        </p>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Total</p>
                        <p className="text-xl font-black text-[#1C1C1C] tabular-nums leading-tight">
                            ₹{order.totalAmount}
                        </p>
                    </div>
                </div>

                {/* Item thumbnail stack — glanceable "what's in the bag" */}
                <button
                    onClick={() => setExpanded(prev => !prev)}
                    className="w-full mt-4 flex items-center justify-between bg-[#FAFAF7] hover:bg-[#F5F5EE] border border-gray-100 rounded-2xl px-3 py-2.5 transition"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {previewItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative w-10 h-10 rounded-full border-2 border-white bg-white shadow-sm overflow-hidden"
                                    style={{ zIndex: previewItems.length - index }}
                                >
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                            ))}
                            {overflowCount > 0 && (
                                <div className="relative w-10 h-10 rounded-full border-2 border-white bg-[#1C1C1C] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                                    +{overflowCount}
                                </div>
                            )}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                            {order.items.length} item{order.items.length !== 1 ? "s" : ""}
                        </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-[#0C831F]">
                        {expanded ? "Hide" : "View"}
                        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </span>
                </button>

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-2 space-y-1.5">
                                {order.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center rounded-xl px-3 py-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-gray-100 shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                                                <p className="text-xs text-gray-400">Qty {item.quantity} · {item.unit}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-gray-800 tabular-nums">
                                            ₹{Number(item.price) * item.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Payment + address */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5 text-sm">
                    <p className="flex items-center gap-2.5 text-gray-600">
                        <span className="text-gray-400">
                            {order.paymentMethod === "cod" ? <Truck size={15} /> : <CreditCard size={15} />}
                        </span>
                        <span className="font-medium">
                            {order.paymentMethod === "cod" ? "Cash on delivery" : "Paid online"}
                        </span>
                    </p>
                    <p className="flex items-start gap-2.5 text-gray-600">
                        <span className="text-gray-400 mt-0.5"><MapPin size={15} /></span>
                        <span className="font-medium leading-snug">{order.address.fullAddress}</span>
                    </p>
                </div>

                {/* Rider card + track CTA — only while it's moving */}
                {order.assignedDeliveryBoy && status === "Out for Delivery" && (
                    <div className="mt-4 bg-[#FAFAF7] border border-gray-100 rounded-2xl p-3.5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#FFC900] text-[#1C1C1C] font-black text-sm rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                                    {getInitials(order.assignedDeliveryBoy.name)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">
                                        {order.assignedDeliveryBoy.name}
                                    </p>
                                    <p className="text-xs text-gray-500">Your delivery partner</p>
                                </div>
                            </div>
                            <a
                                href={`tel:${order.assignedDeliveryBoy.mobile}`}
                                aria-label="Call delivery partner"
                                className="bg-white border border-gray-200 text-[#1C1C1C] rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition shrink-0"
                            >
                                <Phone size={16} />
                            </a>
                        </div>

                        <button
                            className="w-full mt-3 flex items-center justify-center gap-2 bg-[#0C831F] text-white text-sm font-bold px-4 py-3 rounded-xl hover:bg-[#0a6f1a] active:scale-[0.99] transition"
                            onClick={() => router.push(`/user/track-order/${order._id?.toString()}`)}
                        >
                            <Truck size={16} /> Track order live
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default UserOrderCard