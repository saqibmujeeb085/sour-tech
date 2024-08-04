import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo/logoHeader.png";
import Link from "next/link";
import Button from "../global-UI/Button";

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
      <div className="px-[120px] py-[10px] flex justify-between items-center">
        <div className="w-[36px]">
          <Link href={"/"}>
            <Image className="w-[100%]" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between align-middle gap-[38px]">
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
            <Button text="Get Support" linkURL="#"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
