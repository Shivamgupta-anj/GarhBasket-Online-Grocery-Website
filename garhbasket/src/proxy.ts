// // import { getToken } from 'next-auth/jwt'
// // import { NextRequest, NextResponse } from 'next/server'

// // export async function proxy(req: NextRequest) {
// //     const { pathname } = req.nextUrl

// //     const publicRoutes = [
// //         "/login",
// //         "/register",
// //         "/unauthorized",
// //         "/api/auth",
// //         "/api/user/edit-role-mobile",
// //         "/setup",
// //     ]

// //     if (publicRoutes.some((path) => pathname.startsWith(path))) {
// //         return NextResponse.next()
// //     }

// //     const token = await getToken({ req, secret: process.env.AUTH_SECRET })

// //     if (!token) {
// //         const loginUrl = new URL("/login", req.url)
// //         loginUrl.searchParams.set("callbackUrl", req.url)
// //         return NextResponse.redirect(loginUrl)
// //     }

// //     const role = token.role as string

// //     if (!role) {
// //         return NextResponse.redirect(new URL("/setup", req.url))
// //     }

// //     if (pathname === "/") {
// //         return NextResponse.next()
// //     }

// //     const rolePrefixMap: Record<string, string> = {
// //         user:        "/user",
// //         deliveryBoy: "/delivery",
// //         admin:       "/admin",
// //     }

// //     const allowedPrefix = rolePrefixMap[role]

// //     if (!allowedPrefix || !pathname.startsWith(allowedPrefix)) {
// //         return NextResponse.redirect(new URL("/unauthorized", req.url))
// //     }

// //     return NextResponse.next()
// // }

// // export const config = {
// //     matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
// // }


// import { getToken } from 'next-auth/jwt'
// import { NextRequest, NextResponse } from 'next/server'

// export async function proxy(req: NextRequest) {
//     const { pathname } = req.nextUrl

//     const publicRoutes = [
//         "/login",
//         "/register",
//         "/unauthorized",
//         "/api/auth",
//         "/api/user/edit-role-mobile",
//         "/setup",
//     ]

//     if (publicRoutes.some((path) => pathname.startsWith(path))) {
//         return NextResponse.next()
//     }

//     const token = await getToken({ req, secret: process.env.AUTH_SECRET })

//     // ✅ Token nahi hai — login pe bhejo
//     if (!token) {
//         const loginUrl = new URL("/login", req.url)
//         loginUrl.searchParams.set("callbackUrl", req.url)
//         return NextResponse.redirect(loginUrl)
//     }

//     const role   = token.role   as string | undefined
//     const mobile = token.mobile as string | undefined

//     // ✅ Role ya mobile nahi hai — setup pe bhejo
//     if (!role || !mobile) {
//         return NextResponse.redirect(new URL("/setup", req.url))
//     }

//     // ✅ Home page — sabko allow karo
//     if (pathname === "/") {
//         return NextResponse.next()
//     }

//     const rolePrefixMap: Record<string, string> = {
//         user:        "/user",
//         deliveryBoy: "/delivery",
//         admin:       "/admin",
//     }

//     const allowedPrefix = rolePrefixMap[role]

//     if (!allowedPrefix || !pathname.startsWith(allowedPrefix)) {
//         return NextResponse.redirect(new URL("/unauthorized", req.url))
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
// }


// import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl

    const publicRoutes = [
        "/login",
        "/register",
        "/unauthorized",
        "/api",
        
        "/setup",
    ]

    if (publicRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.next()
    }

    // const token = await getToken({ req, secret: process.env.AUTH_SECRET })
    const session = await auth()

    // ✅ Token nahi hai — login pe bhejo
    if (!session) {
        const loginUrl = new URL("/login", req.url)
        loginUrl.searchParams.set("callbackUrl", req.url)
        return NextResponse.redirect(loginUrl)
    }

    const role   = session.user?.role   as string | undefined
    // const mobile = session.user?.mobile as string | undefined

    // ✅ Role ya mobile nahi hai — setup pe bhejo
    if (!role) {
        return NextResponse.redirect(new URL("/setup", req.url))
    }

    // ✅ Home page — sabko allow karo
    if (pathname === "/") {
        return NextResponse.next()
    }

    const rolePrefixMap: Record<string, string> = {
        user:        "/user",
        deliveryBoy: "/delivery",
        admin:       "/admin",
    }

    const allowedPrefix = rolePrefixMap[role]

    if (!allowedPrefix || !pathname.startsWith(allowedPrefix)) {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    return NextResponse.next()
}

// export const config = {
//     matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
// }

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
}