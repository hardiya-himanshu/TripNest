import React, { useState , useEffect} from 'react'
import '../css/login.css'
import '../css/style.css'
import loginimg from '../assets/bglogin.jpg'
import loginimg1 from '../assets/bglogin.jpg'
import loginimg2 from '../assets/bglogin2.jpg'
import loginimg3 from '../assets/bglogin3.jpg'
import loginimg4 from '../assets/bglogin4.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

function Login() {

  
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()
  const [loginBg, setLoginBg] = useState(loginimg)
 
  const themeNo = localStorage.getItem("theme")

  useEffect(()=>{
    if(themeNo==1){
      setLoginBg(loginimg1)
    }
    if(themeNo==2){
      setLoginBg(loginimg2)
    }
    if(themeNo==3){
      setLoginBg(loginimg3)
    }
    if(themeNo==4){
      setLoginBg(loginimg4)
    }
  },[themeNo])
  
  

  const handleSubmit = async(e) => {
      e.preventDefault()
      
      try {
        await axios.post('http://localhost:3000/login', { email, password})
      .then(res=>
        {
          const response = res.data
          if(response.status==="exist")
          {
            
            window.localStorage.setItem("loginStatus", true)
            window.localStorage.setItem("token", response.data)
            navigate("/")
          }
        })
      } catch (error) {
        console.log(error);
        
      }

      
}

  const showToast = ()=>{
    setTimeout(() => {
      toast.error("Please Check your Email or Password") 
    }, 1000);
    }


  return (
    <div className='main'>
    <img className='bg_login' src={loginBg} alt="" />
    
    <div className="form">
        <Link to='/'>
        <img src={back} alt="" />

        </Link>

        <div className="login_title">
            LOGIN
        </div>
        
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            
            {/* <div className="remember">
                <label htmlFor="remember">Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
            </div> */}
            
            <Link to="/forget_password_page" className=" hover:underline hover:text-blue-600 font-semibold cursor-pointer mt-4 w-fit m-auto f_p">
              Forget Password?
            </Link>
            <button type="submit" onClick={showToast} className='login_btn w-fit relative left-0 right-0 m-auto'>LOGIN
            </button>
            <Link to='/signup' >
            <div className="gotologin font-bold underline cursor-pointer">Sign Up?</div>
            </Link>

        </form>
        
      </div>
        <Toaster richColors className='absolute'/>
    </div>
  )
}

export default Login
