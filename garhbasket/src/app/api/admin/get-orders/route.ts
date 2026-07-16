import { NextRequest, NextResponse } from "next/server";
import Order from "@/models/order.model";
import connectDB from "@/lib/db";

export async function GET(req:NextRequest){
    try{
        await connectDB()
        const orders = await Order.find({}).populate("user assignedDeliveryBoy").sort({createdAt:-1})
        return NextResponse.json(
            orders,{status:200}
        )
    }catch(err){
        return NextResponse.json(
            {message:`get orders error : ${err}`},{status:500}
        )

    }


}