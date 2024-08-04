import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

const StoreServices = () => {

  return (
    <div>
      <h2 className="text-[20px]">About our services</h2>
      <div className="flex flex-col mt-[30px] gap-[15px]">
        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">
            Best price guarantee
          </p>
          <div className="group flex relative">
            <BsFillInfoCircleFill fontSize={20} fill="#68BA48" />

            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute right-0 bottom-0 opacity-0 m-4 mx-auto p-[10px]">
              Tooltip
            </span>
          </div>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">
            Free tempered glass with any Apple iPhone repair
          </p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">Quick repairs</p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">Quality parts</p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">
            Lifetime service guarantee
          </p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">
            Free diagnostics for life
          </p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">4 P’s</p>
        </div>

        <div className="flex gap-[30px] items-center ">
          <BsPatchCheck fontSize={20} color="#fff" />

          <p className="font-[500] text-[16px] max-w-[209px]">
            Real-time service tracker
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreServices;
