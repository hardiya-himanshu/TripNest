import React from 'react'
import { Link } from 'react-router-dom'
import { close } from '../javascript'


function Footer_Terms() {

  return (
    <div className='destination_fullpage_section'>
        <div className="footer_items_content footer_items_pages">
            <Link to="/" className='dfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="footer_items_title">
                Terms Of Use
            </div>
            <div className='flex flex-col max-w-screen-lg text-xl font-medium text-white text-left gap-5'>
  <div>
    <summary>Use of Service</summary>
    <p>You must be at least 18 years old to use the Service.</p>
    <p>You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
    <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or mobile device.</p>
  </div>

  <div>
    <summary>User Content</summary>
    <p>You retain ownership of any content you submit, post, or display on or through the Service ("User Content").</p>
    <p>By submitting, posting, or displaying User Content, you grant TripNest a non-exclusive, royalty-free, worldwide, transferable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content.</p>
  </div>

  <div>
    <summary>Limitation of Liability</summary>
    <p>In no event shall TripNest, nor its developers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
  </div>

  <div>
    <summary>Governing Law</summary>
    <p>These Terms shall be governed and construed in accordance with the laws of "Your Country", without regard to its conflict of law provisions.</p>
  </div>

  <div>
    <summary>Contact Us</summary>
    <p>If you have any questions about these Terms, please contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tripnest.help@gmail.com" target='_blank'>tripnest.help@gmail.com</a>.</p>
  </div>
</div>

        </div>
    </div>
  )
}

export default Footer_Terms
