import React from 'react'
import '../css/categories_card.css'
import usa from "../assets/usa.jpg"


function Categories_card({className, categories_card_name, categories_card_image, categories_card_nameclass}) {
  return (
    <div className={className}>
        {/* <div className="dark_bg_categories"></div> */}
        <img className='categories_card_image' src={categories_card_image} alt="Image" />
        <div className={categories_card_nameclass}>{categories_card_name}</div>

    </div>
  )
}

export default Categories_card
