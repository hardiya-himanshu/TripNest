import React from 'react'
import '../css/signup.css'
import '../css/style.css'
import signupimg from '../assets/login-signup-bg.jpg'
import back from '../assets/back.png'
import {Link} from 'react-router-dom'

function Signup() {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")


  async function submit(e){
    e.preventDefault()
    try{
        await axios.post("http://localhost:5174/signup",{
          username, email, password
        })
    }
    catch{
        console.log(e);
    }
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

        <form action='POST' onSubmit={submit}>
            <input type="name" placeholder='Name' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="email" placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className="t_c">
                <label htmlFor="t_c">I accept the Terms & Conditions</label>
                <input type="checkbox" name="t_c" id="t_c" />
            </div>
            <Link to="/login" className='w-fit relative left-0 right-0 m-auto'><button type='submit' className='signup_btn'>SIGN UP</button>
            </Link>
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
