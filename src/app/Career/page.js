"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import ApplyContactForm from "../Utils/ApplyContactForm";
import Link from "next/link";
import { VacancyCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
const Page = () => {
  const [vacancy, setVacancy] = useState([]);
  const getVacancy = async () => {
    try {
      const response = await VacancyCount();
      const admins = response.admins;
      setVacancy(admins);
    } catch (error) {
      console.error(`Failed to fetch vacancies: ${error}`);
    }
  };
  useEffect(() => {
    getVacancy();
  }, []);
  return (
    <div className="bg-white">
      <Top />
      <div
        className="max-w-full h-[350px] flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-2xl md:text-4xl  flex justify-center items-center font-bebas tracking-custom">
            CAREERS
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-paraClr leading-tight text-center w-3/4">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home -&nbsp; <span className="text-custom-blue">&nbsp;Careers</span>
          </a>
        </div>
      </div>
      {/* section 2 */}

      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">E n c o</span>
            <span className=""> d e r b y t e s .</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">CAREERS AT </span>
            <span className="text-custom-blue">ENCODERBYTES</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            We strive to hire the absolute best people. As a services
            organization, we firmly believe that it is the single most important
            reason for all the success the company has achieved to-date. And
            this is really the only way to move forward.
          </p>
          <Link href='#Apply'
            className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
          >
            Let’s Discuss
          </Link>
        </div>
        {/* iamge */}
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Rectangle29.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-custom pb-36">
        <div className="flex  flex-col justify-center items-center  w-5/6 m-auto">
          <p className="text-3xl text-center md:text-left mt-10 uppercase font-bebas tracking-custom">
            Currently Available <span className="text-custom-blue">positions</span>
          </p>
          {vacancy.map((vac) => {
            return (
              <>
                <div class="gap-4 md:gap-0 mt-20 ">
                  <div className="flex flex-col md:flex-row">
                    <div class="w-full md:w-3/4">
                      <div class="pl-2">
                        <div class="text-4xl text-paraClr font-bebas">{vac.VacancyTitle}</div>
                        <div class="font-bold text-custom-blue">
                          DESIRED SKILLS
                        </div>
                        <div className="pl-4 mt-4 text-paraClr">
                          {vac.Requireds.split(". ").map((sentence, index) => (
                            <li key={index}>{sentence.trim()}</li>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-1/4 flex justify-center mt-5 md:mt-0">
                      <div class="flex flex-col justify-center items-center border-2 rounded-[10px] bg-custom-blue text-white h-[244px] w-64 md:w-[196px]">
                        <p className="font-bold text-[10px] tracking-widest leading-3 mb-0">VACANCIES</p>
                        <p className="font-bold text-2xl text-paraClr border-b border-white w-5/6 text-center pb-2 mt-2">1</p>
                        <p className="font-bold text-[10px] tracking-widest  mt-4">EXPERIENCE</p>
                        <p className="font-bold text-2xl text-paraClr">
                          {vac.Experience}
                        </p>
                        <Link href="#Apply">
                          <button class="rounded-md bg-paraClr w-[134px] h-11 text-[#E5E5E5] hover:bg-custom-blue font-bold hover:border-white hover:border-2 mt-4">
                            APPLY NOW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start font-bold w-full md:w-3/6 text-sm mt-10 border-b-2 border-dashed border-custom-blue"></div>

                  <div className="flex flex-col md:pl-5 mt-5 ">
                    <span className="text-custom-blue leading-loose font-bold">
                      WHAT WE OFFER
                    </span>
                    <ul className="mt-4 text-paraClr list-disc pl-5">
                      <li> Basic salary</li>
                      <li> Health allowance</li>
                      <li> Paid holidays</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center  border-black border-b-[3px] w-10/12 my-4 mt-20"></div>
              </>
            );
          })}
        </div>
      </div>
      <ApplyContactForm />
    </div>
  );
};

export default Page;
