// JS LOGICS


export  function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

 



//  TOP DESTINATION


import paris from "../assets/paris.webp"
import seoul from "../assets/seoul.jpg"
import tokyo from "../assets/tokyo.jpg"
import lakshadweep from "../assets/lakshadweep.jpg"
import bali from "../assets/bali.jpg"
import left_arrow from "../assets/left-arrow.png"
import right_arrow from "../assets/right-arrow.png"

export{paris,seoul,tokyo,lakshadweep,bali,left_arrow,right_arrow}


import seoul_lg from "../assets/seoul_lg.jpg"
import d1att1 from "../assets/att1.jpeg"
import d1att2 from "../assets/att2.jpeg"
import d1hotel1 from "../assets/hotel1.webp"
import d1hotel2 from "../assets/hotel2.webp"

import tokyo_lg from "../assets/tokyo_lg.jpg"
import d2att1 from "../assets/d2att1.jpeg"
import d2att2 from "../assets/d2att2.jpeg"
import d2hotel1 from "../assets/d2hotel1.jpg"
import d2hotel2 from "../assets/d2hotel2.jpg"

import lakshadweep_lg from "../assets/lakshadweep_lg.jpg"
import d3att1 from "../assets/d3att1.jpeg"
import d3att2 from "../assets/d3att2.jpg"
import d3hotel1 from "../assets/d3hotel1.jpeg"
import d3hotel2 from "../assets/d3hotel2.jpeg"

import bali_lg from "../assets/bali_lg.jpg"
import d4att1 from "../assets/d4att1.jpeg"
import d4att2 from "../assets/d4att2.jpeg"
import d4hotel1 from "../assets/d4hotel1.jpeg"
import d4hotel2 from "../assets/d4hotel2.jpeg"

import paris_lg from "../assets/paris_lg.jpg"
import d5att1 from "../assets/d5att1.jpeg"
import d5att2 from "../assets/d5att2.jpeg"
import d5hotel1 from "../assets/d5hotel1.jpeg"
import d5hotel2 from "../assets/d5hotel2.jpeg"



const d1_desc ="Seoul, the vibrant capital of South Korea, seamlessly blends modernity with ancient traditions. Skyscrapers coexist with historic palaces, bustling street markets, and cutting-edge technology. Explore the city's rich history at Gyeongbokgung Palace, indulge in flavorful street food, and witness the dynamic energy of K-pop culture. Seoul is a captivating blend of old and new."

const d2_desc ="Tokyo, Japan's bustling capital, is a vibrant metropolis blending modernity with tradition. Neon-lit streetscapes contrast with serene temples and lush parks. The city pulses with energy, offering diverse culinary delights, cutting-edge technology, and unparalleled shopping experiences. Its efficient transit system connects iconic landmarks like the Tokyo Tower and the historic Senso-ji Temple."

const d5_desc ="Paris, France's iconic capital, exudes timeless elegance and cultural richness. The city of love boasts majestic landmarks like the Eiffel Tower and Notre-Dame Cathedral, lining romantic boulevards and quaint cobblestone streets. Renowned museums, including the Louvre and Musée d'Orsay, house masterpieces, while sidewalk cafes and haute cuisine offer gastronomic delights amid a backdrop of artistic inspiration."

const d3_desc ="Lakshadweep, India's tropical paradise, is an archipelago of serene islands in the Arabian Sea. Pristine beaches with powdery white sand fringe turquoise waters teeming with marine life. Traditional island culture thrives amidst coconut palm-lined shores and coral reefs, offering idyllic retreats for snorkeling, diving, and unwinding in luxurious resorts."

const d4_desc ="Bali, Indonesia's enchanting island, captivates visitors with its mystical allure. Lush rice terraces cascade down verdant hillsides, while ancient temples nestled in lush jungles evoke a sense of spiritual tranquility. Pristine beaches beckon surfers and sun-seekers alike, while vibrant markets and colorful ceremonies showcase Bali's rich culture. "

export {seoul_lg, tokyo_lg, lakshadweep_lg,bali_lg,paris_lg,d1att1,d2att1,d3att1,d4att1,d5att1,d1att2,d2att2,d3att2,d4att2,d5att2,d1hotel1,d2hotel1,d3hotel1,d4hotel1,d5hotel1,d1hotel2,d2hotel2,d3hotel2,d4hotel2,d5hotel2, d1_desc,d2_desc,d3_desc,d4_desc,d5_desc}


// TOUR PACKAGES

import ladakh_cover from '../assets/ladakh_full.jpg'
import pl_c from '../assets/pl_c.jpg'
import jerusalem_c from '../assets/jerusalem_c.jpg'
import brasilia_c from '../assets/brasilia_c.jpg'
import tokyo_c from '../assets/tokyo_c.jpg'
import la_c from '../assets/la_c.png'
export{ladakh_cover, pl_c,la_c,jerusalem_c,brasilia_c,tokyo_c}

// General

import menu from '../assets/menu.png'
import close from "../assets/close.png"
import sound_on from '../assets/sound_on.png'
import sound_off from '../assets/sound_off.png'
import user from "../assets/white_user.png"
import bg_video from "../assets/bg_video2.mp4"
import bg_audio from "../assets/bg_audio.mp3"
import logo from '../assets/ट्रिपNest(png)_wo_bg_white.png'
export {menu,close,sound_on,sound_off,user,bg_audio,bg_video,logo}


// Categories


import antarctica from '../assets/antarctica.jpg'
import na from '../assets/na.webp'
import sa from '../assets/sa.png'
import europe from '../assets/europe.jpg'
import asia from '../assets/asia.jpg'
import africa from '../assets/africa.jpg'
import oceania from '../assets/oceania.jpg'

export {antarctica,na,sa,europe,asia,africa,oceania}


// Categories => Categories_Full_Page

import ahmdbd from "../assets/ahmdbd.webp"
import jerusalem2 from "../assets/jerusalem2.jpg"
import beijing from "../assets/beijing.jpg"
import rio from "../assets/rio.jpg"
import mexicocity from "../assets/mexicocity.jpg"
import nairobi from "../assets/nairobi.jpg"
import antarctica2 from "../assets/antarctica2.jpg"
import sydney from "../assets/sydney.jpeg"
import miami from "../assets/miami.avif"
import london from "../assets/london.avif"
import auckland from "../assets/auckland.webp"
import athens from "../assets/athens.webp"
import berlin from "../assets/berlin.webp"
import cairo from "../assets/cairo.webp"


export{ahmdbd,beijing,jerusalem2,rio,mexicocity,miami,sydney,antarctica2,london,athens,auckland,berlin,cairo,nairobi}


// Categories => Categories_Full_Page => Categories_Full_Page_View


import abad_c from '../assets/abad_lg.jpeg'
import athens_c from '../assets/athens_c.jpg'
import auckland_c from '../assets/auckland_c.avif'
import beijing_c from '../assets/beijing_c.jpg'
import berlin_c from '../assets/berlin_c.jpg'
import cairo_c from '../assets/cairo_c.jpg'
import london_c from '../assets/london_c.jpg'
import mcmurdo_c from '../assets/mcmurdo_c.jpg'
import mexicocity_c from '../assets/mexicocity_c.jpg'
import miami_c from '../assets/miami_c.jpg'
import nairobi_c from '../assets/nairobi_c.jpg'
import rio_c from '../assets/rio_c.jpg'
import sydney_c from '../assets/sydney_c.jpg'

export{abad_c,athens_c,auckland_c,beijing_c,berlin_c,cairo_c,london_c,mcmurdo_c,mexicocity_c,miami_c,nairobi_c,rio_c,sydney_c}


// FOOTER


import x from "../assets/x.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import reddit from "../assets/reddit.svg"
import work from "../assets/work.png"
import history from "../assets/history.png"
import phone from "../assets/phone.png"
import telephone from "../assets/telephone.png"
import email from "../assets/email.png"
import terms from "../assets/terms.png"
import policy from "../assets/policy.png"
import message from "../assets/message.png"

export{x,facebook,instagram,reddit,work,history,phone,telephone,email,terms,policy,message}


// Main.jsx
