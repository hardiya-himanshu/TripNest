import React,{ useEffect, useState } from 'react'
import "../css/ondiscount_fullpage.css"
import Lakshadweep from '../assets/Lakshadweep.webp'
import { phone,email,close } from '../javascript'
import { Link } from 'react-router-dom'
import axios from 'axios'


function OnDiscount_FullPage() {

    const [discountName, setDiscountName] = useState("LAKSHADWEEP TOUR")
    const [discountPrice, setDiscountPrice] = useState("49,999")
    
    let date = new Date()
    const amount = parseFloat(discountPrice.replace(/,/g, ''))
    const [checkoutPrice, setCheckoutPrice] = useState(amount)
    const[uid, setUid] = useState("")
    const[reviewDate, setReviewDate] = useState("")
    const[receiptNo, setReceiptNo] = useState("")
    const[paymentStatus, setPaymentStatus] = useState(true)



    useEffect(()=>{
        try {
    
          axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
        .then(res=>
          {
            const dateInstance = new Date()
            const userid = String(res.data.data._id)
            setUid(userid)
            setReviewDate(dateInstance.toLocaleDateString("en-IN",{dateStyle:"short"}));
          })
        } catch (error) {
          console.log(error);
        }
    },[])

    // setup for Transaction History

    const historyOfSuccess = async(ps) =>{
        try {
           
            await axios.post(`http://localhost:3000/addHistory`,{_id:uid,amount:checkoutPrice,destinationName:discountName,status:ps,date:reviewDate,receipt:receiptNo})
            .then(res=>{
                console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const historyOfFailure = async(ps) =>{
        try {
           
            await axios.post(`http://localhost:3000/addHistory`,{_id:uid,amount:checkoutPrice,destinationName:discountName,status:ps,date:reviewDate,receipt:receiptNo})
            .then(res=>{
                console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Setup for Payment Gateway

    const initPayment = (data) => {
		const options = {
			key: import.meta.env.RAZORPAY_ID_KEY,
			amount: data.amount,
			currency: data.currency,
			name: discountName,
			description: "Test Transaction",
			// image: "Lakshadweep",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					setPaymentStatus(true)
                    historyOfSuccess(true)

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
        rzp1.on('payment.failed', function (response){
            setPaymentStatus(false)
            historyOfFailure(false)
        })
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

    //Setup for Dates

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
    <div className="discount_fullpage">
        <div className="dcfp_content">
            <Link to='/' className='dcfp_close'>
                <img  src={close} alt="" />
            </Link>
            <div className="dcfp_title">
            SPECIAL DISCOUNT THIS FORTNIGHT
            </div>
            <div className="dcfp_cards">
                <div className="discount_content dcfp_card1">
                    {/* <div className="dark_bg"></div> */}
                    <img src={Lakshadweep} alt="" />
                    <div className="percentage_discount"></div>
                    <div className="percentage_discount_number">35% OFF</div>
                    <div className="discount_location_name dcfp_discount">DISCOUNT ON LAKSHADWEEP TOUR</div>name
                    <div className="discount_book_now dcfp_book_now">BOOK YOUR TOUR NOW!</div>name
                </div>
                <div className="dcfp_card">
                    <div className="dcfp_name">
                    DISCOUNT ON {discountName}
                    </div>
                    <div className="dcfp_city_duartion">
                    6 Days | 5 Nights
                    </div>
                    <div className="dcfp_city_duartion">
                    ₹ {discountPrice}
                    </div>
                    <div className="dcfp_city_description">
                    Discover the pristine beauty of Lakshadweep with our exclusive discount offer! Enjoy breathtaking beaches, vibrant coral reefs at unbeatable prices. Immerse yourself in the rich culture and warm hospitality. Book now and experience luxury for less!
                    </div>
                    <div className="dcfp_btns">
                        <div className="dcfp_btn">
                            Calm
                        </div>
                        <div className="dcfp_btn">
                            Cool
                        </div>
                        <div className="dcfp_btn">
                            Relax
                        </div>
                    </div>
                    <div className="dcfp_contacts">
                        
                            <div className='dcfp_number'>
                            <img src={phone} alt="" />
                                +91XXXXXXXX

                            </div>
                            <div className='dcfp_email'>
                            <img src={email} alt="" />
                                tripnest.help@gmail.com

                            </div>
                     
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
                    <div className="dcfp_btn_book" onClick={handlePayment}>
                        BOOK NOW
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default OnDiscount_FullPage
