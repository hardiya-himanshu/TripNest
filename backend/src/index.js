import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/db.js'
import {UserModels} from './models/user.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config({
    path:'./.env'
})

const port  = process.env.PORT || 3001
const jwt_secret = process.env.JWT_SECRET

connectDB()

app.post("/login", async(req,res)=>{
    const{email, password} =req.body

    try {
        const user = await UserModels.findOne({email:email})
        // const check2 = await UserModels.findOne({password:password}) 
        if(user) 
        {
            if(await bcrypt.compare(password, user.password))
            { 
                // creating token using jwt
                const token = jwt.sign({email:user.email}, jwt_secret)
                res.json({status:"exist", data:token})
            } 
            else
            {res.json("notexist")
            }
        }
        else res.json("notexist")
    } catch (error) {
        res.json("notexist")
    }
})

app.post("/register", async(req,res)=>{
    const{username, email, password} =req.body

    const encryptedPassword = await bcrypt.hash(password,10)

    try {
        const user = await UserModels.findOne({email:email}) 
        if(user) res.json("exist")
        else {
            res.json("notexist")
            await UserModels.create({
                username:username,
                email:email,
                password:encryptedPassword
            })
        }
    } catch (error) {
        res.json("notexist")
    }
})

app.post("/account/", async(req,res)=>{
    const {token} = req.body
    try {
        const user  = jwt.verify(token, jwt_secret)
        const email = user.email
        UserModels.findOne({email:email})
        .then(data=>{
            res.send({status:"exist", data:data})
        })
        .catch(error=>{
            res.send({status:"error", data:error})
        })
    } catch (error) {
        console.log(error);
    }
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})



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

