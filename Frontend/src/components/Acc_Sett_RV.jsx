import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReviewBox from './ReviewBox'

function Acc_Sett_RV() {

  const[userName, setUserName] = useState("")
  const[order, setOrder] = useState(0)
  const [reviewList, setReviewList] = useState([])


  useEffect(()=>{
    try {

      axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
    .then(res=>
      {
        const username = String(res.data.data.username)
        setUserName(username)
        setOrder(order+1)
      })
      } catch (error) {
        console.log(error);
        setOrder(order+1)

      }
},[])

  useEffect(()=>{
    try {

      axios.post('http://localhost:3000/getMyReviews', {userName})
    .then(res=>
      {
        setReviewList(res.data) 
      })
      } catch (error) {
        console.log(error);
      }
},[order, setOrder])

  return (
      <div className='asrv_main  p-7 flex flex-col gap-8 justify-center' >
        <div className="acrv_title text-3xl ">
              MY REVIEWS
        </div>
        <div className='flex gap-5 py-5 overflow-x-scroll ' id='dfp_show_review_section'>
        {
          reviewList.map((element,index) => (
              <ReviewBox key={index} reviewId={element._id} review={element.review} reviewDate = {element.date} dest = {element.destinationName}>
                  {/* <div className='text-xl'>{element.review}</div>
                  <div className='flex justify-between text-lg'>
                      <div>{element.date}</div>
                      <div>-{element.userName}</div>

                  </div> */}
              </ReviewBox>
          )) 
        }
        </div>
    </div>
  )
}

export default Acc_Sett_RV
