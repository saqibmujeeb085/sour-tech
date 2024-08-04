import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo/logoHeader.png";
import Link from "next/link";
import Button from "../global-UI/Button";
import { FiMenu } from "react-icons/fi";


const pageLinks = [
  { name: "Services", href: "/services", sublinks: [] },
  { name: "Trade-in", href: "#", sublinks: [] },
  { name: "Shop", href: "#", sublinks: [] },
  { name: "Plans", href: "#", sublinks: [] },
  { name: "Protetion", href: "#", sublinks: [] },
];

const Header = () => {
  return (
    <header className="bg-card">
      <div className="px-[120px] md:px-[50px] sm:px-[20px] py-[10px] flex justify-between items-center">
        <div className="w-[36px]">
          <Link href={"/"}>
            <Image className="w-[100%]" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between align-middle gap-[38px] md:hidden">
          <ul className="list-none flex justify-between items-center gap-8">
            {pageLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-[14px] text-[#fff] font-poppins"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Button text="Get Support" linkURL="#" black={false}/>
          </div>
        </div>
        
          <button className=" hidden md:block text-[18px] text-[#fff] font-[500] px-[15px] py-[10px] rounded-[8px] bg-gradient-to-t from-[#A2E887] to-[#68BA48] hover:bg-[#68BA48]">
          <FiMenu />
          </button>
        
      </div>
    </header>
  );
};

export default Header;
