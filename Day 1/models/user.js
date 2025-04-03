import mongoose from 'mongoose';

const useSchema= new mongoose.Schema({
    name:{
        type:String},

    email:{
        type:String,
        unique:true,

    },
    age:{
        type:Number,
    },
    createdAt:{
        type:Date,
    },
    
})

const userModel=mongoose.model('user',useSchema);

export default userModel;
