import React from 'react'
import '../css/footer.css'

function Categories_FullPage_Cards({cat_card_img, cat_card_text}) {
  return (
    <div className="conti_card">
        <img src={cat_card_img} alt="" className='cat_card_img'/>    
        <div className="cat_card_text alignment">{cat_card_text}</div>     
     </div>
  )
}

export default Categories_FullPage_Cards
