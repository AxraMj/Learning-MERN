import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected successfully")
    }
    catch(error){
        console.error(`ERROR:${error.mesaage}`)
        process.getMaxListeners(1)
    }
}

export default connectDb