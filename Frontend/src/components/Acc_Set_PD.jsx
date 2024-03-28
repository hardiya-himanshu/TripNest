import React,{useEffect, useState} from 'react'
import axios from 'axios'


function Acc_Set_PD() {
  
  const [userData, setUserData] = useState("")

  useEffect(()=>{
    try {
      axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
    .then(res=>
      {
        console.log(res.data)
        const response = res.data.data
        console.log(response);
        setUserData(response)

        // const response = res.data
        // setUserData(res.data)
        // console.log(userData.data.email);
      })
    } catch (error) {
      console.log(error);
    }

  },[])

  return (
    <div className='aspd_main p-7 flex flex-col gap-12 max-w-96' >
      <div className="acpd_title text-3xl">
            PERSONAL DETAILS
      </div>
      <div className="acpd_content flex flex-col justify-center items-center gap-5 rounded-lg w-full">
        <img alt=""  className='rounded-full bg-slate-700 border w-32 h-32'/>
        <input type="text" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='NAME' value={userData.username}/>
        <input type="email" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='EMAIL' value={userData.email}/>
        <input type="number" name="" id="" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='PHONE' />
        <input type="date" className='rounded-lg w-full h-10 p-2 text-gray-500 placeholder' placeholder='DOB'/>
      </div>
        <input type="button" value="APPLY" className='rounded-lg w-24 text-black font-semibold h-8 bg-white cursor-pointer' />
    </div>
  )
}

export default Acc_Set_PD
