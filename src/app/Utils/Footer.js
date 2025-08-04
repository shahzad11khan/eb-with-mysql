"use client";
import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-custom-blue  py-5">
        <div className="flex justify-center md:flex-row items-center flex-col w-5/6 m-auto gap-x-2">
          <div className="flex flex-col justify-start items-start md:items-start w-full py-5">
            <div>
              <Image
                src="/logos/logo.png"
                className="mx-auto md:ml-0 -mt-6"
                alt="Logo"
                width={200}
                height={100}
              />
            </div>
            <p className="text-white text-sm text-center md:text-left mt-5 pr-5">
              Encoder Bytes is on a mission to provide the highest level of
              quality software products and services across the globe.
            </p>
            <div className="flex gap-2 justify-center md:justify-start items-center mt-5">
              <Link href="#">
                <FaFacebookSquare color="white" size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/encoderbytes/mycompany/"
                target="_blank"
              >
                <FaLinkedin color="white" size={22} />
              </Link>
              <Link
                href="https://github.com/EncoderBytes"
                target="_blank"
              >
                <FaGithubSquare color="white" size={22} />
              </Link>
              <Link href="#" >
                <FaTwitterSquare color="white" size={22} />
              </Link>
            </div>
          </div>

          <div className="flex w-full items-start  md:items-start justify-start  h-52 flex-col">
            <div className="text-white text-2xl font-bold mt-5">Explore</div>
            <div className="text-white text-sm ml-4 mt-3">
              <ul className="list-disc">
                <Link href="/" className="hover:text-gray-300">
                  <li>Home</li>
                </Link>
                <Link href="/About" className="hover:text-gray-300">
                  <li>About Us</li>
                </Link>
                <Link href="/Services" className="hover:text-gray-300">
                  <li>Services</li>
                </Link>
                <Link href="/How_we_Work" className="hover:text-gray-300">
                  <li>How Do We Work</li>
                </Link>
                <Link href="/Blog" className="hover:text-gray-300">
                  <li>Blog</li>
                </Link>
                <Link href="/Career" className="hover:text-gray-300">
                  <li>Career</li>
                </Link>
                <Link href="/Projects" className="hover:text-gray-300">
                  <li>Portfolio</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="flex w-full items-start  md:items-start justify-start  h-52 flex-col text-white">
            <div className="text-2xl font-bold mt-5">Contact</div>
            <div className="text-sm ml-4 mt-3">
              <ul>
                <li className="flex justify-start items-center gap-2 pb-1">
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  <Link href="#" className="hover:text-gray-200">
                    <span>+92 333 9921398</span>
                  </Link>
                </li>

                <li className="flex justify-start items-center gap-2 pb-1">
                  <span>
                    <IoMdMail />
                  </span>{" "}
                  <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@encoderbytes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200">
                    <span>info@encoderbytes.com</span>
                  </Link>
                </li>

                <li className="flex justify-start items-center gap-2 pb-1">
                  <span>
                    <TbWorld />
                  </span>{" "}
                  <Link href="/" className="hover:text-gray-200">
                    <span>www.encoderbytes.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full items-start md:items-start justify-start  h-52 flex-col text-white">
            <div className="text-2xl font-bold mt-5">Address</div>
            <div className="text-white text-sm my-4 w-4/6 md:w-full flex text-center md:text-start md:justify-start md:items-start">
              EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP,
              Pakistan
            </div>

            {/* <div className="h-20 w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d52927.02870747078!2d71.4668994!3d33.994093!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1728978031568!5m2!1sen!2s" className="h-full w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}

            <div className="h-20 w-full">
              <iframe
                src="https://maps.google.com/maps?q=33.9992,71.4682&z=15&output=embed"
                className="h-full w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center bg-paraClr text-white bg-custom-color text-xs h-7">
        © Copyright 2024, EncoderBytes
      </div>
    </>
  );
};

export default Footer;


// "use client";
// import React from "react";
// import {
//   FaGithubSquare,
//   FaLinkedin,
//   FaFacebookSquare,
//   FaTwitterSquare,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { TbWorld } from "react-icons/tb";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-custom-blue py-5">
//         <div className="flex flex-col md:flex-row justify-center items-center w-5/6 m-auto gap-x-2">
//           <div className="flex flex-col justify-start items-center md:items-start w-full py-5 text-center md:text-left">
//             <Image
//               src="/logos/logo.png"
//               className="mx-auto md:ml-0 -mt-6"
//               alt="Logo"
//               width={200}
//               height={100}
//             />
//             <p className="text-white text-sm mt-5 pr-5">
//               Encoder Bytes is on a mission to provide the highest level of quality software products and services across the globe.
//             </p>
//             <div className="flex gap-2 mt-5">
//               <Link href="#" aria-label="Facebook">
//                 <FaFacebookSquare color="white" size={22} />
//               </Link>
//               <Link href="https://www.linkedin.com/company/encoderbytes/mycompany/" aria-label="LinkedIn">
//                 <FaLinkedin color="white" size={22} />
//               </Link>
//               <Link href="https://github.com/EncoderBytes" aria-label="GitHub">
//                 <FaGithubSquare color="white" size={22} />
//               </Link>
//               <Link href="#" aria-label="Twitter">
//                 <FaTwitterSquare color="white" size={22} />
//               </Link>
//             </div>
//           </div>

//           {/* Explore Section */}
//           <div className="flex flex-col w-full md:w-1/4 text-white mt-5">
//             <h2 className="text-2xl font-bold">Explore</h2>
//             <ul className="text-sm mt-3 ml-4 list-disc">
//               <Link href="/" className="hover:text-gray-300"><li>Home</li></Link>
//               <Link href="/About" className="hover:text-gray-300"><li>About Us</li></Link>
//               <Link href="/Services" className="hover:text-gray-300"><li>Services</li></Link>
//               <Link href="/How_we_Work" className="hover:text-gray-300"><li>How Do We Work</li></Link>
//               <Link href="/Blog" className="hover:text-gray-300"><li>Blog</li></Link>
//               <Link href="/Career" className="hover:text-gray-300"><li>Career</li></Link>
//               <Link href="/Projects" className="hover:text-gray-300"><li>Portfolio</li></Link>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div className="flex flex-col w-full md:w-1/4 text-white mt-5">
//             <h2 className="text-2xl font-bold">Contact</h2>
//             <ul className="text-sm mt-3 ml-4">
//               <li className="flex items-center gap-2 pb-1">
//                 <FaPhoneAlt />
//                 <Link href="#" className="hover:text-gray-200">+92 333 9921398</Link>
//               </li>
//               <li className="flex items-center gap-2 pb-1">
//                 <IoMdMail />
//                 <Link href="#" className="hover:text-gray-200">info@encoderbytes.com</Link>
//               </li>
//               <li className="flex items-center gap-2 pb-1">
//                 <TbWorld />
//                 <Link href="#" className="hover:text-gray-200">www.encoderbytes.com</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Address Section */}
//           <div className="flex flex-col w-full md:w-1/4 text-white mt-5">
//             <h2 className="text-2xl font-bold">Address</h2>
//             <p className="text-sm my-4 w-4/6 md:w-full text-center md:text-start">
//               EncoderBytes, IT Park, PTCL Training Center, Peshawar, KP, Pakistan
//             </p>
//             <div className="h-20 w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d52927.02870747078!2d71.4668994!3d33.994093!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1728978031568!5m2!1sen!2s"
//                 className="h-full w-full"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </footer>
//       <div className="flex justify-center items-center bg-paraClr text-white text-xs h-7">
//         © Copyright 2024, EncoderBytes
//       </div>
//     </>
//   );
// };

// export default Footer;
