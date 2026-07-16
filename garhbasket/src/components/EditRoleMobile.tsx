// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { User, UserCog, Bike, ArrowRight, Loader2 } from 'lucide-react'
// import axios from 'axios'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'

// function EditRoleMobile() {
//     const router = useRouter()
//     const { update } = useSession()

//     const roles = [
//         { id: "admin",       label: "Admin",        icon: UserCog },
//         { id: "user",        label: "User",         icon: User    },
//         { id: "deliveryBoy", label: "Delivery Boy", icon: Bike    }
//     ]

//     const [selectedRole, setSelectedRole] = useState("")
//     const [mobile, setMobile] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState("")

//     const handleEdit = async () => {

//         console.log("BUTTON CLICKED")           // ← add this
//     console.log("ROLE:", selectedRole)      // ← add this
//     console.log("MOBILE:", mobile)


//         if (!selectedRole || mobile.trim().length !== 10){

        
//           console.log("VALIDATION FAILED") 
//           return
//           }

//         setLoading(true)
//         setError("")

//         try {
//             await axios.post("/api/user/edit-role-mobile", {
//                 role: selectedRole,
//                 mobile: mobile.trim()
//             })

//             try {
//                 await update()
//             } catch (sessionErr) {
//                 console.warn("Session update failed, continuing:", sessionErr)
//             }

//             router.push("/")

//         } catch (err) {
//             console.error("ERROR:", err)
//             setError("Something went wrong. Please try again.")
//         } finally {
//             setLoading(false)
//         }
//     }

//     const isReady = selectedRole && mobile.trim().length === 10

//     return (
//         <div className='flex flex-col items-center min-h-screen p-6 w-full'>

//             <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='text-3xl md:text-4xl font-extrabold text-green-700 text-center mt-8'
//             >
//                 Select Your Role
//             </motion.h1>

//             <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
//                 {roles.map((role) => {
//                     const Icon = role.icon
//                     const isSelected = selectedRole === role.id
//                     return (
//                         <motion.div
//                             whileTap={{ scale: 0.95 }}
//                             whileHover={{ scale: 1.03 }}
//                             onClick={() => setSelectedRole(role.id)}
//                             key={role.id}
//                             className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 cursor-pointer transition-all ${
//                                 isSelected
//                                     ? "border-green-600 bg-green-100 shadow-lg"
//                                     : "border-gray-300 bg-white hover:border-green-400"
//                             }`}
//                         >
//                             <Icon size={36} className={isSelected ? "text-green-600" : "text-gray-500"} />
//                             <span className={`mt-3 font-medium ${isSelected ? "text-green-700" : "text-gray-600"}`}>
//                                 {role.label}
//                             </span>
//                         </motion.div>
//                     )
//                 })}
//             </div>

//             <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className='flex flex-col items-center mt-10'
//             >
//                 <label htmlFor="mobile" className="text-gray-700 font-medium mb-2">
//                     Enter Your Mobile Number
//                 </label>
//                 <input
//                     type="tel"
//                     id="mobile"
//                     maxLength={10}
//                     value={mobile}
//                     className='w-64 md:w-80 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800'
//                     placeholder='eg. 9876543210'
//                     onChange={(e) => {
//                         const val = e.target.value.replace(/\D/g, '')
//                         setMobile(val)
//                     }}
//                 />
//                 {mobile.length > 0 && mobile.length < 10 && (
//                     <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit number</p>
//                 )}
//             </motion.div>

//             {error && (
//                 <p className="text-red-600 text-sm mt-4">{error}</p>
//             )}

//             {/* <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 disabled={!isReady || loading}
//                 className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 w-[200px] mt-10 ${
//                     isReady && !loading
//                         ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
//                         : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//                 onClick={handleEdit}
//             >
//                 {loading ? (
//                     <>
//                         <Loader2 className="animate-spin" size={18} />
//                         Please wait
//                     </>
//                 ) : (
//                     <>
//                         Go To Home <ArrowRight size={18} />
//                     </>
//                 )}
//             </motion.button> */}

//             <button
//     disabled={!isReady || loading}
//     className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 w-[200px] mt-10 ${
//         isReady && !loading
//             ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
//             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//     }`}
//     onClick={handleEdit}
// >
//     {loading ? (
//         <>
//             <Loader2 className="animate-spin" size={18} />
//             Please wait
//         </>
//     ) : (
//         <>
//             Go To Home <ArrowRight size={18} />
//         </>
//     )}
// </button>

//         </div>
//     )
// }

// export default EditRoleMobile



'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { User, UserCog, Bike, ArrowRight, Loader2 } from 'lucide-react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function EditRoleMobile() {
    const [roles , setRoles]=useState( [
        { id: "admin",       label: "Admin",        icon: UserCog },
        { id: "user",        label: "User",         icon: User    },
        { id: "deliveryBoy", label: "Delivery Boy", icon: Bike    }
    ])

    const [selectedRole, setSelectedRole] = useState("")
    const [mobile, setMobile] = useState("")
    const [loading, setLoading] = useState(false)
    const {update}=useSession()
    const [error, setError] = useState("")

    const handleEdit = async () => {
        if (!selectedRole || mobile.trim().length !== 10) return

        setLoading(true)
        setError("")

        try {
            await axios.post("/api/user/edit-role-mobile", {
                role: selectedRole,
                mobile: mobile.trim()
            })
            await update({role:selectedRole})

            // Hard redirect — token automatically refresh hoga
            window.location.href = "/"

        } catch (err) {
            console.error("ERROR:", err)
            setError("Something went wrong. Please try again.")
            setLoading(false)
        }
    }

    const isReady = selectedRole && mobile.trim().length === 10

    useEffect(()=>{
        const checkForAdmin = async ()=>{
        try{
            const result = await axios.get("/api/api/check-for-admin")
            // console.log(result)
            if(result.data.adminExist){ 
                setRoles(prev=>prev.filter(r=>r.id!=="admin"))
            }


        }catch(err){
            console.log(err)

        }
    }
    checkForAdmin()

    },[])
    

    return (
        <div className='flex flex-col items-center min-h-screen p-6 w-full'>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-3xl md:text-4xl font-extrabold text-green-700 text-center mt-8'
            >
                Select Your Role
            </motion.h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
                {roles.map((role) => {
                    const Icon = role.icon
                    const isSelected = selectedRole === role.id
                    return (
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelectedRole(role.id)}
                            key={role.id}
                            className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 cursor-pointer transition-all ${
                                isSelected
                                    ? "border-green-600 bg-green-100 shadow-lg"
                                    : "border-gray-300 bg-white hover:border-green-400"
                            }`}
                        >
                            <Icon size={36} className={isSelected ? "text-green-600" : "text-gray-500"} />
                            <span className={`mt-3 font-medium ${isSelected ? "text-green-700" : "text-gray-600"}`}>
                                {role.label}
                            </span>
                        </motion.div>
                    )
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='flex flex-col items-center mt-10'
            >
                <label htmlFor="mobile" className="text-gray-700 font-medium mb-2">
                    Enter Your Mobile Number
                </label>
                <input
                    type="tel"
                    id="mobile"
                    maxLength={10}
                    value={mobile}
                    className='w-64 md:w-80 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800'
                    placeholder='eg. 9876543210'
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '')
                        setMobile(val)
                    }}
                />
                {mobile.length > 0 && mobile.length < 10 && (
                    <p className="text-red-500 text-sm mt-1">Enter a valid 10-digit number</p>
                )}
            </motion.div>

            {error && (
                <p className="text-red-600 text-sm mt-4">{error}</p>
            )}

            <button
                disabled={!isReady || loading}
                className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 w-[200px] mt-10 ${
                    isReady && !loading
                        ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleEdit}
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={18} />
                        Please wait
                    </>
                ) : (
                    <>
                        Go To Home <ArrowRight size={18} />
                    </>
                )}
            </button>

        </div>
    )
}

export default EditRoleMobile