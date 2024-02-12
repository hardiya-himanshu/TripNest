import React from 'react'
import '../css/footer.css'
import x from "../assets/x.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import reddit from "../assets/reddit.png"
import work from "../assets/work.png"
import history from "../assets/history.png"
import phone from "../assets/phone.png"
import telephone from "../assets/telephone.png"
import email from "../assets/email.png"
import terms from "../assets/terms.png"
import policy from "../assets/policy.png"

function Footer() {
  return (
    <div className='footer_Section'>
        <div className="followus flex flex-col gap-5 text-lg">
            <div className="fu_title">
                FOLLOW US
            </div>
            <div className="fu_content flex flex-col gap-4">
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={x}alt="X.com" className='w-8' /></span>
                    <span>X.com</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={facebook}alt="X.com" className='w-8' /></span>
                    <span>Facebook</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={instagram}alt="X.com" className='w-8' /></span>
                    <span>Instagram</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={reddit}alt="X.com" className='w-8' /></span>
                    <span>Reddit</span>
                </div>
            </div>
        </div>
        <div className="contact flex flex-col gap-5 text-lg">
            <div className="ctitle">
                CONTACT
            </div>
            <div className="c_content flex flex-col gap-4">
            <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={phone}alt="X.com" className='w-8 p-1' /></span>
                    <span>+91 91XXXXXXXX</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={telephone}alt="X.com" className='w-8 p-1' /></span>
                    <span>+079 79XXXXXXXX</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={email}alt="X.com" className='w-8 p-1' /></span>
                    <span>tripnest.help@gmail.com</span>
                </div>
               
            </div>
        </div>
        <div className="about flex flex-col gap-5 text-lg">
            <div className="atitle">
                ABOUT
            </div>
            <div className="a_content flex flex-col gap-4">
            <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={work}alt="X.com" className='w-8 p-1' /></span>
                    <span>Work</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={history}alt="X.com" className='w-8 p-1' /></span>
                    <span>History</span>
                </div>
            </div>
        </div>
        <div className="others flex flex-col gap-5 text-lg">
            <div className="otitle">
                OTHERS
            </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={terms}alt="X.com" className='w-8 p-1' /></span>
                    <span>Terms of Use</span>
                </div>
                <div className='alignment'>
                    <span className='bg-white rounded-md'><img src={policy}alt="X.com" className='w-8 p-1' /></span>
                    <span>Privacy Policy</span>
                </div>
        </div>
    </div>
  )
}

export default Footer
