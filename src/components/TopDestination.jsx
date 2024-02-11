import React from 'react'
import Card from './destination_card.jsx'
import '../css/topdestination.css'
import '../css/style.css'
import paris from "../assets/paris.webp"
import seoul from "../assets/seoul.jpg"
import tokyo from "../assets/tokyo.jpg"
import lakshadweep from "../assets/lakshadweep.jpg"
import bali from "../assets/bali.jpg"
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"


function TopDestination() {
  return (
    <section className='top_destination'>
        <div className="title">
        TOP DESTINATION
        </div>
        <div className="cards_section">
          <div className="gradient1"></div>
              <div className='card_arrow_left card_arrow'><img src={left_arrow} alt="" /></div>
              <Card image={paris}/>
              <Card image={tokyo}/>
              <Card image={seoul}/>
              <Card image={bali}/>
              <Card image={lakshadweep}/>
              <div className='card_arrow_right card_arrow'><img src={right_arrow} alt="" /></div>
          <div className="gradient2"></div>
        </div>
    </section>
  )
}

export default TopDestination