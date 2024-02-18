import React from 'react'

function Acc_Sett_SD() {
  return (
    <div className='p-7 flex flex-col gap-12 w-72' >
      <div className="acsd_title text-3xl">
            SECURITY
      </div>
      <div className="acsd_content flex flex-col justify-center items-center gap-5 rounded-lg w-72">
    
        <input type="text" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='CURRENT PASSWORD'/>
        <input type="text" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='NEW PASSWORD'/>
        <input type="text" name="" id="" className='rounded-lg w-full h-10 p-3 text-black placeholder:text-gray-500' placeholder='CONFIRM PASSWORD' />
      </div>
        <input type="button" value="APPLY" className='rounded-lg w-1/3 text-black font-semibold h-8 bg-white' />
    </div>
  )
}

export default Acc_Sett_SD
