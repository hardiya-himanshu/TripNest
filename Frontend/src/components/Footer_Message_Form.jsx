import React from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'


function Message_Form() {

    const handleFormSubmit =(e)=>{
        e.preventDefault()
    }

  return (
    <div className='destination_fullpage_section'>
        <div className="footer_items_content">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Message Us
            </div>
            <div className='flex flex-col '>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
                    <input type="text" placeholder='EMAIL' className='p-3 rounded-md' required/>
                    <textarea name="message" id="message" cols="50" rows="10" placeholder='MESSAGE' className='p-3 rounded-md resize-none ' required></textarea>
                    <input type="submit" value="SEND" className='p-2 bg-white text-black rounded-md text-lg cursor-pointer' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Message_Form
