import React from 'react'
import '../css/signup.css'
import '../css/style.css'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import loginimg from '../assets/bglogin.jpg'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
import { Toaster, toast } from 'sonner'

function Signup() {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[phone, setPhone] = useState("")
  const[tnc, setTnC] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        await axios.post('http://localhost:3000/register', {username, email, password, phone})
      .then(res=>
      {
        // console.log(res)
        const response = res.data
        if(response==="notexist"){
        navigate("/login")}
      })
      } catch (error) {
        console.log(error)
        
      }
  }

  const showToast = ()=>{
    setTimeout(() => {
      if(username=="" || !email.includes("@") || email=="" || phone=="" || password=="" || tnc==false){
        toast.error("Please enter details") 
        return null
      }
      toast.error("Please Login") 
    }, 1000);
    }

    const changeCheck = () =>{
      setTnC(!tnc)
    }

  return (
    <>
      <div className='main'>
      <img className='signup_bg' src={loginimg} alt="" />
      <div className="form">
      <Link to='/login'>
        <img src={back} alt="" />
      </Link>
        <div className="login_title">
            SIGN UP
        </div>

        <form onSubmit={handleSubmit}>
            <input type="name" placeholder='Name' onChange={(e)=>{setUsername(e.target.value)}} required/>
            <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            <input type="number" placeholder='Phone' onChange={(e)=>{setPhone(e.target.value)}} required/>
            <div className="t_c">
                <label htmlFor="t_c">I accept the <Link to="/terms" className='hover:underline font-semibold hover:text-blue-800' >Terms & Conditions</Link></label>
                <input type="checkbox" name="t_c" id="t_c" checked={tnc} onChange={changeCheck} required/>
            </div>
            <button type='submit' 
            onClick={showToast} className=' signup_btn w-fit relative left-0 right-0 m-auto'>SIGN UP
            </button>
            <Link to="/login" >
            <div className="gotologin font-bold underline cursor-pointer">Login?</div>

            </Link>
        </form>
      </div>
        <Toaster richColors/>
    </div>
    </>
  )
}

export default Signup
