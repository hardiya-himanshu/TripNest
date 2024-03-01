import React from 'react'
import Hotel_Card from './hotel_card'
import '../css/hotel_section.css'
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"
import hotel1 from '../assets/hotel1.jpg'

function Hotels() {
  return (
    <section className='hotel_section reveal' id='hotel_section'>
      <div className="title_hotels">HOTELS</div>
      <div className="hotel_cards">

        <div className="hgradient1"></div>
        <div className='hcard_arrow_left hcard_arrow'><img src={left_arrow} alt="" /></div>

        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night"/>
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night"/>
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night"/>
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night"/>
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night"/>

        <div className='hcard_arrow_right hcard_arrow'><img src={right_arrow} alt="" /></div>
        <div className="hgradient2"></div>


      </div>
    </section>
  )
}

export default Hotels