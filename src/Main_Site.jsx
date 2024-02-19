import React from 'react'
import Home from './components/Home'
import Hotels from './components/Hotels'
import TopDestination from './components/TopDestination'
import TourPackages from './components/TourPackages'
import Categories_section from './components/Categories_section'
import OnDiscount from './components/OnDiscount'
import Footer from './components/Footer'

function Main_Site() {

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("onload", () => {
      document.body.removeChild(loader);
    });
  });

  
  return (
    <div>
      <Home/>
      <TopDestination/>
      <TourPackages/>
      <Hotels/>
      <Categories_section/>
      <OnDiscount/>
      <Footer/>
    </div>
  )
}

export default Main_Site
