import React from 'react'
import Home from './components/Home'
import Hotels from './components/Hotels'
import TopDestination from './components/TopDestination'
import TourPackages from './components/TourPackages'
import Categories_section from './components/Categories_section'
import OnDiscount from './components/OnDiscount'
import Footer from './components/Footer'
import { useEffect } from 'react'

function Main_Site() {
  const body = document.querySelector('body')
  const root = document.querySelector(':root')
  


  useEffect(()=>{
   
},[])

useEffect(()=>{
    localStorage.setItem("bgcolor1",JSON.stringify(body.getAttribute('data-theme', '1')))
    localStorage.setItem("bgcolor2",JSON.stringify(body.getAttribute('data-theme', '2')))
    localStorage.setItem("bgcolor3",JSON.stringify(body.getAttribute('data-theme', '3')))
    localStorage.setItem("bgcolor4",JSON.stringify(body.getAttribute('data-theme', '4')))
},[body])
  


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
