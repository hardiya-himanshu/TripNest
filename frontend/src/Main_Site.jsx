import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Main_Section from './components/Main_Section'

function Main_Site() {
  const body = document.querySelector('body')

  return (
    <div>
      <Home/>
      <Main_Section/>
      <Footer/>
    </div>
  )
}

export default Main_Site
