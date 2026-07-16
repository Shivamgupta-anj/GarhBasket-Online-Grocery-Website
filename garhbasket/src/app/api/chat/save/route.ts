
import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/lib/db";
// import ChatRoom from "@/models/chatRoom.model";
import Message from "@/models/message.model";
import Order from "@/models/order.model";
export async function POST (req:NextRequest){
    try{
        await connectDB()
        const {senderId,text,roomId,time}= await req.json()
        const room = await Order.findById(roomId)

        if(!room){
            return NextResponse.json(
                {message:`room not found`},
                {status:400}
            )
        }

        const message = await Message.create({
            senderId,text,roomId,time
        })
        return NextResponse.json(
            message,{status:200}
        )
       
        
    }catch(err){
        return NextResponse.json(
            {message:`save message chat error ${err}`},
            {status:400}
            
        )

    }
}