// import connectDB from "@/lib/db";
// import Order from "@/models/order.model";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// export async function POST(req:NextRequest){
//     const sig = req.headers.get("stripe-signature")
//     const rawBody= await req.text()
//     let event;


//     try{
//         event=stripe.webhooks.constructEvent(
//             rawBody,sig!,process.env.STRIPE_WEBHOOK_SECRET!
//         )


//     }catch(err){
//         console.log("Signature verification failed",err)

//     }

//     if(event?.type==="checkout.session.completed"){
//         const session = event.data.object
         
//         await connectDB()
//         await Order.findByIdAndUpdate(session?.metadata?.orderId,{
//             isPaid:true
//         })
//     }

//     return NextResponse.json({recived:true},{status:200})
// }

import connectDB from "@/lib/db";
import Order from "@/models/order.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
    const sig = req.headers.get("stripe-signature")
    const rawBody = await req.text()
    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err) {
        console.log("Signature verification failed", err)
        return NextResponse.json(
            { error: "Webhook signature verification failed" },
            { status: 400 }
        )
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session

        try {
            await connectDB()
            const orderId = session?.metadata?.orderId

            if (!orderId) {
                console.log("No orderId in session metadata")
            } else {
                await Order.findByIdAndUpdate(orderId, { isPaid: true })
                console.log("Order marked as paid:", orderId)
            }
        } catch (err) {
            console.error("Error updating order:", err)
            return NextResponse.json({ error: "DB update failed" }, { status: 500 })
        }
    }

    return NextResponse.json({ received: true }, { status: 200 })
}