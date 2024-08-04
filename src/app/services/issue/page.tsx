import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreDetails from "@/components/store/StoreDetails";
import StoreServices from "@/components/store/StoreServices";
import Button from "@/components/global-UI/Button";
import { IoChevronBack } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import MblSmal from "../../../assets/temperory/mobileSmall.png";

const issue: React.FC = () => {

  const checkboxes = [
    { id: 1, name: "Broken Screen", checked: false },
    { id: 2, name: "Data Transfer", checked: false },
    { id: 3, name: "Bluetooth/ Pairing Issue", checked: true },
    { id: 4, name: "Data Recovery & Backup", checked: false },
    { id: 5, name: "WiFi Issue", checked: false },
    { id: 6, name: "Water Damage", checked: false },
    { id: 7, name: "Short Battery Life", checked: false },
    { id: 8, name: "Won't Charge", checked: false },
    { id: 9, name: "Cleaning", checked: false },
    { id: 10, name: "Factory Reset", checked: false },
    { id: 11, name: "Back Camera Doesn't Work", checked: false },
    { id: 12, name: "Back Housing/Cover", checked: false },
    { id: 13, name: "I don't know / Other", checked: false }
  ];

  return (
    <div className="flex justify-between md:flex-col lg">
      <div className="p-[70px] sm:px-[20px] w-full sm:py-[30px]">
        <div className="">
          <h2 className="text-[34px] font-[500]">What&apos;s the issue with it?</h2>
          <p className="text-[20px] text-[#d0d0d0] max-w-[580px] leading-5 mt-[10px]">
            Let us know the issues happening
          </p>
        </div>

        <div className="mt-20 flex justify-start flex-wrap gap-[16px] max-w-[660px]">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="border group border-[#ffffff3b] rounded-[8px] flex gap-4 group w-full p-5 peer-checked:border-primary">
              <Checkbox id={`${checkbox.id}`} className="peer" />
              <label
                htmlFor={`${checkbox.id}`}
                className="text-[20px] text-[#D0D0D0] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {checkbox.name}
              </label>
            </div>
          ))}

          <Textarea className="mt-4 text-[16px] text-[#D0D0D0] h-[200px]" placeholder="I don&apos;t know / Other" />
        </div>

        <div className="flex justify-between w-[100%] border-t border-[#ffffff3b] mt-[100px] md:mt-[60px] py-8">
          <button 
            className="text-[18px] shadow-inner-hsla text-[#fff] font-[500] px-[15px] py-[10px] rounded-[8px] bg-card"
          >
            <Link className="flex-1 flex items-center gap-2" href={"#"}>
              <IoChevronBack size={20}/> Back
            </Link>
          </button>
          <Button linkURL="#" text="Continue" black={false}/>

        </div>
      </div>
      <div className="border-l md:border-t flex gap-[50px] flex-col md:flex-row justify-start items-start flex-wrap border-[#ffffff3b] min-h-[78vh] min-w-[450px] sm:min-w-[100%] md:w-[100%] px-[70px] sm:px-[20px] sm:py-[30px] py-[50px] w-[30%]">
        <div className="w-full">
          <h2 className="text-[20px] font-[500]">Summary</h2>
          <div className="flex justify-between items-center border-b py-8 border-[#ffffff3b]">
            <div className="flex gap-4 justify-center items-center">
              <Image src={MblSmal} alt="mbl" />
              <h2 className="font-[700] text-[18px]">Apple iPhone 12</h2>
            </div>
            <Link href={"#"} className="font-[700] text-[18px] underline text-primary">Change</Link>
          </div>
        </div>
        <StoreDetails />
        <StoreServices />
      </div>
    </div>
  );
};

export default issue;
