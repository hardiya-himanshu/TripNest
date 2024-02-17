import React from 'react'
import { Link } from 'react-scroll'
import { useRef, useState} from 'react'
import '../css/home.css'
import '../css/style.css'
import logo from '../assets/ट्रिपNest(png)_wo_bg_white.png'
import user from "../assets/white_user.png"


function Home() {

    const[user_opt, user_opt_show] = useState(false)
    const[login_sts, set_login_sts] = useState(false)

  return (      
    <>
<div className="progressbar"></div>
<div className="scrollpath"></div>
<section className="home">
    <div className='black_opacity'></div>
    <nav>
        <div className="logo">
            <img src={logo} alt="Image" />
        </div>
        <div className="nav_content">
            <ul>
                <Link to='top_destination' spy={true} smooth={true}>
                <li>Top Destinations</li>
                </Link>
                <Link to='tour_packages' spy={true} smooth={true}>
                <li>Packages</li>
                </Link>
                <Link to='hotel_section' spy={true} smooth={true}>
                <li>Hotels</li>
                </Link>
                <Link to='categories_section' spy={true} smooth={true}>
                <li>Categories</li>
                </Link>
                <Link to='ondiscount_section' spy={true} smooth={true}>
                <li>Discount</li>
                </Link>
            </ul>

                <img onClick={()=>user_opt_show(!user_opt)} src={user} alt=""/>
        </div>
        
        {login_sts?
            user_opt?
            
                <div className='user_options'>
                <div className='account_setting'>Account Setting</div>
                <div className='logout'>Logout</div>
                </div>
            :null
        :
            user_opt?
            <div className='logup_option'>
                <div className='login-signup'>Login/Signup</div>
            </div>
            :null
        }
        
    </nav>
    <div className="tagline">
   EXPERIENCE THE WORLD YOUR WAY
<br/>WITH TRIPNEST
    </div>
</section>
    </>


  )
}

export default Home