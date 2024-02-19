import React from 'react'
import '../css/tourcard.css'
import {Link} from 'react-router-dom'


function Tourcard({tourimage, className, imgClass, tour_name}) {
 
  return (
      <div className={`${className} tour_card`}>
        
          <Link to='/packages'>

          <img className={imgClass} src={tourimage} alt="tour_image" />
          </Link>
            {/* <div className="dark_bg_tour"></div> */}
          <div className="tour_name">{tour_name}</div>
      </div>
  )
  }

export default Tourcard
