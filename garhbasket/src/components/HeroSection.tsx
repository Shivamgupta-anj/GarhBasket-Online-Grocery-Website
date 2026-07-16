// // 'use client'

// // import { Leaf, ShoppingBasket, Smartphone, Subtitles, Truck } from 'lucide-react'
// // import { AnimatePresence , motion } from 'motion/react'
// // import React, { useEffect, useState } from 'react'
// // import Image from 'next/image'

// // function HeroSection() {


// //     const slides =[
// //         {
// //             id:1,
// //             icon: <Leaf className='w-20 h-20 sm:w-28 sm:h-28 text-green-400 drop-shadow-lg'/>,
// //             title:"Fresh Organic Groceries ",
// //             subtitle:"Farm-Fresh fruites,vegettble and daily essentials delivered to you.",
// //             btnText:"Shop Now",
// //             bg:"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
// //         },
// //         {
// //             id:2,
// //             icon:<Truck className='w-20 h-20 sm:w-28 sm:w-28 text-yellow-400 drop-shadow-lg'/>,
// //             title:"Fast & Reliable Delivery 🚚",
// //             subtitle:"We ensure your groceries reach your doorstrep in no time",
// //             btnText:"Order Now",
// //             bg:"https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
// //         },
// //         {
// //             id:3,
// //             icon:<Smartphone className="w-20 h-20  sm:w-28 sm:w-28 text-blue-400 drop-shadow-lg"/>,
// //             title:"Shop Anytime, Anywhere 📱",
// //             subtitle:"Easy and seamless online grocery shopping experience",
// //             btnText:"Get Started",
// //             bg:"https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// //         }
// //     ]



// //     const [current,setCurrent]=useState(0)
// //     useEffect(()=>{
// //         const timer= setInterval(()=>{
// //             setCurrent((prev)=>(prev+1)%(slides.length))
// //         },4000)
// //         return ()=>clearInterval(timer)
// //     },[])
// //   return (
// //     <div className='relative w-[98%] mx-auto mt-32 h-[80vh] rounded-3xl overflow-hidden shadow-2xl'>

// //         <AnimatePresence mode="wait">
// //             <motion.div
// //             key={current}
// //             initial={{opacity:0}}
// //             animate={{opacity:1}}
// //             transition={{duration:0.8}}
// //             exit={{opacity:0}}
// //             className='absolute inset-0'
// //             >

// //                 <Image src={slides[current]?.bg}
// //                 fill
// //                 alt="Slide"
// //                 priority
// //                 className='object-cover'
// //                 />

// //                 <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]'></div>

// //             </motion.div>


// //         </AnimatePresence>

// //         <div className='absolute inset-0 flex items-center justify-center text-center text-white px-6'>
// //             <motion.div
// //             initial={{y:30,opacity:0}}
// //             animate={{y:0,opacity:1}}
// //             transition={{duration:0.6}}
// //             className='flex flex-col items-center justify-center gap-6 ma-w-3xl'
// //             >

// //                 <div className='bg-white/10 backdrop-blur-md p-6 rounded-full shadow-lg'>
// //                     {slides[current].icon}
// //                     <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg'>
// //                         {slides[current].title}
// //                     </h1>

// //                     <p className='text-lg sm:text-xl text-gray-200 max-w-2xl'>
// //                         {slides[current].subtitle}
// //                     </p>

// //                     <motion.button 
// //                     whileHover={{scale:1.09}}
// //                     whileTap={{scale:0.96}}
// //                     transition={{duration:0.2}}
// //                     className='mt-4 bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2'>
// //                         <ShoppingBasket className='w-5 h-5'/>
// //                         {slides[current].btnText}
// //                     </motion.button>
// //                 </div>


// //             </motion.div>

// //         </div>

// //         <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3'>
// //         {slides.map((_,index)=>(
// //             <button 
// //             key={index}
// //             className={`w-3 h-3 rounded-full transition-all ${
// //                 index===current?"bg-white w-6":"bg-white/50"
// //             }`}
// //             />
// //         ))}

 

// //         </div>
      
// //     </div>
// //   )
// // }

// // export default HeroSection



// 'use client'

// import { useEffect, useRef, useState, useCallback } from 'react'
// import { Leaf, ShoppingBasket, Smartphone, Truck, MapPin, Download, ArrowRight } from 'lucide-react'
// import Image from 'next/image'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'

// const {userData} = useSelector((state:RootState)=>state.user)
// console.log(userData)


// const slides = [
//   {
//     id: 0,
//     badge: '100% Organic',
//     badgeIcon: <Leaf className="w-4 h-4" />,
//     title: ['Fresh', 'Organic', 'Groceries'],
//     subtitle: 'Farm-fresh fruits, vegetables and daily essentials delivered straight to your door.',
//     primaryBtn: { icon: <ShoppingBasket className="w-4 h-4" />, label: 'Shop Now', color: 'text-green-800' },
//     // ghostBtn: 'See all produce',
//     bg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     id: 1,
//     badge: 'Free Delivery above ₹199',
//     badgeIcon: <Truck className="w-4 h-4" />,
//     title: ['Fast &', 'Reliable', 'Delivery'],
//     subtitle: 'We ensure your groceries reach your doorstep in no time — same day, every day.',
//     primaryBtn: { icon: <MapPin className="w-4 h-4" />, label: 'Order Now', color: 'text-amber-900' },
//     // ghostBtn: 'Track order',
//     bg: 'https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     id: 2,
//     badge: 'iOS & Android',
//     badgeIcon: <Smartphone className="w-4 h-4" />,
//     title: ['Shop', 'Anytime,', 'Anywhere'],
//     subtitle: 'A seamless grocery shopping experience — browse, add, and checkout in seconds.',
//     primaryBtn: { icon: <Download className="w-4 h-4" />, label: 'Get Started', color: 'text-sky-900' },
//     // ghostBtn: 'Learn more',
//     bg: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1200&auto=format&fit=crop',
//   },
// ]

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0)
//   const [visible, setVisible] = useState(0)   // content visible index (lags slightly)
//   const [contentVisible, setContentVisible] = useState(true)
//   const paused = useRef(false)
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
//   const progRef = useRef<HTMLDivElement>(null)

//   // Animate content out → swap → animate in
//   const goTo = useCallback((next: number) => {
//     setContentVisible(false)           // trigger fade-out
//     setTimeout(() => {
//       setCurrent(next)                 // swap bg + content
//       setVisible(next)
//       setContentVisible(true)          // trigger fade-in
//     }, 300)
//   }, [])

//   const advance = useCallback(() => {
//     if (!paused.current) {
//       goTo((current + 1) % slides.length)
//     }
//   }, [current, goTo])

//   // Auto-advance timer
//   useEffect(() => {
//     timerRef.current = setInterval(advance, 4000)
//     return () => clearInterval(timerRef.current!)
//   }, [advance])

//   // Progress bar: reset and restart on each slide change
//   useEffect(() => {
//     const bar = progRef.current
//     if (!bar) return
//     bar.style.transition = 'none'
//     bar.style.width = '0%'
//     // Double rAF forces browser to apply the reset before re-animating
//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         bar.style.transition = 'width 4s linear'
//         bar.style.width = '100%'
//       })
//     })
//   }, [current])

//   const slide = slides[visible]

//   return (
//     <section
//       className="relative w-[98%] mx-auto mt-28 h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-black"
//       onMouseEnter={() => { paused.current = true }}
//       onMouseLeave={() => { paused.current = false }}
//       aria-label="Featured promotions"
//     >
//       {/* All backgrounds pre-mounted — CSS opacity crossfade */}
//       {slides.map((s, i) => (
//         <div
//           key={s.id}
//           className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
//           style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
//         >
//           <Image
//             src={s.bg}
//             fill
//             alt=""
//             priority={i === 0}
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
//         </div>
//       ))}

//       {/* Content — simple opacity + translateY via inline style + transition */}
//       <div
//         className="absolute inset-0 z-10 flex items-center px-10 sm:px-16"
//         style={{
//           opacity: contentVisible ? 1 : 0,
//           transform: contentVisible ? 'translateY(0px)' : 'translateY(20px)',
//           transition: 'opacity 0.45s ease, transform 0.45s ease',
//         }}
//       >
//         <div className="flex flex-col gap-4 max-w-xl text-white">
//           {/* Badge */}
//           <div className="flex items-center gap-2 w-fit bg-white/10 border border-white/20 backdrop-blur-md text-sm px-4 py-1.5 rounded-full font-medium">
//             {slide.badgeIcon}
//             {slide.badge}
//           </div>

//           {/* Headline */}
//           <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight font-serif drop-shadow-md">
//             {slide.title.map((line, i) => (
//               <span key={i} className="block">{line}</span>
//             ))}
//           </h1>

//           {/* Subtitle */}
//           <p className="text-base text-white/72 max-w-md leading-relaxed">
//             {slide.subtitle}
//           </p>

//           {/* CTAs */}
//           <div className="flex items-center gap-3 mt-1">
//             <button className={`flex items-center gap-2 bg-white ${slide.primaryBtn.color} font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform`}>
//               {slide.primaryBtn.icon}
//               {slide.primaryBtn.label}
//             </button>
//             {/* <button className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm border border-white/30 hover:border-white/60 px-5 py-3 rounded-full transition-all hover:bg-white/10">
//               {slide.ghostBtn}
//               <ArrowRight className="w-4 h-4" />
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-10 sm:left-16 z-20 flex items-center gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goTo(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             className="h-2 rounded-full transition-all duration-300"
//             style={{
//               width: i === current ? '28px' : '8px',
//               background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
//             }}
//           />
//         ))}
//       </div>

//       {/* Counter */}
//       <div className="absolute top-5 right-6 z-20 text-white/45 text-xs tracking-widest font-medium select-none">
//         {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
//       </div>

//       {/* Progress bar — controlled via useEffect + ref */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/15">
//         <div ref={progRef} className="h-full bg-white/50" style={{ width: '0%' }} />
//       </div>
//     </section>
//   )
// }


'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Leaf, ShoppingBasket, Smartphone, Truck, MapPin, Download } from 'lucide-react'
import Image from 'next/image'
// import { getScoket } from '@/lib/socket'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'



const slides = [
  {
    id: 0,
    badge: '100% Organic',
    badgeIcon: <Leaf className="w-4 h-4" />,
    title: ['Fresh', 'Organic', 'Groceries'],
    subtitle: 'Farm-fresh fruits, vegetables and daily essentials delivered straight to your door.',
    primaryBtn: { icon: <ShoppingBasket className="w-4 h-4" />, label: 'Shop Now', color: 'text-green-800' },
    bg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 1,
    badge: 'Free Delivery above ₹199',
    badgeIcon: <Truck className="w-4 h-4" />,
    title: ['Fast &', 'Reliable', 'Delivery'],
    subtitle: 'We ensure your groceries reach your doorstep in no time — same day, every day.',
    primaryBtn: { icon: <MapPin className="w-4 h-4" />, label: 'Order Now', color: 'text-amber-900' },
    bg: 'https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'iOS & Android',
    badgeIcon: <Smartphone className="w-4 h-4" />,
    title: ['Shop', 'Anytime,', 'Anywhere'],
    subtitle: 'A seamless grocery shopping experience — browse, add, and checkout in seconds.',
    primaryBtn: { icon: <Download className="w-4 h-4" />, label: 'Get Started', color: 'text-sky-900' },
    bg: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function HeroSection() {
  // ✅ Fix: useSelector moved inside the component
  // const { userData } = useSelector((state:RootState) => state.user)
  // console.log(userData)

  

  // useEffect(()=>{
  //   if(userData){
  //     let socket=getScoket()
  //     socket.emit("identity",userData?._id)

  //   }
   
  // },[userData])

  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(0)
  const [contentVisible, setContentVisible] = useState(true)
  const paused = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((next: number) => {
    setContentVisible(false)
    setTimeout(() => {
      setCurrent(next)
      setVisible(next)
      setContentVisible(true)
    }, 300)
  }, [])

  const advance = useCallback(() => {
    if (!paused.current) {
      goTo((current + 1) % slides.length)
    }
  }, [current, goTo])

  useEffect(() => {
    timerRef.current = setInterval(advance, 4000)
    return () => clearInterval(timerRef.current!)
  }, [advance])

  useEffect(() => {
    const bar = progRef.current
    if (!bar) return
    bar.style.transition = 'none'
    bar.style.width = '0%'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width 4s linear'
        bar.style.width = '100%'
      })
    })
  }, [current])

  const slide = slides[visible]

  return (
    <section
      className="relative w-[98%] mx-auto mt-28 h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-black"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
      aria-label="Featured promotions"
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={s.bg}
            fill
            alt=""
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        </div>
      ))}

      {/* Content */}
      <div
        className="absolute inset-0 z-10 flex items-center px-10 sm:px-16"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0px)' : 'translateY(20px)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
        }}
      >
        <div className="flex flex-col gap-4 max-w-xl text-white">
          {/* Badge */}
          <div className="flex items-center gap-2 w-fit bg-white/10 border border-white/20 backdrop-blur-md text-sm px-4 py-1.5 rounded-full font-medium">
            {slide.badgeIcon}
            {slide.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight font-serif drop-shadow-md">
            {slide.title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-base text-white/75 max-w-md leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-1">
            <button className={`flex items-center gap-2 bg-white ${slide.primaryBtn.color} font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform`}>
              {slide.primaryBtn.icon}
              {slide.primaryBtn.label}
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-10 sm:left-16 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === current ? '28px' : '8px',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-5 right-6 z-20 text-white/45 text-xs tracking-widest font-medium select-none">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/15">
        <div ref={progRef} className="h-full bg-white/50" style={{ width: '0%' }} />
      </div>
    </section>
  )
}