import {Link, Outlet} from 'react-router-dom'
import React from 'react'
import "../css/account_settings.css"
import close from "../assets/close.png"
import Acc_Set_PD from './Acc_Set_PD'

function Account_Settings() {
  return (
    <div className='asfp_section'>
        <div className="asfp_content">
        <Link to="/">
        <img className='asfp_close' src={close} alt="" />

        </Link>
            <div className="asfp_sidebar">
                <Link to="/account/personal_details">
                <div className="asfp_pd aspf_sbc">
                    PERSONAL DETAILS
                </div>
                </Link>
                <Link to="/account/security">
                <div className="asfp_s aspf_sbc">
                    SECURITY
                </div>

                </Link>
                <div className="asfp_mr aspf_sbc">
                    MY REVIEWS
                </div>
                <div className="asfp_t aspf_sbc">
                    THEMES
                </div>
            </div>
            <div className="asfp_main_content">
                <Outlet/>
            </div>
        </div>

    </div>
  )
}

export default Account_Settings
