// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import connectDB from "./lib/db";
// import bcrypt from "bcryptjs";
// import User from "./models/user.model"; 
// import Google from "next-auth/providers/google";
// export const {handlers,signIn,signOut,auth}=NextAuth({
//     providers:[
//         Credentials({
//             credentials:{
//                 email:{label:"email",type:"email"},
//                 password:{label:"password",type:"password"},
//             },
//             async authorize(credentials,request){
//                 try{
//                     await connectDB()
//                     const email = credentials.email
//                     const password = credentials.password as string
//                     const user = await User.findOne({email})

//                     if(!user){
//                         throw new Error ("User does not exist")
//                     }

//                     const isMatch = await bcrypt.compare(password,user.password)

//                     if(!isMatch){
//                         throw new Error ("Invalid password")
//                     }

//                     return {
//                         id:user._id.toString(),
//                         email:user.email,
//                         name:user.name,
//                         role:user.role,
//                     }


//                 } catch (error) {
//                     throw new Error ("Error occurred while authorizing user")
//                 }
//                 },

//         }),
//         Google({
//             clientId:process.env.GOOGLE_CLIENT_ID ,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,


//         })
//     ],
//     callbacks:{

//         async signIn({user,account}){
//             if(account?.provider === "google"){
//                 await connectDB()
//                 let dbUser= await User.findOne({email:user.email})

//                 if(!dbUser){
//                     dbUser=await User.create({
//                         name:user.name,
//                         email:user.email,
//                         image:user.image,
//                     }) 
//                 }else {
//             // ✅ ADD THIS — update image if user already exists
//             if(user.image && !dbUser.image){
//                 await User.findByIdAndUpdate(dbUser._id, { image: user.image })
//             }
//         }

//                 user.id=dbUser._id.toString()
//                 user.role=dbUser.role

//             }
//             return true

//         },




//         jwt({token,user}){
//             if(user){
//                 token.id=user.id
//                 token.name=user.name
//                 token.email=user.email
//                 token.role=user.role
//                 token.image = user.image 
//             }
//             return token

//         },
//         session({session,token}){
//             if(session.user){
//                 session.user.id = token.id as string;
//                 session.user.name = token.name as string;
//                 session.user.email = token.email as string;
//                 session.user.role = token.role as string;
//                 session.user.image = token.image as string 
//             }
//             return session
//         }

//     },

//     pages:{
//         signIn:"/login",
//         error:"/login",

//     },
//     session:{
//         strategy:"jwt",
//         maxAge: 30 * 24 * 60 * 60*1000, // 30 days
//     },
//     secret: process.env.AUTH_SECRET,
// }) 


import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import connectDB from "./lib/db";
import User from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email:    { label: "Email",    type: "email"    },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    await connectDB();
                    const user = await User.findOne({ email: credentials.email });

                    if (!user) throw new Error("User does not exist");

                    const isMatch = await bcrypt.compare(
                        credentials.password as string,
                        user.password
                    );
                    if (!isMatch) throw new Error("Invalid password");

                    return {
                        id:     user._id.toString(),
                        email:  user.email,
                        name:   user.name,
                        role:   user.role,
                        mobile: user.mobile,
                        image:  user.image,
                    };
                } catch (error) {
                    if (error instanceof Error) throw error;
                    throw new Error("Unexpected error during login");
                }
            },
        }),
        Google({
            clientId:     process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === "google" && profile?.email) {
                await connectDB();
                const existing = await User.findOne({ email: profile.email });

                if (!existing) {
                    await User.create({
                        name:  profile.name,
                        email: profile.email,
                        image: profile.picture,
                    });
                } else if (profile.picture && !existing.image) {
                    await User.findByIdAndUpdate(existing._id, { image: profile.picture });
                }
            }
            return true;
        },

        async jwt({ token, user, account, profile, trigger }) {

            // ✅ Hard reload hone par — DB se fresh data lo (window.location.href wala case)
            if (trigger === "update" || (!user && !account)) {
                if (token.email) {
                    await connectDB();
                    const dbUser = await User.findOne({ email: token.email });
                    if (dbUser) {
                        token.id     = dbUser._id.toString();
                        token.role   = dbUser.role;
                        token.mobile = dbUser.mobile;
                        token.image  = dbUser.image;
                    }
                }
                return token;
            }

            // ✅ Google login — DB se role aur mobile fetch karo
            if (account?.provider === "google" && profile?.email) {
                await connectDB();
                const dbUser = await User.findOne({ email: profile.email });
                if (dbUser) {
                    token.id     = dbUser._id.toString();
                    token.role   = dbUser.role;
                    token.mobile = dbUser.mobile;
                    token.image  = dbUser.image ?? profile.picture;
                }
            }

            // ✅ Credentials login
            if (user) {
                token.id     = user.id;
                token.name   = user.name;
                token.email  = user.email;
                token.role   = (user as any).role;
                token.mobile = (user as any).mobile;
                token.image  = user.image;
            }

            return token;
        },

        session({ session, token }) {
            if (session.user) {
                session.user.id              = token.id     as string;
                session.user.name            = token.name   as string;
                session.user.email           = token.email  as string;
                (session.user as any).role   = token.role;
                (session.user as any).mobile = token.mobile;
                session.user.image           = token.image  as string;
            }
            return session;
        },
    },

    pages: {
        signIn: "/login",
        error:  "/login",
    },

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    },

    secret: process.env.AUTH_SECRET,
});