import React,{ useEffect} from 'react'
import '../css/signup.css'
import '../css/style.css'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'
import loginimg from '../assets/bglogin.jpg'
import loginimg1 from '../assets/bglogin.jpg'
import loginimg2 from '../assets/bglogin2.jpg'
import loginimg3 from '../assets/bglogin3.jpg'
import loginimg4 from '../assets/bglogin4.jpg'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
import { Toaster, toast } from 'sonner'
import {eye,hide} from "../javascript/index.js"

function Signup() {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[phone, setPhone] = useState("")
  const[tnc, setTnC] = useState(true)
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

    
  const toggleButton = document.querySelector('.passhide');
  const passwordInput = document.getElementById('password');
  const showPass =() => {
    if (passwordInput.type === 'password') {
       passwordInput.type = 'text';
       toggleButton.src= hide
    } else {
       passwordInput.type = 'password';
       toggleButton.src= eye

    }
  }

  const toastNumber = ()=>{
    toast.warning("Please Check Your Number")
  }

  const handleChange = (e) => {
    // Here we are checking if the length is equal to 10
    if (e.target.value.length > 10) {
        toastNumber()
        return
    }
    setPhone(e.target.value);
};
  return (
    <>
      <div className='main'>
      <img className='signup_bg' src={loginBg} alt="" />
      <div className="form">
      <Link to='/login'>
        <img src={back} alt="" />
      </Link>
        <div className="login_title">
            SIGN UP
        </div>

        <form onSubmit={handleSubmit}>
            <input type="name" placeholder='Name' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
            <input type="email" placeholder='Email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} required/>
             <div>
            <input type="password" id="password" className='loginInputs' value={password}  placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            <span className=" absolute right-10 w-7">
              <img src={eye} alt="show" className='passhide' onClick={showPass} />
            </span>
            </div>
            <input type="number" placeholder='Phone' value={phone} onChange={handleChange}  required/>
            <div className="t_c">
                <label htmlFor="t_c">I accept the <Link to="/terms" className='hover:underline font-semibold hover:text-blue-600' >Terms & Conditions</Link></label>
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
