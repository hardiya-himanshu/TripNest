import React from 'react'
import '../css/ondiscount.css'
import Lakshadweep from '../assets/Lakshadweep.webp'
import { Link } from 'react-router-dom'
import { useUserAccess } from '../contexts/UserAccessContext'


function OnDiscount() {

  const {loginStatus, setLoginStatus} = useUserAccess()

  return (
    <div className='ondiscount_section reveal' id='ondiscount_section'>
        <div className="discount_title">
            ON DISCOUNT
        </div>
        <Link to={loginStatus?"/discount":null} className="discount_content">
            {/* <div className="dark_bg"></div> */}
            <img src={Lakshadweep} alt="" />
            <div className="percentage_discount"></div>
            <div className="percentage_discount_number">35% OFF</div>
            <div className="discount_location_name">DISCOUNT ON LAKSHADWEEP TOUR</div>name
            <div className="discount_book_now">BOOK YOUR TOUR NOW!</div>name
        </Link>
    </div>
  )
}

export default OnDiscount
