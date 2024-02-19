import React from 'react'
import '../css/ondiscount.css'
import Lakshadweep from '../assets/Lakshadweep.webp'


function OnDiscount() {
  return (
    <div className='ondiscount_section' id='ondiscount_section'>
        <div className="discount_title">
            ON DISCOUNT
        </div>
        <div className="discount_content">
            {/* <div className="dark_bg"></div> */}
            <img src={Lakshadweep} alt="" />
            <div className="percentage_discount"></div>
            <div className="percentage_discount_number">35% OFF</div>
            <div className="discount_location_name">DISCOUNT ON LAKSHADWEEP TOUR</div>name
            <div className="discount_book_now">BOOK YOUR TOUR NOW!</div>name
        </div>
    </div>
  )
}

export default OnDiscount
