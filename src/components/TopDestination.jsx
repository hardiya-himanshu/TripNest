import React from 'react'
import Card from './card.jsx'
import '../css/topdestination.css'
import '../css/style.css'


function TopDestination() {
  return (
    <div className='top_destination'>
        <div className="title">
        TOP DESTINATION
        </div>
        <div className="cards_section">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default TopDestination