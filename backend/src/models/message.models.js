import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            lowercase:true         
        },
        message:{
            type:String,
            required:true,
        }
    },{timestamps:true})

export const MessageModel = mongoose.model("message", MessageSchema)