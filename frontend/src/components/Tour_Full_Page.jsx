import React ,{useState, useEffect} from 'react'
import "../css/tour_full_page.css"
import "../css/style.css"
import {close, phone, email } from '../javascript/index'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import MapComponent from './MapComponent'


function Tour_Full_Page({lati, longi,image_cover,tour_name,tour_desc,tour_duration,tour_price}) {

    let date = new Date()
    const amount = parseFloat(tour_price.replace(/,/g, ''))
    const[uid, setUid] = useState("")
    const [checkoutPrice, setCheckoutPrice] = useState(amount)
    const[reviewDate, setReviewDate] = useState("")
    const[receiptNo, setReceiptNo] = useState("")
    const[paymentStatus, setPaymentStatus] = useState(true)

    
    // setup for Transaction History

    const historyOfSuccess = async(ps) =>{
        try {
           
            await axios.post(`http://localhost:3000/addHistory`,{_id:uid,amount:checkoutPrice,destinationName:`${tour_name} (TOUR)`,status:ps,date:reviewDate,receipt:receiptNo})
            .then(res=>{
                console.log(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const historyOfFailure = async(ps) =>{
        try {
           
            await axios.post(`http://localhost:3000/addHistory`,{_id:uid,amount:checkoutPrice,destinationName:`${tour_name} (TOUR)`,status:ps,date:reviewDate,receipt:receiptNo})
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
			name: tour_name,
			description: "Test Transaction",
			image: image_cover,
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
			const { data } = await axios.post(orderUrl, { amount: amount });
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

    // Setup for Reviews

    const[review, setReview] = useState("")
    const[uname, setUsername] = useState("")
    
    useEffect(()=>{
        try {
    
          axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
        .then(res=>
          {
            const dateInstance = new Date()
            const userid = String(res.data.data._id)
            const username = String(res.data.data.username)
            setUid(userid)
            setUsername(username)
            setReviewDate(dateInstance.toLocaleDateString("en-IN",{dateStyle:"short"}));
          })
        } catch (error) {
          console.log(error);
        }
    },[review])

    const showToast1 = ()=>{
        toast.warning("Please enter a review between 10 to 40 words")
     }

    const showToast2 = ()=>{
        toast.success("Submitted Successfully")  
      }

    const sendReview = async(e)=>{
        
        e.preventDefault()
        const wordCount = review.trim().split(/\s+/).filter(Boolean).length;
        // console.log(wordCount);
        if(wordCount<10 || wordCount>40){
        showToast1()
        return
        }
        try {
           
            await axios.post(`http://localhost:3000/sendMyReview`,{userId:uid,userName:uname,destinationName:`${tour_name} (TOUR)`,review,date:reviewDate}).then(res=>{
                // console.log(res.data);
            showToast2()
            setReview("")

            })
        } catch (error) {
            console.log(error);
        }
    }

    const [reviewList, setReviewList] = useState([])
      useEffect(()=>{
        try {
    
          axios.post('http://localhost:3000/sendMyReview/', {destinationName:`${tour_name} (TOUR)`})
        .then(res=>
          {
             setReviewList(res.data)
          })
        } catch (error) {
          console.log(error);
        }
    },[])

    // Setup for Maps
     
    const destinationLocation = { lat: Number(lati), lng: Number(longi) };

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

                
                <div className="dfp_maps">
                    <div className="dfp_maps_title">MAPS</div>
                    
                    <div className="dfp_maps_main">
                        <MapComponent location={destinationLocation} />                
                    </div>
                </div>

                <div className="dfp_reviews ">
                    <div className="dpf_reviews_title">
                        REVIEW
                    </div>
                    <div className='dfp_show_review_section  ' id="dfp_show_review_section">
                    {
                        reviewList.map((element,index) => (
                            <div key={index} className='dfp_show_review'>
                                <div className='text-xl'>{element.review}</div>
                                <div className='flex justify-between text-lg flex-wrap'>
                                    <div>{element.date}</div>
                                    <div>-{element.userName}</div>

                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="dfp_reviews_content ">
                    <form className='flex flex-col gap-5' onSubmit={sendReview}>
                        <textarea name="" id="" cols="100" rows="4" value={review} onChange={e=>setReview(e.target.value)} placeholder='Write Your Review...' required/>
                        <button type="submit" className='btn'>SUBMIT</button>
                    </form>
                    </div>
                </div>


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
       <Toaster richColors/>

    </div>
  )
}

export default Tour_Full_Page
