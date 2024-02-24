import React from 'react'
import { Link as ScrollLink} from 'react-scroll'
import { useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/home.css'
import '../css/style.css'
import {sound_on,sound_off,user,bg_audio,bg_video,logo} from '../javascript/index'


function Home() {

    const[sound, setSound] = useState(false)
    const[soundimg, setSoundImg] = useState(sound_on)

    const songState = () =>{
        setSound(!sound)
        setSoundImg(soundimg==sound_on?sound_off:sound_on)
    }

    const[user_opt, user_opt_show] = useState(false)
    const[login_sts, set_login_sts] = useState(true)

  return (      
    <>
<section className="home" id='home'>

    <audio muted={sound}
        voloume="1"
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
    <div className="song_btn" onClick={songState}>
        <img id='song_image' src={soundimg} alt="" />
    </div>
</section>
    </>


  )
}

export default Home