import React, { useEffect, useState } from 'react'
import "../css/hotel_full_page.css"
import "../css/style.css"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'
import { useUserAccess } from '../contexts/UserAccessContext'
import axios from 'axios'


function Hotel_Full_Page({h_i,h_n,h_p,h_l,h_t,h_d}) {

    let date = new Date()
    const amount = parseFloat(h_p.replace(/,/g, ''))

    const [checkoutPrice, setCheckoutPrice] = useState(amount)


    // console.log(amount);
    const initPayment = (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_ID_KEY,
			amount: data.amount,
			currency: data.currency,
			name: h_n,
			description: "Test Transaction",
			image: h_i,
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
			const { data } = await axios.post(orderUrl, { amount: checkoutPrice });
			// console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

    let yr =  date.getFullYear()
    let mo = date.getMonth()+1
    let da = date.getDate()
    let da2 = date.getDate()+1

    if(mo <10){
        mo = '0'+mo
    }
    
    if(da <10){
        da = '0'+da
    }

    if(da2 <10){
        da2 = '0'+da2
    }

    let maxmo = Number(mo)+3
    if(maxmo <10){
        maxmo = '0'+maxmo
    }

    let maxmoyr = yr
    if (maxmo>12){
        maxmo =maxmo%12
        maxmoyr= maxmoyr+1
    }

    let currentDate = `${yr}-${mo}-${da}`
    let currentDate2 = `${yr}-${mo}-${da2}`
    let maxDate = `${maxmoyr}-${maxmo}-${da}`


        
    const[inputdate1, setInputdate1] = useState(currentDate)
    const[inputdate2, setInputdate2] = useState(currentDate2)


useEffect(()=>{
    let components1 = inputdate1.split('-');
    let components2 = inputdate2.split('-');
    let formattedDate1 = components1[1] + '/' + components1[2] + '/' + components1[0];
    let formattedDate2 = components2[1] + '/' + components2[2] + '/' + components2[0];

    let date1 = new Date(formattedDate1)
    let date2 = new Date(formattedDate2)
    
    let totaldays =  date2.getDate() - date1.getDate() +1;
    if(totaldays!=1){
        totaldays=totaldays-1
      }
    const finalAmt = totaldays*amount
    setCheckoutPrice(finalAmt)
}, [inputdate1, inputdate2]
)
  return (
    <div className='hotel_fullpage_section'>
        <div className="hfp_content">
        <Link to='/'>
            <img className='hfp_close' src={close} alt="" />
        </Link>
        
            <div className="hfp_image">
                <div className="gradient"></div>
                <img src={h_i} alt="" />
            </div>
            <div className="hfp_others">
                <div className="hfp_details">
                    <div className="hfp_city_name">{h_n}</div>
                    <div className="hfp_city_location">{h_l}</div>
                    <div className="hotel_price">₹ {h_p}/Night</div>
                    <div className="hfp_btns">
                        <div className="hfp_btn">{h_t}</div>
                    </div>

                </div>
                    <div className="hfp_city_description">{h_d}</div>
                    
                    <div className="hpf_contacts">
                        <div className="hpf_number">
                            <img src={phone} alt="" />
                            <div>91XXXXXXXX</div>
                        </div>
                        <div className="hpf_email">
                            <img src={email} alt="" />
                            <div>tripnest.help@gmail.com</div>
                        </div>
                        <div  className='hpf_date_range'>
                            <fieldset className='border p-2'>
                            <legend>Check-In</legend>
                                <input type="date" name="datefrom" id="datefrom" defaultValue={currentDate} onChange={e=>{setInputdate1(e.target.value) ,setInputdate2(e.target.value)}} min={currentDate} max={maxDate} required/>
                            </fieldset>
                            <fieldset className='border p-2'>
                            <legend>Check-Out</legend>
                                <input type="date" name="dateto" id="dateto" value={inputdate2} min={inputdate1} onChange={e=>{setInputdate2(e.target.value)}} max={maxDate} required/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="hpf_btn_book">
                    <div onClick={handlePayment}>
                    BOOK NOW
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hotel_Full_Page
