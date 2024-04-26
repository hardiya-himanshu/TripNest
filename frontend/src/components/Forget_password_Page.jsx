import React, { useState , useEffect} from 'react'
import loginimg from '../assets/bglogin.jpg'
import loginimg1 from '../assets/bglogin.jpg'
import loginimg2 from '../assets/bglogin2.jpg'
import loginimg3 from '../assets/bglogin3.jpg'
import loginimg4 from '../assets/bglogin4.jpg'
import back from '../assets/back.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner'


function Forget_Password_Page() {


  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

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
  

  const showToast=()=>{
    toast.warning("Email Not Found!")
  }

  const showToastSuccess=()=>{
    toast.success("Email Sent Successfully")
  }


  function sendPass(response) {
    
      try {
      axios.post("http://localhost:3000/send_email", {
          password:response,
          recipient_email: email,
        }).
        then(res=>{
          showToastSuccess()
          // console.log(res.data)
        })
      } catch (error) {
        console.log(error);
      }
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      await axios.post("http://localhost:3000/forget_password_page", {email}).then(res=>{
        const response = res.data.password

        if(res.data==="notexist"){
          showToast()
          return
        }
        setPassword(response);
        sendPass(response)
      })
    } catch (error) {
      console.log(error); 
    }
}

  return (
    <div className='main'>
    <img className='bg_login' src={loginBg} alt="" />
    <div className="form ">
        <Link to='/login' className='border w-fit '>
            <img src={back} alt="" />
        </Link>

        <div className="login_title mt-5" >
            FORGOT PASSWORD
        </div>
        
        <form className='mt-5' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
        
            <button type="submit"  className='login_btn w-fit relative left-0 right-0 m-auto'>GET PASSWORD
            </button>
        </form>
        
      </div>
      <Toaster richColors/>
    </div>
  )
}

export default Forget_Password_Page
