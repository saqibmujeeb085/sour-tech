import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  linkURL?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, linkURL, onClick }) => {
  return (
    <button 
      className="text-[18px] text-[#fff] font-[500] px-[15px] py-[10px] rounded-[8px] bg-gradient-to-t from-[#A2E887] to-[#68BA48] hover:bg-[#68BA48]" 
      onClick={onClick}
    >
      {linkURL ? (
        <Link  className="flex-1" href={linkURL}>
          {text}
        </Link>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
