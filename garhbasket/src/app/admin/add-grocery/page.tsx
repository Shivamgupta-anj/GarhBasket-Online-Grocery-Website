// // 'use client'


// // import { ArrowLeft, LoaderIcon, PlusCircle, UploadIcon } from 'lucide-react'
// // import Link from 'next/link'
// // import React, { ChangeEvent, FormEvent, useState } from 'react'
// // import {motion} from 'framer-motion'
// // import Image from 'next/image'
// // import axios from 'axios'


// // const categories=[
// //     "Fruits & Vegetables",
// //     "Dairy & Eggs",
// //     "Rice, Atta & Grains",
// //     "Snacks & Biscuits",
// //     "Spices & Masalas",
// //     "Beverages & Drinks",
// //     "Personal Care",
// //     "Household Essentials",
// //     "Instant & Packaged Food",
// //     "Baby & Pet Care"
// // ]
// // const unitOptions =[
// //      "kg","g","liter","ml","piece","pack"
// // ]

// // function AddGrocery() {

// //     const [name,setName]=useState("")
// //     const [category,setCategory]=useState("")
// //     const [unit,setUnit]=useState("")
// //     const [price,setPrice]=useState("")
// //     const [preview,setPreview]=useState<string|null>()
// //     const[backendImage,setBackendImage]=useState<File|null>()
// //     const [loading,setLoading]=useState(false)

// //     const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=>{
// //         const files = e.target.files
// //         if(!files || files.length==0) return
// //         const file=files[0]
// //         setBackendImage(file)
// //         setPreview(URL.createObjectURL(file))
// //     }

// //     // // const handleSubmit=async(e:FormEvent)=>{
// //     //     e.preventDefault()
// //     //     try{
// //     //         const formData=new FormData()
            
// //     //         formData. append("name",name)
// //     //         formData.append("category",category)
// //     //         formData.append("price",price)
// //     //         formData.append("unit",unit)

// //     //         if(backendImage){
// //     //             formData.append("image",backendImage)

// //     //         }

            
            
// //     //         const result = await axios.post("/api/admin/add-grocery",formData)
// //     //         console.log(result.data)

// //     //     }catch(err){
// //     //         console.log(err)

// //     //     }
// //     // }

// //     const handleSubmit = async (e: FormEvent) => {
// //   e.preventDefault()
// //   setLoading(true)
// //   try {
// //     const formData = new FormData()
// //     formData.append("name", name)
// //     formData.append("category", category)
// //     formData.append("price", price)
// //     formData.append("unit", unit)

// //     if (backendImage) {
// //       formData.append("image", backendImage)
// //     }

// //     console.log("Sending request to:", "/api/admin/add-grocery")
    
// //     const result = await axios.post("/api/admin/add-grocery", formData)
// //     console.log("Success:", result.data)
// //     setLoading(false)
// //   } catch (err: any) {
// //     console.error("❌ Error:", err.message)
// //     console.error("❌ Status:", err.response?.status)
// //     console.error("❌ Data:", err.response?.data)
// //     console.error("❌ Config URL:", err.config?.url)
// //     setLoading(false)
// //   }
// // }


// //   return (
// //     <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-white py-16 px-4 relative'>

// //         <Link href={"/"} className='absolute top-6 left-6 flex items-center gap-2 text-green-700 font-semibold bg-white px-4 py-2 rounded-full shadow-md hover:bg-green-100 hover:shadow-lg transition-all'>
// //         <ArrowLeft className='w-5 h-5'/>
// //         <span className='hidden md:flex'>Back to home</span>
// //         </Link>

// //         <motion.div 
// //         initial={{y:20,opacity:0}}
// //         animate={{y:0,opacity:1}}
// //         transition={{duration:0.4}}
// //         className='bg-white w-full max-w-2xl shadow-2xl rounded-3xl border border-green-100 p-8'
// //         >

// //             <div className='flex flex-col items-center mb-8'>
// //                 <div className='flex items-center gap-3'>
// //                     <PlusCircle className='text-black-600 w-8 h-8'/>
// //                     <h1>Add Your Grocery</h1>
// //                 </div>

// //                     <p className='text-gray-500 text-sm mt-2 text-center'>Fill out the details below to add a new grocery items.</p>

// //             </div>

// //             <form className='flex flex-col gap-6 w-full animate-pulse' onSubmit={handleSubmit}>
// //                 <div>
// //                     <label htmlFor="name" className='block text-gray-700 font-medium mb-1'>Grocery Name <span className='text-red-500'>*</span></label>
// //                     <input type="text" id="name" placeholder='eg: Sweet,milk.....' onChange={(e)=>setName(e.target.value)}
// //                     value={name} className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none foucs:ring-2 focus-ring-green-400 transition-all'/>

// //                 </div>
// //                 <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>

// //                     {/*  */}
// //                     <div>
// //                         <label className='block text-gray-700 font-medium mb-1'>Category <span className='text-red-500'>*</span></label>

// //                         <select name="category" value={category} className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 transition-all bg-white' onChange={(e)=>setCategory(e.target.value)}>
// //                             <option value="">Select Category</option>
// //                             {categories.map(cat=>(
// //                                 <option key={cat} value={cat}>{cat}</option>
// //                             ))}
// //                         </select>
// //                     </div>

// //                     {/*  */}
// //                     <div>
// //                         <label className='block text-gray-700 font-medium mb-1'>Unit <span className='text-red-500'>*</span></label>

// //                         <select name="category" className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 transition-all bg-white' onChange={(e)=>setUnit(e.target.value)}
// //                             value={unit}>
// //                             <option value="">Select unit</option>
// //                             {unitOptions.map(cat=>(
// //                                 <option key={cat} value={cat}>{cat}</option>
// //                             ))}
// //                         </select>
// //                     </div>
// //                 </div>

// //                 <div>
// //                     <label className='block text-gray-700 font-medium mb-1'>Price <span className='text-red-500'>*</span></label>
// //                     <input type="number" id="name" placeholder='eg: 120' className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none foucs:ring-2 focus-ring-green-400 transition-all' onChange={(e)=>setPrice(e.target.value)} value={price}/>


// //                 </div>

// //                 <div className='flex flex-col sm:flex-row items-center gap-5'>
// //                     <label htmlFor="image" className='cursor-pointer flex items-center justify-center gap-2 bg-green-50 font-semibold border border-green-200 rounded-xl px-6 py-3 text-green-700  hover:bg-green-100 transition-all w-full sm:w-auto'>
// //                         <UploadIcon className='w-5 h-5'/>
                        
// //                         Upload Image </label>

// //                     <input type="file" id="image" accept='image/*' hidden onChange={handleImageChange} />

// //                     {preview && <Image src={preview} width={100} height={100} alt='img' className='rounded-xl shadow-md border border-gray-200 object-cover'/>}


// //                 </div>

// //                 <motion.button
// //                 whileHover={{scale:1.02}}
// //                 whileTap={{scale:0.9}}
// //                 disabled={loading}
// //                 className='mt-4 w-full bg-linear-to-r from-green-500 to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shaow-xl disabled:opacity-60 transition-all flex items-center justify-center gap-2'
// //                 >
// //                     {loading ?<LoaderIcon className='animate-spin w-5 h-5'/>:"Add Grocery"}
                    

// //                 </motion.button>

// //             </form>

// //         </motion.div>


      
// //     </div>
// //   )
// // }

// // export default AddGrocery


// 'use client'

// import { ArrowLeft, LoaderIcon, PlusCircle, UploadIcon, CheckCircle2 } from 'lucide-react'
// import Link from 'next/link'
// import React, { ChangeEvent, FormEvent, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import axios from 'axios'

// const categories = [
//   "Fruits & Vegetables",
//   "Dairy & Eggs",
//   "Rice, Atta & Grains",
//   "Snacks & Biscuits",
//   "Spices & Masalas",
//   "Beverages & Drinks",
//   "Personal Care",
//   "Household Essentials",
//   "Instant & Packaged Food",
//   "Baby & Pet Care"
// ]

// const unitOptions = ["kg", "g", "liter", "ml", "piece", "pack"]

// function AddGrocery() {
//   const [name, setName] = useState("")
//   const [category, setCategory] = useState("")
//   const [unit, setUnit] = useState("")
//   const [price, setPrice] = useState("")
//   const [preview, setPreview] = useState<string | null>(null)
//   const [backendImage, setBackendImage] = useState<File | null>(null)
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [errors, setErrors] = useState<{[key: string]: string}>({})

//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {}
    
//     if (!name.trim()) newErrors.name = "Grocery name is required"
//     if (!category) newErrors.category = "Please select a category"
//     if (!unit) newErrors.unit = "Please select a unit"
//     if (!price || parseFloat(price) <= 0) newErrors.price = "Enter a valid price"
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files || files.length === 0) return
    
//     const file = files[0]
    
//     // Validate file type
//     if (!file.type.startsWith('image/')) {
//       setErrors(prev => ({ ...prev, image: "Please select an image file" }))
//       return
//     }
    
//     // Validate file size (max 5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       setErrors(prev => ({ ...prev, image: "Image size must be less than 5MB" }))
//       return
//     }
    
//     setBackendImage(file)
//     setPreview(URL.createObjectURL(file))
//     setErrors(prev => ({ ...prev, image: "" }))
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) return
    
//     setLoading(true)
//     setSuccess(false)
    
//     try {
//       const formData = new FormData()
//       formData.append("name", name.trim())
//       formData.append("category", category)
//       formData.append("price", price)
//       formData.append("unit", unit)

//       if (backendImage) {
//         formData.append("image", backendImage)
//       }

//       const result = await axios.post("/api/admin/add-grocery", formData)
//       console.log("Success:", result.data)
      
//       setSuccess(true)
//       setLoading(false)
      
//       // Reset form after success
//       setTimeout(() => {
//         setName("")
//         setCategory("")
//         setUnit("")
//         setPrice("")
//         setPreview(null)
//         setBackendImage(null)
//         setSuccess(false)
//       }, 3000)
      
//     } catch (err: any) {
//       console.error("❌ Error:", err.message)
//       console.error("❌ Status:", err.response?.status)
//       console.error("❌ Data:", err.response?.data)
      
//       setErrors(prev => ({ 
//         ...prev, 
//         submit: err.response?.data?.message || "Failed to add grocery. Please try again." 
//       }))
//       setLoading(false)
//     }
//   }

//   const inputClasses = (hasError: boolean) => 
//     `w-full border rounded-xl px-4 py-3 outline-none transition-all ${
//       hasError 
//         ? 'border-red-300 focus:ring-2 focus:ring-red-400 bg-red-50' 
//         : 'border-gray-300 focus:ring-2 focus:ring-green-400 hover:border-gray-400 bg-white'
//     }`

//   const labelClasses = "block text-gray-700 font-semibold mb-2 text-sm"
//   const errorClasses = "text-red-500 text-xs mt-1 flex items-center gap-1"

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4 relative overflow-hidden'>
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <Link 
//         href={"/"} 
//         className='absolute top-6 left-6 flex items-center gap-2 text-green-700 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg hover:bg-green-100 hover:shadow-xl transition-all z-10 group'
//       >
//         <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform'/>
//         <span className='hidden md:inline'>Back to home</span>
//       </Link>

//       <motion.div 
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, type: "spring", damping: 15 }}
//         className='bg-white/90 backdrop-blur-sm w-full max-w-2xl shadow-2xl rounded-3xl border border-green-100 p-8 md:p-10 relative z-10'
//       >
//         <div className='flex flex-col items-center mb-10'>
//           <motion.div 
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className='flex items-center gap-3 bg-green-50 px-5 py-3 rounded-2xl'
//           >
//             <PlusCircle className='text-green-600 w-8 h-8'/>
//             <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Add Your Grocery</h1>
//           </motion.div>

//           <p className='text-gray-500 text-sm mt-4 text-center max-w-md leading-relaxed'>
//             Fill out the details below to add a new grocery item to your inventory. All fields marked with <span className='text-red-500'>*</span> are required.
//           </p>
//         </div>

//         <AnimatePresence>
//           {success && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className='mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700'
//             >
//               <CheckCircle2 className='w-5 h-5 flex-shrink-0'/>
//               <span className='font-medium'>Grocery added successfully! Form will reset shortly...</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {errors.submit && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className='mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm'
//             >
//               {errors.submit}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <label htmlFor="name" className={labelClasses}>
//               Grocery Name <span className='text-red-500'>*</span>
//             </label>
//             <input 
//               type="text" 
//               id="name" 
//               placeholder='eg: Sweet milk, rice, wheat...' 
//               onChange={(e)=>setName(e.target.value)}
//               value={name} 
//               className={inputClasses(!!errors.name)}
//               aria-invalid={!!errors.name}
//               aria-describedby={errors.name ? "name-error" : undefined}
//             />
//             {errors.name && (
//               <p id="name-error" className={errorClasses}>
//                 ⚠️ {errors.name}
//               </p>
//             )}
//           </motion.div>

//           <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <label className={labelClasses}>
//                 Category <span className='text-red-500'>*</span>
//               </label>
//               <select 
//                 name="category" 
//                 value={category} 
//                 className={inputClasses(!!errors.category)}
//                 onChange={(e)=>setCategory(e.target.value)}
//                 aria-invalid={!!errors.category}
//               >
//                 <option value="">Select Category</option>
//                 {categories.map(cat=>(
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//               {errors.category && (
//                 <p className={errorClasses}>⚠️ {errors.category}</p>
//               )}
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <label className={labelClasses}>
//                 Unit <span className='text-red-500'>*</span>
//               </label>
//               <select 
//                 name="unit" 
//                 className={inputClasses(!!errors.unit)}
//                 onChange={(e)=>setUnit(e.target.value)}
//                 value={unit}
//                 aria-invalid={!!errors.unit}
//               >
//                 <option value="">Select unit</option>
//                 {unitOptions.map(cat=>(
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//               {errors.unit && (
//                 <p className={errorClasses}>⚠️ {errors.unit}</p>
//               )}
//             </motion.div>
//           </div>

//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <label className={labelClasses}>
//               Price (₹) <span className='text-red-500'>*</span>
//             </label>
//             <input 
//               type="number" 
//               id="price" 
//               placeholder='eg: 120' 
//               className={inputClasses(!!errors.price)}
//               onChange={(e)=>setPrice(e.target.value)} 
//               value={price}
//               min="0"
//               step="0.01"
//               aria-invalid={!!errors.price}
//             />
//             {errors.price && (
//               <p className={errorClasses}>⚠️ {errors.price}</p>
//             )}
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <label className={labelClasses}>
//               Product Image
//             </label>
//             <div className='flex flex-col sm:flex-row items-center gap-5'>
//               <label 
//                 htmlFor="image" 
//                 className={`cursor-pointer flex items-center justify-center gap-2 font-semibold border rounded-xl px-6 py-3 transition-all w-full sm:w-auto ${
//                   errors.image 
//                     ? 'border-red-300 bg-red-50 text-red-700 hover:bg-red-100' 
//                     : 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
//                 }`}
//               >
//                 <UploadIcon className='w-5 h-5'/>
//                 Upload Image
//               </label>
//               <input 
//                 type="file" 
//                 id="image" 
//                 accept='image/*' 
//                 hidden 
//                 onChange={handleImageChange} 
//                 aria-invalid={!!errors.image}
//               />
              
//               <AnimatePresence>
//                 {preview && (
//                   <motion.div 
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     className='relative rounded-xl shadow-md border border-gray-200 overflow-hidden'
//                   >
//                     <Image 
//                       src={preview} 
//                       width={100} 
//                       height={100} 
//                       alt='Preview' 
//                       className='w-24 h-24 object-cover'
//                     />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setPreview(null)
//                         setBackendImage(null)
//                         setErrors(prev => ({ ...prev, image: "" }))
//                       }}
//                       className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md'
//                     >
//                       <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                         <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
//                       </svg>
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//             {errors.image && (
//               <p className={errorClasses}>⚠️ {errors.image}</p>
//             )}
//             <p className='text-gray-400 text-xs mt-2'>Supported: JPG, PNG, GIF. Max size: 5MB</p>
//           </motion.div>

//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             whileHover={{ scale: loading ? 1 : 1.02 }}
//             whileTap={{ scale: loading ? 1 : 0.98 }}
//             disabled={loading}
//             className={`mt-4 w-full font-semibold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
//               loading 
//                 ? 'bg-gray-400 cursor-not-allowed' 
//                 : 'bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl hover:from-green-600 hover:to-green-800'
//             } text-white`}
//           >
//             {loading ? (
//               <>
//                 <LoaderIcon className='animate-spin w-5 h-5'/>
//                 Adding Grocery...
//               </>
//             ) : (
//               <>
//                 <PlusCircle className='w-5 h-5'/>
//                 Add Grocery
//               </>
//             )}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   )
// }

// export default AddGrocery


'use client'

import { ArrowLeft, LoaderIcon, PlusCircle, UploadIcon, CheckCircle2, X } from 'lucide-react'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import axios from 'axios'

const categories = [
  "Fruits & Vegetables", "Dairy & Eggs", "Rice, Atta & Grains",
  "Snacks & Biscuits", "Spices & Masalas", "Beverages & Drinks",
  "Personal Care", "Household Essentials", "Instant & Packaged Food", "Baby & Pet Care"
]
const unitOptions = ["kg", "g", "liter", "ml", "piece", "pack"]

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 16 },
//   animate: { opacity: 1, y: 0 },
//   transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
// })

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});
function AddGrocery() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [unit, setUnit] = useState("")
  const [price, setPrice] = useState("")
  const [preview, setPreview] = useState<string | null>(null)
  const [backendImage, setBackendImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const e: { [k: string]: string } = {}
    if (!name.trim()) e.name = "Name is required"
    if (!category) e.category = "Select a category"
    if (!unit) e.unit = "Select a unit"
    if (!price || parseFloat(price) <= 0) e.price = "Enter a valid price"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return setErrors(p => ({ ...p, image: "Image files only" }))
    if (file.size > 5 * 1024 * 1024) return setErrors(p => ({ ...p, image: "Max 5MB allowed" }))
    setBackendImage(file)
    setPreview(URL.createObjectURL(file))
    setErrors(p => ({ ...p, image: "" }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append("name", name.trim())
      fd.append("category", category)
      fd.append("price", price)
      fd.append("unit", unit)
      if (backendImage) fd.append("image", backendImage)
      await axios.post("/api/admin/add-grocery", fd)
      setSuccess(true)
      setLoading(false)
      setTimeout(() => {
        setName(""); setCategory(""); setUnit(""); setPrice("")
        setPreview(null); setBackendImage(null); setSuccess(false)
      }, 3000)
    } catch (err: any) {
      setErrors(p => ({ ...p, submit: err.response?.data?.message || "Something went wrong." }))
      setLoading(false)
    }
  }

  const field = (err: boolean) =>
    `w-full border rounded-2xl px-4 py-3 text-sm outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm
     ${err
      ? 'border-red-300 ring-2 ring-red-100 placeholder:text-red-300'
      : 'border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 hover:border-stone-300'
    }`

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-16 overflow-hidden font-[Nunito,sans-serif]">

      {/* SVG produce pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0faf3] via-[#fefdf8] to-[#f5faf0]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="produce" width="80" height="80" patternUnits="userSpaceOnUse">
            <text x="10" y="30" fontSize="22">🥦</text>
            <text x="50" y="65" fontSize="18">🥕</text>
            <text x="5" y="70" fontSize="16">🍋</text>
            <text x="55" y="25" fontSize="20">🍅</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#produce)" />
      </svg>

      {/* Blob blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-200/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-emerald-700 font-semibold bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-emerald-100 shadow-sm hover:bg-emerald-50 hover:shadow-md transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="hidden md:inline text-sm">Back to home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_8px_60px_rgba(0,0,0,0.08)] rounded-[2rem] p-8 md:p-10"
      >
        {/* Header */}
        <motion.div {...fadeUp(0.05)} className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl shadow-lg mb-4">
            <PlusCircle className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-stone-800 tracking-tight">Add Grocery Item</h1>
          <p className="text-stone-400 text-sm mt-1.5 leading-relaxed">
            Fill in the details below to list a new item
          </p>
        </motion.div>

        {/* Toast messages */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mb-5 flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-sm font-medium"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              Item added! Form will reset in a moment…
            </motion.div>
          )}
          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm"
            >
              {errors.submit}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <motion.div {...fadeUp(0.1)}>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Grocery Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text" placeholder="e.g. Organic Milk, Basmati Rice…"
              value={name} onChange={e => setName(e.target.value)}
              className={field(!!errors.name)}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.name}</p>}
          </motion.div>

          {/* Category + Unit */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div {...fadeUp(0.15)}>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
                Category <span className="text-red-400">*</span>
              </label>
              <select value={category} onChange={e => setCategory(e.target.value)} className={field(!!errors.category)}>
                <option value="">Choose…</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.category}</p>}
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
                Unit <span className="text-red-400">*</span>
              </label>
              <select value={unit} onChange={e => setUnit(e.target.value)} className={field(!!errors.unit)}>
                <option value="">Choose…</option>
                {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
              {errors.unit && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.unit}</p>}
            </motion.div>
          </div>

          {/* Price */}
          <motion.div {...fadeUp(0.25)}>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Price (₹) <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-semibold text-sm">₹</span>
              <input
                type="number" placeholder="0.00" min="0" step="0.01"
                value={price} onChange={e => setPrice(e.target.value)}
                className={`${field(!!errors.price)} pl-8`}
              />
            </div>
            {errors.price && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.price}</p>}
          </motion.div>

          {/* Image upload */}
          <motion.div {...fadeUp(0.3)}>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
              Product Image
            </label>

            <AnimatePresence mode="wait">
              {preview ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
                  className="relative flex items-center gap-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl"
                >
                  <Image src={preview} width={72} height={72} alt="Preview"
                    className="w-[72px] h-[72px] rounded-xl object-cover border border-emerald-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-stone-700 truncate">{backendImage?.name}</p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {backendImage ? (backendImage.size / 1024).toFixed(0) + ' KB' : ''}
                    </p>
                    <label htmlFor="image"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 cursor-pointer hover:text-emerald-800 transition-colors">
                      <UploadIcon className="w-3 h-3" /> Change image
                    </label>
                  </div>
                  <button type="button"
                    onClick={() => { setPreview(null); setBackendImage(null) }}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-400 hover:text-red-500 hover:border-red-300 transition-colors flex-shrink-0">
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.label
                  key="upload"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  htmlFor="image"
                  className="flex flex-col items-center justify-center gap-2 w-full py-7 border-2 border-dashed border-stone-200 rounded-2xl cursor-pointer bg-stone-50/60 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-stone-200 group-hover:border-emerald-300 transition-colors shadow-sm">
                    <UploadIcon className="w-5 h-5 text-stone-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-stone-600 group-hover:text-emerald-700 transition-colors">
                      Click to upload image
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">JPG, PNG, GIF — max 5 MB</p>
                  </div>
                </motion.label>
              )}
            </AnimatePresence>

            <input type="file" id="image" accept="image/*" hidden onChange={handleImageChange} />
            {errors.image && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.image}</p>}
          </motion.div>

          {/* Submit */}
          <motion.button
            {...fadeUp(0.35)}
            whileHover={!loading ? { scale: 1.015, y: -1 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            disabled={loading}
            className={`mt-1 w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all duration-300
              ${loading
                ? 'bg-stone-300 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-emerald-200 hover:shadow-emerald-300'
              }`}
          >
            {loading
              ? <><LoaderIcon className="animate-spin w-4 h-4" /> Adding…</>
              : <><PlusCircle className="w-4 h-4" /> Add Grocery Item</>
            }
          </motion.button>

        </form>
      </motion.div>
    </div>
  )
}

export default AddGrocery