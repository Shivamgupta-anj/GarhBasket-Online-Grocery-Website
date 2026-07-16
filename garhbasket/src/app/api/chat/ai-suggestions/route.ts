// import connectDB from "@/lib/db";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST (req:NextRequest){
//     try{
//         await connectDB()

//         const {message,role}= await req.json()
//         const prompt = `You are a professional delivery assistant chatbot.
        
//         You will be given:
//         - role: either "user" or "delivery_boy"
//         - last message: the last message sent in the conversation

//         Your task:
//         If the role is "user" -> generate 3 short WhatsApp-style reply suggestions that a user could send to the delivery boy.
//         If the role is "delivery_boy" -> generate 3 short whatsApp-style reply suggestions that a delivery boy could send to the user.

//         Follow these rules:
//         - Replies must match the context of the last message.
//         - Keep replies short, human-like {max 10 words}.
//         - use emojis naturally {max one per reply}.
//         - No generic replies like "Okay" or "Thank You".
//         - Must be helpful, respectful, and relevant to delivery, status , help, or location.
//         - No numbering, No extra instructions, No extra text.
//         - Just return comma-separated reply suggestions.

//         Return only the three reply suggestions, comma-separated.

//         Role:${role}
//         Last message:${message}
//         `

//         const response = await fetch (`https://generativelanguage.googleapis.com/v1beta/interactions?key=${process.env.GEMINI_API_KEY}`,{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                 "content":[
//                     {
//                         "parts":[
//                             {
//                                 "text":prompt
//                             }
//                         ]
//                     }
//                 ]
//             })

//         })

//         const data = await response.json()
//         const replyText= data.candidates?.[0].content.parts
//         ?.[0].text || ""

//         const suggestions = replyText.split(",")
//         .map((s:string)=>s.trim())
//         return NextResponse.json(
//             data,{status:200}
//         )
//     }catch(err){
//         return NextResponse.json(
//             {message:`gemini error ${err}`},
//             {status:200}
//         )

//     }



// }


import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB()

        const { message, role } = await req.json()
        const prompt = `You are a professional delivery assistant chatbot.
        
        You will be given:
        - role: either "user" or "delivery_boy"
        - last message: the last message sent in the conversation

        Your task:
        If the role is "user" -> generate 3 short WhatsApp-style reply suggestions that a user could send to the delivery boy.
        If the role is "delivery_boy" -> generate 3 short whatsApp-style reply suggestions that a delivery boy could send to the user.

        Follow these rules:
        - Replies must match the context of the last message.
        - Keep replies short, human-like {max 10 words}.
        - use emojis naturally {max one per reply}.
        - No generic replies like "Okay" or "Thank You".
        - Must be helpful, respectful, and relevant to delivery, status, help, or location.
        - No numbering, No extra instructions, No extra text.
        - Just return comma-separated reply suggestions.

        Return only the three reply suggestions, comma-separated.

        Role: ${role}
        Last message: ${message}
        `

        // CORRECT endpoint: models/{model}:generateContent — NOT /interactions
        const response = await fetch(
            // `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [       // <-- must be "contents", not "content"
                        {
                            parts: [
                                { text: prompt }
                            ]
                        }
                    ]
                })
            }
        )

        console.log("Gemini response status:", response.status)
        const rawText = await response.text()
        console.log("Gemini raw response:", rawText)

        if (!response.ok) {
            return NextResponse.json(
                { message: "Gemini API error", raw: rawText },
                { status: 500 }
            )
        }

        const data = JSON.parse(rawText)
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

        const suggestions = replyText
            .split(",")
            .map((s: string) => s.trim())
            .filter(Boolean)

        // return the parsed suggestions, not the raw Gemini payload
        return NextResponse.json(
            { suggestions },
            { status: 200 }
        )

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: `gemini error ${err}` },
            { status: 500 }
        )
    }
}