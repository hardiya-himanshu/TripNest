import React from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'


function Footer_Work() {

  return (
    <div className='destination_fullpage_section'>
        <div className="footer_items_content footer_items_pages">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Our Work
            </div>
            <div className='flex flex-col max-w-screen-lg text-xl font-medium text-white text-left gap-5'>
           
            
            <div>
                <summary>
                Tailored Travel Solutions
                </summary>
                <p>                          
                At TripNest, we understand that every traveler is unique. That's why we offer tailored travel solutions designed to meet your specific needs and preferences. Whether you're seeking a relaxing beach getaway, an adventurous trekking expedition, or a cultural immersion experience, we've got you covered.
                </p>
            </div>

            <div>
                <summary>
                Curated Destinations
                </summary>
                <p>
                Discover the world's most captivating destinations with TripNest. Our site bring you handpicked selections of top-notch destinations, ensuring unforgettable experiences that exceed your expectations.
                </p>
            </div>

            <div>
                <summary>
                Seamless Booking Experience
                </summary>
                <p>
                Say goodbye to the hassle of travel planning with TripNest. Our user-friendly platform allows you to book hotels, tours, and activities seamlessly, all in one place. With secure payment options and instant confirmation, you can rest assured that your travel arrangements are in good hands.
                </p>
            </div>

            <div>
                <summary>
                Continuous Innovation
                </summary>
                <p>
                We're always looking for ways to enhance your travel experience. Through ongoing research and development, we strive to introduce innovative features and services that make your journey smoother, more enjoyable, and more memorable.
                </p>
            </div>

            <div>
                <summary>
                Join the Adventure
                </summary>
                <p>
                Ready to embark on your next adventure? Whether you're a solo traveler, a couple seeking a romantic getaway, or a family planning a memorable vacation, TripNest is here to help you make the most of your travels. Join us and let the journey begin!
                </p>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Footer_Work
