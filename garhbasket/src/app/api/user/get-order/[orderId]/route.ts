// // import connectDB from "@/lib/db"
// // import Order from "@/models/order.model"
// // import { NextRequest, NextResponse } from "next/server"

// // export async function GET(req:NextRequest{params}:{params:{orderId:string}}){
// //     try{
// //         await connectDB()
// //         const orderId = await params
// //         const order = await Order.findById(orderId).populate("assignedDelivery")
// //         if(!order){
// //             return NextResponse.json(
// //                 {message:"order not found"},
// //                 {status:400}
// //             )
// //         }
// //         return NextResponse.json(
// //             order,
// //             {status:200}
// //         )
// //     }catch(err){
// //         return NextResponse.json(
// //             {message:`get order by id error ${err}`},
// //             {status:400}
// //         )
// //     }
// // }



// import connectDB from "@/lib/db"
// import Order from "@/models/order.model"
// import { NextRequest, NextResponse } from "next/server"

// export async function GET(
//     req: NextRequest,
//     { params }: { params: Promise<{ orderId: string }> }
// ) {
//     try {
//         await connectDB()
//         const { orderId } = await params
//         const order = await Order.findById(orderId).populate("assignedDelivery")
//         if (!order) {
//             return NextResponse.json(
//                 { message: "order not found" },
//                 { status: 400 }
//             )
//         }
//         return NextResponse.json(
//             order,
//             { status: 200 }
//         )
//     } catch (err) {
//         return NextResponse.json(
//             { message: `get order by id error ${err}` },
//             { status: 400 }
//         )
//     }
// }


import connectDB from "@/lib/db"
import Order from "@/models/order.model"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    req: NextRequest,
    context:{params:Promise <{orderId:string;}>;}
) {
    try {
        await connectDB()
        const { orderId } = await context.params
        // const order = await Order.findById(orderId).populate("assignedDelivery")

        const order = await Order.findById(orderId).populate("assignedDeliveryBoy")
        if (!order) {
            return NextResponse.json(
                { message: "order not found" },
                { status: 400 }
            )
        }
        return NextResponse.json(
            order,
            { status: 200 }
        )
    } catch (err) {
        return NextResponse.json(
            { message: `get order by id error ${err}` },
            { status: 400 }
        )
    }
}