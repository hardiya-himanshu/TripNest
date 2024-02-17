import React from 'react'
import '../css/signup.css'
import '../css/style.css'
import signupimg from '../assets/login_bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='main'>
      <img className='signup_bg' src={signupimg} alt="" />
      <div className="form">

        <img src={back} alt="" />

        <div className="title">
            SIGN UP
        </div>

        <form>
            <input type="name" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className="t_c">
                <label htmlFor="t_c">I accept the Terms & Conditions</label>
                <input type="checkbox" name="t_c" id="t_c" />
            </div>
            <Link to="/login"><button className='signup_btn'>SIGN UP</button></Link>
            {/* <Link to="/login">
            <div className="gotologin font-bold underline cursor-pointer">Login?</div>

            </Link> */}
        </form>
        
      </div>
    </div>
    </>
  )
}

export default Signup
