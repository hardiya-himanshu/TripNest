import React,{useEffect, useState} from 'react'
import axios from 'axios'
// import {useLocation } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { deletebtn } from '../javascript'



function Acc_Set_PD() {
 
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [uid,setUid] = useState("")
  const [avatar, setAvatar] = useState("")
  const [order,setOrder] = useState()

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
        setOrder(1)
      })
    } catch (error) {
      console.log(error);
    }

  },[])

  useEffect(()=>{
    try {

      axios.post('http://localhost:3000/user_image', {_id:uid})
    .then(res=>
      {
        // console.log(res.data.data);
        if(res.data.data.avatar==""||res.data.data.avatar==null){
          return
        }
        setAvatar(res.data.data.avatar)
      })
    } catch (error) {
      console.log(error);
    }

  },[order])

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


  const convertToBase64 = (e) =>{
    // console.log(e.target.files[0]);
    // setAvatar(e.target.files[0])
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      console.log(reader.result);
      setAvatar(reader.result)
    }
    reader.onerror=e=>{
      console.log("Error:", e);
    }
  }

  const toastNotifyImage =()=>{
    toast.warning("Please Add Your Image")
  }

  const updateAvatar = async()=>{
    if(avatar===""||avatar===null){
      setTimeout(() => {
      toastNotifyImage()
      }, 3000);
      return
    }
    try {
      await axios.post('http://localhost:3000/user_image',{
        _id:uid,base64:avatar
      })
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

  const deleteImage =async() =>{
    try {
      await axios.post('http://localhost:3000/delete_user_image',{
        _id:uid
      })
    .then(res=>
    {
      // console.log(res);
    })
    } catch (error) {
      console.log(error)
      
    }
  }

  const submitDataAndNotify=(e)=>{
    e.preventDefault()
    updateData();
    if(avatar!=null||avatar!=""){
      updateAvatar()
    }
    toastNotify()
  }


  return (
    <div className='aspd_main p-7 flex flex-col gap-12 max-w-96' >
      <div className="acpd_title text-3xl">
            PERSONAL DETAILS
      </div>
      <form encType="multipart/form-data" onSubmit={submitDataAndNotify} className='flex flex-col gap-12'>
      <div className="acpd_content flex flex-col justify-center items-center gap-5 rounded-lg w-full">

        <img src={avatar} alt=""  className='rounded-full bg-slate-400 border w-32 h-32 text-center'/>
        {/* <input type="file" name="avatar" id="avatar" accept='image/*' onChange={convertToBase64} className='border w-fit' title=''/> */}

        <div className="file-input flex items-center">
        <input
        type="file"
        name="avatar"
        id="file-input"
        accept='image/*' onChange={convertToBase64}
        className="file-input__input"/>
        <label className="file-input__label" htmlFor="file-input">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          className="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg>
          <span>UPLOAD IMAGE</span>
          </label>
          <span>
          <img src={deletebtn} onClick={deleteImage} className='imagedelete w-10 ml-3' alt="delete" />
          </span>
          
        </div>

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
