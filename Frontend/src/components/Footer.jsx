import React from 'react'
import '../css/footer.css'
import {x,facebook,instagram,reddit,work,history,phone,telephone,email,terms,policy,message} from '../javascript/index'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer_Section'>
        <div className="footer_sub_section">

        <div className="fdiv1 flex  w-1/2 justify-around flex-wrap gap-5 ">
            <div className="followus flex flex-col gap-5 text-lg ">
                <div className="fu_title font-bold">
                    FOLLOW US
                </div>
                <div className="fu_content flex flex-col gap-4 ">
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={x}alt="X.com" className='w-8' /></span>
                        <span className="line"><a href="https://twitter.com/tripnest24" target='_blank'>X</a></span>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={facebook}alt="X.com" className='w-8' /></span>
                        <span className="line"><a href="https://www.facebook.com/profile.php?id=61558041960543" target='_blank'>Facebook</a></span>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={instagram}alt="X.com" className='w-8' /></span>
                        <span className="line"><a href="https://www.instagram.com/tripnest2024/" target='_blank'>Instagram</a></span>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={reddit}alt="X.com" className='w-8' /></span>
                        <span className="line"><a href="https://www.reddit.com/user/TripNest24/" target='_blank'>Reddit</a></span>
                    </div>
                </div>
            </div>
            <div className="contact flex flex-col gap-5 text-lg  ">
                <div className="ctitle font-bold">
                    CONTACT US
                </div>
                <div className="c_content flex flex-col gap-4 ">
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
                        <span className="line"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tripnest.help@gmail.com" target='_blank'>tripnest.help@gmail.com</a></span>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={message}alt="X.com" className='w-8 p-1' /></span>
                        <Link to="/message">
                        <span className="line">Message</span>
                        </Link>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="fdiv2 flex  w-1/2 justify-around flex-wrap gap-5">
            <div className="about flex flex-col gap-5 text-lg ">
                <div className="atitle font-bold">
                    ABOUT
                </div>
                <div className="a_content flex flex-col gap-4">
                <div className='alignment'>
                        <span className=' rounded-md'><img src={work}alt="X.com" className='w-8 p-1' /></span>
                        <Link to="/our_work">
                        <span className="line">Work</span>
                        </Link>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={history}alt="X.com" className='w-8 p-1' /></span>
                        <Link to="/history">

                        <span className="line">History</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="others flex flex-col gap-5 text-lg ">
                <div className="otitle font-bold">
                    OTHERS
                </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={terms}alt="X.com" className='w-8 p-1' /></span>
                        <Link to="/terms">

                        <span className="line">Terms of Use</span>
                        </Link>
                    </div>
                    <div className='alignment'>
                        <span className=' rounded-md'><img src={policy}alt="X.com" className='w-8 p-1' /></span>
                        <Link to="privacy_policy">

                        <span className="line">Privacy Policy</span>
                        </Link>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
