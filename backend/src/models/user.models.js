import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:
    {
        type:String,
        required:true,
        // unique:true
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
    avatar:
    {
        type:String,
        unique:true
    },
    // cloudinaryId: 
    // {
    //     type: String,
    // },
    transactionHistory:[
        {
            date:String,
            destinationName:String,
            amount:String,
            status:String,
            // receipt:String
        }
    ]
},{timestamps:true})

export const UserModels = mongoose.model("user", UserSchema)
