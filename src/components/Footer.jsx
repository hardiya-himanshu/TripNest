import React from 'react'
import '../css/footer.css'
import {x,facebook,instagram,reddit,work,history,phone,telephone,email,terms,policy,message} from '../javascript/index'

function Footer() {
  return (
    <div className='footer_Section'>
        <div className="followus flex flex-col gap-5 text-lg">
            <div className="fu_title">
                FOLLOW US
            </div>
            <div className="fu_content flex flex-col gap-4">
                <div className='alignment'>
                    <span className=' rounded-md'><img src={x}alt="X.com" className='w-8' /></span>
                    <span className="line">X.com</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={facebook}alt="X.com" className='w-8' /></span>
                    <span className="line">Facebook</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={instagram}alt="X.com" className='w-8' /></span>
                    <span className="line">Instagram</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={reddit}alt="X.com" className='w-8' /></span>
                    <span className="line">Reddit</span>
                </div>
            </div>
        </div>
        <div className="contact flex flex-col gap-5 text-lg">
            <div className="ctitle">
                CONTACT
            </div>
            <div className="c_content flex flex-col gap-4">
            <div className='alignment'>
                    <span className=' rounded-md'><img src={phone}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">+91 91XXXXXXXX</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={telephone}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">+079 79XXXXXXXX</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={email}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">tripnest.help@gmail.com</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={message}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">Message Us</span>
                </div>
               
            </div>
        </div>
        <div className="about flex flex-col gap-5 text-lg">
            <div className="atitle">
                ABOUT
            </div>
            <div className="a_content flex flex-col gap-4">
            <div className='alignment'>
                    <span className=' rounded-md'><img src={work}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">Work</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={history}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">History</span>
                </div>
            </div>
        </div>
        <div className="others flex flex-col gap-5 text-lg">
            <div className="otitle">
                OTHERS
            </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={terms}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">Terms of Use</span>
                </div>
                <div className='alignment'>
                    <span className=' rounded-md'><img src={policy}alt="X.com" className='w-8 p-1' /></span>
                    <span className="line">Privacy Policy</span>
                </div>
        </div>
    </div>
  )
}

export default Footer
