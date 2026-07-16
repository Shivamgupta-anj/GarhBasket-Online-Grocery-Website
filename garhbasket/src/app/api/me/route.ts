import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import { auth } from '@/auth';

export async function GET(req: NextRequest) {
    try {
        const session = await auth();  // ✅ Fix 1: was stored in `user`, should be `session`

        if (!session || !session.user) {
            return NextResponse.json(
                { message: "user is not authenticated" },
                { status: 401 }  // ✅ Fix 2: 401 is correct for unauthenticated, not 400
            );
        }

        const user = await User.findOne({ email: session.user.email }).select("-password");

        if (!user) {
            return NextResponse.json(
                { message: "user not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(user, { status: 200 });

    } catch (err) {
        return NextResponse.json(
            { message: `error : ${err}` },
            { status: 500 }
        );
    }  // ✅ Fix 3: removed extra closing brace `}`
}