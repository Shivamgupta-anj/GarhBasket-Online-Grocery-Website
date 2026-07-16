"use client";

import { ChevronLeft, ChevronRight, Milk, Wheat } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


function CategorySlider() {
  const categories = [
    { id: 1, name: "Fruits & Vehetables", icon: "🍎", color: "bg-green-500" },

    { id: 2, name: "Dairy & Eggs", icon: Milk, color: "bg-yellow-500" },

    { id: 3, name: "Rice, Atta & Grains", icon: Wheat, color: "bg-orange-500" },

    { id: 4, name: "Snacks & Biscuits", icon: "🍪", color: "bg-pink-500" },

    { id: 5, name: "Spices & Masalas", icon: "🌶️", color: "bg-red-500" },

    { id: 6, name: "Beverages & Drinks", icon: "🥤", color: "bg-blue-500" },

    { id: 7, name: "Personal Care", icon: "🧴", color: "bg-purple-500" },

    { id: 8, name: "Household Essentials", icon: "🧹", color: "bg-gray-500" },

    {
      id: 9,
      name: "Instant & Packaged Food",
      icon: "🍜",
      color: "bg-teal-500",
    },

    { id: 10, name: "Baby & Pet Care", icon: "🍼", color: "bg-cyan-500" },
  ];

  const [showLeft,setShowLeft]=useState<Boolean>()
  const [showRight,setShowRight]=useState<Boolean>()

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll=(direction:"left"|"right")=>{
    if(!scrollRef.current) return;

    const scrollAmount= direction=="left"?-300:300
    scrollRef.current.scrollBy({left:scrollAmount,behavior:"smooth"})
  }

   const checkScroll=()=>{
    if(!scrollRef.current)return
    const {scrollLeft,scrollWidth,clientWidth}=scrollRef.current
    setShowLeft(scrollLeft>0)
    setShowRight((scrollLeft+clientWidth)>=scrollWidth-5)

   }

   useEffect(()=>{
    const autoScroll=setInterval(()=>{
        if(!scrollRef.current)return
        const {scrollLeft,scrollWidth,clientWidth}=scrollRef.current

        if(scrollLeft+clientWidth>=scrollWidth-5){
        scrollRef.current.scrollTo({left:0,behavior:"smooth"})
        }else{
            scrollRef.current.scrollBy({left:300,behavior:"smooth"})

        }
        
    },2000)

    return () => clearInterval(autoScroll);
   },[])





   useEffect(()=>{
    scrollRef.current?.addEventListener("scroll",checkScroll)
    checkScroll()
    return ()=>removeEventListener("scroll",checkScroll)
   },[])



  return (
    <motion.div
      className="w-[90%] md:w-[80%] mx-auto mt-10 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
        {" "}
        🛒 Shop by Category
      </h2>

      {showLeft && <button className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-green-100 rounded-full w-10 h-10 flex items-center justify-center transition-all' onClick={()=>scroll("left")}><ChevronLeft className="w-6 h-6 text-green-700"/></button>}
      
      <div className="flex gap-6 overflow-x-auto px-10 pb-4 scrollbar-hide scroll-smooth" ref={scrollRef}>
        {categories.map((cat) => {
          const IconComponent = cat.icon;

          return (
            <motion.div
              key={cat.id}
              className={`min-w-[150px] md:min-w-[180px] flex flex-col items-center justify-center rounded-2xl ${cat.color} shadow-md hover:shadow-xl transition-all cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center p-5">
                {typeof IconComponent === "string" ? (
                  <span className="text-4xl mb-3">{IconComponent}</span>
                ) : (
                  <IconComponent className="w-10 h-10 text-white mb-3" />
                )}

                <p className="text-center text-sm md:text-base font-semibold text-white">
                  {cat.name}
                </p>
              </div>


            </motion.div>
          );
        })}
      </div>

        {showRight &&  <button className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-green-100 rounded-full w-10 h-10 flex items-center justify-center transition-all'onClick={()=>scroll("right")}><ChevronRight className="w-6 h-6 text-green-700"/></button>}
     
      
    </motion.div>
  );
}

export default CategorySlider;
