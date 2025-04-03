import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const product=mongoose.model('Product',productSchema)
export default product