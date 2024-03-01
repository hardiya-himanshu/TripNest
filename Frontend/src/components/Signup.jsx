import React from 'react'
import '../css/signup.css'
import '../css/style.css'
import signupimg from '../assets/login-signup-bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const[username, setUsername] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {username, email, password}).then(res=>{console.log(res)
      navigate("/login")
    }).catch(err=>console.log(err))
  }

  return (
    <>
      <div className='main'>
      <img className='signup_bg' src={signupimg} alt="" />
      <div className="form">
      <Link to='/login'>
        <img src={back} alt="" />
      </Link>
        <div className="title">
            SIGN UP
        </div>

        <form onSubmit={handleSubmit}>
            <input type="name" placeholder='Name' onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className="t_c">
                <label htmlFor="t_c">I accept the Terms & Conditions</label>
                <input type="checkbox" name="t_c" id="t_c" />
            </div>
            <button type='submit' className=' signup_btn w-fit relative left-0 right-0 m-auto'>SIGN UP
            </button>
            <Link to="/login" >
            <div className="gotologin font-bold underline cursor-pointer">Login?</div>

            </Link>
        </form>
        
      </div>
    </div>
    </>
  )
}

export default Signup
