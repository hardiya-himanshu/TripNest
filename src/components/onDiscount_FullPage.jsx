import React from 'react'
import "../css/ondiscount_fullpage.css"
import Lakshadweep from '../assets/Lakshadweep.webp'
import { phone,email,close } from '../javascript'
import { Link } from 'react-router-dom'

function OnDiscount_FullPage() {
  return (
    <div className="discount_fullpage">
        <div className="dcfp_content">
            <Link to='/' className='hfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="dcfp_title">
            SPECIAL DISCOUNT THIS FORTNITE
            </div>
            <div className="dcfp_cards">
                <div className="discount_content dcfp_card1">
                    {/* <div className="dark_bg"></div> */}
                    <img src={Lakshadweep} alt="" />
                    <div className="percentage_discount"></div>
                    <div className="percentage_discount_number">35% OFF</div>
                    <div className="discount_location_name dcfp_discount">DISCOUNT ON LAKSHADWEEP TOUR</div>name
                    <div className="discount_book_now dcfp_book_now">BOOK YOUR TOUR NOW!</div>name
                </div>
                <div className="dcfp_card">
                    <div className="dcfp_name">
                    DISCOUNT ON LAKSHADWEEP TOUR
                    </div>
                    <div className="dcfp_city_duartion">
                    6 Days | 5 Nights
                    </div>
                    <div className="dcfp_city_description">
                    Discover the pristine beauty of Lakshadweep with our exclusive discount offer! Enjoy breathtaking beaches, vibrant coral reefs, and tranquil lagoons at unbeatable prices. Immerse yourself in the rich culture and warm hospitality of this tropical paradise while saving big. Book now and experience luxury for less!
                    </div>
                    <div className="dcfp_btns">
                        <div className="dcfp_btn">
                            Calm
                        </div>
                        <div className="dcfp_btn">
                            Cool
                        </div>
                        <div className="dcfp_btn">
                            Relax
                        </div>
                    </div>
                    <div className="dcfp_contacts">
                        
                            <div className='dcfp_number'>
                            <img src={phone} alt="" />
                                +91XXXXXXXX

                            </div>
                            <div className='dcfp_email'>
                            <img src={email} alt="" />
                                tripnest.help@gmail.com

                            </div>
                     
                    </div>
                    <div className="dcfp_btn_book">
                        BOOK NOW
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default OnDiscount_FullPage
