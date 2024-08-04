import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  Name: string;
  ImageSRC: StaticImageData;
};

const ServicesCategoryCards: React.FC<Props> = ({ Name, ImageSRC }) => {
  return (
    <div
      className="border-[1px] min-w-[148px] border-[#595959] rounded-[14px] transition duration-500 ease-in-out hover:bg-gradient-to-b hover:from-[#A2E887] hover:to-[#68BA48]"
    >
      <Link
        href=""
        className="flex gap-[20px] py-[20px] px-3 flex-col justify-between h-[100%] items-center"
      >
        <Image src={ImageSRC} alt={Name} width={100} height={100} />
        <p className="text-[18px] font-[500]">{Name}</p>
      </Link>
    </div>
  );
}

export default ServicesCategoryCards;
