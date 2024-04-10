import dotenv from 'dotenv'
import app from './app.js'
import nodemailer from 'nodemailer'
import connectDB from './db/db.js'
import {UserModels} from './models/user.models.js'
import {MessageModel} from './models/message.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import paymentRoutes from './routes/payment.route.js'
import { text } from 'express'

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
            res.json({status:"ok", data:"Updated Successfully"});
    
        } catch (error) {
            res.json({status:"error", data:error});
        }
    }
    }
)

// Payment Gateway

app.use("/api/payment",paymentRoutes)


// for submitting message us details

app.post("/message", async(req,res)=>{
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
    const{email, message} = req.body

    try {
            await MessageModel.create({
                email:email,
                message:message
            })
            res.json({status:"ok", data:"Submitted Successfully"});

    }
    catch (error) {
        res.json({status:"error", message:error})
    }}
})

// forget password

app.post("/forget_password_page", async(req,res)=>{
    const {email} = req.body

    try {
        const user = await UserModels.findOne({email:email}) 
        if(!user) res.json("notexist")
        else {
            
            res.json(user.password)
            
        }
    } catch (error) {
        res.json(error.message)
    }
})

async function sendEmail( password, recipient_email ) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
          },
        });
    
        const mail_configs = {
          from: process.env.MY_EMAIL,
          to: recipient_email,
          subject: "TRIPNEST PASSWORD RECOVERY",
          html: `<!DOCTYPE html>
                <html lang="en" >
                <head>
                <meta charset="UTF-8">
                <title>Email Password Recovery</title>
                
                
                </head>
                <body>
                <!-- partial:index.partial.html -->
                <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                <div style="margin:50px auto;width:70%;padding:20px 0">
                    <div style="border-bottom:1px solid #eee">
                    <a href="" style="font-size:2em;color: #00466a;text-decoration:none;font-weight:600">Tripnest</a>
                    </div>
                    <p style="font-size:1.2em">Hi,</p>
                    <p style="font-size:1.2em">Thank you for choosing Tripnest. Your login password for ${recipient_email} is </p>
                    <h2 style="background: #000000;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 5px;">${password}</h2>
                    <p style="font-size:1.2em;">Regards,<br />Tripnest</p>
                    <hr style="border:none;border-top:1px solid #eee" />
                    <div style="float:right;padding:8px 0;color:#aaa;font-size:1.2em;line-height:1;font-weight:300">
                    <p>Tripnest Tours & Travels Service</p>
                    <p>Nana Chiloda</p>
                    <p>Ahmedabad</p>
                    </div>
                </div>
                </div>
                <!-- partial -->
                
                </body>
                </html>`,
        };
        transporter.sendMail(mail_configs, function (error, info) {
          if (error) {
            console.log(error);
            return reject({ message: `An error has occured` });
          }
          return resolve({ message: "Email sent succesfuly" });
        });
      });
  }

app.post("/send_email", async(req,res)=>{
    const{password, recipient_email}=req.body
    sendEmail(password,recipient_email).then(data=>res.json(data)).catch(error=>error.message)
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})

