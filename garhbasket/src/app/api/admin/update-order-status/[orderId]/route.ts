// import connectDB from "@/lib/db";
// import emitEventHandler from "@/lib/emitEventHandler";
// import DeliveryAssignment from "@/models/deliveryAssignment.model";
// import Order from "@/models/order.model";
// import User from "@/models/user.model";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest, { params }: { params: { orderId: string } }) {
//   try {
//     await connectDB();
//     const { orderId } = await params;
//     const { status } = await req.json();

//     const order = await Order.findById(orderId).populate("user");
//     if (!order) {
//       return NextResponse.json({ message: "Order not found" }, { status: 404 });
//     }

//     order.status = status;
//     let deliveryBoysPayload: any[] = [];

//     if (status === "Out for Delivery" && !order.assignment) {
//       const { latitude, longitude } = order.address;

//       const nearByDeliveryBoys = await User.find({
//         role: "deliveryBoy",
//         location: {
//           $near: {
//             $geometry: { type: "Point", coordinates: [Number(longitude), Number(latitude)] },
//             $maxDistance: 15000,
//           },
//         },
//       });

//       const nearByIds = nearByDeliveryBoys.map((b) => b._id);

//       const busyAssignments = await DeliveryAssignment.find({
//         status: { $nin: ["completed"] },
//         $or: [
//           { assignedTo: { $in: nearByIds } },
//           { broadcastedTo: { $in: nearByIds } },
//         ],
//       });

//       const busyIdSet = new Set<string>();
//       busyAssignments.forEach((a) => {
//         if (a.assignedTo) busyIdSet.add(String(a.assignedTo));
//         a.broadcastedTo.forEach((id: any) => busyIdSet.add(String(id)));
//       });

//       const availableDeliveryBoys = nearByDeliveryBoys.filter(
//         (b) => !busyIdSet.has(String(b._id))
//       );
//       const candidates = availableDeliveryBoys.map((b) => b._id);

//       if (candidates.length === 0) {
//         await order.save();
//         await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });
//         return NextResponse.json({ message: "No available delivery boys nearby" }, { status: 200 });
//       }

//       const deliveryAssignment = await DeliveryAssignment.create({
//         order: order._id,
//         broadcastedTo: candidates,
//         status: "broadcasted",
//       });

    
//     //   for(const boyId of candidates){
//     //     const boy = await User.findById(boyId)
//     //     if(boy.socketId){
//     //         await emitEventHandler("new-assignment",deliveryAssignment,boy.socketId)
//     //     }
//     //   }

//     await deliveryAssignment.populate("order");


//     for(const boyId of candidates){
//     const boy = await User.findById(boyId)
   
//     if(boy.socketId){
//         await emitEventHandler("new-assignment", deliveryAssignment, boy.socketId)
        
//     } else {
//         console.log("No socketId for boy:", boy.name)
//     }
// }

//       order.assignment = deliveryAssignment._id;
//       deliveryBoysPayload = availableDeliveryBoys.map((b) => ({
//         id: b._id,
//         name: b.name,
//         mobile: b.mobile,
//         latitude: b.location.coordinates[1],
//         longitude: b.location.coordinates[0],
//       }));
//     }

//     await order.save();
//     await order.populate("user");
//     await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });

//     return NextResponse.json({
//       message: "Order status updated successfully",
//       assignment: order.assignment?._id ?? null,
//       availableBoys: deliveryBoysPayload,
//     }, { status: 200 });

//   } catch (err) {
//     console.error("update status error:", err);
//     return NextResponse.json({
//       message: `Update status error: ${err instanceof Error ? err.message : String(err)}`,
//     }, { status: 500 });
//   }
// }


// // import connectDB from "@/lib/db";
// // import emitEventHandler from "@/lib/emitEventHandler";
// // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // import Order from "@/models/order.model";
// // import User from "@/models/user.model";
// // import { NextRequest, NextResponse } from "next/server";

// // export async function POST(req: NextRequest, { params }: { params: { orderId: string } }) {
// //   try {
// //     await connectDB();
// //     const { orderId } = await params;
// //     const { status } = await req.json();

// //     const order = await Order.findById(orderId).populate("user");
// //     if (!order) {
// //       return NextResponse.json({ message: "Order not found" }, { status: 404 });
// //     }

// //     order.status = status;
// //     let deliveryBoysPayload: any[] = [];

// //     if (status === "Out for Delivery" && !order.assignment) {
// //       const { latitude, longitude } = order.address;

// //       console.log("📍 latitude:", latitude, "longitude:", longitude) // ✅

// //       const nearByDeliveryBoys = await User.find({
// //         role: "deliveryBoy",
// //         location: {
// //           $near: {
// //             $geometry: { type: "Point", coordinates: [Number(longitude), Number(latitude)] },
// //             $maxDistance: 15000,
// //           },
// //         },
// //       });

// //       console.log("👦 nearByDeliveryBoys found:", nearByDeliveryBoys.length) // ✅

// //       const nearByIds = nearByDeliveryBoys.map((b) => b._id);

// //       const busyAssignments = await DeliveryAssignment.find({
// //         status: { $nin: ["completed"] },
// //         $or: [
// //           { assignedTo: { $in: nearByIds } },
// //           { broadcastedTo: { $in: nearByIds } },
// //         ],
// //       });

// //       const busyIdSet = new Set<string>();
// //       busyAssignments.forEach((a) => {
// //         if (a.assignedTo) busyIdSet.add(String(a.assignedTo));
// //         a.broadcastedTo.forEach((id: any) => busyIdSet.add(String(id)));
// //       });

// //       console.log("🔴 busyIdSet:", [...busyIdSet]) // ✅

// //       const availableDeliveryBoys = nearByDeliveryBoys.filter(
// //         (b) => !busyIdSet.has(String(b._id))
// //       );
// //       const candidates = availableDeliveryBoys.map((b) => b._id);

// //       console.log("✅ candidates:", candidates) // ✅

// //       if (candidates.length === 0) {
// //         await order.save();
// //         await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });
// //         return NextResponse.json({ message: "No available delivery boys nearby" }, { status: 200 });
// //       }

// //       const deliveryAssignment = await DeliveryAssignment.create({
// //         order: order._id,
// //         broadcastedTo: candidates,
// //         status: "broadcasted",
// //       });

// //       await deliveryAssignment.populate("order");

// //       for(const boyId of candidates){
// //         const boy = await User.findById(boyId)
// //         console.log("🔔 Emitting to boy:", boy.name, "socketId:", boy.socketId) // ✅
// //         if(boy.socketId){
// //           await emitEventHandler("new-assignment", deliveryAssignment, boy.socketId)
// //         } else {
// //           console.log("❌ No socketId for boy:", boy.name)
// //         }
// //       }

// //       order.assignment = deliveryAssignment._id;
// //       deliveryBoysPayload = availableDeliveryBoys.map((b) => ({
// //         id: b._id,
// //         name: b.name,
// //         mobile: b.mobile,
// //         latitude: b.location.coordinates[1],
// //         longitude: b.location.coordinates[0],
// //       }));
// //     }

// //     await order.save();
// //     await order.populate("user");
// //     await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });

// //     return NextResponse.json({
// //       message: "Order status updated successfully",
// //       assignment: order.assignment?._id ?? null,
// //       availableBoys: deliveryBoysPayload,
// //     }, { status: 200 });

// //   } catch (err) {
// //     console.error("update status error:", err);
// //     return NextResponse.json({
// //       message: `Update status error: ${err instanceof Error ? err.message : String(err)}`,
// //     }, { status: 500 });
// //   }
// // }

// // //////////////////////////////////
// // // import connectDB from "@/lib/db";
// // // import emitEventHandler from "@/lib/emitEventHandler";
// // // import DeliveryAssignment from "@/models/deliveryAssignment.model";
// // // import Order from "@/models/order.model";
// // // import User from "@/models/user.model";
// // // import { NextRequest, NextResponse } from "next/server";

// // // export async function POST(req: NextRequest, { params }: { params: { orderId: string } }) {
// // //   try {
// // //     await connectDB();
// // //     const { orderId } = await params;
// // //     const { status } = await req.json();

// // //     const order = await Order.findById(orderId).populate("user");
// // //     if (!order) {
// // //       return NextResponse.json({ message: "Order not found" }, { status: 404 });
// // //     }

// // //     order.status = status;
// // //     let deliveryBoysPayload: any[] = [];

// // //     if (status === "Out for Delivery" && !order.assignment) {
// // //       const { latitude, longitude } = order.address;

// // //       console.log("📍 latitude:", latitude, "longitude:", longitude)

// // //       const nearByDeliveryBoys = await User.find({
// // //         role: "deliveryBoy",
// // //         location: {
// // //           $near: {
// // //             $geometry: { type: "Point", coordinates: [Number(longitude), Number(latitude)] },
// // //             $maxDistance: 15000,
// // //           },
// // //         },
// // //       });

// // //       console.log("👦 nearByDeliveryBoys found:", nearByDeliveryBoys.length)

// // //       const nearByIds = nearByDeliveryBoys.map((b) => b._id);

// // //       // ✅ Sirf "assigned" wale busy hain — "broadcasted" wale nahi
// // //       const busyAssignments = await DeliveryAssignment.find({
// // //         status: { $in: ["assigned"] },
// // //         assignedTo: { $in: nearByIds },
// // //       });

// // //       const busyIdSet = new Set<string>();
// // //       busyAssignments.forEach((a) => {
// // //         if (a.assignedTo) busyIdSet.add(String(a.assignedTo));
// // //       });

// // //       console.log("🔴 busyIdSet:", [...busyIdSet])

// // //       const availableDeliveryBoys = nearByDeliveryBoys.filter(
// // //         (b) => !busyIdSet.has(String(b._id))
// // //       );
// // //       const candidates = availableDeliveryBoys.map((b) => b._id);

// // //       console.log("✅ candidates:", candidates)

// // //       if (candidates.length === 0) {
// // //         await order.save();
// // //         await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });
// // //         return NextResponse.json({ message: "No available delivery boys nearby" }, { status: 200 });
// // //       }

// // //       const deliveryAssignment = await DeliveryAssignment.create({
// // //         order: order._id,
// // //         broadcastedTo: candidates,
// // //         status: "broadcasted",
// // //       });

// // //       await deliveryAssignment.populate("order");

// // //       for (const boyId of candidates) {
// // //         const boy = await User.findById(boyId)
// // //         console.log("🔔 Emitting to boy:", boy.name, "socketId:", boy.socketId)
// // //         if (boy.socketId) {
// // //           await emitEventHandler("new-assignment", deliveryAssignment, boy.socketId)
// // //         } else {
// // //           console.log("❌ No socketId for boy:", boy.name)
// // //         }
// // //       }

// // //       order.assignment = deliveryAssignment._id;
// // //       deliveryBoysPayload = availableDeliveryBoys.map((b) => ({
// // //         id: b._id,
// // //         name: b.name,
// // //         mobile: b.mobile,
// // //         latitude: b.location.coordinates[1],
// // //         longitude: b.location.coordinates[0],
// // //       }));
// // //     }

// // //     await order.save();
// // //     await order.populate("user");
// // //     await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });

// // //     return NextResponse.json({
// // //       message: "Order status updated successfully",
// // //       assignment: order.assignment?._id ?? null,
// // //       availableBoys: deliveryBoysPayload,
// // //     }, { status: 200 });

// // //   } catch (err) {
// // //     console.error("update status error:", err);
// // //     return NextResponse.json({
// // //       message: `Update status error: ${err instanceof Error ? err.message : String(err)}`,
// // //     }, { status: 500 });
// // //   }
// // // }



import connectDB from "@/lib/db";
import emitEventHandler from "@/lib/emitEventHandler";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import Order from "@/models/order.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, context:{params:Promise <{orderId:string;}>;} ) {
  try {
    await connectDB();
    const { orderId } = await context.params;
    const { status } = await req.json();

    const order = await Order.findById(orderId).populate("user");
    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    order.status = status;
    let deliveryBoysPayload: any[] = [];

    if (status === "Out for Delivery" && !order.assignment) {
      const { latitude, longitude } = order.address;

      const nearByDeliveryBoys = await User.find({
        role: "deliveryBoy",
        location: {
          $near: {
            $geometry: { type: "Point", coordinates: [Number(longitude), Number(latitude)] },
            $maxDistance: 15000,
          },
        },
      });

      const nearByIds = nearByDeliveryBoys.map((b) => b._id);

  
      const busyAssignments = await DeliveryAssignment.find({
        status: { $in: ["assigned"] },
        assignedTo: { $in: nearByIds },
      });

      const busyIdSet = new Set<string>();
      busyAssignments.forEach((a) => {
        if (a.assignedTo) busyIdSet.add(String(a.assignedTo));
      });

      const availableDeliveryBoys = nearByDeliveryBoys.filter(
        (b) => !busyIdSet.has(String(b._id))
      );
      const candidates = availableDeliveryBoys.map((b) => b._id);

      if (candidates.length === 0) {
        await order.save();
        await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });
        return NextResponse.json({ message: "No available delivery boys nearby" }, { status: 200 });
      }

      const deliveryAssignment = await DeliveryAssignment.create({
        order: order._id,
        broadcastedTo: candidates,
        status: "broadcasted",
      });

      await deliveryAssignment.populate("order");

      for (const boyId of candidates) {
        const boy = await User.findById(boyId);
        if (boy.socketId) {
          await emitEventHandler("new-assignment", deliveryAssignment, boy.socketId);
        } else {
          console.log("❌ No socketId for boy:", boy.name);
        }
      }

      order.assignment = deliveryAssignment._id;
      deliveryBoysPayload = availableDeliveryBoys.map((b) => ({
        id: b._id,
        name: b.name,
        mobile: b.mobile,
        latitude: b.location.coordinates[1],
        longitude: b.location.coordinates[0],
      }));
    }

    await order.save();
    await order.populate("user");
    await emitEventHandler("order-status-update", { orderId: order._id, status: order.status });

    return NextResponse.json({
      message: "Order status updated successfully",
      assignment: order.assignment?._id ?? null,
      availableBoys: deliveryBoysPayload,
    }, { status: 200 });

  } catch (err) {
    console.error("update status error:", err);
    return NextResponse.json({
      message: `Update status error: ${err instanceof Error ? err.message : String(err)}`,
    }, { status: 500 });
  }
}