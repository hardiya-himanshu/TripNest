import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    userId:
    {
        type:String,uniqueItems:false
    },
    userName:
    {
        type:String
    },
    destinationName:
    {
        type:String,
        required:true,
        duplicate:true
    },
    review:
    {
        type:String,
        required:true,
        duplicate:true
    },
    date:
    {
        type:String,
        required:true,
        duplicate:true
    },
},{timestamps:true})

export const ReviewModel = mongoose.model("review", ReviewSchema)
