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

// for login

app.post("/login", async(req,res)=>{
    const{email, password} =req.body

    try {
        const user = await UserModels.findOne({email:email})
        // const check2 = await UserModels.findOne({password:password}) 
        if(user) 
        {
            if(await bcrypt.compare(password, user.encryptedPassword))
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

// for register

app.post("/register", async(req,res)=>{
    const{username, email, password, phone} =req.body

    const encryptedPassword = await bcrypt.hash(password,10)

    try {
        const user = await UserModels.findOne({email:email}) 
        if(user) res.json("exist")
        else {
            res.json("notexist")
            await UserModels.create({
                username:username,
                email:email,
                password:password,
                encryptedPassword:encryptedPassword,
                phone:phone
            })
        }
    } catch (error) {
        res.json("notexist")
    }
})

// to reflect and update personal details

app.post("/account/", async(req,res)=>{
    if(req.body.token){
        const {token} = req.body
        try {
            const user  = jwt.verify(token, jwt_secret)
            const email = user.email
            await UserModels.findOne({email:email})
            .then(data=>{
                res.send({status:"exist", data:data})
            })
            .catch(error=>{
                res.send({status:"error", data:error})
            })
        } catch (error) {
            res.send({status:"error", data:error})
    
        }
    }
    else{
        const {id,username,email,phone} = req.body

        try {
            await UserModels.updateOne({_id:id},{
                $set:{
                    username,
                    email,
                    phone
                }
            })
            res.json({status:"ok", data:"updated"});
    
        } catch (error) {
            res.json({status:"error", data:error});
        }
    }
    
})

// to reflect and update security details

app.post("/account/security", async(req,res)=>{
    if(req.body.token){
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
            res.send({status:"error", data:error})

        }
    }
    else{
        const {id,password} = req.body
        const encryptedPassword = await bcrypt.hash(password,10)

        try {
            await UserModels.updateOne({_id:id},{
                $set:{
                    password,
                    encryptedPassword
                }
            })
            res.json({status:"ok", data:"updated"});
    
        } catch (error) {
            res.json({status:"error", data:error});
        }
    }
    }
)


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})

