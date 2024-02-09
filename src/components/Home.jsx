import React from 'react'
import '../css/home.css'
import '../css/style.css'
// import logo from '../assets/ट्रिपNest(png)_wo_bg_white.png'


function Home() {
  return (      
    <>
        
<section class="home">
    <div className='black_opacity'></div>
    <nav>
        <div class="logo">
            <img src="../public/assets/ट्रिपNest(png)_wo_bg_white.png" alt="Image" />
        </div>
        <div class="nav_content">
            <ul>
                <li>Top Destinations</li>
                <li>Packages</li>
                <li>Hotels</li>
                <li>Categories</li>
                <li>Discount</li>
            </ul>
                
                <img src="../public/assets/white_user.png" alt=""/>
        </div>
    </nav>
    <div className="tagline">
   EXPERIENCE THE WORLD YOUR WAY
<br/>WITH TRIPNEST
    </div>
</section>
    </>

    
  )
}

export default Home




