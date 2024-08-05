import React from "react";
import Mobile from "../../../assets/temperory/mobile.png"
import Yes from "../../../assets/temperory/yes.png"
import No from "../../../assets/temperory/no.png"
import Sure from "../../../assets/temperory/sure.png"
import ServicesCategoryCards from "@/components/cards/ServicesCategoryCards";
import Image from "next/image";
import { StaticImageData } from "next/image";


type Category = {
    id: number;
    name: string;
    link: string;
    image: StaticImageData;
  };

const protection: React.FC = () => {

    const categories: Category[] = [
        { id: 1, name: "Yes", link: "/services/issue" , image: Yes },
        { id: 2, name: "No", link: "/services/issue" , image: No },
        { id: 3, name: "I'm not sure", link: "/services/issue" , image: Sure },
        
      ];

  return (
    <div className="flex justify-between md:flex-col lg">
      <div className="p-[70px] sm:px-[20px] w-full sm:py-[30px]">
        <div className="">
          <h2 className="text-[34px] font-[500] leading-[40px]">Do you have a protection plan on this device?</h2>
          <p className="text-[20px] text-[#d0d0d0] max-w-[580px] leading-5 mt-[10px]">
          You can get an estimate, and book a reservation without one, but if you have a plan with us, we can assist with the claim process.
          </p>
        </div>

        <div className="mt-20 flex justify-start flex-wrap gap-[25px] max-w-[660px]">
            
        {categories.map((category) => (
            <ServicesCategoryCards key={category.id} Name={category.name} ImageSRC={category.image} link={category.link} />
          ))}



        </div>

        
      </div>
     <div className="py-[70px] w-full flex justify-center">
      <Image src={Mobile} alt="mobile"/>
      </div>
    </div>
  );
};

export default protection;
