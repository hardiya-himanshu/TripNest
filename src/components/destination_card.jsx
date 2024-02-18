import React from 'react'
import '../css/destination_card.css'

function Card({image}) {
  return (
    
    <div className='card'>
        <img src={image} alt="image" />
    </div>
  )
}

export default Card