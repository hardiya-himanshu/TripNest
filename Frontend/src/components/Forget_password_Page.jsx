import React, { useState , useEffect} from 'react'
import loginimg from '../assets/bglogin.jpg'
import back from '../assets/back.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner'


function Forget_Password_Page() {


  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const showToast=()=>{
    toast.warning("Email Not Found!")
  }


  function sendPass() {
    
      // console.log(password);
      try {
      axios.post("http://localhost:3000/send_email", {
          password,
          recipient_email: email,
        }).then(res=>console.log(res.data))
      } catch (error) {
        console.log(error);
      }
    
  }



  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      await axios.post("http://localhost:3000/forget_password_page", {email}).then(res=>{
        const response = res.data
        if(response==="notexist"){
          showToast()
          return
        }
        setPassword(response);
        sendPass()
      })
    } catch (error) {
      console.log(error); 
    }
}

  return (
    <div className='main'>
    <img className='bg_login' src={loginimg} alt="" />
    <div className="form ">
        <Link to='/login' className='border w-fit '>
            <img src={back} alt="" />
        </Link>

        <div className="login_title mt-5" >
            FORGET PASSWORD
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
