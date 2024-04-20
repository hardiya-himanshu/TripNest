import React,{useEffect, useState} from 'react'
import axios from 'axios'
// import {useLocation } from 'react-router-dom'
import { Toaster, toast } from 'sonner'



function Acc_Set_PD() {
 
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [uid,setUid] = useState("")

  useEffect(()=>{
    try {

      axios.post('http://localhost:3000/account/', {token: window.localStorage.getItem("token")})
    .then(res=>
      {
        const state_id = String(res.data.data._id)
        setUid(state_id)
        const response = res.data.data
        setUserName(response.username)
        setUserEmail(response.email)
        setUserPhone(response.phone)
        setUserPassword(response.password)
      })
    } catch (error) {
      console.log(error);
    }

  },[])

  const updateData = async()=>{
    try {
      await axios.post('http://localhost:3000/account/', {id:uid, username:userName ,email:userEmail, phone:userPhone, password:userPassword})
      
    .then(res=>
    {
      // console.log(res.data);
    })
    } catch (error) {
      console.log(error)
      
    }
  }

  const [avatar, setAvatar] = useState()

  const onInputChange = (e) =>{
    // console.log(e.target.files[0]);
    setAvatar(e.target.files[0])
  
  }

  const updateAvatar = async()=>{
    const formData = new FormData()
    formData.append("avatar", avatar) 
    try {
      await axios.post('http://localhost:3000/account/upload_image', formData, {headers:{
        "Content-Type":"multipart/form-data"
      }})
      
    .then(res=>
    {
      console.log(res.data);
    })
    } catch (error) {
      console.log(error)
      
    }
  }

  const toastNotify =()=>{
    toast.success("Updated Successfully")
  }


  const submitDataAndNotify=(e)=>{
    e.preventDefault()
    updateData();
    // updateAvatar()
    toastNotify()
  }


  return (
    <div className='aspd_main p-7 flex flex-col gap-12 max-w-96' >
      <div className="acpd_title text-3xl">
            PERSONAL DETAILS
      </div>
      <form encType="multipart/form-data" onSubmit={submitDataAndNotify} className='flex flex-col gap-12'>
      <div className="acpd_content flex flex-col justify-center items-center gap-5 rounded-lg w-full">

        <img alt=""  className='rounded-full bg-slate-700 border w-32 h-32'/>
        <input type="file" name="avatar" id="avatar" accept='image/*' onChange={onInputChange} title=''/>
        <input type="text" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='NAME'  defaultValue={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="email" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='EMAIL' defaultValue={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} />
        <input type="number" name="number" id="number" className='rounded-lg w-full h-10 p-2 text-black placeholder:text-gray-500' placeholder='PHONE' defaultValue={userPhone} onChange={(e)=>{setUserPhone(e.target.value)}}/>
        {/* <input type="date" className='rounded-lg w-full h-10 p-2 text-gray-500 placeholder' placeholder='DOB'/> */}
      </div>
        <input  type="submit" value="SAVE" className='rounded-lg w-24 text-black font-semibold h-8 bg-white cursor-pointer' />
      </form>
        <Toaster richColors className='absolute'/>
    </div>
  )
}

export default Acc_Set_PD
