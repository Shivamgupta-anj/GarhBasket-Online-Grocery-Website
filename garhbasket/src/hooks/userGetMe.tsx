// 'use client'

// import axios from 'axios'
// import React, { useEffect } from 'react'

// function userGetMe() {
//     useEffect(()=>{
//         const getMe = async()=>{
//             try{
//                 const result=await axios.get("/api/me")
//                 console.log(result.data)
//             }catch(err){
//                 console.log
//             }
//         }
        
//     },[])
// }

// export default userGetMe
'use client'

import { AppDispatch } from '@/redux/store'
import axios from 'axios'
import React, { useEffect } from 'react'
// import {setUserData} from '@/redux/userSlice'
import { useDispatch } from 'react-redux'
import { setUserData } from '@/redux/userSlics'

function UserGetMe() { 
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        const getMe = async () => {
            try {
                const result = await axios.get("/api/me")
                // console.log(result.data)
                dispatch(setUserData(result.data))

            } catch(err) {
                console.log(err)
            }
        }
        getMe()  // ✅ Fix 2: getMe was defined but never called
    }, [])
    return null
}

export default UserGetMe