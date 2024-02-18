import React from 'react'
import lkdwp from '../assets/rv_bg.webp'

function Acc_Sett_RV() {
  return (
    <div>
        <div className='p-7 flex flex-col gap-12 justify-center w-72' >
      <div className="acrv_title text-3xl ">
            MY REVIEWS
      </div>
      <div className="acrv_list">

      <div className="acrv_content flex flex-col justify-center items-center w-72 bg-white rounded-xl overflow-hidden p-2 gap-2">
    
        <div className='review_image w-full h-2/3 rounded-t-md'>
        <img src={lkdwp} alt="Review_Image"  className='rounded-t-md'/>
        </div>

        <div className='review_text rounded-lg'>
            <textarea type="text" className='resize-none  outline-none rounded-lg text-black placeholder:text-gray-500' placeholder='My Review...' 
              rows="5" cols="31"
            />
        </div>
        
      </div>
      </div>
      <input type="button" value="APPLY" className='rounded-lg text-black font-semibold w-1/3 h-8 bg-white' />

    </div>
    </div>
  )
}

export default Acc_Sett_RV
