import React from 'react'
import '../css/tourpackages.css'
import Tourcard from './tourcard'
import ladakh from "../assets/ladakh.jpg"
import brazil from "../assets/brazil.jpg"
import jerusalem from "../assets/jerusalem.jpg"
import mauritius from "../assets/mauritius.avif"
import tokyo2 from "../assets/tokyo2.jpg"
import {Link} from 'react-router-dom'
import usa from "../assets/usa.jpg"

function TourPackages() {
  return (
    <section className='tour_packages reveal' id='tour_packages'>
        <div className="title_tour_packages">
        TOUR PACKAGES
        </div>
        {/* <div className="tour_cards grid grid-cols-4 grid-rows-2 px-36 gap-5 "> */}
        <div className="tour_cards">
            {/* <Tourcard tourimage={ladakh} className="row-span-2  h-full w-full " imgClass="rounded-lg h-full w-full shadow-2xl"/>
            <Tourcard tourimage={usa} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={jerusalem} className="col-span-2 w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={tokyo2} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={mauritius} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={brazil} className="w-full h-full" imgClass="rounded-lg w-full h-full shadow-2xl"/> */}

            <Link to="/tour/ladakh" className='tour_first'>
              <Tourcard tourimage={ladakh} tour_name="LADAKH"/>
            </Link>

            <Link to="/tour/los_angeles" >
              <Tourcard tourimage={usa} className="tour_second " tour_name="LOS ANGELES"/>
            </Link>

            <Link to="/tour/jerusalem"className="tour_third  ">
              <Tourcard tourimage={jerusalem}  tour_name="JERUSALEM"/>
            </Link>

            <Link to="/tour/tokyo" >
              <Tourcard tourimage={tokyo2} className="tour_fourth" tour_name="TOKYO"/>
            </Link>

            <Link to="/tour/port_louis" >
              <Tourcard tourimage={mauritius} className="tour_fifth" tour_name="PORT LOUIS"/>
            </Link>

            <Link to="/tour/brasilia" >
              <Tourcard tourimage={brazil} className="tour_sixth" tour_name="BRASILIA"/>
            </Link>

        </div>
    </section>
  )
}

export default TourPackages

