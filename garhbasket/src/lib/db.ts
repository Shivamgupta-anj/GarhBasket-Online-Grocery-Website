// import mongoose from "mongoose";


// const mongodbUrl =  process.env.MONGODB_URL

// if (!mongodbUrl){
//     throw new Error("DB Error");
// }

// let cached =  global.mongoose 
// if (!cached){
//     cached = global.mongoose = { conn : null, promise : null }
// }

// const connectDB = async () => {
//     if (cached.conn){
//         return cached.conn
//     }
//     if(!cached.promise){
//         cached.promise = mongoose.connect (mongodbUrl).then((conn)=>
//             conn.connection
//         )
//     }

//     try{
//         const conn = await cached.promise 
//         return conn

//     }catch(err){
//         console.log(err)

//     }
// }

// export default connectDB
import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
  throw new Error("DB Error");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongodbUrl, {
        serverSelectionTimeoutMS: 5000, // fail fast instead of buffering for 10s+
      })
      .then((conn) => conn.connection);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    cached.promise = null; // reset so the next call actually retries
    console.log(err);
    throw err; // let the caller know the connection failed
  }
};

export default connectDB;