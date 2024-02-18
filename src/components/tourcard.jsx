import React from 'react'
import '../css/tourcard.css'
import {Link} from 'react-router-dom'


function Tourcard({tourimage, className, imgClass, tour_name}) {
 
  return (
      <div className={className}>
        
          <Link to='/packages'>

            <div className="dark_bg_tour"></div>
          </Link>
          <img className={imgClass} src={tourimage} alt="tour_image" />
          <div className="tour_name">{tour_name}</div>
      </div>
  )
  }

export default Tourcard
