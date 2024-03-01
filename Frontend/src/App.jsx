import { RouterProvider,createBrowserRouter } from "react-router-dom";
import React from 'react'
import { allRoutes } from "./routes";


function App() {
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
