import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Acc_Set_TR() {


    const[uid, setUid] = useState("")
    const[order, setOrder] = useState(0)
    const [historyList, setHistoryList] = useState([])
  
  
    useEffect(()=>{
      try {
  
        axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
      .then(res=>
        {
          const userid = String(res.data.data._id)
          setUid(userid)
          setOrder(order+1)
        })
        } catch (error) {
          console.log(error);
          setOrder(order+1)
  
        }
  },[])
  
    useEffect(()=>{
      try {
  
        axios.post('http://localhost:3000/getHistory', {id:uid})
      .then(res=>
        {
                      setHistoryList(res.data[0].transactionHistory) 
                    //   console.log(res.data[0].transactionHistory);
        })
        } catch (error) {
          console.log(error);
        }
  },[order, setOrder])

  return (
    <div className='asrv_main  p-7 flex flex-col gap-8 justify-center' >
        <div className="acrv_title text-3xl ">
              TRANSACTION HISTORY
        </div>
        <div className='flex flex-col gap-5 py-5 ' id='dfp_show_review_section'>
        {
          
          historyList.map((element,index) => (
            <div key={index} className={`p-2 rounded-lg font-bold text-xl flex flex-wrap justify-around w-full  ${element.status=="true"?"bg-green-600":"bg-red-600"}`}>
            <div className='flex flex-wrap text-center w-1/2 justify-evenly gap-5 '>

                  <div className=''>{element.date}</div>
                  <div className=''>{element.destinationName}</div>
            </div>
            <div className='flex flex-wrap text-center w-1/2 justify-evenly  gap-5  '>

                  <div>Rs. {element.amount}</div>
                  <div>{element.status=="true"?"SUCCESS":"FAILURE"}</div>
            </div>

            </div>
          )).reverse()
        }
        </div>
    </div>
  )
}

export default Acc_Set_TR
