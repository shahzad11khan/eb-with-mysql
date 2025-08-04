import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps } from "../components/Mobileapps";
import { Mobileappslogo, Aiappslogo } from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
import Link from "next/link";

const Ai = () => {
  return (
    <div className=" bg-white">
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
            ARTIFICIAL INTELLIGENCE
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center">
              Build and launch software platforms that bring you revenue.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home - Services -&nbsp; <span className="text-custom-blue">&nbsp;Artificial-Intelligence</span>
          </a>
        </div>
      </div>

      {/* section 2 */}
      <div id="section2"></div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">A r t i f</span>
            <span className=""> &nbsp;i c i a l &nbsp;i n t e l l e g e n c e.</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">WHAT IS </span>
            <span className="text-custom-blue">ARTIFICIAL INTELLIGENCE?</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Encoderbytes helps you by building software,AI services to your
            businesses.which help them in generating revenues for them and also
            add value to their existing product .It also helps you by enhancing
            your portfolio by making brand new software for your business.We
            have over 2 years of experience in AI.
          </p>
          <Link href='#form'
            className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
          >
            Let&aposs Discuss
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
      <div id="section3"></div>
      <div className="bg-custom p-10 md:px-20">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">ARTIFICIAL INTELLIGENCE</span>
            <span className="text-custom-blue">SERVICES</span>
          </div>
          <div className="text-center w-full md:w-4/6 text-paraClr leading-tight">
            We works with AI that are valuable assets for your business. <br /><br />
            We works with AI that are valuable assets for your business.

            For over 2 years, EncoderBytes has been providing software development and AI services to and garnering positive feedback from its clients. Our software is often is aimed at a widely diverse audience. Hence, we make sure that the software we develop is user-friendly, flexible, scalable, and secure. You can also count on us for cloud hosting and management instead of having to look for a different provider. By entrusting us with your app development project, you will be able to focus your time and resources on your core business functions.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-14 md:mx-16">
          <div className="rounded-lg  bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20  font-bebas">
                01
              </span>
              <Image
                src="/icons/mvp-development.png"
                alt="Logo"
                width={70}
                height={60}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">AUTOMATION </span>
                <span className="text-custom-blue"> AT SCALE</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Our AI development services help you by avoiding biases and
                human error and also helps you by saving your money and time
                through automating and optimizing everyday processes and daily
                routine operations.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                02
              </span>
              <Image src="/icons/user-experience.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">INCREASED </span>
                <span className="text-custom-blue">PRODUCTIVITY</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Our skilled mobile app developers convert your ideas into
                digitized custom android app to make it enjoyable for end user
                .Our developer are committed to deliver impactful android app
                for smartphone and tablets.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                03
              </span>
              <Image src="/icons/scalable.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">BETTER DECISION </span>
                <span className="text-custom-blue">MAKING</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Grow your expertise and make faster business decision by using
                cognitive technologies and enabling analysis that offers
                intelligent advice and support.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                04
              </span>
              <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">SECURITY </span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Security and data privacy is very important to be planned from
                the very beginning to have a successful SAAS platform.Security
                is the main concern for that we have technical leads in our team
                which make sure to approve the security checklist of every
                software we deliver.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                05
              </span>
              <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">CLOUD HOSTING </span>
                <span className="text-custom-blue">& MANAGEMENT</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To save your time and manage your software smoothly, we offer a
                complete range of white label softwares including cloud hosting
                and management for your SAAS platform. So you don&apos;t need to
                invest in expensive server hardware or hosting skills.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                06
              </span>
              <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">INTELLECTUAL PROPERTY </span>
                <span className="text-custom-blue">[IP] RIGHTS</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Our skilled mobile app developers convert your ideas into
                digitized custom android apps to make it enjoyable for the end
                user. Our developers are committed to deliver impactful android
                app for smartphone and tablets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div id="section4"></div>
      <div
        className="flex flex-col md:flex-row md:h-80 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover w-full"
        style={{
          backgroundImage: "url('/backgrounds/Rectangle2.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="my-10 flex flex-col md:flex-row justify-between items-center md:px-16 w-9/12 m-auto">
          <div>
            <div className="mb-4 md:mb-0 text-custom-blue font-bebas text-[40px] tracking-custom">
              <h1 className="text-white -mb-6">
                Let’s discuss. <span className="text-custom-blue">How much</span>
              </h1>
              <h2>Your App Costs?</h2>
            </div>
            <div className="text-[#e5e5e5] md:flex md:justify-start">
              Send us the features you are looking to build, and we shall advise on the next steps.
            </div>
          </div>
          <div>

            <Link href='#form'
              className="text-white font-semibold transition-all w-[142px] h-11 border-2 bg-custom-blue border-custom-blue rounded-md hover:bg-transparent hover:text-custom-blue flex items-center justify-center">
              Let&apos;s Discuss
            </Link>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div id="section5"></div>
      <div className="w-full bg-[#F5F5F6] mt-20">
        <div className="flex justify-center items-center  flex-col ">
          <div className="text-[40px] font-bebas tracking-custom text-center mt-20">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-4/5 md:w-3/5 mt-3 text-center text-paraClr leading-tight">
            To launch and grow successful digital business as a leading web
            development company in Pakistan we cover every technology to choose
            the right platform for you that perfectly serves your requirements.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 my-20  w-5/6">
            {Aiappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-200 w-48 h-48 text-center flex flex-col gap-6 justify-center items-center rounded-lg "
                >
                  <img src={items.image} className="rounded-lg" alt="image" />
                  <span className="font-semibold text-lg">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-gray-100 pb-10 mt-20">
        <div className="flex pt-20 justify-center items-center text-4xl font-bebas tracking-custom">
          <span>AI</span>
          <span className="text-custom-blue">&nbsp;APPLICATIONS</span>
        </div>

        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app2.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>
        </div>


        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 my-20 md:my-14  gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >

          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>

          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app3.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app1.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              Social media video downloader
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center  mt-10">
          <Link href="/Projects"
            className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-gray-100 hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
          >
            View Portfolio
          </Link>
        </div>
      </section>
      <Contactform />
    </div >
  );
};

export default Ai;
