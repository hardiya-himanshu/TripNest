import React from 'react'
import "../css/tour_full_page.css"
import "../css/style.css"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'


function Tour_Full_Page({image_cover,tour_name,tour_desc,tour_duration,tour_price}) {
  return (
    <div className='tour_fullpage_section'>
        <div className="tfp_content">
        <Link to='/' className='tfp_close'>
            <img  src={close} alt="" />
        </Link>
        
            <div className="tfp_image">
                <div className="gradient"></div>
                <img src={image_cover} alt="" />
            </div>
            <div className="tfp_others">
                <div className="tfp_city_name">{tour_name}</div>

                <div className="tfp_duration-price">
                    <div className='tfp_duration'></div>{tour_duration}
                    <div className='tfp_price'></div>₹ {tour_price}
                </div>

                <div className="tfp_city_description">{tour_desc}</div>

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
