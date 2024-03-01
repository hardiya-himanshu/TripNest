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
import OnDiscount_FullPage from './components/onDiscount_FullPage'
import Acc_Set_PD from './components/Acc_Set_PD'
import Acc_Sett_SD from './components/Acc_Sett_SD'
import Acc_Sett_RV from './components/Acc_Sett_RV'
import Acc_Sett_TH from './components/Acc_Sett_TH'



import { bali_lg, d1_desc, d1att1, d1att2, d1hotel1, d1hotel2,  d2_desc,  d2att1,  d2att2,  d2hotel1,  d2hotel2,  d3_desc,  d3att1,  d3att2,  d3hotel1,  d3hotel2,  d4_desc,  d4att1,  d4att2,  d4hotel1,  d4hotel2,  d5_desc,  d5att1,  d5att2,  d5hotel1,  d5hotel2,  lakshadweep_lg,  paris_lg,  seoul_lg, sydney, tokyo_lg } from './javascript/index'

import {ladakh_cover, pl_c,la_c,jerusalem_c,brasilia_c,tokyo_c} from './javascript/index'

// categories
import {abad_c,athens_c,auckland_c,beijing_c,berlin_c,cairo_c,london_c,mcmurdo_c,mexicocity_c,miami_c,nairobi_c,rio_c,sydney_c} from './javascript/index'
import Categories_City_FullPage from './components/Categories_City_FullPage'



export const allRoutes= [

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
    {
      path:"/discount",
      element:<OnDiscount_FullPage/>,
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
      element:<Destination_Full_Page d_image={bali_lg} d_name="BALI, INDONESIA" d_desc={d4_desc} d_a_i_1={d4att1} d_a_i_2={d4att2} d_a_n_1="Sacred Monkey Forest" d_a_n_2="Besakih Great Temple" d_h_i_1={d4hotel1} d_h_i_2={d4hotel2} d_h_n_1=" The Poovath Beachfront" d_h_n_2="The Elephant Court
      " dest_to="/"/>,
    },
    {
      path:"/destination/paris",
      element:<Destination_Full_Page d_image={paris_lg} d_name="PARIS, FRANCE" d_desc={d5_desc} d_a_i_1={d5att1} d_a_i_2={d5att2} d_a_n_1="Louvre Museum" d_a_n_2="Arc de Triomphe" d_h_i_1={d5hotel1} d_h_i_2={d5hotel2} d_h_n_1="Grand Hotel du Palais" d_h_n_2="Hotel Marceau Elysees" dest_to="/"/>,
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
  {
    path:"/categories/beijing",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={beijing_c} city_name="BEIJING, CHINA" city_desc="Beijing, China's bustling capital, blends ancient culture with modernity. Iconic landmarks like the Forbidden City and the Great Wall coexist with skyscrapers and vibrant markets. The city pulsates with life, offering a rich tapestry of history, art, and cuisine. From tranquil parks to bustling streets, Beijing captivates with its dynamic energy and timeless allure."/>,
  },
  {
    path:"/categories/jerusalem",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={jerusalem_c} city_name="JERUSALEM, ISRAEL" city_desc="Jerusalem, a city steeped in religious significance, is a captivating mosaic of cultures and histories. Sacred to Judaism, Christianity, and Islam, it's a spiritual nexus where ancient traditions converge. The Old City's labyrinthine alleys lead to revered sites like the Western Wall, Church of the Holy Sepulchre, and Dome of the Rock. Beyond its religious heritage, Jerusalem enthralls with its vibrant markets, rich cuisine, and enduring legacy of resilience and faith."/>,
  },
  {
    path:"/categories/cairo",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={cairo_c} city_name="CAIRO, EGYPT" city_desc="
    Cairo, Egypt's bustling capital, merges ancient wonders with modern life. Iconic pyramids of Giza stand tall against the skyline, while vibrant bazaars and grand mosques fill its bustling streets. Along the Nile, a dynamic blend of history and culture unfolds, captivating visitors with its timeless charm and bustling energy."/>,
  },
  {
    path:"/categories/nairobi",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={nairobi_c} city_name="NAIROBI, KENYA" city_desc="Nairobi, Kenya's cosmopolitan capital, is a bustling metropolis pulsating with vibrant energy and cultural diversity. Surrounded by breathtaking natural beauty, Nairobi serves as a gateway to the country's famed wildlife reserves. Its eclectic mix of modern skyscrapers and traditional markets reflects its rich history and rapid development. From bustling street vendors to upscale restaurants, Nairobi offers a culinary journey through authentic African flavors. "/>,
  },
  {
    path:"/categories/athens",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={athens_c} city_name="ATHENS, GREECE" city_desc="Athens, the cradle of Western civilization, is a vibrant metropolis brimming with history and culture. Home to iconic landmarks like the Acropolis, Parthenon, and Ancient Agora, it seamlessly blends ancient grandeur with modern sophistication. Its bustling streets, lined with charming cafes and lively tavernas, exude a lively Mediterranean spirit. As the birthplace of democracy, philosophy, and the arts."/>
  },
  {
    path:"/categories/berlin",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={berlin_c} city_name="BERLIN, GERMANY" city_desc="
    Berlin, Germany's vibrant capital, is a melting pot of history, culture, and creativity. From the iconic Brandenburg Gate to the remnants of the Berlin Wall, the city tells the story of its tumultuous past and resilient spirit. Today, Berlin thrives as a hub of innovation, with cutting-edge architecture, thriving art scenes, and a diverse culinary landscape. Its eclectic neighborhoods pulse with energy, offering something for every visitor, from trendy cafes and nightlife hotspots to tranquil parks and historic landmarks. "/>,
  },
  {
    path:"/categories/london",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={london_c} city_name="LONDON, UK" city_desc="London, the vibrant capital of the United Kingdom, is a captivating blend of history, culture, and modernity. Iconic landmarks like Big Ben, the Tower of London, and Buckingham Palace dot the cityscape, while bustling markets and diverse neighborhoods offer a taste of its cosmopolitan charm. From world-class museums and theaters to charming parks and riverside walks, London's dynamic energy and timeless allure enchant visitors from around the globe."/>,
  },
  {
    path:"/categories/mcmurdo",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={mcmurdo_c} city_name="MCMURDO, ANTARCTICA" city_desc="McMurdo Station, located in Antarctica, is a vital hub of scientific research and exploration. Despite its remote location, it serves as a bustling center for various research projects, supported by a community of scientists and support staff. Surrounded by vast ice fields and stunning landscapes, McMurdo embodies both the challenges and the wonders of Antarctic exploration, providing a gateway to understanding our planet's southernmost continent."/>,
  },
  {
    path:"/categories/auckland",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={auckland_c} city_name="AUCKLAND, NEW ZEALAND" city_desc="Auckland, New Zealand's vibrant City of Sails, is nestled between two stunning harbors, offering a unique blend of urban excitement and natural beauty. Its iconic skyline is dominated by the towering Sky Tower, while nearby islands and beaches provide opportunities for outdoor adventures. With its rich Maori heritage, thriving arts scene, and diverse culinary offerings, Auckland captivates visitors with its dynamic energy and breathtaking landscapes."/>,
  },
  {
    path:"/categories/sydney",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={sydney_c} city_name="SYDNEY, AUSTRALIA" city_desc="Sydney, Australia's dynamic harbor city, is an iconic blend of stunning landmarks, vibrant culture, and laid-back charm. The Sydney Opera House and Sydney Harbour Bridge adorn its picturesque skyline, while world-renowned beaches like Bondi and Manly beckon surfers and sun-seekers alike. With its thriving arts scene, diverse dining options, and lush green spaces, Sydney offers a captivating mix of urban excitement and natural beauty, making it a must-visit destination for travelers from around the globe."/>,
  },
  {
    path:"/categories/mexicocity",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={mexicocity_c} city_name="MEXICO CITY, MEXICO" city_desc="Mexico City, the bustling capital of Mexico, is a vibrant metropolis steeped in history and culture. Its historic center, a UNESCO World Heritage site, boasts colonial-era architecture, including the iconic Metropolitan Cathedral and Templo Mayor. Modern skyscrapers stand alongside ancient ruins, reflecting the city's rich tapestry of past and present. From bustling markets and lively street food vendors to world-class museums and vibrant neighborhoods, Mexico City offers a sensory feast for visitors eager to explore its diverse offerings and immerse themselves in its unique atmosphere."/>,
  },
  {
    path:"/categories/miami",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={miami_c} city_name="MIAMI, USA" city_desc="Miami, Florida's vibrant metropolis, is a pulsating blend of tropical beauty, diverse culture, and vibrant nightlife. Its iconic Art Deco architecture lines the streets of South Beach, where white sand beaches meet crystal-clear waters. From the colorful murals of Wynwood to the trendy boutiques of Coconut Grove, Miami thrives as a cultural hub. With its fusion of Latin flavors, energetic atmosphere, and year-round sunshine, Miami beckons visitors to indulge in its unique blend of relaxation and excitement."/>,
  },
  {
    path:"/categories/rio",
    errorElement:<ErrorPage/>,
    element:<Categories_City_FullPage cc_image_cover={rio_c} city_name="RIO, BRAZIL" city_desc="Rio de Janeiro, Brazil's Cidade Maravilhosa, is a breathtaking blend of stunning landscapes, vibrant culture, and infectious energy. Its iconic landmarks, including the Christ the Redeemer statue atop Corcovado Mountain and the Sugarloaf Mountain cable car, offer panoramic views of the city's natural beauty. From the world-famous beaches of Copacabana and Ipanema to the lively samba rhythms of its streets, Rio captivates visitors with its intoxicating mix of sun, sand, and samba. "/>,
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

