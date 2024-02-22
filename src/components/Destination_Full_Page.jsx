import React from 'react'
import "../css/destination_full_page.css"
import "../css/style.css"
import { phone,close,email } from '../javascript'
import {Link} from 'react-router-dom'


function Destination_Full_Page({dest_to,d_image, d_name, d_desc, d_a_i_1, d_a_i_2, d_a_n_1, d_a_n_2, d_h_i_1, d_h_i_2, d_h_n_1, d_h_n_2}) {
  return (
    <div className='destination_fullpage_section'>
        <div className="dfp_content">
       <Link to={dest_to}>
            <img className='dfp_close' src={close} alt="" />
       </Link>

            <div className="dfp_image">
                <div className="gradient"></div>
                <img src={d_image} alt="" />
            </div>
            <div className="dfp_others">
                <div className="dfp_city_name">{d_name}</div>
                <div className="dfp_city_description">{d_desc}</div>
                <div className="dfp_attractions">
                    <div className="dfp_attractions_title">NEARBY ATTRACTIONS</div>
                    
                    <div className="dfp_attractions_main">
                        <div className="dfp_attractions_content">
                            <img src={d_a_i_1} alt="" />
                            <div className="attraction_name">{d_a_n_1}</div>
                        </div>
                        <div className="dfp_attractions_content">
                            <img src={d_a_i_2} alt="" />
                            <div className="attraction_name">{d_a_n_2}</div>
                        </div>
                        {/* <div className="dfp_attractions_content">
                            <img src={att3} alt="" />
                            <div className="attraction_name">National Museum of Korea</div>
                        </div> */}
                    </div>

                </div>
                <div className="dfp_hotels">
                    <div className="dfp_hotels_title">NEARBY HOTELS</div>
                    
                    <div className="dfp_hotels_main">
                        <div className="dfp_hotels_content">
                            <img src={d_h_i_1} alt="" />
                            <div className="hotel_name">{d_h_n_1}</div>
                        </div>
                        <div className="dfp_hotels_content">
                            <img src={d_h_i_2} alt="" />
                            <div className="hotel_name">{d_h_n_2}</div>
                        </div>
                        {/* <div className="dfp_hotels_content">
                            <img src={hotel3} alt="" />
                            <div className="hotel_name">L7 Myeongdong</div>
                        </div> */}
                    </div>

                </div>
                <div className="dfp_reviews">
                    <div className="dpf_reviews_title">
                        REVIEW
                    </div>
                    <div className="dfp_reviews_content">
                    <form action="">
                        <textarea name="" id="" cols="100" rows="4" placeholder='My Review...'/>

                    </form>
                    </div>
                </div>
                <div className="dpf_contacts">
                    <div className="dpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="dpf_email">
                        <img src={email} alt="" />
                        <div>help.tripnest@gmail.com</div>
                    </div>
                </div>
                <div className="dpf_btn">
                   BOOK NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination_Full_Page
