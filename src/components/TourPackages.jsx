import React from 'react'
import '../css/tourpackages.css'
import Tourcard from './tourcard'
import ladakh from "../assets/ladakh.jpg"
import brazil from "../assets/brazil.jpg"
import jerusalem from "../assets/jerusalem.jpg"
import mauritius from "../assets/mauritius.avif"
import tokyo2 from "../assets/tokyo2.jpg"
import usa from "../assets/usa.jpg"

function TourPackages() {
  return (
    <section className='tour_packages'>
        <div className="title_tour_packages">
        TOUR PACKAGES
        </div>
        {/* <div className="tour_cards grid grid-cols-4 grid-rows-2 px-36 gap-5 "> */}
        <div className="tour_cards grid grid-cols-4 grid-rows-2 gap-5">
            {/* <Tourcard tourimage={ladakh} className="row-span-2  h-full w-full " imgClass="rounded-lg h-full w-full shadow-2xl"/>
            <Tourcard tourimage={usa} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={jerusalem} className="col-span-2 w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={tokyo2} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={mauritius} className="w-full h-full " imgClass="rounded-lg w-full h-full shadow-2xl"/>
            <Tourcard tourimage={brazil} className="w-full h-full" imgClass="rounded-lg w-full h-full shadow-2xl"/> */}
            <Tourcard tourimage={ladakh} className="tour_first tour_card row-span-2" tour_name="Ladakh"/>
            <Tourcard tourimage={usa} className="tour_second tour_card" tour_name="USA"/>
            <Tourcard tourimage={jerusalem} className="tour_third tour_card col-span-2" tour_name="Jerusalem"/>
            <Tourcard tourimage={tokyo2} className="tour_fourth tour_card" tour_name="Tokyo"/>
            <Tourcard tourimage={mauritius} className="tour_fifth tour_card" tour_name="Mauritius"/>
            <Tourcard tourimage={brazil} className="tour_sixth tour_card" tour_name="Brazil"/>
        </div>
        <div className="more_tour cursor-pointer">More</div>
    </section>
  )
}

export default TourPackages

