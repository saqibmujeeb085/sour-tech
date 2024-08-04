import React from 'react'
import Logo from '../../assets/logo/logoFooter.png'
import Flag from '../../assets/logo/USflag.png'
import Image from 'next/image'
import { SlArrowRight } from "react-icons/sl";
import { PiLineVerticalThin } from "react-icons/pi";

import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='bg-[#1D1D1F]'>
        <div className='px-[120px]'>
            <div className='flex justify-start items-center gap-[15px]  py-[20px] border-b-[1px] border-[#ffffff3b]'>
                
                <Image src={Logo} alt='logo'/>
                

                <SlArrowRight color="#ffffff3b"/>

                <p className='text-[16px] text-[#fff]' >Support</p>
                <SlArrowRight color="#ffffff3b"/>
<p className='text-[16px] text-[#fff]'>Get Service</p>

            </div>

            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-[45px] py-[25px]'>
                <p className='text-[12px] text-[#B8B8B8]'>Copyright © 2024 Sour Apple Repair. All rights reserved.</p>
                <div className='flex gap-3 items-center'>
                    <Link href={""} className='text-[12px]'>Privacy Policy</Link>
                    <PiLineVerticalThin color="#ffffff3b"/>

                    <Link href={""} className='text-[12px]'>Terms of Use</Link>
                    <PiLineVerticalThin color="#ffffff3b"/>

                    <Link href={""} className='text-[12px]'>Sales and Refunds</Link>
                    <PiLineVerticalThin color="#ffffff3b"/>

                    <Link href={""} className='text-[12px]'>Legal</Link>
                    <PiLineVerticalThin color="#ffffff3b"/>

                    <Link href={""} className='text-[12px]'>Site Map</Link>

                </div>
                </div>
                <Image src={Flag} alt=""/>
            </div>

        </div>

    </footer>
  )
}

export default Footer