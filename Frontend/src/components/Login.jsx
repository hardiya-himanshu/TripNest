import React, { useState , useEffect} from 'react'
import '../css/login.css'
import '../css/style.css'
import loginimg from '../assets/bglogin.jpg'
// import loginvideo from '../assets/login-signup-video.mp4'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

function Login() {

  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', { email, password}).then(res=>{
        
        console.log(res)
      if(res.data==="Success"){
        
        navigate("/")
      }
    }).catch(err=>console.log(err))
  }

  const notify = () => toast("Registered Successfully!");



  return (
    <div className='main'>
    {/* <video src={loginvideo} autoPlay loop muted className='absolute h-screen w-full object-cover'/> */}
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
            <button type="submit" onClick={()=>toast.error("Please Check your Email or Password")} className='login_btn w-fit relative left-0 right-0 m-auto'>LOGIN
            </button>
            <Link to='/signup' >
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
        <Toaster richColors/>
    </div>
  )
}

export default Login
