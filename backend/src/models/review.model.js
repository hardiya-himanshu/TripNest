import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    userid:
    {
        type:String,
        required:true,
        unique:true
    },
    destinationName:
    {
        type:String,
        required:true,
    },
    review:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        required:true
    },
},{timestamps:true})

export const ReviewModel = mongoose.model("review", ReviewSchema)
