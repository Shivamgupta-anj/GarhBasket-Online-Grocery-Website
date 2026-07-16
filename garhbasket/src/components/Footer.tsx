// 'use client'

// import React from 'react'
// import { motion } from "framer-motion";
// import Link from 'next/link';
// function Footer() {
//   return (
//     <motion.div
//         initial={{opacity:0,y:40}}
//         whileInView={{opacity:1,y:0}}
//         viewport={{once:true,amount:0.3}}
//         transition={{duration:0.6,ease:"easeOut"}}
//         className='bg-linear-to-r from-gray-600 to gray-700 text-white mt-20'
//     >
//         <div className='w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-green-500/40'>
//         <div>
//             <h2 className='text-2xl font-bold mb-3'>GarhBasket</h2>
//             <p className='text-sm  leading-relaxed'>Your One-Step Online Grocery store delivering freshness to your doorstep.
//                 Shop smart, eat fresh, and save more every day!
//             </p>
//         </div>

//         <div>
//             <h2 className='text-xl font-semibold mb-3'> Quick Links </h2>
//                 <ul className='space-y-2 text-sm'>
//   <li><Link href="/" className='hover:text-green-400 transition'>Home</Link></li>
//   <li><Link href="/cart" className='hover:text-green-400 transition'>Cart</Link></li>
//   <li><Link href="/my-orders" className='hover:text-green-400 transition'>My Orders</Link></li>
// </ul>
           
//         </div>

        

//         </div>
        
      
//     </motion.div>
//   )
// }

// export default Footer


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Boxes, ClipboardCheck, Package, PlusCircle, Truck,  User as UserIcon, Wallet } from 'lucide-react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
interface IFooterUser {
  role: 'user' | 'deliveryBoy' | 'admin'
}

function Footer({ user }: { user: IFooterUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-20'
    >
      <div className='w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-green-500/40'>

        {/* Brand column — same for everyone */}
        <div>
          <h2 className='text-2xl font-bold mb-3'>GarhBasket</h2>
          <p className='text-sm leading-relaxed text-gray-300'>
            Your One-Step Online Grocery store delivering freshness to your doorstep.
            Shop smart, eat fresh, and save more every day!
          </p>
        </div>

        {/* Role-specific links */}
        {user.role === 'user' && (
          <div>
            <h2 className='text-xl font-semibold mb-3'>Quick Links</h2>
            <ul className='space-y-2 text-sm'>
              <li><Link href="/" className='hover:text-green-400 transition'>Home</Link></li>
              <li><Link href="/user/cart" className='hover:text-green-400 transition'>Cart</Link></li>
              <li><Link href="/user/my-order" className='hover:text-green-400 transition'>My Orders</Link></li>
            </ul>
          </div>
        )}

        {user.role === 'admin' && (
          <div>
            <h2 className='text-xl font-semibold mb-3'>Admin Panel</h2>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href="/admin/add-grocery" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <PlusCircle className='w-4 h-4' /> Add Grocery
                </Link>
              </li>
              <li>
                <Link href="/admin/view-grocery" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <Boxes className='w-4 h-4' /> View Grocery
                </Link>
              </li>
              <li>
                <Link href="/admin/manage-orders" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <ClipboardCheck className='w-4 h-4' /> Manage Orders
                </Link>
              </li>
            </ul>
          </div>
        )}

        {user.role === 'deliveryBoy' && (
          <div>
            <h2 className='text-xl font-semibold mb-3'>Delivery Hub</h2>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href="/delivery" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <Truck className='w-4 h-4' /> Active Deliveries
                </Link>
              </li>
              <li>
                <Link href="/delivery/earnings" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <Wallet className='w-4 h-4' /> Earnings
                </Link>
              </li>
              <li>
                <Link href="/delivery/profile" className='flex items-center gap-2 hover:text-green-400 transition'>
                  <UserIcon className='w-4 h-4' /> Profile
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Social / contact column — same for everyone */}
        <div>
          <h2 className='text-xl font-semibold mb-3'>Connect With Us</h2>
          <div className='flex gap-4 mb-4'>
            <Link href="#" className='w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition'>
              <FaFacebookF className='w-4 h-4' />
            </Link>
            <Link href="#" className='w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition'>
              <BsInstagram className='w-4 h-4' />
            </Link>
            <Link href="#" className='w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition'>
              <BsTwitter className='w-4 h-4' />
            </Link>
          </div>
          <p className='text-sm text-gray-400'>support@garhbasket.com</p>
        </div>

      </div>

      <p className='text-center text-xs text-gray-400 py-4'>
        © {new Date().getFullYear()} GarhBasket. All rights reserved.
      </p>
    </motion.div>
  )
}

export default Footer