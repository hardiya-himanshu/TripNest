import React from 'react'
import ReactDOM from 'react-dom/client'
import "../src/index.css"
import App from './App'

import { Route, Routes, BrowserRouter, RouterProvider, createBrowserRouter ,createRoutesFromElements } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './components/ErrorPage'
import Main_Site from './Main_Site'
import Hotel_Full_Page from './components/Hotel_Full_Page'
import Tour_Full_Page from './components/Tour_Full_Page'
import Destination_Full_Page from './components/Destination_Full_Page'
import Categories_Full_Card from './components/Categories_Full_Page'
import Account_Settings from './components/Account_Settings'
import Acc_Set_PD from './components/Acc_Set_PD'
import Acc_Sett_SD from './components/Acc_Sett_SD'
import Acc_Sett_RV from './components/Acc_Sett_RV'
import Acc_Sett_TH from './components/Acc_Sett_TH'



import { bali_lg, d1_desc, d1att1, d1att2, d1hotel1, d1hotel2,  d2_desc,  d2att1,  d2att2,  d2hotel1,  d2hotel2,  d3_desc,  d3att1,  d3att2,  d3hotel1,  d3hotel2,  d4_desc,  d4att1,  d4att2,  d4hotel1,  d4hotel2,  d5_desc,  d5att1,  d5att2,  d5hotel1,  d5hotel2,  lakshadweep_lg,  paris_lg,  seoul_lg, tokyo_lg } from './javascript/index'

import {ladakh_cover, pl_c,la_c,jerusalem_c,brasilia_c,tokyo_c} from './javascript/index'

// categories
import { abad_c} from './javascript/index'
import Categories_City_FullPage from './components/Categories_City_FullPage'



const router = createBrowserRouter([

// GENERAL

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
      path:"/categories",
      element:<Categories_Full_Card/>,
      errorElement:<ErrorPage/>,
    },



    // TOP DESTINATION

    {
      path:"/destination/seoul",
      element:<Destination_Full_Page d_image={seoul_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d1_desc} d_a_i_1={d1att1} d_a_i_2={d1att2} d_a_n_1="Gyeongbokgung Palace" d_a_n_2="N Seoul Tower" d_h_i_1={d1hotel1} d_h_i_2={d1hotel2} d_h_n_1="L7 Hongdae" d_h_n_2="GLAD Hotel Mapor" dest_to="/"/>,
    },
    {
      path:"/destination/tokyo",
      element:<Destination_Full_Page d_image={tokyo_lg} d_name="TOKYO, JAPAN" d_desc={d2_desc} d_a_i_1={d2att1} d_a_i_2={d2att2} d_a_n_1="Sensō-ji" d_a_n_2="N Seoul Tower" d_h_i_1={d2hotel1} d_h_i_2={d2hotel2} d_h_n_1="Shibuya Excel Hotel" d_h_n_2="Hotel Sunroute Plaza" dest_to="/"/>,
    },
    {
      path:"/destination/lakshadweep",
      element:<Destination_Full_Page d_image={lakshadweep_lg} d_name="LAKSHADWEEP, INDIA" d_desc={d3_desc} d_a_i_1={d3att1} d_a_i_2={d3att2} d_a_n_1="Minicoy Island Lighthouse" d_a_n_2="Agatti Island" d_h_i_1={d3hotel1} d_h_i_2={d3hotel2} d_h_n_1="Kadmat Beach Resort
      " d_h_n_2="ATS Willingdon Hotel
      " dest_to="/"/>,
    },
    {
      path:"/destination/bali",
      element:<Destination_Full_Page d_image={bali_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d4_desc} d_a_i_1={d4att1} d_a_i_2={d4att2} d_a_n_1="Sacred Monkey Forest" d_a_n_2="Besakih Great Temple" d_h_i_1={d4hotel1} d_h_i_2={d4hotel2} d_h_n_1=" The Poovath Beachfront" d_h_n_2="The Elephant Court
      " dest_to="/"/>,
    },
    {
      path:"/destination/paris",
      element:<Destination_Full_Page d_image={paris_lg} d_name="SEOUL, SOUTH KOREA" d_desc={d5_desc} d_a_i_1={d5att1} d_a_i_2={d5att2} d_a_n_1="Louvre Museum" d_a_n_2="Arc de Triomphe" d_h_i_1={d5hotel1} d_h_i_2={d5hotel2} d_h_n_1="Grand Hotel du Palais" d_h_n_2="Hotel Marceau Elysees" dest_to="/"/>,
    },
    {
      path:"/destination/paris",
      element:<Tour_Full_Page/>,
    },




    //  TOUR PACKAGES
   
    {
      path:"/tour/ladakh",
      element:<Tour_Full_Page image_cover={ladakh_cover} tour_name="LADAKH, INDIA" tour_desc="Ladakh, located in the northernmost part of India, is known for its unique culture, rugged terrain, and scenic beauty1. It’s one of the highest regions in the world2. Famous for its Buddhist monasteries, stunning lakes, and snow-capped peaks1, Ladakh offers a blend of natural beauty and cultural richness" tour_duration="3 Nights" tour_price="44,999"/>,errorElement:<ErrorPage/>
    },
    {
      path:"/tour/los_angeles",
      element:<Tour_Full_Page image_cover={la_c} tour_name="LOS ANGELES, USA" tour_desc="Los Angeles, the entertainment capital of the world, dazzles with its palm-lined boulevards, iconic landmarks, and perpetual sunshine. From the glitz of Hollywood to the laid-back vibes of Venice Beach, LA offers a tapestry of cultures, cuisines, and creativity. Its sprawling metropolis embraces diversity, innovation, and endless possibilities, epitomizing the quintessential California dream." tour_duration="6 Nights" tour_price="129,999"/>,errorElement:<ErrorPage/>
    },
    {
      path:"/tour/jerusalem",
      element:<Tour_Full_Page image_cover={jerusalem_c} tour_name="JERUSALEM, ISRAEL" tour_desc="Jerusalem, the spiritual heart of three major religions, beckons with its ancient walls, sacred sites, and rich history. The Old City's labyrinthine alleys reveal millennia of stories, while the Western Wall resonates with prayers. Modern Jerusalem thrives with diverse communities, bustling markets, and a vibrant cultural scene, embodying a city both timeless and evolving." tour_duration="4 Nights" tour_price="72,999"/>,errorElement:<ErrorPage/>
    },
    {
      path:"/tour/tokyo",
      element:<Tour_Full_Page image_cover={tokyo_c} tour_name="TOKYO, JAPAN" tour_desc="Tokyo, Japan's dynamic capital, pulses with energy and innovation. Towering skyscrapers blend with ancient temples, reflecting a rich cultural tapestry. Neon-lit streets buzz with life day and night, offering unparalleled culinary delights, from sushi to ramen. Its efficient transit system connects districts, each offering a unique blend of tradition and modernity." tour_duration="3 Nights" tour_price="84,999"/>,errorElement:<ErrorPage/>
    },
    {
      path:"/tour/port_louis",
      element:<Tour_Full_Page image_cover={pl_c} tour_name="PORT LOUIS, MAURITIUS" tour_desc="Port Louis, the bustling capital of Mauritius, harmonizes colonial heritage with modern vibrancy. Its waterfront bustles with activity, from the colorful Central Market to the historic Aapravasi Ghat. The city's diverse population infuses its streets with a fusion of cultures, reflected in its cuisine, architecture, and lively atmosphere. " tour_duration="6 Nights" tour_price="98,999"/>,errorElement:<ErrorPage/>
    },
    {
      path:"/tour/brasilia",
      element:<Tour_Full_Page image_cover={brasilia_c} tour_name="BRASILIA, BRAZIL" tour_desc="Brasília, Brazil's visionary capital, captivates with its modernist architecture and urban design. Designed by Oscar Niemeyer and Lucio Costa, its striking landmarks include the futuristic Cathedral of Brasília and the soaring Congresso Nacional. The city's planned layout, with its expansive boulevards and geometric shapes, reflects a bold vision of progress and ambition. " tour_duration="5 Nights" tour_price="109,999"/>,errorElement:<ErrorPage/>
    },



  // CATEGORIES
  
  {
    path:"/categories/ahmedabad",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={abad_c} city_name="AHMEDABAD, INDIA" city_desc="Ahmedabad, the vibrant commercial hub of Gujarat, pulsates with a rich tapestry of culture, commerce, and history. Its bustling streets blend ancient heritage with modern dynamism, from the intricately carved architecture of the old city to the sleek skyscrapers of the new. Famous for its textiles, cuisine, and entrepreneurial spirit, Ahmedabad is a melting pot of tradition and innovation, offering a captivating experience for visitors and residents alike."/>,
  },



    

  // ACCOUNT

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