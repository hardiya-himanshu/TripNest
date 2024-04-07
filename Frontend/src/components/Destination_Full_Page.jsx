import React, { useState, useEffect } from 'react'
import "../css/destination_full_page.css"
import "../css/style.css"
import { phone,close,email } from '../javascript'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Destination_Full_Page({dest_to,d_image, d_name, d_desc, d_a_i_1, d_a_i_2, d_a_n_1, d_a_n_2, d_h_i_1, d_h_i_2, d_h_n_1, d_h_n_2, dest_price}) {


    let date = new Date()
    const amount = parseFloat(dest_price.replace(/,/g, ''))

    const [checkoutPrice, setCheckoutPrice] = useState(amount)

    
    const initPayment = (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_ID_KEY,
			amount: data.amount,
			currency: data.currency,
			name: d_name,
			description: "Test Transaction",
			image: d_image,
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
    let da2 = date.getDate()+2

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
    const finalAmt = totaldays*amount
    setCheckoutPrice(finalAmt)
}, [inputdate1, inputdate2]
)

  return (
    <div className='destination_fullpage_section'>
        <div className="dfp_content">
       <Link to={dest_to} className='dfp_close'>
            <img  src={close} alt="" />
       </Link>

            <div className="dfp_image">
                <div className="gradient"></div>
                <img src={d_image} alt="" />
            </div>
            <div className="dfp_others">
                <div className="dfp_city_name">{d_name}</div>
                <div className="dfp_city_description">{d_desc}</div>
                <div className="dfp_attractions">
                    <div className="dfp_attractions_title">NEARBY ATTRACTIONS</div>
                    
                    <div className="dfp_attractions_main">
                        <div className="dfp_attractions_content">
                            <img src={d_a_i_1} alt="" />
                            <div className="attraction_name">{d_a_n_1}</div>
                        </div>
                        <div className="dfp_attractions_content">
                            <img src={d_a_i_2} alt="" />
                            <div className="attraction_name">{d_a_n_2}</div>
                        </div>
                        {/* <div className="dfp_attractions_content">
                            <img src={att3} alt="" />
                            <div className="attraction_name">National Museum of Korea</div>
                        </div> */}
                    </div>

                </div>
                <div className="dfp_hotels">
                    <div className="dfp_hotels_title">NEARBY HOTELS</div>
                    
                    <div className="dfp_hotels_main">
                        <div className="dfp_hotels_content">
                            <img src={d_h_i_1} alt="" />
                            <div className="hotel_name">{d_h_n_1}</div>
                        </div>
                        <div className="dfp_hotels_content">
                            <img src={d_h_i_2} alt="" />
                            <div className="hotel_name">{d_h_n_2}</div>
                        </div>
                        {/* <div className="dfp_hotels_content">
                            <img src={hotel3} alt="" />
                            <div className="hotel_name">L7 Myeongdong</div>
                        </div> */}
                    </div>

                </div>
                {/* <div className="dfp_reviews">
                    <div className="dpf_reviews_title">
                        REVIEW
                    </div>
                    <div className="dfp_reviews_content">
                    <form action="">
                        <textarea name="" id="" cols="100" rows="4" placeholder='My Review...'/>

                    </form>
                    </div>
                </div> */}
                <div className="dpf_contacts">
                    <div className="dpf_contacts_title">
                        CONTACTS
                    </div>
                    <div className="dpf_number">
                        <img src={phone} alt="" />
                        <div>91XXXXXXXX</div>
                    </div>
                    <div className="dpf_email">
                        <img src={email} alt="" />
                        <div>tripnest.help@gmail.com</div>
                    </div>
                </div>
                <div className="dpf_price">
                ₹ {dest_price}/Night
                {/* {setAmount(Number(dest_price))} */}
                </div>
                <div className="hpf_date_range">
                             <input type="date" name="datefrom" id="datefrom" defaultValue={currentDate} onChange={e=>{setInputdate1(e.target.value) ,setInputdate2(e.target.value)}} min={currentDate} max={maxDate} required/>
                            <input type="date" name="dateto" id="dateto" value={inputdate2} min={inputdate1} onChange={e=>{setInputdate2(e.target.value)}} max={maxDate} required/>
                        </div>
                <div className="dpf_btn" onClick={handlePayment}>
                   BOOK NOW
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination_Full_Page
