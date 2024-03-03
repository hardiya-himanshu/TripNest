import React from 'react'
import Card from './destination_card.jsx'
import '../css/topdestination.css'
import '../css/style.css'
import {paris,seoul,tokyo,lakshadweep,bali,left_arrow,right_arrow} from '../javascript/index.js'
import {Link} from 'react-router-dom'
import '../javascript/index.js'
import {reveal} from '../javascript/index.js'



function TopDestination() {

  const cardSection = document.querySelector(".cards_section")

    window.addEventListener("scroll", reveal);

  return (
    <section className='top_destination reveal' id='top_destination'>
        <div className="title">
        TOP DESTINATION
        </div>
        <div className='for_arrow'>
          {/* <div className="gradient1"></div> */}
              {/* <div className='card_arrow_left card_arrow'><img src={left_arrow} alt="" /></div> */}
              <div className="slider grid m-auto relative place-items-center overflow-hidden">

                <div className="cards_section">
                    <Link to="/destination/seoul" className="dcard">
                      <Card image={seoul} destination_name="SEOUL"/>
                    </Link>
                    <Link to="/destination/tokyo" className="dcard">
                      <Card image={tokyo} destination_name="TOKYO"/>
                    </Link>
                    <Link to="/destination/lakshadweep"  className="dcard">
                      <Card image={lakshadweep} destination_name="LAKSHADWEEP"/>
                    </Link>
                    <Link to="/destination/bali" className="dcard">
                      <Card image={bali}  destination_name="BALI"/>
                    </Link>
                    <Link to="/destination/paris" className="dcard">
                      <Card image={paris} destination_name="PARIS"/>
                    </Link>
                    <Link to="/destination/seoul" className="dcard">
                      <Card image={seoul} destination_name="SEOUL"/>
                    </Link>
                    <Link to="/destination/tokyo" className="dcard">
                      <Card image={tokyo} destination_name="TOKYO"/>
                    </Link>
                    <Link to="/destination/lakshadweep"  className="dcard">
                      <Card image={lakshadweep} destination_name="LAKSHADWEEP"/>
                    </Link>
                    <Link to="/destination/bali" className="dcard">
                      <Card image={bali}  destination_name="BALI"/>
                    </Link>
                    <Link to="/destination/paris" className="dcard">
                      <Card image={paris} destination_name="PARIS"/>
                    </Link>
                    
              </div>
              </div>
              {/* <div className='card_arrow_right card_arrow'><img src={right_arrow} alt="" /></div> */}
            {/* <div className="gradient2"></div> */}
          </div>
    </section>
  )
  
}

export default TopDestination