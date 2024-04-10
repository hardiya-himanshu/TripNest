import React from 'react'
import Hotels from '../components/Hotels'
import TopDestination from '../components/TopDestination'
import TourPackages from '../components/TourPackages'
import Categories_section from '../components/Categories_section'
import OnDiscount from '../components/OnDiscount'

function Main_Section() {
  return (
    <div className='main_section'>
    <TopDestination/>
    <TourPackages/>
    <Hotels/>
    <Categories_section/>
    <OnDiscount/>
    </div>
  )
}

export default Main_Section
