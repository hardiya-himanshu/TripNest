import React from 'react'


function Acc_Set_PD() {
  return (
    <div className='p-7 flex flex-col gap-12' >
      <div className="acpd_title text-3xl">
            PERSONAL DETAILS
      </div>
      <div className="acpd_content flex flex-col justify-center items-center gap-5 rounded-lg w-72">
        <img alt=""  className='rounded-full bg-slate-700 border w-32 h-32'/>
        <input type="text" className='rounded-lg w-full h-10 p-2' placeholder='NAME'/>
        <input type="email" className='rounded-lg w-full h-10 p-2' placeholder='EMAIL'/>
        <input type="number" name="" id="" className='rounded-lg w-full h-10 p-2' placeholder='PHONE' />
        <input type="date" className='rounded-lg w-full h-10 p-2' placeholder='DOB'/>
        <input type="button" value="APPLY" className='rounded-lg w-1/3 text-black font-semibold h-8 bg-white' />
      </div>
    </div>
  )
}

export default Acc_Set_PD
