// // 'use client'

// // import React from 'react'
// // import HeroSection from './HeroSection'
// // import CategorySlider from './CategorySlider'
// // import  connectDb  from '@/lib/db'
// // import Grocery from '@/models/grocery.model'
// // import GroceryItemCard from './GroceryItemCard'

// // async function UserDashboard() {
// //   await connectDb()

// //   const groceries = await Grocery.find({})
// //   const plainGroceries = JSON.parse(JSON.stringify(groceries))

// //   return (
// //     <>
// //       <HeroSection />
// //       <CategorySlider />

// //       <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
// //         <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">Popular Grocery Items</h2>

// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

// //           {plainGroceries.map((item:any,index:number) => (
// //         <GroceryItemCard
// //           key={index}
// //           item={item}
// //           addToCart={addToCart}
// //         />
// //       ))}


// //         </div>

        
// //       </div>

      
// //     </>
// //   )
// // }

// // export default UserDashboard




// 'use client'

// import React from 'react'
// import HeroSection from './HeroSection'
// import CategorySlider from './CategorySlider'
// import GroceryItemCard from './GroceryItemCard'
// import { RootState } from '@/redux/store'
// import { useSelector } from 'react-redux'
// import { IGrocery } from '@/models/grocery.model'
// // ❌ Removed: connectDb, Grocery model imports (server-only)

// interface Props {
//   groceries: any[]
// }

// function UserDashboard({groceryList}:{groceryList:IGrocery[]}) 
// {

//   const addToCart = (item: any) => {
//     // your cart logic here e.g. redux dispatch or context
//     console.log("Added to cart:", item)
//   }

//   return (
//     <>
//       <HeroSection />
//       <CategorySlider />

//       <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
//         <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
//           Popular Grocery Items
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {groceryList.map((item: any, index: number) => (
//             <GroceryItemCard
//               key={index}
//               item={item}
//               // addToCart={addToCart}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default UserDashboard

'use client'

import React from 'react'
import HeroSection from './HeroSection'
import CategorySlider from './CategorySlider'
import GroceryItemCard from './GroceryItemCard'
import { IGrocery } from '@/models/grocery.model'

function UserDashboard({ groceryList }: { groceryList: IGrocery[] }) {
  return (
    <>
      <HeroSection />
      <CategorySlider />

      <div className='w-[90%] md:w-[80%] mx-auto mt-10'>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
          Popular Grocery Items
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {groceryList.map((item: any, index: number) => (
            <GroceryItemCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default UserDashboard