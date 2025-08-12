"use client"
import Image from "next/image";
import { useEffect, useState } from "react"; // Add this import
import axios from "axios"; 
import { Cartobj } from "./components/carts";
import dynamic from "next/dynamic";
import Top from "./Utils/Top";
const CarousalDynamic = dynamic(() => import("./Utils/Carousal"), { ssr: false });
const ContactformDynamic = dynamic(() => import("./Utils/Contactform"), { ssr: false });
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import {API_URL_Projects} from "./AdminDashboard/components/ShowApidatas/apiUrls"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles
import { set } from "mongoose";


export default function Home() {
  const [latestProject, setLatestProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchLatestProject() {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(API_URL_Projects);
        const data = res.data;
        const latestProjects = data.Result?.filter(p => p.LatestProject === 1 || p.LatestProject === "1");
        setLatestProject(latestProjects);
      } catch (err) {
        setLatestProject([]);
        setError("Failed to load latest projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchLatestProject();
  }, []);
  return (
    <div className="bg-white">
      <Top />
      {/* <div
        className="flex h-[760px] flex-col bg-cover relative "
        style={{
          backgroundImage:
            " url('/backgrounds/background-image.png')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 md:left-auto md:right-auto md:top-[55%] md:ml-32 text-center md:text-left px-6 md:px-0 text-white">
          <span className="text-2xl block md:inline">a bespoke</span>
          <div>
            <h1 className="capitalize font-bebas  text-7xl  leading-[65px] tracking-custom">SOFTWARE development
              <span className="block text-custom-blue m-0">
                company <span className="text-white">.</span>
              </span>
            </h1>
          </div>
          <p className="text-2xl">
            Software Development That Ensures Growth Of Your{" "}
            <br className="hidden md:inline" /> Business.
          </p>
          <div className=" text-white rounded-md  hover:bg-transparent mt-16 bg-custom-blue hover:border-white hover:border-2 w-[176px] h-11 flex items-center justify-center gap-2">
            <button className="">Let`s Discuss</button>
            <FaArrowCircleRight />
          </div>
        </div>
      </div> */}
      <div
        className="relative flex flex-col items-center h-[760px] bg-cover bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/backgrounds/background-image.png')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:ml-32 px-6 md:px-0 text-center md:text-left">
          <span className="text-2xl md:inline">a bespoke</span>
          <h1 className="capitalize font-bebas text-7xl leading-[65px] tracking-custom">
            SOFTWARE development
            <span className="block text-custom-blue">
              company<span className="text-white">.</span>
            </span>
          </h1>
          <p className="text-xl">
            Software Development That Ensures Growth Of Your Business.
          </p>
          <div className=" text-white text-md rounded-md hover:bg-transparent py-3 px-2 mt-16 bg-custom-blue hover:border-white hover:border-2 w-[200px] flex items-center gap-2">
            <Link href={"/How_we_Work"} className="flex items-center gap-2 w-full justify-center">
              <button className=" w-full text-left">See How we Work</button>
              <FaArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>




      {/* <div className="flex flex-col md:px-10 pb-12 bg-greybg">
        <div className="flex flex-col md:flex-row md:ml-20 md:mt-16 md:justify-between items-center w-5/7">
          <div className="text-4xl text-center md:text-left font-bebas tracking-custom leading-8">
            <p>WE PROVIDE THE EXEMPLARY</p>
            <p className="text-custom-blue">
              IT SOLUTIONS<span className="text-black">.</span>
            </p>
          </div>

          <div className="mt-5 md:mt-0 mr-10">
            <Link href="/Services">
              <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue">
                View All Services
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-3 ml-4 md:ml-20 md:w-8/12">
          <p className="text-paraClr leading-tight">
            Encoder Bytes (Pvt.) Ltd. is a leading software development company
            based stationed in Peshawar, <br /> Pakistan. We build robust
            software for startups and established businesses since
            2019.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-8 w-11/12 gap-5 m-auto ">
          
          <div className="rounded-2xl bg-white p-4 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl text-paraClr font-bebas opacity-20">
                01
              </span>
              <Image src="/icons/mob.png" alt="Logo" width={70} height={70} />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left font-bebas tracking-custom text-lg md:text-3xl">
                <p className="w-full -mb-2">mOBILE APP</p>
                <span className=" text-custom-blue">
                  dEVELOPMENT
                </span>
              </div>
              <p className="mt-1 text-paraClr opacity-50 leading-tight">
                We are building stunning Mobile Apps that work across a variety
                of devices to increase and engage audiences - having security,
                scalability and usability features.
              </p>
            </div>
          </div>
          
          <div className="rounded-2xl bg-white p-4 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bebas text-paraClr opacity-20">
                02
              </span>
              <Image
                src="/icons/website.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left font-bebas tracking-custom text-lg md:text-3xl">
                <p className="w-full  -mb-2">WEB aPPlication</p>
                <span className=" text-custom-blue">
                  DEVELOPMENT
                </span>
              </div>
              <p className="mt-1 text-paraClr opacity-50 leading-tight">
                By Utilizing the latest technologies, we build web applications
                that deliver remarkable functionality and user engagement.
              </p>
            </div>
          </div>
         
          <div className="rounded-2xl bg-white p-4 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl  font-bebas text-[#454544] opacity-20">
                03
              </span>
              <Image
                src="/icons/artificial.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left font-bebas tracking-custom text-lg md:text-3xl">
                <p className="w-full -mb-2">aRTIFICIAL</p>
                <span className=" text-custom-blue">
                  iNTELEGENCE
                </span>
              </div>
              <p className="mt-1 text-paraClr opacity-50 leading-tight">
                We have a rich background in Artificial intelligence software
                development, with a hands-on AI expert team. AI software
                enhances the processes and operational efficiency of businesses
                and organizations. We integrate AI models to Mobile and Web.
              </p>
            </div>
          </div>
          
          <div className="rounded-2xl bg-white p-4 md:mb-0 mt-4 md:mt-0 md:w-80">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl  font-bebas text-[#454544] opacity-20">
                04
              </span>
              <Image
                src="/icons/user-experience.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="flex flex-col ml-2 mt-4 md:mt-10">
              <div className="text-center md:text-left font-bebas tracking-custom text-lg md:text-3xl">
                <p className="w-full  -mb-2">UI/UX</p>
                <span className=" text-custom-blue" >
                  DESIGN
                </span>
              </div>
              <p className="mt-1 text-paraClr opacity-50 leading-tight">
                Our UI/UX designs are focused on efficient solutions to user
                problems. We apply design thinking to product design, therefore
                we categorize the UX process to 5 key phases : Product
                definition, Research, Analysis, Design and validation.
              </p>
            </div>
          </div>
        </div>

      </div> */}
      <div className="flex flex-col md:px-10 pb-16 bg-greybg">
        <div className="flex flex-col md:flex-row md:ml-20 mt-20 md:justify-between items-center w-5/7">
          <div className="text-4xl text-center md:text-left font-bebas tracking-custom leading-8">
            <p>WE PROVIDE THE EXEMPLARY</p>
            <p className="text-custom-blue">
              IT SOLUTIONS<span className="text-black">.</span>
            </p>
          </div>
          <Link href="/Services">
            <button className="mt-3 md:mt-0 mr-10 text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue">
              View All Services
            </button>
          </Link>
        </div>

        <div className="mt-3 ml-4 md:ml-20 md:w-8/12">
          <p className="text-paraClr leading-tight">
            Encoder Bytes (Pvt.) Ltd. is a leading software development company. We build robust software for startups
            and established businesses since 2019.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-8 w-11/12 gap-5 m-auto">
          {[{
            id: "01",
            title: "MOBILE APP",
            subtitle: "DEVELOPMENT",
            description: "We build stunning Mobile Apps that work across a variety of devices to increase and engage audiences, with security, scalability, and usability.",
            icon: "/icons/mob.png",
          },
          {
            id: "02",
            title: "WEB APPLICATION",
            subtitle: "DEVELOPMENT",
            description: "By utilizing the latest technologies, we build web applications that deliver remarkable functionality and user engagement.",
            icon: "/icons/website.png",
          },
          {
            id: "03",
            title: "ARTIFICIAL",
            subtitle: "INTELLIGENCE",
            description: "Our AI team develops solutions to enhance operational efficiency for businesses, integrating AI models into mobile and web platforms.",
            icon: "/icons/artificial.png",
          },
          {
            id: "04",
            title: "UI/UX",
            subtitle: "DESIGN",
            description: "Our UI/UX designs focus on solving user problems efficiently, applying design thinking with a structured UX process.",
            icon: "/icons/user-experience.png",
          }
          ].map((service, index) => (
            <div key={index} className="rounded-lg   bg-white p-4 md:w-80 mt-4 md:mt-0">
              <div className="flex justify-between">
                <span className="text-4xl md:text-7xl font-bebas text-paraClr opacity-20">{service.id}</span>
                <Image src={service.icon} alt="Service Icon" width={70} height={70} />
              </div>
              <div className="ml-2 mt-4 md:mt-10">
                <h2 className="text-left font-bebas tracking-custom text-3xl">
                  <p className="w-full -mb-2">{service.title}</p>
                  <span className="text-custom-blue">{service.subtitle}</span>
                </h2>
                <p className="mt-1 text-paraClr opacity-50 leading-tight">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: "url('/backgrounds/Group32.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full md:w-5/6 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "300", label: "Happy Clients" },
              { value: "01", label: "Global Office" },
              { value: "04", label: "Years In the Business" },
              { value: "50", label: "Expert Team" },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-5 md:py-24 w-60 flex flex-col justify-center items-center mt-3 ${index !== 4 ? "border-r-0 md:border-r-[0.5px] border-white" : ""
                  }`}
              >
                <span className="text-4xl md:text-6xl text-white font-bold  font-bebas tracking-custom">
                  {item.value}
                </span>
                <p className="text-lg md:text-xl text-white mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div
        className="flex justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/backgrounds/Group32.png')" }}
      >
        <div className="flex flex-col items-center w-full md:w-11/12 md:py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "300", label: "Happy Clients" },
              { value: "01", label: "Global Office" },
              { value: "04", label: "Years In the Business" },
              { value: "50", label: "Expert Team" },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-5 md:py-24 w-60 flex flex-col items-center text-white  mt-3 ${index !== 4 ? "md:border-r border-white md:border-r-0.5" : ""
                  }`}
              >
                <span className="text-5xl md:text-6xl font-bold font-bebas tracking-custom">
                  {item.value}
                </span>
                <p className="text-xl mt-4">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* <div className="md:px-10  w-full">
        <div className="flex flex-col md:flex-row md:mt-10 md:justify-between items-center ">
          <div className="px-4 md:px-20 font-bebas tracking-custom leading-8">
            <p className="md:text-3xl  text-center md:text-left -mb-2">
              RECENT PROJECTS
            </p>
            <p className="md:text-3xl text-custom-blue  text-center md:text-left">
              FROM OUR PORTFOLIO<span className="text-black">.</span>
            </p>
          </div>
       
          <div className="mt-5 md:mt-0 mr-10">
            <Link href="/Projects">
              <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-3 w-full md:w-5/6 md:ml-20">
          <p className="text-paraClr leading-tight">
            As we have delivered so many web, mobile and AI projects in the
            recent past but, the recent <br className="hidden md:inline"></br>{" "}
            most project we have completed is given below.
          </p>
        </div>
      </div> */}
      <div className="md:px-10 w-full">
        <div className="flex flex-col md:flex-row mt-20 md:justify-between items-center">
          <div className="px-4 md:px-20 font-bebas tracking-custom leading-tight text-4xl">
            <p className="-mb-2">RECENT PROJECTS</p>
            <p className=" text-custom-blue">
              FROM OUR PORTFOLIO<span className="text-black">.</span>
            </p>
          </div>

          <div className="mt-3 md:mt-0 mr-10">
            <Link href="/Projects">
              <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue">
                View All Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-7 md:mt-3 ml-4 md:ml-20 md:w-8/12">
          <p className="text-paraClr leading-tight">
            As we have delivered many web, mobile, and AI projects recently, the most recent project we have completed is given below.
          </p>
        </div>
      </div>





      {/* <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8">
        <div className="bg-yellow w-full md:w-[70%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/induz-a-industrial-category-wordpress-theme.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold text-paraClr">
            <span className="border-b-4 border-custom-blue"> i n d </span>
            <span> u z <span className="text-custom-blue">.</span></span>
          </div>

          <div className="flex flex-col items-center md:items-start font-bebas tracking-custom">
            <div className="text-2xl md:text-4xl text-center md:text-left -mb-2">
              AN INDUSTRY&apos;S EMPLOYEES
            </div>
            <div className="flex items-center gap-2 text-center md:text-left">
              <div className="text-2xl md:text-4xl  text-custom-blue">
                MANAGEMENT APPLICATION{" "}
                <span className="text-black text-lg md:text-2xl">.</span>
              </div>
            </div>
          </div>

          <p className="text-paraClr leading-tight">
            As we have delivered so many web, mobile and AI projects in the
            recent past but, the recent most project we have completed is given
            below.
          </p>
          <div className="flex gap-3">
            <div className="mt-5 md:mt-0">
              <button className="text-white font-semibold transition-all w-[167px] h-11 border-2 bg-custom-blue border-custom-blue  rounded-md hover:bg-white hover:text-custom-blue">
                Read Casestudy
              </button>
            </div>
            <div className="mt-5 md:mt-0">
              <button className="text-custom-blue font-semibold transition-all w-[127px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 gap-y-8 md:gap-x-8">
        <div className="bg-yellow w-full md:w-[70%] h-auto  relative">
          {loading ? (
            <Skeleton height={300} width={"100%"} borderRadius={12} />
          ) : error ? (
            <div className="text-red-500 font-bold text-center py-10">{error}</div>
          ) : latestProject[0] ? (
            <Image
              src={latestProject[0].Image}
              alt={latestProject[0].ProjectName}
              className="object-cover w-full h-full rounded-lg"
              width={400}
              height={400}
              unoptimized={latestProject[0].Image?.startsWith("http")}
            />
          ) : (
            <Image
              src="/backgrounds/induz-a-industrial-category-wordpress-theme.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          )}
        </div>

        <div className="flex flex-col justify-center items-center md:items-start gap-y-4 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold text-paraClr">
            {loading ? (
              <Skeleton width={150} />
            ): latestProject[0] ? (
              <h1>{latestProject[0].ProjectCategory}</h1>
            ):(
              <h1>
                <span className="border-b-4 border-custom-blue">I n d</span>
                <span> u z <span className="text-custom-blue">.</span></span>
              </h1>
            )}
          </div>

          <div className="flex flex-col items-center md:items-start font-bebas tracking-custom">
            {loading ? (
              <Skeleton width={200} count={2} />
            ): latestProject[0] ? (
              <div className="text-4xl text-custom-blue text-center md:text-left">
                {latestProject[0].ProjectName}
              </div>
            ):(
              <>
              <div className="text-4xl -mb-2">AN INDUSTRY&apos;S EMPLOYEES</div>
              <div className="text-4xl text-custom-blue text-center md:text-left">
              MANAGEMENT APPLICATION <span className="text-black text-lg md:text-2xl">.</span>
              </div>
              </>
            )}
          </div>

          {loading ? (
            <Skeleton width={400} count={3} />
          ): 
            latestProject[0] ? (
              <p className="text-paraClr leading-tight line-clamp-3">{latestProject[0].ProjectDescription}</p>
            ):(
              <p>We have delivered numerous web, mobile, UI/UX, and AI projects recently, and the most recent project we have completed is detailed below.</p>
            )
          }

          <div className="flex gap-3 mt-5">
            <a href={`/Case_Study?project=${latestProject[0]?.id || latestProject[0]?._id || ""}`} rel="noopener noreferrer">
              <button
                className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold px-4 py-2 rounded text-xs sm:text-sm">
                READ CASE STUDY
              </button>
            </a>

            <Link href="#form"
              className="text-custom-blue font-semibold transition-all w-[127px] border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>



      {/* <div className="md:px-10 mt-32 bg-greybg pb-14">
        <div className="px-4 md:px-8 mt-10 md:mt-32 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="px-4 md:px-0 mt-8 md:mt-0 md:ml-20 md:w-[50%] font-bebas tracking-custom">
              <p className="text-4xl -mb-2">OUR APPROACHES</p>
              <p className="text-4xl text-custom-blue">
                TO SOLVE A PROBLEM<span className="text-black">.</span>
              </p>
            </div>

            <div className="mt-5 md:mt-0 mr-10">
              <Link href="#">
                <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue">
                  Read Details
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-8 ml-4 md:ml-20 md:w-[60%] text-paraClr leading-tight">
            <p>
              We here in Encoderbytes follow every possible method to solve a
              problem for our clients and help them in their businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-5/6 m-auto">
          {Cartobj.map((cart) => {
            return (
              <div className="rounded-lg bg-white p-4" key={cart.no}>
                <div className="flex justify-between">
                  <span className="text-4xl md:text-7xl font-bold text-[#454544] opacity-20  font-bebas tracking-custom">
                    {cart.no}
                  </span>
                  <Image src={cart.image1} alt="Logo" width={70} height={70} />
                </div>
                <div className="flex flex-col md:w-full ml-2 mt-6">
                  <p className="text-4xl font-bebas tracking-custom -mb-2">OUR APPROACHES</p>
                  <p className="text-4xl text-custom-blue font-bebas tracking-custom">
                    TO SOLVE A PROBLEM<span className="text-black">.</span>
                  </p>
                  <p className="mt-6  text-paraClr opacity-50 capitalize leading-tight">
                    {cart.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="md:px-10 mt-32 bg-greybg pb-14">
        <div className="px-4 md:px-8 mt-10 md:mt-32 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="px-0 mt-8 md:mt-0 md:ml-20 md:w-[50%] font-bebas tracking-custom">
              <p className="text-4xl -mb-2">OUR APPROACHES</p>
              <p className="text-4xl text-custom-blue">
                TO SOLVE A PROBLEM<span className="text-black">.</span>
              </p>
            </div>

            <div className="mt-5 md:mt-0 mr-10">
              <Link href="/How_we_Work"
                className="text-custom-blue font-semibold transition-all w-[127px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center"
              >
                Read Details
              </Link>
            </div>
          </div>

          <div className="mt-4 md:mt-8 ml-4 md:ml-20 md:w-[60%] text-paraClr leading-tight">
            <p>
              We at Encoderbytes follow every possible method to solve problems for our clients and help them in their businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-5/6 m-auto">
          {Cartobj.map((cart) => (
            <div className="rounded-lg bg-white p-4" key={cart.no}>
              <div className="flex justify-between">
                <span className="text-4xl md:text-7xl font-bold text-[#454544] opacity-20 font-bebas tracking-custom">
                  {cart.no}
                </span>
                <Image src={cart.image1} alt="Logo" width={70} height={70} />
              </div>
              <div className="flex flex-col md:w-full ml-2 mt-6">
                <p className="text-4xl font-bebas tracking-custom -mb-2">OUR APPROACHES</p>
                <p className="text-4xl text-custom-blue font-bebas tracking-custom">
                  TO SOLVE A PROBLEM<span className="text-black">.</span>
                </p>
                <p className="mt-6 text-paraClr opacity-50 capitalize leading-tight">
                  {cart.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* <div
        className="flex flex-col md:flex-row md:h-80 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover w-full"
        style={{
          backgroundImage:
            "url('/backgrounds/Rectangle2.png')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" my-10  flex flex-col md:flex-row justify-between items-center sm:flex-row md:px-16 w-9/12 m-auto ">
          <div className="">
            <div className="mb-4 md:mb-0 text-custom-blue font-bebas text-[40px] tracking-custom">
              <h1 className="text-white -mb-6">Let’s discuss. <span className="text-custom-blue">How much</span></h1>
              <h2 className="">Your App Costs?</h2>
            </div>
            <div className="text-[#e5e5e5] md:flex md:justify-start">
              Send us the features you are looking to build and we shall advise
              on the next steps.
            </div>
          </div>
          <div className="">
            <button className="hover:text-custom-blue hover:bg-transparent w-[142px] h-11 font-semibold transition-all rounded-md border-2 bg-custom-blue text-white border-custom-blue">
              Let&apos;s Discuss
            </button>
          </div>
        </div>
      </div> */}
      <div
        className="flex flex-col md:flex-row md:h-80 bg-gradient-to-b from-black via-black to-transparent bg-no-repeat bg-cover w-full"
        style={{
          backgroundImage: "url('/backgrounds/Rectangle2.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
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





      {/* <div className="flex flex-col">
        <div className="flex flex-col items-center mt-10 md:mt-24 px-6">
          <div className="text-center text-4xl font-bebas tracking-custom">
            INDUSTRIES WE <span className="text-custom-blue">ARE SERVING</span>
          </div>
          <div className="mt-2 text-center w-3/6 text-paraClr leading-tight">
            <p>
              We are working with several with industries to improve their
              businesses and experiences through technology. We have build many
              web and mobile applications for them.
            </p>
          </div>
        </div>

        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-14 gap-y-8 md:gap-x-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold">
                <span className="border-b-4 border-custom-blue">i n d u  </span>
                <span>s t r y <span className="text-custom-blue">.</span></span>
              </div>
              <div className="text-custom-blue text-4xl font-bebas tracking-custom">HEALTH</div>
              <p className="text-paraClr  leading-tight">
                We are helping and educating doctors and other people through
                our applications. Our app is ranked in top five in health
                category in Pakistan.We provide management systems to health
                industry.
              </p>
              <Link href="#">
                <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                  Read Details
                  <FaArrowCircleRight />
                </button>
              </Link>
            </div>
            <div className="bg-yellow w-full md:w-[50%]">
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Logo"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-10 md:mt-24 px-6">
          <h2 className="text-center text-4xl font-bebas tracking-custom">
            INDUSTRIES WE <span className="text-custom-blue">ARE SERVING</span>
          </h2>
          <p className="mt-2 text-center md:w-3/6 text-paraClr leading-tight">
            We are working with several industries to improve their businesses and experiences through technology. We have built many web and mobile applications for them.
          </p>
        </div>

        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-14 gap-y-8 md:gap-x-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold">
                <span className="border-b-4 border-custom-blue">I n d u</span>
                <span>s t r y <span className="text-custom-blue">.</span></span>
              </div>
              {loading ? (
                <Skeleton width={150} height={30} />
              ): latestProject[1] ? (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">
                  {latestProject[1].ProjectCategory}
                </div>
              ) : 
              (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">HEALTH</div>
              )}
              
              {loading ? (
                <Skeleton count={3} width={400} />
              ): latestProject[1] ? 
              (
                <p className="text-paraClr leading-tight line-clamp-3">
                  {latestProject[1].ProjectDescription}
                </p>
              ) : (
                <p className="text-paraClr leading-tight">
                  We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry.
                </p>
              )}
              
              {latestProject[1] ? 
              (
                <a href={`/Case_Study?project=${latestProject[1]?.id || latestProject[1]?._id || ""}`} rel="noopener noreferrer">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                  </button>
                </a>
              ) :(
                <Link href="#">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                </button>
                </Link>
              )}
            </div>
            <div className="bg-yellow w-full md:w-[70%] h-auto relative">
            {loading ? (
              <Skeleton height={300} width={"100%"} borderRadius={12} />
            ) : error ? (
              <div className="text-red-500 font-bold text-center py-10">{error}</div>
            ) : latestProject[1] ? (
              <Image
                src={latestProject[1].Image}
                alt={latestProject[1].ProjectCategory}
                className="w-full h-full object-cover rounded-lg"
                width={400}
                height={400}
                unoptimized={latestProject[1].Image?.startsWith("http")}
              />
            ) : (
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Health Industry Illustration"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            )}
            </div>
          </div>
        </div>
      </div>




      {/* <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-20 gap-y-8 md:gap-x-8">
        <div className=" w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Mask-group2.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold">
            <span className="border-b-4 border-custom-blue">i n d u  </span>
            <span>s t r y <span className="text-custom-blue">.</span></span>
          </div>
          <div className="text-custom-blue text-4xl font-bebas tracking-custom">EDUCATION</div>
          <p className="text-paraClr leading-tight">
            We provide training and workshops in different IT skills in
            collaboration with KPIT Board. We have trained thousands of trainees
            through online and physical classes. Also, we develop software for
            different educational institutes.
          </p>
          <Link href="#">
            <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-4">
              Read Details
              <FaArrowCircleRight />
            </button>
          </Link>
        </div>
      </div> */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-32 mt-20 gap-y-8 md:gap-x-8">
        <div className="bg-yellow w-full md:w-[70%] h-auto relative">
            {loading ? (
              <Skeleton height={300} width={"100%"} borderRadius={12} />
            ) : error ? (
              <div className="text-red-500 font-bold text-center py-10">{error}</div>
            ) : latestProject[2] ? (
              <Image
                src={latestProject[2].Image}
                alt={latestProject[2].ProjectCategory}
                className="w-full h-full object-cover rounded-lg"
                width={400}
                height={400}
                unoptimized={latestProject[2].Image?.startsWith("http")}
              />
            ) : (
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Health Industry Illustration"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            )}
            </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="text-2xl font-bold">
            <span className="border-b-4 border-custom-blue">I n d u</span>
            <span>s t r y <span className="text-custom-blue">.</span></span>
          </div>
           {loading ? (
              <Skeleton width={150} height={30} />
            ) : latestProject[2] ? (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">
                  {latestProject[2].ProjectCategory}
                </div>
              ) : 
              (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">HEALTH</div>
              )}
              
              {loading ? (
                <Skeleton count={3} width={400} />
              ) : latestProject[2] ? 
              (
                <p className="text-paraClr leading-tight line-clamp-3">
                  {latestProject[2].ProjectDescription}
                </p>
              ) : (
                <p className="text-paraClr leading-tight">
                  We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry.
                </p>
              )}
              
              {latestProject[2] ? 
              (
                <a href={`/Case_Study?project=${latestProject[2]?.id || latestProject[2]?._id || ""}`} rel="noopener noreferrer">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                  </button>
                </a>
              ) :(
                <Link href="#">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                </button>
                </Link>
              )}
        </div>
      </div>





      {/* <div className="flex flex-col">
        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-28 gap-y-8 md:gap-x-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold">
                <span className="border-b-4 border-custom-blue">i n d u  </span>
                <span>s t r y <span className="text-custom-blue">.</span></span>
              </div>
              <div className="text-custom-blue text-4xl font-bebas tracking-custom">BUSINESS</div>
              <p className="text-paraClr leading-tight">
                We are working with new business and and startups. We provide IT
                solutions for businesses to get more income. We have developed
                several E-commerce web and mobile applications for them.
              </p>
              <Link href="#">
                <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-4">
                  Read Details
                  <FaArrowCircleRight />
                </button>
              </Link>
            </div>
            <div className="bg-yellow w-full md:w-[50%]">
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Logo"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col">
        <div className="flex flex-col px-6 md:px-32 mt-10 md:mt-14 gap-y-8 md:gap-x-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
              <div className="text-2xl font-bold">
                <span className="border-b-4 border-custom-blue">I n d u</span>
                <span>s t r y <span className="text-custom-blue">.</span></span>
              </div>
              {loading ? (
                <Skeleton width={150} height={30} />
              ) : latestProject[3] ? (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">
                  {latestProject[3].ProjectCategory}
                </div>
              ) : 
              (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">HEALTH</div>
              )}
              
              {loading ? (
                <Skeleton count={3} width={400} />
              ) : latestProject[3] ? 
              (
                <p className="text-paraClr leading-tight line-clamp-3">
                  {latestProject[3].ProjectDescription}
                </p>
              ) : (
                <p className="text-paraClr leading-tight">
                  We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry.
                </p>
              )}
              
              {latestProject[3] ? 
              (
                <a href={`/Case_Study?project=${latestProject[3]?.id || latestProject[3]?._id || ""}`} rel="noopener noreferrer">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                  </button>
                </a>
              ) :(
                <Link href="#">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details
                    <FaArrowCircleRight />
                </button>
                </Link>
              )}
            </div>
            <div className="bg-yellow w-full md:w-[70%] h-auto relative">
            {loading ? (
              <Skeleton height={300} width={"100%"} borderRadius={12} />
            ) : latestProject[3] ? (
              <img
                src={latestProject[3].Image}
                alt={latestProject[3].ProjectCategory}
                className="w-full h-full object-cover rounded-lg"
                width={400}
                height={400}
              />
            ) : (
              <Image
                src="/backgrounds/Mask-group1.png"
                alt="Health Industry Illustration"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            )}
            </div>
          </div>
        </div>
      </div> */}
      
  <CarousalDynamic />
  <ContactformDynamic />
    </div>
  );
}
