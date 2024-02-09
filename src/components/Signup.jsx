import React from 'react'
import '../css/signup.css'
import '../css/style.css'


function Signup() {
  return (
    <>
      <div className='main'>
      <div className="form">
        <div className="title">
            SIGNUP
        </div>
        <form action="">
            <input type="name" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className="t_c">
                <label htmlFor="t_c">I accept the Terms & Conditions</label>
                <input type="checkbox" name="t_c" id="t_c" />
            </div>
            <button className='btn'>SIGNUP</button>
        </form>
        
      </div>
    </div>
    </>
  )
}

export default Signup
