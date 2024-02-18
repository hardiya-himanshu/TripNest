import React from 'react'
import "../css/tour_full_page.css"
import "../css/style.css"
import ladakh_full from "../assets/ladakh_full.jpg"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'


function Tour_Full_Page() {
  return (
    <div className='tour_fullpage_section'>
        <div className="tfp_content">
        <Link to='/'>
            <img className='tfp_close' src={close} alt="" />
        </Link>
        
            <div className="tfp_image">
                <div className="gradient"></div>
                <img src={ladakh_full} alt="" />
            </div>
            <div className="tfp_others">
                <div className="tfp_city_name">LADAKH, INDIA</div>
                <div className="tfp_city_description">Ladakh, located in the northernmost part of India, is known for its unique culture, rugged terrain, and scenic beauty1. It’s one of the highest regions in the world2. Famous for its Buddhist monasteries, stunning lakes, and snow-capped peaks1, Ladakh offers a blend of natural beauty and cultural richness</div>
                
                <div className="tpf_contacts">
                    <div className="tpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="tpf_email">
                        <img src={email} alt="" />
                        <div>help.tripnest@gmail.com</div>
                    </div>
                </div>
                <div className=" tpf_btn">
                   BOOK NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tour_Full_Page
