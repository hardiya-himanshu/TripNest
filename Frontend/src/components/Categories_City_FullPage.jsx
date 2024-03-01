import React from 'react'
import '../css/categories_city_fullpage.css'
import { Link } from 'react-router-dom'
import {close} from '../javascript/index'
import { phone, email } from '../javascript/index'

function Categories_City_FullPage({cc_image_cover,city_name,city_desc}) {
  return (
    <div className='categories_city_fullpage'>
      <div className="ccfp_content">
       <Link to='/categories'>
            <img className='ccfp_close' src={close} alt="" />
       </Link>

       <div className="tfp_image">
                <div className="gradient"></div>
                <img src={cc_image_cover} alt="" />
            </div>
            <div className="tfp_others">
                <div className="tfp_city_name">{city_name}</div>

                <div className="tfp_city_description">{city_desc}</div>

                <div className="tpf_contacts">
                    <div className="tpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="tpf_email">
                        <img src={email} alt="" />
                        <div>help.tripnest@gmail.com</div>
                    </div>
                </div>

                <div className=" tpf_btn">
                   BOOK NOW
                </div>
            </div>
       </div>
    </div>
  )
}

export default Categories_City_FullPage
