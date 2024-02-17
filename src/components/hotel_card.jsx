import React from 'react'
import '../css/hotel_card.css'

function Hotel_Card({hotelImage, hotelName, hotelLocation, hotelType, hotelPrice}) {
  return (
    <div className='main_hotel_card'>
        <div className="hotel_image">
            <img src={hotelImage} alt="" />
        </div>
        <div className="hotel_card_content">
            <div className="hotel_div1">
                <div className="hotel_card_name">{hotelName}</div>
                <div className="hotel_location">{hotelLocation}</div>
                <div className="hotel_type">{hotelType}</div>

            </div>

            <div className='hotel_div2'>
                <div className="hotel_price">₹{hotelPrice}</div>
                <button className='btn'>BOOK NOW</button>
                
            </div>
        </div>
    </div>
  )
}

export default Hotel_Card
