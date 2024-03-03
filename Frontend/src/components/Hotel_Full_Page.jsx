import React from 'react'
import "../css/hotel_full_page.css"
import "../css/style.css"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'


function Hotel_Full_Page({h_i,h_n,h_p,h_l,h_t,h_d}) {
  return (
    <div className='hotel_fullpage_section'>
        <div className="hfp_content">
        <Link to='/'>
            <img className='hfp_close' src={close} alt="" />
        </Link>
        
            <div className="hfp_image">
                <div className="gradient"></div>
                <img src={h_i} alt="" />
            </div>
            <div className="hfp_others">
                <div className="hfp_details">
                    <div className="hfp_city_name">{h_n}</div>
                    <div className="hfp_city_location">{h_l}</div>
                    <div className="hotel_price">{h_p}</div>
                    <div className="hfp_btns">
                        <div className="hfp_btn">{h_t}</div>
                    </div>

                </div>
                    <div className="hfp_city_description">{h_d}</div>
                    
                    <div className="hpf_contacts">
                        <div className="hpf_number">
                            <img src={phone} alt="" />
                            <div>91XXXXXXXX</div>
                        </div>
                        <div className="hpf_email">
                            <img src={email} alt="" />
                            <div>help.tripnest@gmail.com</div>
                        </div>
                    </div>
                    <div className="hpf_btn_book">
                    BOOK NOW
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hotel_Full_Page
