declare module "next-auth" {
    interface User {
        id:string,
        name:string,
        email:string,
        role:string,
    }


}

export {}

// import { DefaultSession } from "next-auth"

// declare module "next-auth" {
//     interface User {
//         id: string
//         name: string
//         email: string
//         role: string
//         mobile?: string
//         image?: string
//         roleSelected?: boolean
//     }

//     interface Session {
//         user: {
//             id: string
//             role: string
//             mobile?: string
//             roleSelected?: boolean
//         } & DefaultSession["user"]
//     }
// }

// declare module "next-auth/jwt" {
//     interface JWT {
//         id: string
//         role: string
//         mobile?: string
//         roleSelected?: boolean
//     }
// }

// export {}