import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    encryptedPassword:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true,
    },
},{timestamps:true})

export const UserModels = mongoose.model("user", UserSchema)
