import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/db.js'
import {UserModels} from './models/user.models.js'

dotenv.config({
    path:'./.env'
})

const port  = process.env.PORT || 3001

connectDB()


// app.post("/login", (req,res)=>{
//     const {email, password} = req.body
//     UserModels.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password===password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("The password is incorrect")
//             }
//             }
//         else
//         {
//             res.json("No record existed")
//         }
//         })
        
// })

// app.post("/register", (req,res)=>{
//     const {email} = req.body
//     UserModels.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.email===email){
//                 res.json("Please Login")
//             }
            
//             }
//         else
//         {
//             res.json("Success")
//             UserModels.create(req.body).then(user=>res.json(user)).catch(err=>res.json(err))
//         }
//         })
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on ${port}`);
// })



app.post("/login", async(req,res)=>{
    const{email, password} =req.body

    try {
        const check = await UserModels.findOne({email:email})
        const check2 = await UserModels.findOne({password:password}) 
        if(check) {if(check2){ res.json("exist")} else{res.json("notexist")}}
        else res.json("notexist")
    } catch (error) {
        res.json("notexist")
    }
})
app.post("/register", async(req,res)=>{
    const{username, email, password} =req.body

    const data = {
        username:username,
        email:email,
        password:password
    }

    try {
        const check = await UserModels.findOne({email:email}) 
        if(check) res.json("exist")
        else {
            res.json("notexist")
            await UserModels.insertMany([data])
        }
    } catch (error) {
        res.json("notexist")
    }
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
