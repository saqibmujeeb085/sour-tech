import Image from "next/image";
import Link from "next/link";
import React from "react";
import Phone from "../../assets/temperory/store-card-13-iphone-nav-202209_GEO_US.png";
import Tablet from "../../assets/temperory/store-card-13-ipad-nav-202210.png";
import Computer from "../../assets/temperory/store-card-14-16-mac-nav-202301.png";
import Game from "../../assets/temperory/pngwing 1 (1).png";
import Wear from "../../assets/temperory/Group 1261154130.png";
import Else from "../../assets/temperory/image 56.png";
import StoreDetails from "@/components/store/StoreDetails";
import StoreServices from "@/components/store/StoreServices";
import ServicesCategoryCards from "@/components/cards/ServicesCategoryCards";
import { StaticImageData } from "next/image";

type Category = {
  id: number;
  name: string;
  image: StaticImageData;
};

const services: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Phone", image: Phone },
    { id: 2, name: "Tablet", image: Tablet },
    { id: 3, name: "Computer", image: Computer },
    { id: 4, name: "Game", image: Game },
    { id: 5, name: "Wearable", image: Wear },
    { id: 6, name: "Something Else", image: Else },
  ];

  return (
    <div className="flex justify-between md:flex-col lg">
      <div className="p-[70px] sm:px-[20px] sm:py-[30px] ">
        <div className="">
          <h2 className="text-[34px] font-[500]">Let&apos;s find your device.</h2>
          <p className="text-[20px] text-[#d0d0d0] max-w-[560px] leading-5 mt-[10px]">
            Get a free consultation today with one of our tech advisors. We offer
            lifetime guaranteed services, with a best price guarantee.
          </p>
        </div>

        <div className="mt-20 flex justify-start flex-wrap gap-[20px] max-w-[660px]">
          {categories.map((category) => (
            <ServicesCategoryCards key={category.id} Name={category.name} ImageSRC={category.image} />
          ))}
        </div>
      </div>
      <div className="border-l md:border-t flex gap-[50px] flex-col md:flex-row justify-start items-start flex-wrap border-[#ffffff3b] min-h-[78vh] min-w-[450px] sm:min-w-[100%] md:w-[100%] px-[70px] sm:px-[20px] sm:py-[30px] py-[50px] w-[30%]">
        <StoreDetails />
        <StoreServices />
      </div>
    </div>
  );
};

export default services;
