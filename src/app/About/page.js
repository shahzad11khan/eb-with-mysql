"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import { AboutCarts } from "../components/carts";
import Contactform from "../Utils/Contactform";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TeamCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import Link from "next/link";

const Page = () => {
  const [employees, setemployees] = useState([]);
  console.log(employees);

  useEffect(() => {
    getTeam();
  }, []);
  const getTeam = async () => {
    try {
      const { admins } = await TeamCount();
      setemployees(admins);
    } catch (error) {
      console.log(`Failed to fetch team: ${error}`);
    }
  };

  // const sortedEmployees = employees.sort((a, b) => {
  //   // Example: Sort by username alphabetically
  //   return a.username.localeCompare(b.username);
  // });
  const sortedEmployees = employees.sort((a, b) => a.order - b.order);

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
        <div className="flex flex-col justify-center items-center py-24 text-center">
          <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
            ALL ABOUT ENCODERBYTES
          </h1>
          <p className="w-5/6 md:w-3/6 leading-tight text-paraClr my-3">
            A lot goes on behind the scenes when we are building software. Excitement. Teamwork. Labour of love. A bit of craziness. This is what makes EncoderBytes – Good to the Core!
          </p>
          <a
            href="/"
            className="text-paraClr font-semibold mt-20 text-xs"
          >
            Home &nbsp;- <span className="text-custom-blue">About Us</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%] mb-5">
          <div className="text-lg font-bold">
            <span className="border-b-4 border-custom-blue">E n c o</span>
            <span>d e r b y t e s .</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span>WHO WE</span>
            <span className="text-custom-blue"> ARE?</span>
          </div>
          <p className="text-sm md:text-base text-paraClr">
            EncoderBytes is one of the leading software development companies in PK, serving an impressive local and overseas clients. Our team works in an agile manner and engages well with our clients across different stages of their software app development projects.
            <br />
            <br />
            Our multiple geographical offices allow us to offer a highly efficient hybrid onshore-offshore model to our clients. This model ensures local liaison in Pakistan for project management, requirements analysis, and high-level technical design while providing exceptional value for money and access to incredible tech talent.
          </p>
        </div>
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Group 96.png"
            alt="Company Representation"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="bg-custom pt-10 pb-16">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-4xl flex justify-center items-center gap-2 font-bebas">
            <span className="text-black">WHAT WE </span>
            <span className="text-custom-blue">VALUE?</span>
          </div>
        </div>

        <div className=" flex md:flex-row flex-col items-center justify-center gap-7 mt-10">
          {[
            {
              title: "CLIENT",
              content:
                "Our client-centric approach always prioritizes our clients and their needs. We make sure that every decision, process, and strategy we follow aligns with the goals of our client and delivers results that surpass their expectations.",
            },
            {
              title: "TEAM WORK",
              content:
                "With a healthy work environment that encourages open communication and opportunities for personal and professional growth, EncoderBytes strives to keep all team members content. Our team is what makes us good to the core!",
            },
            {
              title: "PROCESS",
              content:
                "EncoderBytes’s agile development process is designed to ensure efficiency and maximum value. Our flexible process allows us to swiftly adapt to changes in our client’s requirements so that projects are delivered rapidly and reliably.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="h-48 bg-white w-[416px] flex flex-col justify-center items-center rounded-lg"
            >
              <h1 className="text-4xl font-bebas">{item.title}</h1>
              <p className="text-wrap card-text box-content mt-3 text-md text-custom-blue text-center text-sm px-5 leading-tight">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full min-h-full flex justify-center items-center mt-14">
        <div className="flex flex-col justify-center items-center mt-4">
          <h2 className="text-4xl font-bebas tracking-custom">
            <span>WHY CHOOSE </span>
            <span className="text-custom-blue">US?</span>
          </h2>
          <p className="w-5/6 mt-2 text-center text-paraClr leading-tight">
            Have the peace of mind that you are working with one of the best bespoke software development companies in Khyber Pakhtunkhwa.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-20 w-5/6 m-auto">
        {AboutCarts.map((cart) => (
          <div className="rounded-xl bg-custom p-5 mb-4 md:mb-0 h-[240px]" key={cart.no}>
            <div className="flex justify-between">
              <span className="text-5xl md:text-6xl  text-paraClr font-bebas opacity-20">
                {cart.no}
              </span>
              <Image src={cart.image1} alt="Card Image" width={70} height={70} />
            </div>
            <div className="text-3xl mt-3">
              <span className="font-bebas">{cart.text1} &nbsp;</span>
              <span className="font-bebas text-custom-blue">{cart.text2}</span>
            </div>
            <p className="flex justify-center mt-3 text-paraClr opacity-50 leading-tight">
              {cart.description}
            </p>
          </div>
        ))}
      </div>

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

      <div className="w-full bg-gray-100 py-16">
        <div
          className="m-4 md:mx-20 flex flex-col justify-center items-center rounded-xl h-full md:h-auto md:p-32 text-white"
          style={{
            backgroundImage: "url('/backgrounds/developing-cost.png')",
            backgroundSize: "100% 100%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center py-5">
            <div className="text-[32px] font-bold -mb-8">
              HOW IS
            </div>

            <div className="py-7 text-3xl md:text-8xl font-bebas tracking-custom">
              LIFE AT ENCODERBYTES.
            </div>

            <p className="w-5/6 md:w-4/6 m-auto text-base md:text-xl text-customFull text-center leading-tight">
              Since 2019, we have been in the business, and over the past few years, we have grown our team with the best in the industry. Our expert team is working across various areas of technology.
            </p>

            <Link href='/Lifeateb'
              className="text-custom-blue font-semibold transition-all w-[142px] h-11 border-2 bg-white  rounded-md hover:bg-transparent hover:text-custom-blue flex items-center justify-center m-auto mt-16">
              Explore
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full flex justify-center items-center mt-14">
        <div className="flex justify-center items-center flex-col mt-4">
          <h2 className="text-4xl font-bebas tracking-custom text-center">
            MEET OUR
            <span className="text-custom-blue"> TEAM.</span>
          </h2>
          <p className="mt-2 text-center w-5/6 md:w-4/6 text-paraClr leading-tight">
            Our team consists of super programmers, world-class business analysts, creative designers, and problem solvers. There’s hardly a software app development challenge that our team cannot tackle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-3 pb-20 w-5/6 m-auto">
        {sortedEmployees.map((team) => (
          <div key={team.image} className=" mt-4 md:py-1 md:px-3">
            <div className="border-2 border-gray-300  rounded-xl shadow-md text-center h-[408px] py-10 hover:border-2 hover:border-custom-blue transition duration-300">
              <div className="flex justify-center rounded-full">
                <img
                  src={team.image}
                  className="img-fluid rounded-full w-52 h-52 filter grayscale hover:filter-none transition duration-300"
                  alt={`${team.username}'s profile`} // More descriptive alt text
                  width={170}
                  height={170}
                  style={{ backgroundSize: "cover" }}
                />
              </div>

              <h1 className="py-3 px-4 mt-2">
                <span className="font-extrabold text-custom-blue text-xl uppercase">
                  {team.username}
                </span>
                {/*  <p className="text-xs card-text box-content text-paraClr opacity-50">
                  {team.email}
                </p>*/}
                <p className="text-xs card-text box-content text-paraClr opacity-50">
                  {team.designation}
                </p>
              </h1>

              <div className="social-icons">
                {team.LinkedIn && team.Github && (<div className="flex justify-center gap-1 bg-gray-300 w-32 h-8 m-auto items-center rounded-md text-gray-500 hover:bg-blue-100 transition duration-300">

                  <a href={team.LinkedIn} aria-label={`LinkedIn profile of ${team.username}`}>
                    <FaLinkedin size={25} />
                  </a>


                  <a href={team.Github} className="hover:text-custom-blue" aria-label={`GitHub profile of ${team.username}`}>
                    <FaGithubSquare size={25} />
                  </a>

                </div>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-custom py-10">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-4xl flex justify-center items-center gap-2 font-bebas tracking-custom">
            <span className="text-black">CAREER AT </span>
            <span className="text-custom-blue">ENCODERBYTES.</span>
          </div>
          <div className="flex w-10/12 md:w-9/12 m-auto text-center mt-3 leading-tight text-paraClr">
            We are seeking talented, passionate individuals who want to work on real-world products and gain hands-on skills. Among hundreds, we choose you to be a part of the EncoderBytes family if you have experience in
          </div>
          <div className="flex justify-center items-center md:w-4/6 m-auto text-center mt-2 text-custom-blue font-bold">
            PROJECT MANAGEMENT, TECHNICAL/ENGINEERING, QUALITY ASSURANCE, AND MARKETING
          </div>
        </div>

        <div className="flex items-center justify-center flex-col md:flex-row gap-7 my-10">
          <div className="h-48 bg-white w-[306px] flex flex-col justify-center items-center rounded-lg">
            <h1 className="font-bold text-custom-blue">PROJECT MANAGEMENT</h1>
            <p className="text-wrap card-text box-content mt-3 text-center text-sm px-4 leading-tight text-paraClr">
              For passionate individuals with the ability to execute, manage, and deliver projects while effectively dealing with clients.
            </p>
          </div>

          <div className="h-48 bg-white w-[306px] flex flex-col justify-center items-center rounded-lg">
            <h1 className="font-bold text-custom-blue">TECHNICAL/ENGINEERING</h1>
            <p className="text-wrap card-text box-content mt-3 text-center text-sm px-4 leading-tight text-paraClr">
              A healthy work environment that encourages open communication and opportunities for personal and professional growth, ensuring all team members feel valued.
            </p>
          </div>

          <div className="h-48 bg-white w-[306px] flex flex-col justify-center items-center rounded-lg">
            <h1 className="font-bold text-custom-blue">QUALITY ASSURANCE</h1>
            <p className="text-wrap card-text box-content mt-3 text-center text-sm px-4 leading-tight text-paraClr">
              For digital enthusiasts looking to upscale and enhance current services using digital media.
            </p>
          </div>

          <div className="h-48 bg-white w-[306px] flex flex-col justify-center items-center rounded-lg">
            <h1 className="font-bold text-custom-blue">MARKETING</h1>
            <p className="text-wrap card-text box-content mt-3 text-center text-sm px-4 leading-tight text-paraClr">
              For evangelists with a passion for telling compelling stories that resonate with our clients.
            </p>
          </div>
        </div>
      </div>
      <Contactform />
    </div>
  );
};

export default Page;