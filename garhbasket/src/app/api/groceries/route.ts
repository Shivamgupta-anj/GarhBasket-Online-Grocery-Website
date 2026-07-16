// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";        // your db connection
// import { GroceryModel } from "@/models/grocery.model";

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Grocery from "@/models/grocery.model";

export async function GET() {
  await connectDB();
  const groceries = await Grocery.find({});
  return NextResponse.json(groceries);
}