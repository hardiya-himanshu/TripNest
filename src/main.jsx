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
import Acc_Set_PD from './components/Acc_Set_PD'
import Acc_Sett_SD from './components/Acc_Sett_SD'

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
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/account/personal_details",
          element:<Acc_Set_PD/>
        },
        {
          path:"/account/security",
          element:<Acc_Sett_SD/>
        },
      ]
    }


  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)