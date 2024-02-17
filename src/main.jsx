import React from 'react'
import ReactDOM from 'react-dom/client'
import "../src/index.css"
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage'
import { Route, Routes, BrowserRouter, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'
import Main_Site from './Main_Site'
import Account_Settings from './components/Account_Settings'

const router = createBrowserRouter([

    {
      path:"/",
      element:<Main_Site/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/login",
      element:<Login/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/signup",
      element:<Signup/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/account",
      element:<Account_Settings/>,
      errorElement:<ErrorPage/>
    }


  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)