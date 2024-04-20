import React ,{useState, useEffect} from 'react'
import '../css/categories_city_fullpage.css'
import { Link } from 'react-router-dom'
import {close} from '../javascript/index'
import { phone, email } from '../javascript/index'
import axios from 'axios'


function Categories_City_FullPage({cc_image_cover,city_name,city_desc,city_price}) {

  
    let date = new Date()
    const amount = parseFloat(city_price.replace(/,/g, ''))

    const [checkoutPrice, setCheckoutPrice] = useState(amount)

    
    const initPayment = (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_ID_KEY,
			amount: data.amount,
			currency: data.currency,
			name: city_name,
			description: "Test Transaction",
			image: cc_image_cover,
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
                        <div>tripnest.help@gmail.com</div>
                    </div>
                </div>

                <div className="ccfp_price">
                ₹ {city_price}/Night
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

                <div className=" tpf_btn" onClick={handlePayment}>
                   BOOK NOW
                </div>
            </div>
       </div>
    </div>
  )
}

export default Categories_City_FullPage
