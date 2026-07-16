import connectDB from "@/lib/db";
import emitEventHandler from "@/lib/emitEventHandler";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import Order from "@/models/order.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    try{
        await connectDB()
        const {orderId,otp}= await req.json()
        if(!orderId || !otp){
            return NextResponse.json(
                {message:"orderId or OTP not found"},
                {status:400}
            )
        }
        const order = await Order.findById(orderId)
        if(!order){
            return NextResponse.json(
                {message:"order not found"},
                {status:400}
            )
        }

        if(order.deliveryOtp!== otp){
            return NextResponse.json(
                {message:"Incorrect or Expired Otp"},
                {status:400}
            )
        }

        order.status="Delivered"
        order.deliveryOtpVerification= true
        order.deliveredAt= new Date()

        await order.save()

         await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });

        await DeliveryAssignment.updateOne(
            {order:orderId},
            {$set:{assignedTo:null,status:"completed"}}
        )

        return NextResponse.json(
            {message:"otp sent successfully"},
            {status:200}
        )


    }catch(err){

        return NextResponse.json(
            {message:`send otp error ${err}`},
            {status:500}
        )

    }
} 