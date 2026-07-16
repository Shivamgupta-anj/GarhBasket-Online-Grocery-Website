import { auth } from "@/auth";
import connectDB from "@/lib/db";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
        const session = await auth()
        const deliveryBoyId=session?.user?.id
        console.log("ALL assignments for this boy:", await DeliveryAssignment.find({ assignedTo: deliveryBoyId }).lean())

        const activeAssignment = await DeliveryAssignment.findOne({
            assignedTo:deliveryBoyId,
            status:"assigned",
        }).populate(
            {
                path:"order",
                populate:{path:"address"}
            }
        ).lean()

if(!activeAssignment){
    return NextResponse.json(
        {active:false},
        {status:200},
    )
}

  return NextResponse.json(
        {active:true,assignment:activeAssignment},
        {status:200},
    )

    }catch(err){
          return NextResponse.json(
        {message:`current order error ${err}`},
        {status:200},
    )

    }
}