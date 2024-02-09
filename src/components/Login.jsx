import React from 'react'
import '../css/login.css'
import '../css/style.css'


function Login() {
  return (
    <div className='main'>
      <div className="form">
        <div className="title">
            LOGIN
        </div>
        <form action="">
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className="remember">
                <label htmlFor="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
            </div>
            <button className='btn'>LOGIN</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login
