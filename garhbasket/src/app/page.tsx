// // // // import { auth } from '@/auth'
// // // // import EditRoleMobile from '@/components/EditRoleMobile'
// // // // import Nav from '@/components/Nav'
// // // // import connectDB from '@/lib/db'
// // // // import User from '@/models/user.model'

// // // // import { redirect } from 'next/navigation'
// // // // import React from 'react'

// // // // async function Home() {
// // // //   await connectDB()

// // // //   const session = await auth()
// // // //   const user = await User.findById(session?.user?.id)

// // // //   if(!user){
// // // //     redirect("/login")
// // // //   }

// // // //   const inComplete = !user.mobile || !user.role 
// // // //   || (!user.mobile && user.role=='user')

// // // //   if(inComplete){
// // // //     return <EditRoleMobile/>
// // // //   }
// // // //   // const user = {
// // // //   //   ...User.toObject(),           // convert Mongoose doc to plain object
// // // //   //   _id: User._id.toString(),     // serialize ObjectId
// // // //   //   image: session?.user?.image,    // ✅ Google image lives in session, not DB
// // // //   // }
  
// // // //   return (
// // // //     <div>
// // // //       <>
// // // //       <Nav user={user}/>
// // // //       </>
      
      
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Home


// // // import { auth } from '@/auth'
// // // import AdminDashboard from '@/components/AdminDashboard'
// // // import DeliveryBoy from '@/components/DeliveryBoy'
// // // import EditRoleMobile from '@/components/EditRoleMobile'
// // // import Nav from '@/components/Nav'
// // // import UserDashboard from '@/components/UserDashboard'
// // // import connectDB from '@/lib/db'
// // // import User from '@/models/user.model'
// // // import { redirect } from 'next/navigation'
// // // import React from 'react'
// // // import Grocery from '@/models/grocery.model'
// // // async function Home() {
// // //   await connectDB()

// // //   const session = await auth()
// // //   const dbUser = await User.findById(session?.user?.id)  // ✅ renamed to dbUser

// // //   if(!dbUser){
// // //     redirect("/login")
// // //   }

// // //   const inComplete = !dbUser.mobile || !dbUser.role      // ✅ use dbUser
// // //   || (!dbUser.mobile && dbUser.role=='user')

// // //   if(inComplete){
// // //     return <EditRoleMobile/>
// // //   }

// // //   const user = {
// // //     ...dbUser.toObject(),                                 // ✅ dbUser not User
// // //     _id: dbUser._id.toString(),                          // ✅ dbUser not User
// // //     image: session?.user?.image ?? dbUser.image,
// // //   }

// // //   const plainUser = JSON.parse(JSON.stringify(user)) 
  
// // //   return (
// // //     <div>
// // //       <Nav user={user}/>

// // //       {user.role=="user"?(
// // //         <UserDashboard/>
// // //       ):user.role=="admin"?(
// // //         <AdminDashboard/>
// // //       ):<DeliveryBoy/>}
// // //     </div>
// // //   )
// // // }

// // // export default Home


// // import { auth } from '@/auth'
// // import AdminDashboard from '@/components/AdminDashboard'
// // import DeliveryBoy from '@/components/DeliveryBoy'
// // import EditRoleMobile from '@/components/EditRoleMobile'
// // import GeoUpdater from '@/components/GeoUpdater'
// // import Nav from '@/components/Nav'
// // import UserDashboard from '@/components/UserDashboard'
// // import connectDB from '@/lib/db'
// // import Grocery, { IGrocery } from '@/models/grocery.model'
// // import User from '@/models/user.model'
// // import { redirect } from 'next/navigation'
// // import React from 'react'

// // // async function Home(props:{
// // //   searchParams:Promise<{
// // //     q:string
// // //   }>
// // // }) {

// // //   const searchParams = await props.searchParams
// // //   // console.log(searchParams)
// // //   let groceryList:IGrocery[]=[]

// // //   if(user.role==="user"){
// // //     if(searchParams.q){
// // //       groceryList= await Grocery.find({
// // //         $or:[
// // //           {name:{$regex:searchParams?.q || "" , $options:"i"}},
// // //           {category:{$regex : searchParams?.q || "",$options:"i"}},
// // //         ]
// // //       })
// // //     }else{
// // //       groceryList= await Grocery.find({})
// // //     }
// // //   }


// // //   await connectDB()

// // //   const session = await auth()
// // //   const dbUser = await User.findById(session?.user?.id)

// // //   if (!dbUser) {
// // //     redirect("/login")
// // //   }

// // //   const inComplete = !dbUser.mobile || !dbUser.role
// // //     || (!dbUser.mobile && dbUser.role == 'user')

// // //   if (inComplete) {
// // //     return <EditRoleMobile />
// // //   }

// // //   const user = {
// // //     ...dbUser.toObject(),
// // //     _id: dbUser._id.toString(),
// // //     image: session?.user?.image ?? dbUser.image,
// // //   }

// // //   const plainUser = JSON.parse(JSON.stringify(user))

// // //   // ✅ Fetch groceries on the server and serialize
// // //   const groceries = await Grocery.find({}).lean()
// // //   const plainGroceries = JSON.parse(JSON.stringify(groceries))

// // //   return (
// // //     <div>
// // //       <Nav user={plainUser} />
// // //       <GeoUpdater userId={plainUser._id}/>
// // //       {user.role == "user" ? (
// // //         <UserDashboard groceryList={groceryList}/>
// // //       ) : user.role == "admin" ? (
// // //         <AdminDashboard />
// // //       ) : (
// // //         <DeliveryBoy />
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default Home

// // async function Home(props: {
// //   searchParams: Promise<{ q: string }>
// // }) {
// //   const searchParams = await props.searchParams

// //   await connectDB()

// //   const session = await auth()
// //   const dbUser = await User.findById(session?.user?.id)

// //   if (!dbUser) {
// //     redirect("/login")
// //   }

// //   const inComplete = !dbUser.mobile || !dbUser.role
// //     || (!dbUser.mobile && dbUser.role == 'user')

// //   if (inComplete) {
// //     return <EditRoleMobile />
// //   }

// //   const user = {
// //     ...dbUser.toObject(),
// //     _id: dbUser._id.toString(),
// //     image: session?.user?.image ?? dbUser.image,
// //   }

// //   const plainUser = JSON.parse(JSON.stringify(user))

// //   // ✅ Now user is defined before we use it
// //   let groceryList: IGrocery[] = []

// //   if (user.role === "user") {
// //     if (searchParams.q) {
// //       groceryList = await Grocery.find({
// //         $or: [
// //           { name: { $regex: searchParams?.q || "", $options: "i" } },
// //           { category: { $regex: searchParams?.q || "", $options: "i" } },
// //         ]
// //       })
// //     } else {
// //       groceryList = await Grocery.find({})
// //     }
// //   }

// //   // ✅ Fetch groceries on the server and serialize
// //   const groceries = await Grocery.find({}).lean()
// //   const plainGroceries = JSON.parse(JSON.stringify(groceries))

// //   return (
// //     <div>
// //       <Nav user={plainUser} />
// //       <GeoUpdater userId={plainUser._id} />
// //       {user.role == "user" ? (
// //         <UserDashboard groceryList={groceryList} />
// //       ) : user.role == "admin" ? (
// //         <AdminDashboard />
// //       ) : (
// //         <DeliveryBoy />
// //       )}
// //     </div>
// //   )
// // }

// // export default Home


// import { auth } from '@/auth'
// import AdminDashboard from '@/components/AdminDashboard'
// import DeliveryBoy from '@/components/DeliveryBoy'
// import EditRoleMobile from '@/components/EditRoleMobile'
// import GeoUpdater from '@/components/GeoUpdater'
// import Nav from '@/components/Nav'
// import UserDashboard from '@/components/UserDashboard'
// import connectDB from '@/lib/db'
// import Grocery, { IGrocery } from '@/models/grocery.model'
// import User from '@/models/user.model'
// import { redirect } from 'next/navigation'
// import React from 'react'

// async function Home(props: {
//   searchParams: Promise<{ q: string }>
// }) {
//   const searchParams = await props.searchParams

//   // ✅ Connect + auth + build `user` FIRST, before anything references it
//   await connectDB()

//   const session = await auth()
//   const dbUser = await User.findById(session?.user?.id)

//   if (!dbUser) {
//     redirect("/login")
//   }

//   const inComplete = !dbUser.mobile || !dbUser.role
//     || (!dbUser.mobile && dbUser.role == 'user')

//   if (inComplete) {
//     return <EditRoleMobile />
//   }

//   const user = {
//     ...dbUser.toObject(),
//     _id: dbUser._id.toString(),
//     image: session?.user?.image ?? dbUser.image,
//   }

//   const plainUser = JSON.parse(JSON.stringify(user))

//   // ✅ Now `user` exists — safe to reference it here
//   let groceryList: IGrocery[] = []

//   if (user.role === "user") {
//     if (searchParams.q) {
//       groceryList = await Grocery.find({
//         $or: [
//           { name: { $regex: searchParams?.q || "", $options: "i" } },
//           { category: { $regex: searchParams?.q || "", $options: "i" } },
//         ]
//       })
//     } else {
//       groceryList = await Grocery.find({})
//     }
//   }

//   // ✅ Fetch groceries on the server and serialize
//   const groceries = await Grocery.find({}).lean()
//   const plainGroceries = JSON.parse(JSON.stringify(groceries))

//   return (
//     <div>
//       <Nav user={plainUser} />
//       <GeoUpdater userId={plainUser._id} />
//       {user.role == "user" ? (
//         <UserDashboard groceryList={groceryList} />
//       ) : user.role == "admin" ? (
//         <AdminDashboard />
//       ) : (
//         <DeliveryBoy />
//       )}
//     </div>
//   )
// }

// export default Home


import { auth } from '@/auth'
import AdminDashboard from '@/components/AdminDashboard'
import DeliveryBoy from '@/components/DeliveryBoy'
import EditRoleMobile from '@/components/EditRoleMobile'
import Footer from '@/components/Footer'
import GeoUpdater from '@/components/GeoUpdater'
import Nav from '@/components/Nav'
import UserDashboard from '@/components/UserDashboard'
import connectDB from '@/lib/db'
import Grocery, { IGrocery } from '@/models/grocery.model'
import User from '@/models/user.model'
import { redirect } from 'next/navigation'
import React from 'react'

async function Home(props: {
  searchParams: Promise<{ q: string }>
}) {
  const searchParams = await props.searchParams

  // ✅ Connect + auth + build `user` FIRST, before anything references it
  await connectDB()

  const session = await auth()
  const dbUser = await User.findById(session?.user?.id)

  if (!dbUser) {
    redirect("/login")
  }

  const inComplete = !dbUser.mobile || !dbUser.role
    || (!dbUser.mobile && dbUser.role == 'user')

  if (inComplete) {
    return <EditRoleMobile />
  }

  const user = {
    ...dbUser.toObject(),
    _id: dbUser._id.toString(),
    image: session?.user?.image ?? dbUser.image,
  }

  const plainUser = JSON.parse(JSON.stringify(user))

  // ✅ Now `user` exists — safe to reference it here
  let groceryList: IGrocery[] = []

  if (user.role === "user") {
    if (searchParams.q) {
      groceryList = await Grocery.find({
        $or: [
          { name: { $regex: searchParams?.q || "", $options: "i" } },
          { category: { $regex: searchParams?.q || "", $options: "i" } },
        ]
      }).lean()
    } else {
      groceryList = await Grocery.find({}).lean()
    }
  }

  // ✅ Strip any remaining non-plain values (ObjectId, Date, etc.)
  const plainGroceryList = JSON.parse(JSON.stringify(groceryList))

  return (
    <div>
      <Nav user={plainUser} />
      <GeoUpdater userId={plainUser._id} />
      {user.role == "user" ? (
        <UserDashboard groceryList={plainGroceryList} />
      ) : user.role == "admin" ? (
        <AdminDashboard />
      ) : (
        <DeliveryBoy />
      )}
      <Footer user={plainUser}/>
    </div>
  )
}

export default Home