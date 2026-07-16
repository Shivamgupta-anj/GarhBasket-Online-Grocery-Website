// import mongoose, { mongo } from "mongoose";

// interface IDeliveryAssignment{
//     _id?:mongoose.Types.ObjectId,
//     order:mongoose.Types.ObjectId,
//     brodcastedTo:mongoose.Types.ObjectId,
//     assignedTo:mongoose.Types.ObjectId,
//     status:"brocasted" | "assigned" | "completed"
//     acceptedAt:Date,
//     createdAt?:Date,
//     updatedAt?:Date
// }

// const deliveryAssignmentSchema = new mongoose.Schema<IDeliveryAssignment>({
//     order:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"order"
//     },
//     brodcastedTo:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"User"
//         }
//     ],
//     assignedTo:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"

//     },
//     status:{
//         type:String,
//         enum:["broadcasted","assigned","completed"],
//         default:"brocasted"
//     },
//     acceptedAt:{
//         type:Date
//     },






// },{timestamps:true})

// const DeliveryAssignment=mongoose.models.DeliveryAssignment || mongoose.model("DeliveryAssignment",deliveryAssignmentSchema)

// export default DeliveryAssignment

import mongoose from "mongoose";

export interface IDeliveryAssignment {
    _id?: mongoose.Types.ObjectId,
    order: mongoose.Types.ObjectId,
    broadcastedTo: mongoose.Types.ObjectId[],   // ✅ fixed spelling + array type
    assignedTo: mongoose.Types.ObjectId,
    status: "broadcasted" | "assigned" | "completed"  // ✅ fixed spelling
    acceptedAt: Date,
    createdAt?: Date,
    updatedAt?: Date
}

const deliveryAssignmentSchema = new mongoose.Schema<IDeliveryAssignment>({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    broadcastedTo: [               // ✅ fixed spelling
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["broadcasted", "assigned", "completed"],  // ✅ fixed spelling
        default: "broadcasted"                           // ✅ fixed spelling
    },
    acceptedAt: {
        type: Date
    },
}, { timestamps: true })

const DeliveryAssignment = mongoose.models.DeliveryAssignment || mongoose.model("DeliveryAssignment", deliveryAssignmentSchema)

export default DeliveryAssignment