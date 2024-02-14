import React from 'react'
import '../css/login.css'
import '../css/style.css'
import signupimg from '../assets/login_bg.jpg'
import back from '../assets/back.png'


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
            <button onClick="" className='login_btn'>LOGIN</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login
