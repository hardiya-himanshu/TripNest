import React from 'react'
import Theme_Card from './Theme_Card'
import "../css/hotel_full_page.css"
import "../css/style.css"


function Acc_Sett_TH() {
  

  const theme1 = () =>{
    document.querySelector("body").setAttribute('data-theme', '1')
  }
  const theme2 = () =>{
    document.querySelector("body").setAttribute('data-theme', '2')
  }
  const theme3 = () =>{
    document.querySelector("body").setAttribute('data-theme', '3')
  }
  const theme4 = () =>{
    document.querySelector("body").setAttribute('data-theme', '4')
  }

  return (
    <div className=' asth_main p-7 flex flex-col justify-start gap-12 w-full h-full overflow-y-scroll acth' >
      <div className="acth_title text-3xl">
            THEMES
      </div>
      <div className="theme_cards acth_content grid grid-cols-2 gap-5 rounded-lg w-fit">
            <div onClick={theme1}>
                <Theme_Card primary="bg-primary1" ColorName="COOL" secondary="bg-secondary1" />
            </div>
            <div onClick={theme2}>
                <Theme_Card primary="bg-primary2" ColorName="LIGHT" secondary="bg-secondary2" />
            </div>
            <div onClick={theme3}>
                <Theme_Card primary="bg-primary3" ColorName="DARK" secondary="bg-secondary3" />
            </div>
            <div onClick={theme4}>
                <Theme_Card primary="bg-primary4" ColorName="FOREST" secondary="bg-secondary4" />
            </div>
        
      </div>
        <input type="button" value="APPLY" className='rounded-lg w-24 text-black font-semibold h-8 bg-white cursor-pointer' />
    </div>
  )
}

export default Acc_Sett_TH
