// import ChatRoom from "@models/chatRoom.model";
// import { NextRequest,NextResponse } from "next/server";
// import connectDB from "@/lib/db";
// export async function POST (req:NextRequest){
//     try{
//         await connectDB()
//         const {orderId,userId,deliveryBoyId}=await req.json()
//         let room = await ChatRoom.findOne({orderId})
//         if(!room){
//             room = await ChatRoom.create({
//                 orderId,userId,deliveryBoyId
//             })
//         }
//         return NextResponse.json(
//             room,{status:200}
//         )
//     }catch(err){
//         return NextResponse.json(
//             {message:`create chat room error ${err}`},
//             {status:400}
            
//         )

//     }
// }