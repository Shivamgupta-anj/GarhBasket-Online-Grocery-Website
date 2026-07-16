// // // // import { auth } from "@/auth";
// // // // import connectDB from "@/lib/db";
// // // // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // // // import Order from "@/models/order.model";
// // // // import { NextRequest, NextResponse } from "next/server";

// // // // export async function POST(req:NextRequest,{params}:{params:{id:string}}){
// // // //     try{
        
// // // //         await connectDB()

// // // //         const {id}=await params
// // // //         const session= await auth()


// // // // console.log("SESSION:", JSON.stringify(session));

// // // //         const deliveryBoyId= session?.user?.id
// // // //         console.log("deliveryBoyId:", deliveryBoyId);

// // // //         if(!deliveryBoyId){
// // // //             return NextResponse.json({message:"unauthorize"},{status:400})
// // // //         }
// // // //         const assignment = await DeliveryAssignment.findById(id)
// // // //         if(!assignment){
// // // //             return NextResponse.json({message:"assignment not found"},{status:400})
// // // //         }

// // // //         if(assignment.status!=="broadcasted"){
// // // //             return NextResponse.json({message:"assignment expired"},{status:400})
// // // //         }

// // // //         const alreadyAssigned = await DeliveryAssignment.findOne({
// // // //             assignedTo:deliveryBoyId,
// // // //             status:{$nin:["broadcasted","completed"]}
// // // //         })
// // // //         if(alreadyAssigned){
// // // //             return NextResponse.json({message:"already assigned to other order"},{status:400})

// // // //         }

// // // //         assignment.assignedTo=deliveryBoyId
// // // //         assignment.status="assigned" 
// // // //         assignment.acceptedAt=new Date()
// // // //         await assignment.save()

// // // //         const order = await Order.findById(assignment.order)
// // // //         if(!order){
// // // //             return NextResponse.json({message:"order not found"},{status:400})
// // // //         }
// // // //         order.assignedDeliveryBoy=deliveryBoyId
// // // //         await order.save()

// // // //         await DeliveryAssignment.updateMany({_id:{$ne:assignment._id},
// // // //         broadcastedTo:deliveryBoyId,
// // // //         status:"broadcasted"

// // // //         },
// // // //     {
// // // //         // $pull :{boradcastedTo:deliveryBoyId}
// // // //          $pull: { broadcastedTo: deliveryBoyId } 
// // // //     })
// // // //     return NextResponse.json({message:"order accepted successfully"},{status:200})
// // // //     }catch(err){
// // // //         console.log(err)
// // // //         return NextResponse.json({message:`accept assignment error ${err}`},{status:500})

// // // //     }

// // // // }

// // // import { auth } from "@/auth";
// // // import connectDB from "@/lib/db";
// // // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // // import Order from "@/models/order.model";
// // // import { NextRequest, NextResponse } from "next/server";

// // // export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
// // //   try {
// // //     await connectDB();

// // //     const { id } = await params;
// // //     const session = await auth();
// // //     const deliveryBoyId = session?.user?.id;

// // //     console.log("deliveryBoyId:", deliveryBoyId);

// // //     if (!deliveryBoyId) {
// // //       console.log("❌ unauthorized");
// // //       return NextResponse.json({ message: "unauthorize" }, { status: 400 });
// // //     }

// // //     const assignment = await DeliveryAssignment.findById(id);
// // //     console.log("assignment:", assignment);
// // //     console.log("assignment status:", assignment?.status);

// // //     if (!assignment) {
// // //       console.log("❌ assignment not found");
// // //       return NextResponse.json({ message: "assignment not found" }, { status: 400 });
// // //     }

// // //     if (assignment.status !== "broadcasted") {
// // //       console.log("❌ status is not broadcasted, it is:", assignment.status);
// // //       return NextResponse.json({ message: "assignment expired" }, { status: 400 });
// // //     }

// // //     const alreadyAssigned = await DeliveryAssignment.findOne({
// // //       assignedTo: deliveryBoyId,
// // //       status: { $nin: ["broadcasted", "completed"] },
// // //     });
// // //     console.log("alreadyAssigned:", alreadyAssigned);

// // //     if (alreadyAssigned) {
// // //       console.log("❌ already assigned to another order");
// // //       return NextResponse.json({ message: "already assigned to other order" }, { status: 400 });
// // //     }

// // //     assignment.assignedTo = deliveryBoyId;
// // //     assignment.status = "assigned";
// // //     assignment.acceptedAt = new Date();
// // //     await assignment.save();

// // //     const order = await Order.findById(assignment.order);
// // //     console.log("order:", order);

// // //     if (!order) {
// // //       console.log("❌ order not found");
// // //       return NextResponse.json({ message: "order not found" }, { status: 400 });
// // //     }

// // //     order.assignedDeliveryBoy = deliveryBoyId;
// // //     await order.save();

// // //     await DeliveryAssignment.updateMany(
// // //       {
// // //         _id: { $ne: assignment._id },
// // //         broadcastedTo: deliveryBoyId,
// // //         status: "broadcasted",
// // //       },
// // //       {
// // //         $pull: { broadcastedTo: deliveryBoyId },
// // //       }
// // //     );

// // //     return NextResponse.json({ message: "order accepted successfully" }, { status: 200 });

// // //   } catch (err) {
// // //     console.log("❌ ERROR:", err);
// // //     return NextResponse.json({ message: `accept assignment error ${err}` }, { status: 500 });
// // //   }
// // // }

// // import { auth } from "@/auth";
// // import connectDB from "@/lib/db";
// // import emitEventHandler from "@/lib/emitEventHandler";
// // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // import Order from "@/models/order.model";
// // import User from "@/models/user.model";
// // import { NextRequest, NextResponse } from "next/server";

// // export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
// //   try {
// //     await connectDB();

// //     const { id } = await params;
// //     const session = await auth();
// //     const deliveryBoyId = session?.user?.id;

// //     if (!deliveryBoyId) {
// //       return NextResponse.json({ message: "unauthorize" }, { status: 400 });
// //     }

// //     const assignment = await DeliveryAssignment.findById(id);

// //     if (!assignment) {
// //       return NextResponse.json({ message: "assignment not found" }, { status: 400 });
// //     }

// //     if (assignment.status !== "broadcasted") {
// //       return NextResponse.json({ message: "assignment expired" }, { status: 400 });
// //     }

// //     const alreadyAssigned = await DeliveryAssignment.findOne({
// //       assignedTo: deliveryBoyId,
// //       status: { $nin: ["broadcasted", "completed"] },
// //     });

// //     if (alreadyAssigned) {
// //       return NextResponse.json({ message: "already assigned to other order" }, { status: 400 });
// //     }

// //     assignment.assignedTo = deliveryBoyId;
// //     assignment.status = "assigned";
// //     assignment.acceptedAt = new Date();
// //     await assignment.save();

// //     const order = await Order.findById(assignment.order);
// //     if (!order) {
// //       return NextResponse.json({ message: "order not found" }, { status: 400 });
// //     }
// //     order.assignedDeliveryBoy = deliveryBoyId;
// //     await order.save();

// //     // Remove this delivery boy from other broadcasted assignments
// //     await DeliveryAssignment.updateMany(
// //       {
// //         _id: { $ne: assignment._id },
// //         broadcastedTo: deliveryBoyId,
// //         status: "broadcasted",
// //       },
// //       {
// //         $pull: { broadcastedTo: deliveryBoyId },
// //       }
// //     );

// //     // ✅ Emit to delivery boy's dashboard to clear all assignments
// //     const user = await User.findById(deliveryBoyId);
// //     if (user?.socketId) {
// //       await emitEventHandler("clear-assignments", { acceptedId: assignment._id }, user.socketId);
// //     }

// //     return NextResponse.json({ message: "order accepted successfully" }, { status: 200 });

// //   } catch (err) {
// //     console.log("❌ ERROR:", err);
// //     return NextResponse.json({ message: `accept assignment error ${err}` }, { status: 500 });
// //   }
// // }


// import { auth } from "@/auth";
// import connectDB from "@/lib/db";
// import emitEventHandler from "@/lib/emitEventHandler";
// import DeliveryAssignment from "@/models/deliveryAssignment.model";
// import Order from "@/models/order.model";
// import User from "@/models/user.model";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();

//     const { id } = await params;
//     const session = await auth();
//     const deliveryBoyId = session?.user?.id;

//     if (!deliveryBoyId) {
//       return NextResponse.json({ message: "unauthorize" }, { status: 400 });
//     }

//     const assignment = await DeliveryAssignment.findById(id);

//     if (!assignment) {
//       return NextResponse.json({ message: "assignment not found" }, { status: 400 });
//     }

//     if (assignment.status !== "broadcasted") {
//       return NextResponse.json({ message: "assignment expired" }, { status: 400 });
//     }

//     const alreadyAssigned = await DeliveryAssignment.findOne({
//       assignedTo: deliveryBoyId,
//       status: { $nin: ["broadcasted", "completed"] },
//     });

//     if (alreadyAssigned) {
//       return NextResponse.json({ message: "already assigned to other order" }, { status: 400 });
//     }

//     // ✅ Save other boys BEFORE modifying assignment
//     const otherBoyIds = assignment.broadcastedTo.filter(
//       (boyId: any) => String(boyId) !== String(deliveryBoyId)
//     );

//     assignment.assignedTo = deliveryBoyId;
//     assignment.status = "assigned";
//     assignment.acceptedAt = new Date();
//     await assignment.save();

//     const order = await Order.findById(assignment.order);
//     if (!order) {
//       return NextResponse.json({ message: "order not found" }, { status: 400 });
//     }
//     order.assignedDeliveryBoy = deliveryBoyId;
//     await order.save();

//     await DeliveryAssignment.updateMany(
//       {
//         _id: { $ne: assignment._id },
//         broadcastedTo: deliveryBoyId,
//         status: "broadcasted",
//       },
//       { $pull: { broadcastedTo: deliveryBoyId } }
//     );

//     // ✅ Clear ALL assignments from accepting boy's dashboard
//     const acceptingBoy = await User.findById(deliveryBoyId);
//     if (acceptingBoy?.socketId) {
//       await emitEventHandler("clear-assignments", {}, acceptingBoy.socketId);
//     }

//     // ✅ Remove ONLY this card from other boys' dashboards
//     for (const boyId of otherBoyIds) {
//       const boy = await User.findById(boyId);
//       if (boy?.socketId) {
//         await emitEventHandler(
//           "remove-assignment",
//           { assignmentId: String(assignment._id) },
//           boy.socketId
//         );
//       }
//     }

//     return NextResponse.json({ message: "order accepted successfully" }, { status: 200 });

//   } catch (err) {
//     console.log("❌ ERROR:", err);
//     return NextResponse.json({ message: `accept assignment error ${err}` }, { status: 500 });
//   }
// }



import { auth } from "@/auth";
import connectDB from "@/lib/db";
import emitEventHandler from "@/lib/emitEventHandler";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import Order from "@/models/order.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, context:{params:Promise <{id:string;}>;}) {
  try {
    await connectDB();

    const { id } = await context.params;
    const session = await auth();
    const deliveryBoyId = session?.user?.id;

    if (!deliveryBoyId) {
      return NextResponse.json({ message: "unauthorize" }, { status: 400 });
    }

    // ✅ Check if this delivery boy already has an active (unfinished) assignment
    const alreadyAssigned = await DeliveryAssignment.findOne({
      assignedTo: deliveryBoyId,
      status: "assigned",
    });

    if (alreadyAssigned) {
      return NextResponse.json(
        { message: "already assigned to other order" },
        { status: 400 }
      );
    }

    // ✅ Atomic accept — only succeeds if assignment is still "broadcasted".
    // Prevents two delivery boys from accepting the same order at once.
    const updatedAssignment = await DeliveryAssignment.findOneAndUpdate(
      { _id: id, status: "broadcasted" },
      { assignedTo: deliveryBoyId, status: "assigned", acceptedAt: new Date() },
      { new: true }
    );

    if (!updatedAssignment) {
      return NextResponse.json(
        { message: "assignment already taken or expired" },
        { status: 400 }
      );
    }

    // ✅ Save other broadcasted boys BEFORE we mutate anything else
    const otherBoyIds = updatedAssignment.broadcastedTo.filter(
      (boyId: any) => String(boyId) !== String(deliveryBoyId)
    );

    const order = await Order.findById(updatedAssignment.order);
    if (!order) {
      return NextResponse.json({ message: "order not found" }, { status: 400 });
    }
    order.assignedDeliveryBoy = deliveryBoyId;
    order.assignment = updatedAssignment._id;
    await order.save();


    await order.populate("assignedDeliveryBoy")
    await emitEventHandler("order-assigned",{orderId:order._id,assignedDeliveryBoy:order.assignedDeliveryBoy})

    // ✅ Remove this delivery boy from any other broadcasted assignments
    await DeliveryAssignment.updateMany(
      {
        _id: { $ne: updatedAssignment._id },
        broadcastedTo: deliveryBoyId,
        status: "broadcasted",
      },
      { $pull: { broadcastedTo: deliveryBoyId } }
    );

    

    // ✅ Clear ALL assignments from the accepting boy's dashboard
    const acceptingBoy = await User.findById(deliveryBoyId);
    if (acceptingBoy?.socketId) {
      await emitEventHandler("clear-assignments", {}, acceptingBoy.socketId);
    }

    // ✅ Remove ONLY this card from other boys' dashboards
    for (const boyId of otherBoyIds) {
      const boy = await User.findById(boyId);
      if (boy?.socketId) {
        await emitEventHandler(
          "remove-assignment",
          { assignmentId: String(updatedAssignment._id) },
          boy.socketId
        );
      }
    }

    return NextResponse.json(
      { message: "order accepted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log("❌ ERROR:", err);
    return NextResponse.json(
      { message: `accept assignment error ${err}` },
      { status: 500 }
    );
  }
}