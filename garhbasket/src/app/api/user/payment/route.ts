// // import connectDB from "@/lib/db";
// // import Order from "@/models/order.model";
// // import User from "@/models/user.model";
// // import { NextRequest, NextResponse } from "next/server";
// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// // export async function POST(req:NextRequest){
// //     try{
// //         await connectDB()
// //         const {userId,items,paymentMethod,totalAmount,address}=await req.json()
// //         if(!items || !userId || !paymentMethod || !totalAmount || !address){
// //             return NextResponse.json(
// //                 {message:"please send all credentials"},
// //                 {status:400}
// //             )
// //         }
// //         const user = await User.findById(userId)
// //         if(!user){
// //             return NextResponse.json(
// //                 {message:"user not found"},
// //                 {status:400}
// //             )
// //         }
// //         const newOrder = await Order.create({
// //             user:userId,
// //             items,
// //             paymentMethod,
// //             totalAmount,
// //             address

// //         })

// //         const session = await stripe.checkout.sessions.create({
// //             payment_method_types:["card"],
// //             mode:"payment",
// //             success_url:`${process.env.NEXT_BASE_URL}/user/order-success`,
// //             cancel_url:`${process.env.NEXT_BASE_URL}/user/order-cancle`,

// //             line_items:[
// //                 {
// //                     price_data:{
// //                         currency:"inr",
// //                         product_data:{
// //                             name:'GarhBasket Order Payment',
// //                         },
// //                         unit_amount:totalAmount*100,
// //                     },
// //                     quantity:1,
// //                 },

// //             ],
// //             metadata:{orderId:newOrder._id.toString()}

// //         })

// //         return NextResponse.json({url:session.url},{status:200})


// //     }catch(err){
// //         return NextResponse.json(
// //             {message:`order payment error ${err}`},
// //             {status:500}
// //         )



// //     }
// // }


// import connectDB from "@/lib/db";
// import Order from "@/models/order.model";
// import User from "@/models/user.model";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// export async function POST(req: NextRequest) {
//     try {
//         await connectDB()

//         const baseUrl = process.env.NEXT_BASE_URL
//         if (!baseUrl) throw new Error("NEXT_BASE_URL is not set — check your .env.local")

//         console.log("baseUrl:", baseUrl) // remove after confirming

//         const { userId, items, paymentMethod, totalAmount, address } = await req.json()

//         if (!items || !userId || !paymentMethod || !totalAmount || !address) {
//             return NextResponse.json(
//                 { message: "Please send all credentials" },
//                 { status: 400 }
//             )
//         }

//         const user = await User.findById(userId)
//         if (!user) {
//             return NextResponse.json(
//                 { message: "User not found" },
//                 { status: 404 }
//             )
//         }

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],   // simple and compatible with all Stripe versions
//             mode: "payment",
//             success_url: `${baseUrl}/user/order-success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${baseUrl}/user/order-cancel`,
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "inr",
//                         product_data: {
//                             name: "GarhBasket Order Payment",
//                         },
//                         unit_amount: totalAmount * 100, // convert to paise
//                     },
//                     quantity: 1,
//                 },
//             ],
//             metadata: { userId, paymentMethod },
//         })

//         // Save order only after Stripe session succeeds
//         const newOrder = await Order.create({
//             user: userId,
//             items,
//             paymentMethod,
//             totalAmount,
//             address,
//             status: "pending",
//             stripeSessionId: session.id,
//         })

//         return NextResponse.json(
//             { url: session.url, orderId: newOrder._id },
//             { status: 200 }
//         )

//     } catch (err) {
//         console.error("Payment route error:", err)
//         return NextResponse.json(
//             { message: `Order payment error: ${err instanceof Error ? err.message : err}` },
//             { status: 500 }
//         )
//     }

// }



import connectDB from "@/lib/db";
import Order from "@/models/order.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
    try {
        await connectDB()

        const baseUrl = process.env.NEXT_BASE_URL
        if (!baseUrl) throw new Error("NEXT_BASE_URL is not set — check your .env.local")

        const { userId, items, paymentMethod, totalAmount, address } = await req.json()

        if (!items || !userId || !paymentMethod || !totalAmount || !address) {
            return NextResponse.json(
                { message: "Please send all credentials" },
                { status: 400 }
            )
        }

        const user = await User.findById(userId)
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            )
        }

        // ✅ Step 1: Create order FIRST
        const newOrder = await Order.create({
            user: userId,
            items,
            paymentMethod,
            totalAmount,
            address,
            status: "pending",
            stripeSessionId: "",  // will update below
        })

        // ✅ Step 2: Create Stripe session with orderId in metadata
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${baseUrl}/user/order-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/user/order-cancel`,
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "GarhBasket Order Payment",
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId,
                paymentMethod,
                orderId: newOrder._id.toString() // ✅ key fix
            },
        })

        // ✅ Step 3: Save session ID to order
        await Order.findByIdAndUpdate(newOrder._id, {
            stripeSessionId: session.id
        })

        return NextResponse.json(
            { url: session.url, orderId: newOrder._id },
            { status: 200 }
        )

    } catch (err) {
        console.error("Payment route error:", err)
        return NextResponse.json(
            { message: `Order payment error: ${err instanceof Error ? err.message : err}` },
            { status: 500 }
        )
    }
}