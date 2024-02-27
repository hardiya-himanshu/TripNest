import React from 'react'
import "../css/style.css"
import { useState } from 'react'

function Theme_Card({primary, secondary, ColorName}) {


  return (
    <div className=' flex flex-col gap-2 cursor-pointer' 
    >
        <div className={` theme_card border hover:border-4   hover:border-red-500 w-56 h-40 rounded-lg flex flex-col gap-2 p-2 ${secondary} `}>
                <div className='flex gap-2 w-full h-2/3 rounded-lg '>
                    <div className={` ${primary} h-full w-1/2 rounded-lg`}></div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <div className={`p-1 ${primary} rounded-lg`}></div>
                        <div className={`p-1 ${primary} rounded-lg w-1/2`}></div>
                        <div className={`p-1 ${primary} rounded-lg h-full`}></div>
                    </div>
                </div>
                <div className='flex gap-2 w-full h-1/3'>
                    <div className={`h-full w-1/3 ${primary} rounded-lg`}></div>
                    <div className='w-2/3 flex flex-col gap-2 h-full justify-center' >
                        <div className={`${primary} rounded-lg h-2 w-1/3`} ></div>
                        <div className={`w-full ${primary} rounded-lg h-2`}></div>
                        
                    </div>
                </div>
        </div>
        <div className='text-center'>{ColorName}</div>
    </div>
  )
}

export default Theme_Card
