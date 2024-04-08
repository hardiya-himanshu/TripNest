import React from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'


function Footer_Policy() {

  return (
    <div className='destination_fullpage_section'>
        <div className="footer_items_content footer_items_pages">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Privacy Policy
            </div>
            <div className='flex flex-col max-w-screen-lg text-xl font-medium text-white text-left gap-5'>
                <div>
                    <summary>
                    Privacy Policy
                    </summary>
                    <p>
                    TripNest is a website created solely for educational purposes as part of a college project. This website does not engage in any commercial activities, and no real bookings, transactions, or personal data collection occur except the user enters during signup/login section which may not be real credentials.
                    </p>
                </div>
                
                <div>
                    <summary>
                    Information Collection and Use
                    </summary>
                    <p>
                TripNest does not collect personal information from users to misuse it. As a result, all the names, phone numbers, email addresses, passwords, or any other credentials are requested or stored for login purposes are just part of maintain entire flow of website only.
                    </p>
                </div>

                <div>
                    <summary>
                    Log Data
                    </summary>
                    <p>
                    Like most websites, TripNest may collect data and information through standard web analytics tools, such as Google Analytics, to better understand how visitors interact with the site. This data is anonymous and does not contain personally identifiable information.
                    </p>
                </div>

                <div>
                    <summary>
                    Cookies
                    </summary>
                    <p>
                    TripNest may use cookies to enhance the user experience. These cookies are used solely for technical purposes, such as session management, and do not track or store any personal information.
                    </p>
                </div>

                <div>
                    <summary>
                    Links to Other Sites
                    </summary>
                    <p>
                    TripNest may contain links to external websites for educational purposes. We are not responsible for the content or privacy practices of these external sites.
                    </p>
                </div>

                <div>
                    <summary>
                    Changes to This Privacy Policy
                    </summary>
                    <p>
                    As TripNest is a project for educational purposes only, this privacy policy is not subject to change. However, any updates or modifications will be clearly communicated in the project documentation.
                    </p>
                </div>

                <div>
                    <summary>
                    Contact Us
                    </summary>
                    <p>
                    If you have any questions or concerns about this privacy policy or TripNest, please contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tripnest.help@gmail.com" target='_blank'>tripnest.help@gmail.com</a>.
                    </p>
                </div>




                



            </div>
        </div>
    </div>
  )
}

export default Footer_Policy
