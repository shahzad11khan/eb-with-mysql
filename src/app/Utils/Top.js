import React from "react";
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Top = () => {
  return (
    <div className="bg-custom-blue w-full text-white text-sm py-1 hidden lg:flex">
      <div className="flex w-10/12 justify-between text-[10px] md:text-xs md:gap-2 m-auto">
        <span className="w-7/12">
          IT Park, PTCL Training Center, Board Bazar, Peshawar, Khyber Pakhtunkhwa, Pakistan
        </span>
        <div className="flex w-5/12 justify-end lg:gap-8 xl:gap-28">
          <ContactInfo icon={<FaPhoneSquareAlt />} text="+92 333 9921398" />
          

          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@encoderbytes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200">
                    <ContactInfo icon={<IoMdMail />} text="info@encoderbytes.com"  />
                  </Link>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-1">
    {icon}
    <span>{text}</span>
  </div>
);

export default Top;


// Final