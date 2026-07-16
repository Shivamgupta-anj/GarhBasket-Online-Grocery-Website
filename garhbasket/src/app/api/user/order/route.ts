import connectDB from "@/lib/db";
import emitEventHandler from "@/lib/emitEventHandler";
import Order from "@/models/order.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        
        const body = await req.json();
        console.log("📦 Request body:", body);  // Check what's being received
        
        const { userId, items, paymentMethod, totalAmount, address } = body;

        if (!userId || !paymentMethod || !totalAmount || !address) {
            console.log("❌ Missing fields:", { userId, paymentMethod, totalAmount, address });
            return NextResponse.json(
                { message: "Please send all credentials" },
                { status: 400 }
            );
        }

        const user = await User.findById(userId);
        console.log("👤 User found:", user);  // Check if user lookup works
        
        if (!user) {
            return NextResponse.json(
                { message: "User not Found" },
                { status: 404 }
            );
        }

        console.log("🛒 Creating order with:", { userId, items, paymentMethod, totalAmount, address });
        
        const newOrder = await Order.create({
            user: userId,
            items,
            paymentMethod,
            totalAmount,
            address,
        });

        // await emitEventHandler("new-order",newOrder)
        await emitEventHandler("new-order", newOrder)



        console.log("✅ Order created:", newOrder);
        return NextResponse.json(newOrder, { status: 201 });

    } catch (err) {
        console.error("🔥 Place order error:", err);  // This will show the REAL error
        return NextResponse.json(
            { message: `Place order error: ${err}` },
            { status: 500 }
        );
    }
}