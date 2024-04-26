import React, { useState } from 'react'
import axios from 'axios'
import "../index.css"
import { editbtn,deletebtn,donebtn } from '../javascript/index'
import { Toaster, toast } from 'sonner'


function ReviewBox({reviewId ,review ,reviewDate, dest}) {

    const [isReadOnly, setIsReadOnly] = useState(true)
    const [updatedReview, setUpdatedReview] = useState(review)

    const toastNotify =()=>{
        toast.success("Updated Successfully")
      }

    const updateTheReview = () =>{
    try {
        axios.post('http://localhost:3000/updateReview', {id:reviewId, review:updatedReview})
        .then(res=>
        {
            toastNotify()
            // console.log(res.data);
        })
        } 
    catch (error) 
        {
        console.log(error);
        }
    }

    const deleteTheReview = () =>{
    try {
        axios.post('http://localhost:3000/deleteReview', {id:reviewId})
        .then(res=>
        {
            // console.log(res.data);
        })
        } 
    catch (error) 
        {
        console.log(error);
        }
    }

    const editButton =() =>{
        setIsReadOnly(prev=>!prev)
    }

  return (
    <div className="acrv_list min-w-56 ">

      <div className="acrv_content flex flex-col w-full bg-white rounded-xl p-3 gap-2">
    
        {/* <div className='review_image w-full h-2/3 rounded-t-md'>
        <img src={lkdwp} alt="Review_Image"  className='rounded-t-md'/>
        </div> */}

        <div className=' review_card_titles font-semibold '>
            {reviewDate}
        </div>

        <div className=' review_card_titles font-semibold '>
            {dest}
        </div>

        <div className='review_text rounded-lg w-full'>
            <textarea type="text" className='review_box text-black h-36 overflow-y-scroll border border-black rounded-lg p-2 bg-white w-full resize-none' defaultValue={review}
             readOnly={isReadOnly} onChange={e=>setUpdatedReview(e.target.value)}/>
            
        </div>

        

        <div className='flex gap-2 mt-1 justify-between flex-wrap'>
            <div>
                <input type="button" value="SAVE" className='rounded-lg text-black font-semibold w-24  bg-white border-black p-2 hover:bg-gray-700 hover:text-white shadow-md cursor-pointer' onClick={updateTheReview}
                 />
            </div>
            <div className='flex gap-2'>
                <div>
                {
                    isReadOnly?
                    <img src={editbtn} onClick={editButton} alt="edit" className='cursor-pointer w-10  p-2 hover:bg-blue-500 rounded-lg shadow-md'  />
                    :
                    <img src={donebtn} onClick={editButton} alt="edit" className='cursor-pointer w-10  p-2 hover:bg-green-500 rounded-lg shadow-md'  />
                }
                
                </div>
                <div>
                <img src={deletebtn} alt="delete" className='cursor-pointer w-10  p-2 hover:bg-red-500 rounded-lg shadow-md' onClick={deleteTheReview}/>
                </div>
            </div>
        </div>
      </div>
      <Toaster richColors/>

      </div>
  )
}

export default ReviewBox
