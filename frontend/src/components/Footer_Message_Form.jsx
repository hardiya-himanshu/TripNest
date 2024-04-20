import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'
import axios from 'axios'
import { Toaster, toast } from 'sonner'


function Message_Form() {

    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")


  useEffect(()=>{
    try {

      axios.post('http://localhost:3000/message', {token: window.localStorage.getItem("token")})
    .then(res=>
      {
        const response = res.data.data
        // console.log(response);
        setUserEmail(response.email)
      })
    } catch (error) {
      console.log(error);
    }

  },[])

    const minLength = 10

    const showToast1 = ()=>{
        toast.warning("Please enter a message with at least 10 words")  
      }
    const showToast2 = ()=>{
        toast.success("Sent Successfully")  
      }

    const handleFormSubmit = async(e)=>{
        e.preventDefault()
        const wordCount = userMessage.trim().split(/\s+/).filter(Boolean).length;
        // console.log(wordCount);
        if(wordCount<minLength){
          showToast1()
          return
        }
      try {
        await axios.post('http://localhost:3000/message', { email:userEmail, message:userMessage})
      .then(res=>
        {
          // console.log(res)
          const response = res.data
          console.log(response);
          setUserMessage("")
          showToast2()
        })
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='destination_fullpage_section '>
        <div className="footer_items_content footer_message_us">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Message Us
            </div>
            <div className='flex flex-col w-full max-w-lg '>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
                    <input type="text" placeholder='EMAIL'  value={userEmail} onChange={e=>setUserEmail(e.target.value)} className='p-3 rounded-md' required/>
                    <textarea name="message" id="message" cols="50" rows="10" placeholder='MESSAGE' value={userMessage} onChange={e=>setUserMessage(e.target.value)}className='p-3 rounded-md resize-none' required/>
                    <input type="submit" value="SEND" className='p-2 bg-white text-black rounded-md text-lg cursor-pointer' />
                </form>
            </div>
        </div>
        <Toaster richColors/>

    </div>
  )
}

export default Message_Form
