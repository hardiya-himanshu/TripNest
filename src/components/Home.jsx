import React from 'react'
import { Link as ScrollLink} from 'react-scroll'
import { useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/home.css'
import '../css/style.css'
import logo from '../assets/ट्रिपNest(png)_wo_bg_white.png'
import user from "../assets/white_user.png"
import bg_video from "../assets/bg_video.mp4"
import bg_audio from "../assets/bg_audio2.mp3"


function Home() {

    window.addEventListener("load", ()=>{
        document.getElementById("autoplay").volume = .2
    })

    const[user_opt, user_opt_show] = useState(false)
    const[login_sts, set_login_sts] = useState(true)

  return (      
    <>
<section className="home" id='home'>

    <audio
        id="autoplay"
        autoPlay loop preload='auto'>
        <source src={bg_audio} type="audio/mp3"/>
    </audio>

    <video autoPlay muted loop src={bg_video} className='bg_video'/>
    <div className="navbar">

    <nav>
        <div className="logo">
            <ScrollLink to='home' spy={true} smooth={true}>
                <img src={logo} alt="Image" />
            </ScrollLink>
        </div>
        <div className="nav_content">
            <ul>
                <ScrollLink to='top_destination' offset={-70} spy={true} smooth={true}>
                <li>Top Destinations</li>
                </ScrollLink>
                <ScrollLink to='tour_packages' offset={-70} spy={true} smooth={true}>
                <li>Packages</li>
                </ScrollLink>
                <ScrollLink to='hotel_section' offset={-70} spy={true} smooth={true}>
                <li>Hotels</li>
                </ScrollLink>
                <ScrollLink to='categories_section' offset={-70} spy={true} smooth={true}>
                <li>Categories</li>
                </ScrollLink>
                <ScrollLink to='ondiscount_section' offset={-70} spy={true} smooth={true}>
                <li>Discount</li>
                </ScrollLink>
            </ul>
                <div className="user_settings">

                    <img onClick={()=>user_opt_show(!user_opt)} src={user} alt=""/>

                     {login_sts?
                user_opt?
                
                    <div className='user_options'>
                        <Link to='/account' className='account_setting'>Account           Setting
                        </Link>
                        <Link to='/login' className='logout'>
                            Logout
                        
                        </Link>
                    </div>
                :null
            :
                user_opt?
                <div className='logup_option'>
                
                        <Link to='/login' className='login-signup'>Login/Signup</Link></div>               
                
                
                :null
            }             

                </div>
                </div>
                
            
        
        
    </nav>
    </div>

    <div className="tagline">
   EXPERIENCE THE WORLD YOUR WAY
<br/>WITH TRIPNEST
    </div>
</section>
    </>


  )
}

export default Home