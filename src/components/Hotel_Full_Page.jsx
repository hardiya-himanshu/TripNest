import React from 'react'
import "../css/hotel_full_page.css"
import "../css/style.css"
import shimla_full from "../assets/shimla_full.jpg"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'


function Hotel_Full_Page() {
  return (
    <div className='hotel_fullpage_section'>
        <div className="hfp_content">
        <Link to='/'>
            <img className='hfp_close' src={close} alt="" />
        </Link>
        
            <div className="hfp_image">
                <div className="gradient"></div>
                <img src={shimla_full} alt="" />
            </div>
            <div className="hfp_others">
                <div className="hfp_details">
                    <div className="hfp_city_name">The Oberoi Cecil</div>
                    <div className="hfp_city_location">Shimla, India</div>
                    <div className="hotel_price">₹12,999/Night</div>
                    <div className="hfp_btns">
                        <div className="hfp_btn">Calm</div>
                        <div className="hfp_btn">Chill</div>
                    </div>

                </div>
                    <div className="hfp_city_description">Nestled in the heart of Shimla, our hotel offers a perfect blend of comfort and elegance. Enjoy breathtaking views of the lush green valleys and majestic mountains from the cozy rooms. Immerse yourself in the serene ambiance, relish delectable cuisine, and experience unmatched hospitality for an unforgettable stay in Shimla.</div>
                    
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
