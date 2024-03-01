import React, { useState } from 'react'
import '../css/login.css'
import '../css/style.css'
import loginimg from '../assets/login-signup-bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {

  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', { email, password}).then(res=>{console.log(res)
      if(res.data==="Success"){

        navigate("/")
      }
    }).catch(err=>console.log(err))
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
        
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className="remember">
                <label htmlFor="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
            </div>
            <button type="submit" className='login_btn w-fit relative left-0 right-0 m-auto'>LOGIN
            </button>
            <Link to='/signup'>
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
    </div>
  )
}

export default Login
