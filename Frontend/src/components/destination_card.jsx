import React from 'react'
import '../css/destination_card.css'

function Card({image, destination_name}) {
  return (
   

    <div className='card'>
          <div className="card__side card__side--back">
            <div className="card__details">
              <ul>
                <li>{destination_name}</li>
              </ul>
                <div className='card_click_detail line'>Click to see details</div>
            </div>
         </div>
          <div className="card__side card__side--front">
            <div className="card__theme">
                <img src={image} alt="image" />
            </div>
          </div>
        </div>
   
  )
}

export default Card