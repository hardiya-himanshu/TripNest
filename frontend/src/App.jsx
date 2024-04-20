import { RouterProvider,createBrowserRouter } from "react-router-dom";
import React, { useEffect } from 'react'
import { allRoutes } from "./routes";


function App() {


  useEffect(()=>{
    const themeNo = localStorage.getItem("theme")
    document.querySelector("body").setAttribute('data-theme', themeNo)

  },[])

  const router = createBrowserRouter(
      allRoutes    
  )
  return (
    
    <>
    <RouterProvider router={router}/>
    </>
    
  )
}

export default App
