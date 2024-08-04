import React from "react";
import Logo from "../../assets/logo/logoFooter.png";
import Flag from "../../assets/logo/USflag.png";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { PiLineVerticalThin } from "react-icons/pi";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1F]">
      <div className="px-[120px] md:px-[50px] sm:px-[20px]">
        <div className="flex justify-start  items-center gap-[15px]  py-[20px] border-b-[1px] border-[#ffffff3b]">
          <Image src={Logo} alt="logo" />

          <SlArrowRight color="#ffffff3b" />

          <p className="text-[16px] text-[#fff]">Support</p>
          <SlArrowRight color="#ffffff3b" />
          <p className="text-[16px] text-[#fff]">Get Service</p>
        </div>

        <div className="flex justify-between items-center sm:pb-5 sm:flex-col sm:items-start">
          <div className="flex justify-between items-center md:items-start md:flex-col sm:flex-col-reverse gap-[45px] md:gap-[30px] py-[25px]">
            <p className="text-[12px] text-[#B8B8B8]">
              Copyright © 2024 Sour Apple Repair. All rights reserved.
            </p>
            <div className="flex  gap-3 sm:flex-col items-center sm:items-start">
              <Link href={""} className="text-[12px] sm:py-2">
                Privacy Policy
              </Link>
              <PiLineVerticalThin className="sm:hidden" color="#ffffff3b" />

              <Link href={""} className="text-[12px] sm:py-2">
                Terms of Use
              </Link>
              <PiLineVerticalThin className="sm:hidden" color="#ffffff3b" />

              <Link href={""} className="text-[12px] sm:py-2">
                Sales and Refunds
              </Link>
              <PiLineVerticalThin className="sm:hidden" color="#ffffff3b" />

              <Link href={""} className="text-[12px] sm:py-2">
                Legal
              </Link>
              <PiLineVerticalThin className="sm:hidden" color="#ffffff3b" />

              <Link href={""} className="text-[12px] sm:py-2">
                Site Map
              </Link>
            </div>
          </div>
          <Image src={Flag} alt="country flag" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
