import React from 'react'
import Hotel_Card from './hotel_card'
import '../css/hotel_section.css'
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotelimage2.png'
import hotel3 from '../assets/hotelimage4.webp'
import hotel4 from '../assets/hotelimage3.jpg'
import hotel5 from '../assets/hotelimage5.jpg'

function Hotels() {
  return (
    <section className='hotel_section reveal' id='hotel_section'>
      <div className="title_hotels">HOTELS</div>
      <div className="hotel_cards">

        {/* <div className="hgradient1"></div> */}
        {/* <div className='hcard_arrow_left hcard_arrow'><img src={left_arrow} alt="" /></div> */}
      <div className="slider grid m-auto relative place-items-center overflow-hidden">

      <div className="hotels_cards_section">
        
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night" to="/hotels/1"/>
        <Hotel_Card hotelImage={hotel2} hotelName="ITC Grand Goa" hotelLocation="Cansaulim, Goa" hotelType="Fun" hotelPrice=" 22,999/Night" to="/hotels/2"/>
        <Hotel_Card hotelImage={hotel3} hotelName="Ibis Sathorn" hotelLocation="Bangkok, Thailand" hotelType="Relax" hotelPrice=" 8,999/Night" to="/hotels/3"/>
        <Hotel_Card hotelImage={hotel5} hotelName="Mövenpick Resort" hotelLocation="Ras al Khaimah, UAE" hotelType="Royal" hotelPrice=" 13,999/Night" to="/hotels/4"/>
        <Hotel_Card hotelImage={hotel4} hotelName="Hyatt Regency" hotelLocation="Paris, France" hotelType="Cozy" hotelPrice=" 12,999/Night" to="/hotels/5"/>
        <Hotel_Card hotelImage={hotel1} hotelName="The Oberoi Cecil" hotelLocation="Shimla,  India" hotelType="Chill" hotelPrice=" 12,999/Night" to="/hotels/1"/>
        <Hotel_Card hotelImage={hotel2} hotelName="ITC Grand Goa" hotelLocation="Cansaulim, Goa" hotelType="Fun" hotelPrice=" 22,999/Night" to="/hotels/2"/>
        <Hotel_Card hotelImage={hotel3} hotelName="Ibis Sathorn" hotelLocation="Bangkok, Thailand" hotelType="Relax" hotelPrice=" 8,999/Night" to="/hotels/3"/>
        <Hotel_Card hotelImage={hotel5} hotelName="Mövenpick Resort" hotelLocation="Ras al Khaimah, UAE" hotelType="Royal" hotelPrice=" 13,999/Night" to="/hotels/4"/>
        <Hotel_Card hotelImage={hotel4} hotelName="Hyatt Regency" hotelLocation="Paris, France" hotelType="Cozy" hotelPrice=" 12,999/Night" to="/hotels/5"/>
      </div>
      </div>

        {/* <div className='hcard_arrow_right hcard_arrow'><img src={right_arrow} alt="" /></div> */}
        {/* <div className="hgradient2"></div> */}


      </div>
    </section>
  )
}

export default Hotels
