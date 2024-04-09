import React, { useState , useEffect} from 'react'
import loginimg from '../assets/bglogin.jpg'
import back from '../assets/back.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'



function Forget_Password_Page() {


  const[email, setEmail] = useState("")



  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try {
      
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
    </div>
  )
}

export default Forget_Password_Page
