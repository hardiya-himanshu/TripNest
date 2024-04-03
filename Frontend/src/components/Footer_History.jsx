import React from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'


function Footer_History() {

  return (
    <div className='destination_fullpage_section'>
        <div className="footer_items_content">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Our History
            </div>
            <div className='flex flex-col max-w-screen-lg text-xl font-medium text-white text-left gap-5'>
            

            <div>
                <summary>The Spark of Inspiration</summary>
                <p>In the time span of four months by using technologies like Node.js, MongoDB, and React, we pieced together the framework of what would become TripNest.</p>
            </div>


            <div>
                <summary>More than a Travel Service</summary>
                <p>TripNest wasn't just about booking tour and hotels. It was about creating a community of travelers a place where people could share and discover new destinations, and find inspiration for their next adventure. We wanted TripNest to feel like home for anyone with a sense of wanderlust.</p>
            </div>


            <div>
                <summary>Ready To Improve</summary>
                <p>We eagerly awaited user feedback. We listened intently to our users suggestions and criticisms, and used that information to make improvements and iterate on our platform.</p>
            </div>

            <div>
                <summary>Response for Feedback</summary>
                <p>With each new milestone whether it was reaching a certain number of users, launching a new feature we continously try our best for improve user experience and maintain security.</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer_History
