import React from 'react'
import ReactDOM from 'react-dom/client'
import "../src/index.css"
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage'
import { Route, Routes, BrowserRouter, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'
import Main_Site from './Main_Site'
import Hotel_Full_Page from './components/Hotel_Full_Page'
import Tour_Full_Page from './components/Tour_Full_Page'
import Destination_Full_Page from './components/Destination_Full_Page'
import Account_Settings from './components/Account_Settings'
import Acc_Set_PD from './components/Acc_Set_PD'
import Acc_Sett_SD from './components/Acc_Sett_SD'
import Acc_Sett_RV from './components/Acc_Sett_RV'
import Acc_Sett_TH from './components/Acc_Sett_TH'
import './javascript/index'
import { bali_lg, d1_desc, d1att1, d1att2, d1hotel1, d1hotel2,  d2_desc,  d2att1,  d2att2,  d2hotel1,  d2hotel2,  d3_desc,  d3att1,  d3att2,  d3hotel1,  d3hotel2,  d4_desc,  d4att1,  d4att2,  d4hotel1,  d4hotel2,  d5_desc,  d5att1,  d5att2,  d5hotel1,  d5hotel2,  lakshadweep_lg,  paris_lg,  seoul_lg, tokyo_lg } from './javascript/index'


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
      path:"/hotelpage",
      element:<Hotel_Full_Page/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/packages",
      element:<Tour_Full_Page/>,
      errorElement:<ErrorPage/>
    },
    // {
    //   path:"/destination",
    //   element:<Destination_Full_Page/>,
    //   errorElement:<ErrorPage/>,
    //   children:
    //   [
        {
          path:"/destination/seoul",
          element:<Destination_Full_Page d_image={seoul_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d1_desc} d_a_i_1={d1att1} d_a_i_2={d1att2} d_a_n_1="Gyeongbokgung Palace" d_a_n_2="N Seoul Tower" d_h_i_1={d1hotel1} d_h_i_2={d1hotel2} d_h_n_1="L7 Hongdae" d_h_n_2="GLAD Hotel Mapor"/>,
        },
        {
          path:"/destination/tokyo",
          element:<Destination_Full_Page d_image={tokyo_lg} d_name="TOKYO, JAPAN" d_desc={d2_desc} d_a_i_1={d2att1} d_a_i_2={d2att2} d_a_n_1="Sensō-ji" d_a_n_2="N Seoul Tower" d_h_i_1={d2hotel1} d_h_i_2={d2hotel2} d_h_n_1="Shibuya Excel Hotel" d_h_n_2="Hotel Sunroute Plaza"/>,
        },
        {
          path:"/destination/lakshadweep",
          element:<Destination_Full_Page d_image={lakshadweep_lg} d_name="LAKSHADWEEP, INDIA" d_desc={d3_desc} d_a_i_1={d3att1} d_a_i_2={d3att2} d_a_n_1="Minicoy Island Lighthouse" d_a_n_2="Agatti Island" d_h_i_1={d3hotel1} d_h_i_2={d3hotel2} d_h_n_1="Kadmat Beach Resort
          " d_h_n_2="ATS Willingdon Hotel
"/>,
        },
        {
          path:"/destination/bali",
          element:<Destination_Full_Page d_image={bali_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d4_desc} d_a_i_1={d4att1} d_a_i_2={d4att2} d_a_n_1="Sacred Monkey Forest" d_a_n_2="Besakih Great Temple" d_h_i_1={d4hotel1} d_h_i_2={d4hotel2} d_h_n_1=" The Poovath Beachfront" d_h_n_2="The Elephant Court
          "/>,
        },
        {
          path:"/destination/paris",
          element:<Destination_Full_Page d_image={paris_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d5_desc} d_a_i_1={d5att1} d_a_i_2={d5att2} d_a_n_1="Louvre Museum" d_a_n_2="Arc de Triomphe" d_h_i_1={d5hotel1} d_h_i_2={d5hotel2} d_h_n_1="Grand Hotel du Palais" d_h_n_2="Hotel Marceau Elysees"/>,
        },
        
    //   ]
    // },
    {
      path:"/account/",
      element:<Account_Settings/>,
      errorElement:<ErrorPage/>,
      children:
      [
        {
          path:"/account/",
          element:<Acc_Set_PD/>
        },
        {
          path:"/account/security",
          element:<Acc_Sett_SD/>
        },
        {
          path:"/account/reviews",
          element:<Acc_Sett_RV/>
        },
        {
          path:"/account/themes",
          element:<Acc_Sett_TH/>
        },
      ]  
    },
    


  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)