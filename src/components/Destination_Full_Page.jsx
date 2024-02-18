import React from 'react'
import "../css/destination_full_page.css"
import "../css/style.css"
import seoul_lg from "../assets/seoul_lg.jpg"
import att1 from "../assets/att1.jpeg"
import att2 from "../assets/att2.jpeg"
import att3 from "../assets/att3.jpeg"
import hotel1 from "../assets/hotel1.webp"
import hotel2 from "../assets/hotel2.webp"
import hotel3 from "../assets/hotel3.webp"
import phone from "../assets/phone.png"
import close from "../assets/close.png"
import email from "../assets/email.png"
import {Link} from 'react-router-dom'


function Destination_Full_Page() {
  return (
    <div className='destination_fullpage_section'>
        <div className="dfp_content">
       <Link to='/'>
            <img className='dfp_close' src={close} alt="" />
       </Link>

            <div className="dfp_image">
                <div className="gradient"></div>
                <img src={seoul_lg} alt="" />
            </div>
            <div className="dfp_others">
                <div className="dfp_city_name">SEOUL, SOUTH KOREA</div>
                <div className="dfp_city_description">Seoul, the vibrant capital of South Korea, seamlessly blends modernity with ancient traditions. Skyscrapers coexist with historic palaces, bustling street markets, and cutting-edge technology. Explore the city's rich history at Gyeongbokgung Palace, indulge in flavorful street food, and witness the dynamic energy of K-pop culture. Seoul is a captivating blend of old and new.</div>
                <div className="dfp_attractions">
                    <div className="dfp_attractions_title">NEARBY ATTRACTIONS</div>
                    
                    <div className="dfp_attractions_main">
                        <div className="dfp_attractions_content">
                            <img src={att1} alt="" />
                            <div className="attraction_name">Gyeongbokgung Palace</div>
                        </div>
                        <div className="dfp_attractions_content">
                            <img src={att2} alt="" />
                            <div className="attraction_name">N Seoul Tower</div>
                        </div>
                        <div className="dfp_attractions_content">
                            <img src={att3} alt="" />
                            <div className="attraction_name">National Museum of Korea</div>
                        </div>
                    </div>

                </div>
                <div className="dfp_hotels">
                    <div className="dfp_hotels_title">NEARBY HOTELS</div>
                    
                    <div className="dfp_hotels_main">
                        <div className="dfp_hotels_content">
                            <img src={hotel1} alt="" />
                            <div className="hotel_name">L7 Hongdae</div>
                        </div>
                        <div className="dfp_hotels_content">
                            <img src={hotel2} alt="" />
                            <div className="hotel_name">GLAD Hotel Mapor</div>
                        </div>
                        <div className="dfp_hotels_content">
                            <img src={hotel3} alt="" />
                            <div className="hotel_name">L7 Myeongdong</div>
                        </div>
                    </div>

                </div>
                <div className="dfp_reviews">
                    <div className="dpf_reviews_title">
                        REVIEW
                    </div>
                    <div className="dfp_reviews_content">
                    <form action="">
                        <textarea name="" id="" cols="100" rows="4" placeholder='My Review...'/>

                    </form>
                    </div>
                </div>
                <div className="dpf_contacts">
                    <div className="dpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="dpf_email">
                        <img src={email} alt="" />
                        <div>help.tripnest@gmail.com</div>
                    </div>
                </div>
                <div className="dpf_btn">
                   BOOK NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination_Full_Page
