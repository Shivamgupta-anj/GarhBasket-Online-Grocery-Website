// 'use client'

// import React, { useState } from 'react'
// import { motion} from "framer-motion";
// import { IndianRupee, Package, Truck, Users } from 'lucide-react';
// import { icon } from 'leaflet';
// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// type propType={
//   earning:{
//     today:number,
//     sevenDays:number,
//     total:number
//   },
//   stats:{
//     title:string,
//     value:number
//   }[],
//   chartData:{
//     day:string,
//     orders:number
//   }[]

// }

// function AdminDashboardClient({earning,stats, chartData}:propType) {

//  const [filter, setFilter] = useState<"today" | "sevenDays" | "total">("sevenDays")
//   const currentEarning = filter==="today"?earning.today:filter==="sevenDays"?earning.sevenDays:earning.total

//   const title=filter ==="today"?"Today's Earning"
//   :filter==="sevenDays"?"Last 7 days Earning"
//   :"Total Earning"

//   return (
//     <div className='pt-28 w-[90%] md:w-[80%] mx-auto'>
//       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 text-center sm:text-left'>
//         <motion.h1
//         initial={{opacity:0,y:20}}
//         animate={{opacity:1,y:0}}
//         transition={{duration:0.5}}
//         className='text-3xl md:text-4xl font-bold text-gray-700'
//         >
//          🏪 Admin Dashboard
//         </motion.h1>

//         <select className='border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-gray-500 outline-none transition w-full sm:w-auto'
//         onChange={(e)=>setFilter(e.target.value as any)}
//         value={filter}
//         >
//           <option value="total"> Total</option>
//           <option value="sevenDays"> Last 7 Days</option>
//           <option value="today"> today</option>
          
//         </select>

//       </div>

//       <motion.div
//         initial={{opacity:1,y:15}}
//         animate={{opacity:1, y:0}}
//         transition={{duration:0.3}}
//         className='bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-6 text-center mb-10'
//       >
//         <h2 className='text-lg font-semibold text-gray-700 mb-2'>{title}</h2>
//         <p className='text-4xl font-extrabold text-gray-800'>₹{currentEarning.toLocaleString()}</p>

//       </motion.div>

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
//         {stats.map((s,i)=>{
//           const icons=[
//             <Package key="p" className='text-gray-700 w-6 h-6'/>,
//             <Users key="u" className='text-gray-700 w-6 h-6'/>,
//             <Truck key="t" className='text-gray-700 w-6 h-6'/>,
//             <IndianRupee key="r" className='text-gray-700 w-6 h-6'/>,
//           ]
//           return <motion.div
//           key={i}
//           initial={{opacity:0,y:20}}
//           animate={{opacity:1,y:0}}
//           transition={{delay:i*0.1}}
//           className='bg-white border border-gray-100 shadow-md rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition-all'
//           >

//             <div className='bg-gray-100 p-3 rounded-xl'>
//               {icons[i]}

//             </div>
//             <div>
//               <p className='text-gray-600 text-sm'>{s.title}</p>
//               <p className='text-2xl font-bold text-gray-800'>{s.value}</p>
//             </div>

//           </motion.div>
//         })}

//       </div>

//       <div className='bg-white border-gray-100 rounded-2xl shadow-md p-5 mb-10'>
//         <h2 className='text-lg font-semibold text-gray-700 mb-4'> 📈 Orders Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
//             <XAxis dataKey="day" />
//             <Tooltip/>
//             <Bar dataKey="orders" fill='#16A34A' radius={[6,6,0,0]}/>
//           </BarChart>
//         </ResponsiveContainer>

//       </div>


      
//     </div>
//   )
// }

// export default AdminDashboardClient
'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { IndianRupee, Package, Truck, Users } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type propType = {
  earning: {
    today: number,
    sevenDays: number,
    total: number
  },
  stats: {
    title: string,
    value: number
  }[],
  chartData: {
    day: string,
    orders: number
  }[]
}

const statStyles = [
  { icon: Package, bg: 'bg-blue-50', iconBg: 'bg-blue-500', text: 'text-blue-600' },
  { icon: Users, bg: 'bg-purple-50', iconBg: 'bg-purple-500', text: 'text-purple-600' },
  { icon: Truck, bg: 'bg-amber-50', iconBg: 'bg-amber-500', text: 'text-amber-600' },
  { icon: IndianRupee, bg: 'bg-emerald-50', iconBg: 'bg-emerald-500', text: 'text-emerald-600' },
]

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white shadow-lg rounded-xl px-4 py-2 border border-gray-100'>
        <p className='text-xs text-gray-500 font-medium'>{label}</p>
        <p className='text-sm font-bold text-gray-800'>{payload[0].value} orders</p>
      </div>
    )
  }
  return null
}

function AdminDashboardClient({ earning, stats, chartData }: propType) {

  const [filter, setFilter] = useState<"today" | "sevenDays" | "total">("sevenDays")
  const currentEarning = filter === "today" ? earning.today : filter === "sevenDays" ? earning.sevenDays : earning.total

  const title = filter === "today" ? "Today's Earning"
    : filter === "sevenDays" ? "Last 7 Days Earning"
    : "Total Earning"

  const filters: { key: "today" | "sevenDays" | "total", label: string }[] = [
    { key: "today", label: "Today" },
    { key: "sevenDays", label: "7 Days" },
    { key: "total", label: "Total" },
  ]

  return (
    <div className='pt-28 pb-16 w-[92%] md:w-[85%] max-w-6xl mx-auto'>

      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 text-center sm:text-left'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-gray-800 tracking-tight'
        >
          🏪 Admin Dashboard
        </motion.h1>

        {/* Segmented control instead of plain select */}
        <div className='inline-flex bg-gray-100 rounded-xl p-1 mx-auto sm:mx-0'>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                filter === f.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Earning Card */}
      <motion.div
        key={filter}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-center mb-10 shadow-xl'
      >
        <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full' />
        <div className='absolute -bottom-16 -left-10 w-48 h-48 bg-white/5 rounded-full' />
        <h2 className='text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide relative'>{title}</h2>
        <p className='text-5xl font-extrabold text-white relative flex items-center justify-center gap-1'>
          <IndianRupee className='w-9 h-9' />
          {currentEarning.toLocaleString()}
        </p>
      </motion.div>

      {/* Stat Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
        {stats.map((s, i) => {
          const style = statStyles[i % statStyles.length]
          const Icon = style.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${style.bg} border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`${style.iconBg} p-3 rounded-xl shadow-sm`}>
                <Icon className='text-white w-5 h-5' />
              </div>
              <div>
                <p className='text-gray-500 text-xs font-medium uppercase tracking-wide'>{s.title}</p>
                <p className={`text-2xl font-bold ${style.text}`}>{s.value.toLocaleString()}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className='bg-white border border-gray-100 rounded-2xl shadow-sm p-6'
      >
        <h2 className='text-lg font-semibold text-gray-800 mb-1'>📈 Orders Overview</h2>
        <p className='text-sm text-gray-400 mb-4'>Last 7 days order activity</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={1} />
                <stop offset="100%" stopColor="#16A34A" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke='#f0f0f0' vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} allowDecimals={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
            <Bar dataKey="orders" fill='url(#barGradient)' radius={[8, 8, 0, 0]} maxBarSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

    </div>
  )
}

export default AdminDashboardClient