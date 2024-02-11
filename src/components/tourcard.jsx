import React from 'react'
import '../css/tourcard.css'

function Tourcard({tourimage, className, imgClass, tour_name}) {
 
  return (
    <div className={className}>
        <div className="dark_bg_tour"></div>
        <img className={imgClass} src={tourimage} alt="tour_image" />
        <div className="tour_name">{tour_name}</div>
    </div>
  )
  }

export default Tourcard
