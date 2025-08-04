"use client";
import React, { useState, useEffect } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Mobileapps } from "../components/Mobileapps";
import { Mobileappslogo } from "../components/Mobileapps";
import { MobileAp } from "../components/carts";
import Contactform from "../Utils/Contactform";
import Link from "next/link";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MobileApp = () => {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);
      const { admins } = await ProjectsCount();
      const mobileAppProjects = admins.filter(p => p.ProjectCategory == "Mobile App").slice(0, 3);
      setProjects(mobileAppProjects);
    } catch (error) {
      console.log(`Failed to fetch projects: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  console.log(Projects);

  useEffect(() => {
    getProjects();
  }, []);
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
        <div className="flex flex-col justify-center items-center py-24 text-center">
          <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
            MOBILE APP DEVELOPMENT
          </h1>
          <p className="w-5/6  leading-tight text-paraClr my-3">
            We develop user-centric mobile applications that solve real world
            problems.
          </p>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home - Services -&nbsp; <span className="text-custom-blue">&nbsp;Mobile App Development</span>
          </a>
        </div>
      </div>

      {/* section 2 */}
      {/* <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">m o b i</span>
            <span className=""> l e &nbsp; a p p &nbsp; d e v e l o p m e n t.  </span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">WE BUILD GOOD</span>
            <span className="text-custom-blue"> MOBILE USER EXPEREINCES.</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Encoderbytes's mobile application development services enable you to realise your mobile app ideas into feature-rich user experiences. We provide bespoke mobile app development services for both iOS and Android platforms irrespective of the device type (phone or tablet).
            <br />
            <br />
            We have the perfect blend of aesthetic and technical skills to deliver sophisticated and user-centric mobile apps
          </p>
          <button className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue">
            Let`s Discuss
          </button>
        </div>
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/mobileapp.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div> */}
      <section className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <h2 className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">M o b i</span>
            <span> l e &nbsp; a p p &nbsp; d e v e l o p m e n t.</span>
          </h2>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">WE BUILD GOOD</span>
            <span className="text-custom-blue"> MOBILE USER EXPERIENCES.</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Encoderbytes&apos;s mobile application development services enable you to realize your mobile app ideas into feature-rich user experiences. We provide bespoke mobile app development services for both iOS and Android platforms, irrespective of the device type (phone or tablet).
            <br />
            <br />
            We have the perfect blend of aesthetic and technical skills to deliver sophisticated and user-centric mobile apps.
          </p>
          <Link href='#form'
            className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
          >
            Let’s Discuss
          </Link>
        </div>
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/mobileapp.png"
            alt="Mobile application development visual representation"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </section>


      {/* section 3 */}
      {/* <div className="bg-custom p-10 md:px-20" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue md:text-[40px] font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">MOBILE APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-4/6 text-paraClr leading-tight">
            Encoderbytes is a Peshawar, Pakistan based leading mobile app
            development company.We provide top grade mobile app development
            services for Android and IOS platforms.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-14 mx-16">
          <div className="rounded-lg   bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20  font-bebas">
                01
              </span>
              <Image
                src="/icons/android.png"
                alt="Logo"
                width={70}
                height={60}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">ANDROID APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To meet your business requirement and need of the end user we
                develop IOS apps .To create the superior quality we use the
                latest tools,technology and user friendly mobile apps.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                02
              </span>
              <Image src="/icons/apple.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">IOS APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To deliver impactful android apps for smartphones and tablets we
                have skilled mobile app developers who convert your ideas into
                digitized custom android app that your end users will enjoy.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <section className="bg-custom py-10" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-4">
          <h2 className="text-custom-blue  font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black text-3xl">MOBILE APP</span>
            <span className="text-custom-blue  text-3xl">DEVELOPMENT SERVICES</span>
          </h2>
          <p className="text-center w-5/6 md:w-4/6 text-paraClr leading-tight">
            Encoderbytes is a leading mobile app development company based in Peshawar, Pakistan. We provide top-grade mobile app development services for Android and iOS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-14 mx-16 mb-8">
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">01</span>
              <Image src="/icons/android.png" alt="Android Development Icon" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <h3 className="text-3xl font-bebas tracking-custom">
                <span className="text-black">ANDROID APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </h3>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To meet your business requirements and the needs of end users, we develop Android apps. We use the latest tools and technology to create high-quality, user-friendly mobile applications.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">02</span>
              <Image src="/icons/apple.png" alt="iOS Development Icon" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <h3 className="text-3xl font-bebas tracking-custom">
                <span className="text-black">IOS APP</span>
                <span className="text-custom-blue"> DEVELOPMENT</span>
              </h3>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                Our skilled mobile app developers create impactful iOS apps for smartphones and tablets, transforming your ideas into engaging, custom digital solutions that end users will enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* section 4 */}
      <div id="mobilesection4"></div>
      {/* <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-24 ">
          <div className="text-4xl text-center font-bebas tracking-custom">
            <span className="">MOBILE SERVICES </span>
            <span className="text-custom-blue">FOR DIFFERENT BUSINESS</span>
          </div>
          <p className="w-3/5 mt-3 text-center text-paraClr leading-tight">
            We provide mobile application development services to different
            startups ,SMEs and large enterprises.Since 2019, from Tech to
            healthcare we have a successful record of working in different
            industries and also delivered mobile app services. No project is too
            big or too small for us.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            {Mobileapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className="bg-[#F5F5F6] rounded-lg border-black py-7 px-10 text-center flex flex-col justify-between items-center gap-4"
                >
                  <Image src={items.image} alt="image" width={60} height={60} />
                  <span className="text-sm">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <section className="w-full">
        <div className="flex justify-center items-center flex-col mt-24">
          <h2 className="text-4xl text-center font-bebas tracking-custom">
            <span>MOBILE SERVICES </span>
            <span className="text-custom-blue">FOR DIFFERENT BUSINESSES</span>
          </h2>
          <p className="w-4/5 md:w-3/5 mt-3 text-center text-paraClr leading-tight">
            We provide mobile application development services to various startups, SMEs, and large enterprises. Since 2019, we have successfully worked across multiple industries, including tech and healthcare, delivering quality mobile app services. No project is too big or too small for us.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10">
            {Mobileapps.map((item) => (
              <div
                key={item.image}
                className="bg-[#F5F5F6] rounded-lg border-black py-7 px-10 text-center flex flex-col justify-between items-center gap-4"
              >
                <Image src={item.image} alt={`${item.name} Mobile App Icon`} width={60} height={60} />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 5 */}
      <div id="mobilesection5"></div>
      {/* <div className="relative bg-[#F5F5F6]  mt-20" style={{ height: "1600px" }}>
        <div className="relative " style={{ width: "100%" }}>
          <Image
            className=" h-full w-full bg-cover bg-center"
            src="/backgrounds/Rectangle-68.png"
            alt="Background"
            width={400}
            height={400}
          />
          <div className="absolute top-0 w-full text-center px-4 text-white">
            <div className="text-4xl mt-20 font-bebas tracking-custom">
              <span>MOBILE APP DEVELOPMENT PROCESS</span>
            </div>
            <div className="mt-4 mx-auto w-8/12 leading-tight">
              While developing a user-centric Mobile Application, we use
              up-to-date agile methodology of the software development cycle
              (SDLC) to ensure your satisfaction with expeditious development
              and delivery.
            </div>
          </div>
        </div>

        <div className="absolute top-48 w-full px-4">
          <div className="mt-10 w-full md:w-5/6 bg-white rounded-xl py-10 px-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 px-4 md:px-10">
              {MobileAp.map((cart) => (
                <div
                  className="rounded-lg w-full bg-custom-blue p-8 mt-5 text-white"
                  key={cart.no}
                >
                  <div className="flex justify-between font-bebas items-center tracking-custom ">
                    <span className="text-xl md:text-4xl border-[#ffffff4e] border-b-4 border-dashed w-3/6">
                      {cart.title}
                    </span>
                    <span className="text-6xl opacity-20">
                      {cart.no}
                    </span>
                  </div>
                  <div className="flex flex-col w-full mt-6leading-tight">
                    <p>{cart.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-[#F5F5F6] mt-20 min-h-[2500px] md:min-h-[1600px] pb-10">
        <div className="relative" style={{ width: "100%" }}>
          <Image
            className="h-[300px] md:h-[400px] w-full bg-cover bg-center "
            src="/backgrounds/Rectangle-68.png"
            alt="Mobile App Development Background"
            width={400}
            height={500}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
            <h2 className="text-2xl md:text-4xl font-bebas tracking-custom">
              <span>MOBILE APP DEVELOPMENT PROCESS</span>
            </h2>
            <p className="mt-2 md:mt-4 mx-auto w-11/12 text-xs md:text-base md:w-8/12 leading-tight">
              While developing a user-centric mobile application, we use
              up-to-date agile methodology of the software development cycle (SDLC)
              to ensure your satisfaction with expeditious development and delivery.
            </p>
          </div>
        </div>

        <div className="relative mt-8 md:mt-16 w-full px-4">
          <div className="mt-10 w-full md:w-5/6 bg-white rounded-xl py-10 px-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 px-4 md:px-10">
              {MobileAp.map((cart) => (
                <div
                  className="rounded-lg w-full bg-custom-blue p-8 mt-5 text-white"
                  key={cart.no}
                >
                  <div className="flex justify-between font-bebas items-center tracking-custom">
                    <span className="text-xl md:text-4xl border-[#ffffff4e] border-b-4 border-dashed w-3/6">
                      {cart.title}
                    </span>
                    <span className="text-6xl opacity-20">
                      {cart.no}
                    </span>
                  </div>
                  <div className="flex flex-col w-full mt-6 leading-tight">
                    <p>{cart.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Section 6  */}
      <div id="mobilesection6"></div>
      {/* <section className="mt-[1%]">
        <div className="w-full py-16">
          <div
            className="m-4 md:mx-20 flex flex-col justify-center items-center h-full rounded-md md:h-auto md:p-20 text-white"
            style={{
              backgroundImage: "url('/backgrounds/developing-cost.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center", // Center the background image
            }}
          >
            <div className="mt-20 text-3xl md:mt-16 font-bold">
              COST TO
            </div>

            <div className="pb-3 pt-1 text-4xl md:text-8xl font-bebas tracking-custom">
              DEVELOP MOBILE APPS
            </div>
            <p className=" mx-4 md:mx-36 text-center text-customFull leading-tight mb-5">
              In our 16+ years of experience as a mobile app development company in the UK, we have delivered many Android and iOS app development projects that range from £10,000 to £500,000. As you can well imagine, mobile apps come in all shapes and sizes for different mobile devices. Features and functionality, scalability, usability, performance – all these factors greatly affect the scope of building a mobile app. This makes budgeting for a mobile app development project a tricky exercise. But with our experience in developing mobile apps, EncoderBytes can help with highly accurate estimations of your project cost.
            </p>
            <button className="text-custom-blue hover:text-white font-medium w-36 h-10 outline-none transition-all mt-6 rounded-md bg-white hover:bg-custom-blue mb-6">
              Let`s Discuss
            </button>
          </div>
        </div>
      </section> */}
      <section className="mt-[1%]">
        <div className="w-full py-16">
          <div
            className="m-4 md:mx-20 flex flex-col justify-center items-center h-full rounded-lg md:h-auto md:p-20 text-white"
            style={{
              backgroundImage: "url('/backgrounds/developing-cost.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          >
            <div className="text-3xl mt-16 font-bold">
              COST TO
            </div>

            <div className="pb-3 pt-1 text-4xl md:text-8xl font-bebas tracking-custom">
              DEVELOP MOBILE APPS
            </div>
            <p className="mx-4 md:mx-36 text-center text-customFull leading-tight mb-5 text-sm md:text-base">
              In our 16+ years of experience as a mobile app development company in the UK, we have delivered many Android and iOS app development projects that range from £10,000 to £500,000. As you can well imagine, mobile apps come in all shapes and sizes for different mobile devices. Features and functionality, scalability, usability, performance – all these factors greatly affect the scope of building a mobile app. This makes budgeting for a mobile app development project a tricky exercise. But with our experience in developing mobile apps, EncoderBytes can help with highly accurate estimations of your project cost.
            </p>

            <Link href='#form'
              className="text-custom-blue hover:text-white font-medium w-36 h-10 outline-none transition-all mt-6 rounded-md bg-white hover:bg-custom-blue mb-6 transform hover:scale-105 flex justify-center items-center"
            >
              Let&apos;s Discuss
            </Link>
          </div>
        </div>
      </section>


      {/* section 7  */}
      <div id="mobilesection7"></div>
      {/* <div className="w-full">
        <div className="flex justify-center items-center  flex-col mt-16 ">
          <div className="text-[40px] text-center font-bebas tracking-custom">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-4/6 mt-5 text-center text-paraClr leading-tight">
            We have a rich background in native iOS and Android mobile
            applications as well as cross-platform apps . One of our Developed
            Mobile Application, Pharmapedia, is on 5th ranking around the globe
            . For developing a mobile application we use the latest methodology
            and uptodate technologies as mentioned:
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-20  w-5/6">
            {Mobileappslogo.map((items) => {
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
      </div> */}
      <div className="w-full">
        <div className="flex justify-center items-center flex-col mt-16">
          <div className="text-[40px] text-center font-bebas tracking-custom">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-4/5 md:w-3/5 mt-3 text-center text-paraClr leading-tight">
            We have a rich background in native iOS and Android mobile applications as well as cross-platform apps. One of our developed mobile applications, Pharmapedia, is ranked 5th around the globe. For developing a mobile application, we use the latest methodology and up-to-date technologies as mentioned:
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 my-10  w-5/6">
            {Mobileappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-200 w-47 h-47 text-center flex flex-col gap-6 justify-center items-center rounded-lg "
                >
                  <img src={items.image} className="w-16" alt="image" />
                  <span className="font-semibold text-lg">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* section 8 */}
      {/* <section className="bg-gray-100 pb-10 mt-20">
        <div className="flex pt-20 justify-center items-center text-2xl md:text-4xl font-bebas tracking-custom">
          <span>MOBILE</span>
          <span className="text-custom-blue">&nbsp; APPLICATIONS</span>
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

            <Link href='/Casestudy'>
              <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
                <button>Read Casestudy</button>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 my-20 md:my-14  gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg bg-pink-300"
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
          <Link href="/Projects">
            <button className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-gray-100 hover:border-2 hover:border-custom-blue hover:text-custom-blue">
              View Portfolio
            </button>
          </Link>
        </div>

      </section> */}
      <section className="bg-gray-100 pb-10 mt-20">
        <div className="flex pt-20 justify-center items-center text-4xl font-bebas tracking-custom">
          <span>MOBILE</span>
          <span className="text-custom-blue">&nbsp; APPLICATIONS</span>
        </div>

        {loading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
              style={{ backgroundColor: "rgb(164, 189, 247)" }}
            >
              <div className={`w-full md:w-[55%] h-auto md:h-full relative my-10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Skeleton height={250} width={"100%"} borderRadius={12} />
              </div>
              <div className={`flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[45%] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <Skeleton width={150} height={25}/>
                <Skeleton width={250} height={25}/>
                <Skeleton width={300} count={3}/>
                <Skeleton width={150} height={40} borderRadius={6}/>
              </div>
            </div>
          ))
        ) : Projects && Projects.length > 0 ? (
          // Show all projects dynamically
          Projects.map((project, index) => (
            <div
              key={project.id || project._id || index}
              className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
              style={{ backgroundColor: "rgb(164, 189, 247)" }}
            >
              <div className={`w-full h-auto md:h-full relative my-10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative w-full h-[250px]">
                  <Image
                    src={project.Image || "/backgrounds/app2.png"}
                    alt={project.ProjectName || "Project Image"}
                    className="object-cover rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    onError={(e) => {
                      e.target.src = "/backgrounds/app2.png";
                    }}
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[45%] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-2xl font-bold text-paraClr">
                  <span className="border-b-4 border-white">{project.ProjectCategory || "Mobile App"}</span>
                </div>
                <div className="text-4xl text-white font-bebas tracking-custom">
                  {project.ProjectName || "Project Name"}
                </div>
                <p className="text-paraClr leading-tight line-clamp-3">
                  {project.ProjectDescription || "Project description not available."}
                </p>
                <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
                  <a href={`/Case_Study?project=${project.id || project._id || ""}`} rel="noopener noreferrer">
                    <button>
                      READ CASE STUDY
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Show fallback content when no projects are available
          <div
            className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
            style={{ backgroundColor: "rgb(164, 189, 247)" }}
          >
            <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
              <Image
                src="/backgrounds/app2.png"
                alt="Default Mobile App"
                className="object-cover w-full h-full"
                width={350}
                height={350}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold text-paraClr">
                <span className="border-b-4 border-white">M o b i l e  A p p</span>
              </div>
              <div className="text-4xl text-white font-bebas tracking-custom">
                NO PROJECTS AVAILABLE
              </div>
              <p className="text-paraClr leading-tight">
                Currently, there are no Mobile App projects available to display. Please check back later or contact us for more information.
              </p>
              <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
                <button>COMING SOON</button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <Link href="/Projects">
            <button className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-gray-100 hover:border-2 hover:border-custom-blue hover:text-custom-blue">
              View Portfolio
            </button>
          </Link>
        </div>
      </section>

      <Contactform />
    </div>
  );
};

export default MobileApp;
