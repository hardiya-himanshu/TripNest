import React from 'react'
import '../css/login.css'
import '../css/style.css'
import loginimg from '../assets/login-signup-bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'


function Login() {
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
        
        <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className="remember">
                <label htmlFor="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
            </div>
            <Link to="/" className='w-fit relative left-0 right-0 m-auto'><button className='login_btn'>LOGIN</button></Link>
            <Link to='/signup'>
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
    </div>
  )
}

export default Login
