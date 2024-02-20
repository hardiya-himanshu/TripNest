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
import {Link} from 'react-router-dom'
import { useRef } from 'react'


function TopDestination() {
  
  let cardSectionRef = useRef(0);

  const Move = (e)=>{
    cardSectionRef.scrollLeft = 1
    console.log(e.pageX)
    
    }

  return (
    <section className='top_destination' id='top_destination'>
        <div className="title">
        TOP DESTINATION
        </div>
        <div className='for_arrow'>
          <div className="gradient1"></div>
              <div className='card_arrow_left card_arrow'><img src={left_arrow} alt="" /></div>
          <div className="cards_section" onMouseMove={Move} ref={cardSectionRef}>
              <Link to="/destination/seoul" className="dcard">
                <Card image={seoul}/>
              </Link>
              <Link to="/destination/tokyo" className="dcard">
                <Card image={tokyo}/>
              </Link>
              <Link to="/destination/lakshadweep"  className="dcard">
                <Card image={lakshadweep}/>
              </Link>
              <Link to="/destination/bali" className="dcard">
                <Card image={bali} />
              </Link>
              <Link to="/destination/paris" className="dcard">
                <Card image={paris}/>
              </Link>
              
        </div>
              <div className='card_arrow_right card_arrow'><img src={right_arrow} alt="" /></div>
          </div>
          <div className="gradient2"></div>
    </section>
  )
}

export default TopDestination