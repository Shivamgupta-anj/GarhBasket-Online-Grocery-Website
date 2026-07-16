// // 'use client'

// // import React from 'react'
// // import { easeInOut, motion } from 'framer-motion'
// // import { ArrowRight, CheckCircle, Package } from 'lucide-react'
// // import Link from 'next/link'
// // function OrderSuccess() {
// //   return (
// //     <div className="flex flex-col items-cemter min-h-[80vh] px-6 text-center bg-linear-to-b from-green-50 to-white">

// //         <motion.div
// //         className='relative'
// //          initial={{scale:0,rotate:30}}
// //         animate={{scale:1,rotate:0}}
// //         transition={{
// //             type:"spring",
// //             damping:10,
// //             stiffness:100,
// //         }}

// //         >
// //             <CheckCircle className='text-gray-60 w-24 h-24 md:w-28 md:h-28'/>


// //             <motion.div
// //             className='absolute inset-0'
// //             initial={{opacity:0,scale:0.6}}
// //             animate={{opacity:[0.3,0,0.3] , scale:[1,0.6,1]}}
// //             transition={{repeat:Infinity,duration:2,ease:"easeInOut"}}
// //             >
// //                 <div className='w-full h-full rounded-full bg-green-200 blur-2xl'/>

// //             </motion.div>


// //         </motion.div>

// //         <motion.h1
// //         initial={{opacity:0,y:30}}
// //         animate={{opacity:1,y:0}}
// //         transition={{duration:0.4,delay:0.3}}

// //         className='text-3xl md:text-4xl font-bold text-gray-700 mt-6'
// //         >
// //             Order Placed Successfully
// //         </motion.h1>
// //         <motion.p
// //         initial={{opacity:0,y:30}}
// //         animate={{opacity:1,y:0}}
// //         transition={{duration:0.4,delay:0.6}}
// //         className='text-gray-600 mt-3 text-sm md:texxt-base max-w-md'
// //         >
// //             Thank Youu for Shopping with us! Your Order has been placed and is being proccessed. You can Track its progress in your <span className='font-semibold text-gray-700'> My Order </span> section.
// //         </motion.p>

// //         <motion.div
// //         initial={{y:40, opacity:0}}
// //         animate={{y:[0,-10,0],opacity:1}}
// //         transition={{delay:1,duration:2,repeat:Infinity,ease:"easeInOut"}}
// //         className='mt-10'
// //         >
// //             <Package className='w-16 h-16 md:w-20 md:h-20 text-gray-500'/>
// //         </motion.div>

// //         <motion.div
// //         initial={{opacity:0,scale:0.9}}
// //         animate={{opacity:1,scale:1}}
// //         transition={{delay:1.2, duration:0.4}}
// //         className='mt-12'
// //         >
// //             <Link href={"/user/my-orders"}>

// //             <motion.div 
// //             whileHover={{scale:1.04}}
// //             whileTap={{scale:0.93}}
// //             className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base font-semibold px-8 py-3 rounded-full shadow-lg transition-all'>
// //                 Go to My Order <ArrowRight/>

// //             </motion.div>
// //             </Link>

// //         </motion.div>

// //         <motion.div
// //         initial={{opacity:0}}
// //         animate={{opacity:[0.2,0.6,0.2]}}
// //         transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}

// //         className='absolute top-0 left-0 w-full pointer-events-none'
        
// //         >
// //             <div className='absolute top-20 left-[10%] w-2 h-2 bg-green-400 rounded-full animate-bounce'/>

// //             <div className='absolute top-32 left-[30%] w-2 h-2 bg-green-400 rounded-full animate-pluse'/>

// //             <div className='absolute top-24 left-[50%] w-2 h-2 bg-green-400 rounded-full animate-bounce'/>

// //             <div className='absolute top-16 left-[70%] w-2 h-2 bg-green-400 rounded-full animate-pluse'/>
// //         </motion.div>


      
// //     </div>
// //   )
// // }

// // export default OrderSuccess


// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { ArrowRight, CheckCircle, Package, ShoppingBag } from 'lucide-react'
// import Link from 'next/link'

// const floatingParticles = [
//   { top: '12%', left: '8%',  size: 10, delay: 0,   duration: 2.4 },
//   { top: '20%', left: '25%', size: 7,  delay: 0.4, duration: 2.8 },
//   { top: '15%', left: '50%', size: 9,  delay: 0.8, duration: 2.2 },
//   { top: '10%', left: '72%', size: 6,  delay: 1.2, duration: 3.0 },
//   { top: '30%', left: '88%', size: 8,  delay: 0.6, duration: 2.6 },
//   { top: '35%', left: '15%', size: 5,  delay: 1.0, duration: 2.9 },
// ]

// function OrderSuccess() {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-hidden">

//       {/* Background radial glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-100/60 blur-3xl" />
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {floatingParticles.map((p, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-green-400"
//             style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
//             animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
//             transition={{ delay: p.delay, duration: p.duration, repeat: Infinity, ease: 'easeInOut' }}
//           />
//         ))}
//       </div>

//       {/* Check icon with pulse ring */}
//       <motion.div
//         className="relative z-10 flex items-center justify-center"
//         initial={{ scale: 0, rotate: 30 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ type: 'spring', damping: 12, stiffness: 110 }}
//       >
//         {/* Pulse ring */}
//         <motion.div
//           className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-green-200"
//           initial={{ opacity: 0, scale: 0.6 }}
//           animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.5, 1] }}
//           transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
//         />
//         {/* Icon container */}
//         <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-green-100">
//           <CheckCircle className="text-green-500 w-12 h-12 md:w-14 md:h-14" strokeWidth={2} />
//         </div>
//       </motion.div>

//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45, delay: 0.35 }}
//         className="text-3xl md:text-4xl font-bold text-gray-800 mt-8 tracking-tight"
//       >
//         Order Placed Successfully!
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45, delay: 0.6 }}
//         className="text-gray-500 mt-3 text-sm md:text-base max-w-sm leading-relaxed"
//       >
//         Thank you for shopping with us! Your order has been placed and is being processed. Track its progress in your{' '}
//         <span className="font-semibold text-gray-700">My Orders</span> section.
//       </motion.p>

//       {/* Info cards */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.4 }}
//         className="mt-8 flex gap-4 flex-wrap justify-center"
//       >
//         {[
//           { icon: '📦', label: 'Processing', desc: 'Order confirmed' },
//           { icon: '🚚', label: 'Shipping soon', desc: 'Est. 2–4 days' },
//           { icon: '📬', label: 'Confirmation', desc: 'Email sent' },
//         ].map((card, i) => (
//           <div
//             key={i}
//             className="flex flex-col items-center bg-white rounded-2xl px-5 py-4 shadow-sm border border-green-100 min-w-[100px]"
//           >
//             <span className="text-2xl mb-1">{card.icon}</span>
//             <span className="text-xs font-semibold text-gray-700">{card.label}</span>
//             <span className="text-xs text-gray-400 mt-0.5">{card.desc}</span>
//           </div>
//         ))}
//       </motion.div>

//       {/* Floating package icon */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: [0, -10, 0], opacity: 1 }}
//         transition={{ delay: 1, duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
//         className="mt-8 text-green-400"
//       >
//         <Package className="w-14 h-14 md:w-16 md:h-16" strokeWidth={1.5} />
//       </motion.div>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.2, duration: 0.4 }}
//         className="mt-8"
//       >
//         <Link href="/user/my-orders">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-green-200 transition-colors cursor-pointer"
//           >
//             <ShoppingBag className="w-5 h-5" />
//             Go to My Orders
//             <ArrowRight className="w-4 h-4" />
//           </motion.div>
//         </Link>
//       </motion.div>

//       {/* Continue shopping link */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 0.4 }}
//         className="mt-4"
//       >
//         <Link href="/" className="text-sm text-gray-400 hover:text-green-600 transition-colors underline underline-offset-2">
//           Continue Shopping
//         </Link>
//       </motion.div>

//     </div>
//   )
// }

// export default OrderSuccess


'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Package, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const floatingParticles = [
  { top: '12%', left: '8%',  size: 10, delay: 0,   duration: 2.4 },
  { top: '20%', left: '25%', size: 7,  delay: 0.4, duration: 2.8 },
  { top: '15%', left: '50%', size: 9,  delay: 0.8, duration: 2.2 },
  { top: '10%', left: '72%', size: 6,  delay: 1.2, duration: 3.0 },
  { top: '30%', left: '88%', size: 8,  delay: 0.6, duration: 2.6 },
  { top: '35%', left: '15%', size: 5,  delay: 1.0, duration: 2.9 },
]

function OrderSuccess() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-100/60 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ delay: p.delay, duration: p.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Check icon with pulse ring */}
      <motion.div
        className="relative z-10 flex items-center justify-center mt-16"
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 110 }}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-green-200"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />
        {/* Icon container */}
        <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-green-100">
          <CheckCircle className="text-green-500 w-12 h-12 md:w-14 md:h-14" strokeWidth={2} />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mt-8 tracking-tight"
      >
        Order Placed Successfully!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.6 }}
        className="text-gray-500 mt-3 text-sm md:text-base max-w-sm leading-relaxed"
      >
        Thank you for shopping with us! Your order has been placed and is being processed. Track its progress in your{' '}
        <span className="font-semibold text-gray-700">My Orders</span> section.
      </motion.p>

      {/* Info cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        {[
          { icon: '📦', label: 'Processing', desc: 'Order confirmed' },
          { icon: '🚚', label: 'Shipping soon', desc: 'Est. 10–15 mins' },
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl px-5 py-4 shadow-sm border border-green-100 min-w-[100px]"
          >
            <span className="text-2xl mb-1">{card.icon}</span>
            <span className="text-xs font-semibold text-gray-700">{card.label}</span>
            <span className="text-xs text-gray-400 mt-0.5">{card.desc}</span>
          </div>
        ))}
      </motion.div>

      {/* Floating package icon */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ delay: 1, duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-8 text-green-400"
      >
        <Package className="w-14 h-14 md:w-16 md:h-16" strokeWidth={1.5} />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="mt-8"
      >
        <Link href="/user/my-order">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-green-200 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            Go to My Orders
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Continue shopping link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="mt-4"
      >
        <Link href="/" className="text-sm text-gray-400 hover:text-green-600 transition-colors underline underline-offset-2">
          Continue Shopping
        </Link>
      </motion.div>

    </div>
  )
}

export default OrderSuccess