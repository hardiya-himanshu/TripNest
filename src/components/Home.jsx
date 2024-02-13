import React from 'react'
import '../css/home.css'
import '../css/style.css'
import logo from '../assets/ट्रिपNest(png)_wo_bg_white.png'
import user from "../assets/white_user.png"


function Home() {
  return (      
    <>
<div className="progressbar"></div>
<div className="scrollpath"></div>
<section className="home">
    <div className='black_opacity'></div>
    <nav>
        <div className="logo">
            <img src={logo} alt="Image" />
        </div>
        <div className="nav_content">
            <ul>
                <li>Top Destinations</li>
                <li>Packages</li>
                <li>Hotels</li>
                <li>Categories</li>
                <li>Discount</li>
            </ul>

                <img src={user} alt=""/>
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