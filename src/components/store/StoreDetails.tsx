import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";




const StoreDetails = () => {
  return (
    <div className="storeDetails bg-[#1D1D1F] border-r-[14] p-[15px] rounded-[14px]">
      <h2 className='text-[20px] text-[500]'>Store Details</h2>
      <p className='text-[#68BA48] text-[16px] font-[500] mt-[20px] pl-[50px]'>Not sure what's wrong?</p>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[30px]'>
        <IoCallSharp fontSize={20} color='#fff'/>
          <p className='text-[16px] font-[500] max-w-[200px]'>Call us at: 844-SOUR-FIX</p>
        </div>
        <div className='flex gap-[30px]'>
        <CiLocationArrow1 fontSize={20} color='#fff'/>
          <p className='text-[16px] font-[500] max-w-[230px]'>901 Harvey Road, Suite A College Station, Texas 77840</p>
        </div>
        <div className='flex gap-[30px]'>
        <AiOutlineClockCircle fontSize={20} color='#fff max-w-[200px]'/>
         <div>
          <p className='text-[16px]'>MON-SAT</p>
          <p className='text-[16px] font-[500]'>9:00AM-7:00AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreDetails;