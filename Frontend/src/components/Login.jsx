import React, { useState } from 'react'
import '../css/login.css'
import '../css/style.css'
import loginimg from '../assets/login-signup-bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Login() {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  async function submit(e){
      e.preventDefault()
      try{
          await axios.post("http://localhost:5174/login",{
            email, password
          })
      }
      catch{
          console.log(e);
      }
  }

  return (
    <div className='main'>
    <img className='bg_login' src={loginimg} alt="" />
    <div className="form">
        <Link to='/'>
        <img src={back} alt="" />

        </Link>

        <div className="title">
            LOGIN
        </div>
        
        <form action='POST' onSubmit={submit}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className="remember">
                <label htmlFor="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
            </div>
            <Link to="/" className='w-fit relative left-0 right-0 m-auto'><button type="submit" className='login_btn' >LOGIN</button>
            </Link>
            <Link to='/signup'>
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
    </div>
  )
}

export default Login
