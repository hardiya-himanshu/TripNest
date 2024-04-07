import React from 'react'
import "../css/tour_full_page.css"
import "../css/style.css"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'
import axios from 'axios'



function Tour_Full_Page({image_cover,tour_name,tour_desc,tour_duration,tour_price}) {

    const amount = parseFloat(tour_price.replace(/,/g, ''))
    const initPayment = (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_ID_KEY,
			amount: data.amount,
			currency: data.currency,
			name: tour_name,
			description: "Test Transaction",
			image: image_cover,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

    const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:3000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: amount });
			// console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


  return (
    <div className='tour_fullpage_section'>
        <div className="tfp_content">
        <Link to='/' className='tfp_close'>
            <img  src={close} alt="" />
        </Link>
        
            <div className="tfp_image">
                <div className="gradient"></div>
                <img src={image_cover} alt="" />
            </div>
            <div className="tfp_others">
                <div className="tfp_city_name">{tour_name}</div>

                <div className="tfp_duration-price">
                    <div className='tfp_duration'></div>{tour_duration}
                    <div className='tfp_price'></div>₹ {tour_price}
                </div>

                <div className="tfp_city_description">{tour_desc}</div>

                <div className="tpf_contacts">
                    <div className="tpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="tpf_email">
                        <img src={email} alt="" />
                        <div>tripnest.help@gmail.com</div>
                    </div>
                </div>

                <div className=" tpf_btn" onClick={handlePayment}>
                   BOOK NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tour_Full_Page
