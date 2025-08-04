import React from "react";
import Image from "next/image";
import Top from "../Utils/Top";
import { Serviceslogo, CostOfSoftware } from "../components/Mobileapps";
import { BiDownArrowCircle } from "react-icons/bi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import Contactform from "../Utils/Contactform";
const Services = () => {
  return (
    <div className="bg-white">
      <Top />
      {/* Hero */}
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
        <div className="flex flex-col justify-center items-center py-20">
          <div className="text-custom-blue text-2xl md:text-4xl  flex justify-center items-center font-bebas tracking-custom">
            CUSTOM SOFTWARE DEVELOPMENT SERVICES
          </div>
          <div className="flex m-auto">
            <p className="flex m-auto justify-center items-center text-center">
              Web applications, mobile apps, integration projects and more. 100
              + projects | Since 2019
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home -&nbsp; <span className="text-custom-blue">&nbsp;Services</span>
          </a>
        </div>
      </div>


      {/* 2 section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[50%]">
          <div className="text-[40px] font-bebas tracking-custom">
            <span className="">HOW WE</span>
            <span className="text-custom-blue"> DO IT?</span>
          </div>
          <p className="text-paraClr leading-tight">
            EncoderBytes follows the methodical waterfall strategy of SDLC while
            developing applications. We engage you with executives to pick your
            requirements for developing applications. Then by utilizing an
            efficient globally followed strategy, we shape/ visualize your idea.
            Then the Product Manager and Scrum Master engage the Designing and
            Development team in parallel. While also engaging you to review the
            design and development in every sprint review meeting, in order to
            shape the application to best fit your requirements and ensure your
            business growth productivity. Customer satisfaction is our utmost
            duty, we also entertain Post-delivery revisions in our developed
            applications.
          </p>

          <div>
            <Link href='#form'
              className="text-white font-semibold transition-all w-[142px] h-11 border-2 bg-custom-blue border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue flex items-center justify-center">
              Let&apos;s Discuss
            </Link>
          </div>
        </div>

        {/* iamge */}
        <div className="w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Rectangle-29.png"
            alt="Logo"
            className="object-cover rounded-[10px]"
            width={636}
            height={400}
          />
        </div>
      </div>


      {/* 3 section */}
      <div className="w-full bg-custom">
        <div className="flex justify-center items-center  flex-col pt-16">
          <div className="text-[40px] text-center font-bebas tracking-normal">
            <span className="">SERVICES </span>
            <span className="text-custom-blue">WE PROVIDE</span>
          </div>
          <p className="w-4/5 md:w-3/5 text-center text-paraClr leading-tight">
            Our software development services will enable your business to
            leverage digital trends ,expand SAM, address market need, expand SAM
            and build competitive advantage
          </p>
          <div className="flex items-center md:flex-row flex-col justify-center my-14 gap-3 ">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 pb-20 w-5/6"> */}
            {Serviceslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 flex flex-col w-[306px] h-[403px] gap-10   justify-center items-center text-white rounded-lg bg-custom-blue"
                >
                  <img src={items.image} alt="image" className="w-[88px] h-28" />
                  <p className="text-[40px] font-bebas text-center leading-9">{items.name}</p>
                  <Link href={items.href}>
                    <BiDownArrowCircle size={40} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 section */}
      <section className="pb-10 pt-10 W-5/6">
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8  m-auto p-5 rounded-md">
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/Mask-group5.png"
              alt="Logo"
              className="object-cover"
              width={636}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[50%]">
            <div className="text-xl font-bold">
              <span className="border-b-4 border-custom-blue">m o b</span>
              <span className=""> i l e a p p d e v e l o p m e n t.</span>
            </div>

            <div className="text-[40px] font-bebas text-custom-blue tracking-custom">
              MAKE YOUR LIFE EASY WITH A MOBILE APP
            </div>
            <p className="text-paraClr leading-tight">
              We offer all-round custom software application development
              services to develop stunning mobile apps that work across a
              variety of devices and engage large audiences – designed with
              security, scalability, and usability in mind. Using the latest
              mobile-friendly technologies and our agile development
              methodology, we have built highly-functional mobile apps for
              businesses across industries.
            </p>
            {/* <div className="text-custom-blue hover:text-white rounded-md h-11 mt-5 border-2 hover:bg-custom-blue border-custom-blue text-center flex items-center w-[157px] justify-center gap-4 cursor-pointer  font-semibold">
              <button>Read More</button>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8  m-auto p-5 rounded-md">
          <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[50%]">
            <div className="text-xl font-bold">
              <span className="border-b-4 border-custom-blue">a r t i f</span>
              <span className=""> i c i a l i n t e l l e g e n c e.</span>
            </div>
            <div className="text-[40px] font-bebas text-custom-blue tracking-custom">
              MAKE YOUR APP MORE INTELLEGENT AI
            </div>
            <p className="text-paraClr leading-tight">
              We are working with new business and and startups. We provide IT
              solutions for businesses to get more income. We have developed
              several E-commerce web and mobile applications for them.
            </p>
            {/* <div className="text-custom-blue hover:text-white rounded-md h-11 mt-5 border-2 hover:bg-custom-blue border-custom-blue text-center flex items-center w-[157px] justify-center gap-4 cursor-pointer font-semibold">
              <button>Read More</button>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </div> */}
          </div>

          {/* iamge */}
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/Mask-group6.png"
              alt="Logo"
              className="object-cover"
              width={636}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8   m-auto p-5 rounded-md">
          <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
            <Image
              src="/backgrounds/Mask-group7.png"
              alt="Logo"
              className="object-cover"
              width={636}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[50%]">
            <div className="text-xl font-bold">
              <span className="border-b-4 border-custom-blue">w e b</span>
              <span className="">
                {" "}
                a p p l i c a t i o n d e v e l o p m e n t.
              </span>
            </div>

            <div className="text-[40px] font-bebas text-custom-blue tracking-custom">
              REACH EVERYONE ARROUND THE WOULD
            </div>
            <p className="text-paraClr leading-tight">
              We offer all-round custom software application development
              services to develop stunning mobile apps that work across a
              variety of devices and engage large audiences – designed with
              security, scalability, and usability in mind. Using the latest
              mobile-friendly technologies and our agile development
              methodology, we have built highly-functional mobile apps for
              businesses across industries.
            </p>
            {/* <div className="text-custom-blue hover:text-white rounded-md h-11 mt-5 border-2 hover:bg-custom-blue border-custom-blue text-center flex items-center w-[157px] justify-center gap-4 cursor-pointer font-semibold">
              <button>Read More</button>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 5 section */}
      <div className="w-full  bg-custom">
        <div className="flex justify-center items-center  flex-col pt-16">
          <div className="font-bebas text-[40px] tracking-custom">
            <span className="">COST OF SOFTWARE </span>
            <span className="text-custom-blue">DEVELOPMENT SERVICES</span>
          </div>
          <p className="md:w-3/5 text-center text-paraClr tracking-custom leading-tight">
            We offer custom software development services at different price
            levels depending upon the scope and requirements of your software
            project.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 pb-20 w-10/12">
            {CostOfSoftware.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-400 px-2  py-3 text-center flex flex-col gap-5 outline-none border-none justify-between items-center rounded-lg bg-white text-xl"
                >
                  <Image
                    src={items.image}
                    className="rounded-lg mt-10"
                    width={80}
                    height={80}
                    alt="image"
                  />
                  <div className="">
                    <div className="font-bebas text-2xl tracking-custom">

                      <span>{items.name} </span>
                      <span className="text-custom-blue">
                        {items.name1}{" "}
                      </span>
                    </div>
                    <div className="text-center flex justify-center text-sm text-paraClr leading-tight pb-5 mt-2">
                      {items.des}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 6 section */}
      <Contactform />
    </div>
  );
};

export default Services;
