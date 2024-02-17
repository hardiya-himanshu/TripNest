import React from 'react'
import '../css/login.css'
import '../css/style.css'
import signupimg from '../assets/login_bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'


function Login() {
  return (
    <div className='main'>
    <img className='bg_login' src={signupimg} alt="" />
    <div className="form">
        <img src={back} alt="" />

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
            <Link to="/"><button className='login_btn'>LOGIN</button></Link>
            <Link to='/signup'>
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
    </div>
  )
}

export default Login
