import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Toaster, toast } from 'sonner'

function Acc_Sett_SD() {

  
  const [uid, setUid] = useState("")
  const [userPassword, setUserPassword] = useState("")

  useEffect(()=>{
    try {
      axios.post('http://localhost:3000/account/security', {token: window.localStorage.getItem("token")})
    .then(res=>
      {
        const state_id = String(res.data.data._id)
        setUid(state_id)
        const response = res.data.data
        setUserPassword(response.password)
      })
    } catch (error) {
      console.log(error);
    }},[])

   
  const updateData = async()=>{

    try {
      await axios.post('http://localhost:3000/account/security', {id:uid, password:userPassword})
      
    .then(res=>
    {
      // console.log(res.data);
    })
    } catch (error) {
      console.log(error)
    }
  }

  const toastNotify =()=>{
    toast.success("Updated Successfully")
  }

  const submitDataAndNotify=()=>{
    updateData();
    toastNotify()
  }


  return (
    <div className='assd_main p-7 flex flex-col gap-12 max-w-96 ' >
      <div className="acsd_title text-3xl">
            SECURITY
      </div>
      <div className="acsd_content flex flex-col justify-center items-center gap-5 rounded-lg w-full">
    
        <input type="text" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='CURRENT PASSWORD' defaultValue={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}  }/>
        {/* <input type="text" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='NEW PASSWORD'/>
        <input type="text" name="" id="" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='CONFIRM PASSWORD' /> */}
      </div>
        <input onClick={submitDataAndNotify} type="button" value="SAVE" className='rounded-lg w-24 text-black font-semibold h-8 bg-white' />
        <Toaster richColors/>
    </div>
  )
}

export default Acc_Sett_SD
