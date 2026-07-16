// // import { io, Socket } from "socket.io-client"

// // let socket:Socket|null=null

// // export const getScoket=()=>{
// //     if(!socket){
// //         socket=io(process.env.NEXT_PUBLIC_SOCKET_SERVER)

// //     }
// //     return socket

// // }

// import { io, Socket } from "socket.io-client"

// let socket: Socket | null = null

// export const getScoket = () => {
//     if (!socket) {
//         socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER!)
//         socket.on("connect", () => {
//             console.log("Socket connected:", socket?.id)
//         })
//     }
//     return socket
// }


import { io, Socket } from "socket.io-client"

let socket: Socket | null = null

export const getSocket = () => {   // fixed: getScoket -> getSocket
    if (!socket) {
        socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER!)
        socket.on("connect", () => {
            console.log("Socket connected:", socket?.id)
        })
    }
    return socket
}