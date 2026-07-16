// import connectDB from "@/lib/db";
// import { sendMail } from "@/lib/mailer";
// import Order from "@/models/order.model";
// import { NextRequest, NextResponse } from "next/server";




// export async function POST(req:NextRequest) {
//     try{
//         await connectDB()
//         const {orderId}= await req.json()
//         const order = await Order.findById(orderId).populate("user")

//         if(!order){
//             return NextResponse.json(
//                 {message:"order not found"},
//                 {status:400}
//             )
//         }
//         const otp = Math.floor(1000+Math.random()*9000).toString()
//         order.deliveryOtp = otp
//         await order.save()
        

//         await sendMail(order.user.email,"Your Delivery OTP",
//             `<h2> Your Delivery OTP is <strong>${otp}</strong> </h2>`
//         )
//         return NextResponse.json(
//             {message:"Otp sent Successfully"},
//             {status:400}
//         )
//     }catch(err){
//         return NextResponse.json(
//             {message:`send otp error ${err}`},
//             {status:400}
//         )


//     }
    
// }

import connectDB from "@/lib/db"
import { sendMail } from "@/lib/mailer"
import Order from "@/models/order.model"
import { NextRequest, NextResponse } from "next/server"
export async function POST(req:NextRequest) {
    try{
        await connectDB()
        const {orderId}= await req.json()
        const order = await Order.findById(orderId).populate("user")

        if(!order){
            return NextResponse.json(
                {message:"order not found"},
                {status:404}   // ✅ 404 makes more semantic sense here too
            )
        }
        const otp = Math.floor(1000+Math.random()*9000).toString()
        order.deliveryOtp = otp
        await order.save()

         console.log("Sending to:", order.user.email, "from:", process.env.EMAIL)

        await sendMail(order.user.email,"Your Delivery OTP",
            `<h2> Your Delivery OTP is <strong>${otp}</strong> </h2>`
        )
        return NextResponse.json(
            {message:"Otp sent Successfully"},
            {status:200}   // ✅ fixed
        )
    }catch(err){
        return NextResponse.json(
            {message:`send otp error ${err}`},
            {status:500}   // ✅ 500 for server errors, not 400
        )
    }
}