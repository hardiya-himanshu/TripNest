import React, { useContext } from 'react'
import { Link as ScrollLink} from 'react-scroll'
import { useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/home.css'
import '../css/style.css'
import {sound_on,sound_off,user,bg_audio,bg_video,logo, menu} from '../javascript/index'
import { useUserAccess } from '../contexts/UserAccessContext'

     
function Home() {

    const[sound, setSound] = useState(true)
    const[soundimg, setSoundImg] = useState(sound_off)

    const songState = () =>{
        setSound(!sound)
        setSoundImg(soundimg==sound_on?sound_off:sound_on)
    }

    const showMenu = () =>{
        
    }
    
    const [loginStatus, setLoginStatus] = useState(false)

    const[user_opt, user_opt_show] = useState(false)
    const[menu_opt, show_menu_opt] = useState(false)

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

            <div className="menu_option" onClick={showMenu}>
                <img src={menu} alt="menu_image" onClick={()=>{show_menu_opt(!menu_opt), user_opt_show(false)}}/>

                {menu_opt?

                    <div className="home_menu_section">
                        
                        <ScrollLink to='top_destination' offset={-70} spy={true} smooth={true} className='home_menu_list'>Top Destinations</ScrollLink>
                        <ScrollLink to='tour_packages' offset={-70} spy={true} smooth={true} className='home_menu_list'>Packages</ScrollLink>
                        <ScrollLink to='hotel_section' offset={-70} spy={true} smooth={true} className='home_menu_list'>Hotels</ScrollLink>
                        <ScrollLink to='categories_section' offset={-70} spy={true} smooth={true} className='home_menu_list'>Categories</ScrollLink>
                        <ScrollLink to='ondiscount_section' offset={-70} spy={true} smooth={true} className='home_menu_list'>Discount</ScrollLink>
                        
                    </div>
                    
                    :
                    null
                }
            </div>

            <div className="user_settings">

                    <img onClick={()=>{user_opt_show(!user_opt),show_menu_opt(false)}} src={user} alt=""/>

                     {loginStatus?
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