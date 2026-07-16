// import connectDB from "@/lib/db";
// import ChatRoom from "@/models/chatRoom.model";
// import Message from "@/models/message.model";
// import { NextRequest, NextResponse } from "next/server";


// export async function POST(req:NextRequest){
//     try{
//         await connectDB()
//         const {roomId}= await req.json()
//         let room = await ChatRoom.findById(roomId)
//         if(!room){
//             return NextResponse.json(
//                 {message:`room not found`},
//                 {status:400}
//             )
//         }

//         const messages= await Message.find({roomId:room._id})

//         return NextResponse.json(
//             messages,{status:200}
//         )

//     }catch(err){
//         return NextResponse.json(
//             {message:`get messages error ${err}`},
//             {status:500}
//         )

//     }

// }

import connectDB from "@/lib/db";
// import ChatRoom from "@/models/chatRoom.model";
import Message from "@/models/message.model";
import Order from "@/models/order.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const { roomId } = await req.json()

        if (!roomId) {
            return NextResponse.json(
                { message: "roomId is required" },
                { status: 400 }
            )
        }

        const room = await Order.findById(roomId)
        if (!room) {
            return NextResponse.json(
                { message: `room not found` },
                { status: 400 }
            )
        }

        const messages = await Message.find({ roomId: room._id }).sort({ createdAt: 1 })

        return NextResponse.json(
            messages, { status: 200 }
        )

    } catch (err) {
        return NextResponse.json(
            { message: `get messages error ${err}` },
            { status: 500 }
        )
    }
}