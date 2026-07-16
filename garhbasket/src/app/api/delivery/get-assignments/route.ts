// // import { auth } from "@/auth";
// // import connectDB from "@/lib/db";
// // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // import { NextResponse } from "next/server";

// // export async function GET(){
// //     try{
// //         connectDB()
// //         const session = await auth()
// //         // const assignments=await DeliveryAssignment.find({
// //         //     broadcastedTo:session?.user?.id,
// //         //     status:"broadcasted"
// //         // }).populate("order")

// //         const assignments = await DeliveryAssignment.find({
// //     broadcastedTo: session?.user?.id,
// //     status: "broadcasted"
// // }).populate("order")

// //         return NextResponse.json(
// //             assignments,{status:200}
// //         )


// //     }catch(err){
// //         return NextResponse.json(
// //             {message:`get assignment error ${err}`},
// //             {status:200}
            
// //         )

// //     }
// // }


// import { auth } from "@/auth";
// import connectDB from "@/lib/db";
// import DeliveryAssignment from "@/models/deliveryAssignment.model";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose"; // ← ye add karo

// export async function GET(){
//     try{
//         await connectDB() // ← await add karo
//         const session = await auth()

//         console.log("Session user id:", session?.user?.id) // ← ye add karo debug ke liye

//         const assignments = await DeliveryAssignment.find({
//             broadcastedTo: new mongoose.Types.ObjectId(session?.user?.id), // ← ObjectId banao
//             status: "broadcasted"
//         }).populate("order")

//         console.log("Assignments found:", assignments) // ← ye add karo

//         return NextResponse.json(assignments, {status: 200})

//     }catch(err){
//         return NextResponse.json(
//             {message: `get assignment error ${err}`},
//             {status: 500} // ← 500 karo error pe
//         )
//     }
// }


import { auth } from "@/auth";
import connectDB from "@/lib/db";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    try {
        await connectDB();
        const session = await auth();
        const userId = session?.user?.id;

        console.log("Session user id:", userId);

        if (!userId) {
            return NextResponse.json({ message: "unauthorized" }, { status: 401 });
        }

        const assignments = await DeliveryAssignment.find({
            broadcastedTo: new mongoose.Types.ObjectId(userId),
            status: "broadcasted"
        }).populate("order");

        console.log("Assignments found:", assignments.length);

        return NextResponse.json(assignments, { status: 200 });

    } catch (err) {
        console.log("❌ get-assignments error:", err); // ← this will show exact crash
        return NextResponse.json(
            { message: `get assignment error ${err}` },
            { status: 500 }
        );
    }
}