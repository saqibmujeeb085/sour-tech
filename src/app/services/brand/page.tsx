import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreDetails from "@/components/store/StoreDetails";
import StoreServices from "@/components/store/StoreServices";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/ui/form";
import Button from "@/components/global-UI/Button";
import { IoChevronBack } from "react-icons/io5";

const brand: React.FC = () => {
  return (
    <div className="flex justify-between md:flex-col lg">
      <div className="p-[70px] sm:px-[20px] w-full sm:py-[30px]">
        <div className="">
          <h2 className="text-[34px] font-[500]">What brand is your device?</h2>
          <p className="text-[20px] text-[#d0d0d0] max-w-[580px] leading-5 mt-[10px]">
            You&apos;ve come to the right place--We&apos;ve done over 100,000 repairs.
          </p>
        </div>

        <div className="mt-20 flex justify-start flex-wrap gap-[25px] max-w-[660px]">
            
          <Select>
            
            <SelectTrigger className="w-[800px] h-[70px] text-[18px] rounded-[14px] group group-open:bg-primary "  >
                <div className="flex flex-col justify-start items-start ">
              <Label className="text-[16px]">Brand</Label>
              <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card rounded-[14px] max-h-[220px]  py-[0px] px-[0px] ">
              <SelectItem className="text-[18px] focus:bg-primary rounded-none" value="Apple">Apple</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary  rounded-none" value="Samsung">Samsung</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Google">Google</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Motorola">Motorola</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Other">Other</SelectItem>
            </SelectContent>
            
          </Select>

          {/* /////////////////////// */}

          <Select>
            
            <SelectTrigger className="w-[800px] h-[70px] text-[18px] rounded-[14px] group group-open:bg-primary "  >
                <div className="flex flex-col justify-start items-start ">
              <Label className="text-[16px]">Model</Label>
              <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card rounded-[14px] max-h-[220px]  py-[0px] px-[0px] ">
              <SelectItem className="text-[18px] focus:bg-primary rounded-none" value="Iphone-x">Iphone x</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary  rounded-none" value="Iphone-11">Iphone 11</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Iphone-12">Iphone 12</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Iphone-13">Iphone 13</SelectItem>
              <SelectItem  className="text-[18px] focus:bg-primary rounded-none" value="Iphone-14">Iphone 14</SelectItem>
            </SelectContent>
            
          </Select>

        </div>

        <div className="flex justify-between w-[100%] border-t border-[#ffffff3b] mt-[100px] md:mt-[60px] py-8">
        <button 
      className="text-[18px] shadow-inner-hsla text-[#fff] font-[500] px-[15px] py-[10px] rounded-[8px] bg-card" 
    >
      
        <Link  className="flex-1 flex items-center gap-2" href={"#"}>
        <IoChevronBack size={20}/> Back
        </Link>
      
    </button>
            <Button text="Continue"/>
        </div>
      </div>
      <div className="border-l md:border-t flex gap-[50px] flex-col md:flex-row justify-start items-start flex-wrap border-[#ffffff3b] min-h-[78vh] min-w-[450px] sm:min-w-[100%] md:w-[100%] px-[70px] sm:px-[20px] sm:py-[30px] py-[50px] w-[30%]">
        
      <div className="Contect">
        <h2 className="text-[20px] font-[500]">Find your device&rsquo;s brand</h2>
          <p className="text-[16px] text-[#d0d0d0] max-w-[560px] leading-5 mt-[20px] font-[500]">
          Your device brand can usually be found on the back of the handset itself, but if for whatever reason you aren&rsquo;t sure don&apos;t panic!<br/> <br/>

          It is indicated on back of the device, on the front, or in the Settings/System/About phone section if you are on Android or Settings/ IS=Ds if you are on IOS. It may also be shown on the original box and/ or manual that came with your device.
          </p>

        </div>
        <StoreDetails />
        <StoreServices />
      </div>
    </div>
  );
};

export default brand;
