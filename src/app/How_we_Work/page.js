import React from "react";
import Top from "../Utils/Top";
import Link from "next/link";
import { Howwework } from "../components/Howwework";
import Contactform from "../Utils/Contactform";
import Image from "next/image";
const How_we_work = () => {
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
            HOW DO WE WORK?
          </h1>
          <p className="w-5/6 md:w-3/6 leading-tight text-paraClr my-3">
            We follow the state of the art software development process ,
            initiating from requirement gathering from user till completion
            and deployment. Each phase during development of a software is
            valuable for us.
          </p>
          <a
            href="/"
            className="text-paraClr font-semibold mt-20 text-xs"
          >
            Home &nbsp;- <span className="text-custom-blue">&nbsp;How We Work</span>
          </a>
        </div>
      </div>

      <section className="flex items-start justify-center">
        <nav className="w-1/3 flex items-start justify-start md:justify-center">
          <div className="w-full flex items-start justify-center">
            <div className="mt-16 w-8/12">
              <div className="relative w-full h-auto">

                <span className="absolute top-0 left-0 flex w-full opacity-50">
                  <ul className="flex flex-col gap-12 text-paraClr mt-10 font-bebas text-xl tracking-custom z-30">
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl cursor-pointer"> •</span>
                        <span className="pl-10 cursor-pointer">
                          <Link className="" href="#01">
                            01. DISCUSSION & ANALYSIS
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl"> •</span>
                        <span className="pl-10 ">
                          <Link className="" href="#02">
                            02. PLANNING AND DESIGN
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl"> •</span>
                        <span className="pl-10">
                          <Link className="" href="#03">
                            03. SOFTWARE DESIGN
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl"> •</span>
                        <span className="pl-10">
                          <Link className="" href="#04">

                            04. SOFTWARE DEVELOPMENT
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl"> •</span>
                        <span className="pl-10">
                          <Link className="" href="#05">

                            05. QUALITY ASSURANCE
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-start items-center">
                        <span className="text-3xl"> •</span>
                        <span className="pl-10">
                          <Link className="" href="#06">

                            06. MAINTENANCE
                          </Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </span>
                <pre className="border-paraClr opacity-30 border-l-2 py-80 md:py-72 ml-1 absolute z-40"></pre>
              </div>
            </div>
          </div>
        </nav>

        <div className="w-2/3">
          {Howwework.map((item, index) => (
            <section
              key={index}
              className="flex flex-col justify-center items-center px-6 mt-10 md:gap-x-8 mb-10"
              id={item.id}
            >
              <div className="w-full md:w-full h-auto md:h-full relative mt-5">
                <Image
                  src={item.image}
                  alt={`Image for ${item.heading}`} // More descriptive alt text
                  className="object-cover"
                  width={856}
                  height={460}
                />

                <div className="font-bold mt-14 text-paraClr text-lg">
                  <span className="border-b-4 border-custom-blue">{item.underlinetitile}</span>
                  <span>{item.simpletitle}</span>
                </div>

                <h2 className="text-4xl  mt-5 font-bebas tracking-custom">
                  <span className="text-custom-blue">{item.heading}</span>
                </h2>

                <div className="mt-2 text-start">
                  <ul className="list-disc ml-8 text-paraClr">
                    {item.objectivekeys1?.map((objective, i) => (
                      <li key={i}>{objective}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-4xl mt-10 font-bebas tracking-custom">
                  <span className="text-custom-blue">{item.heading2}</span>
                </h2>

                <div className="mt-2 text-start">
                  <ul className="list-disc ml-8 text-paraClr">
                    {item.deliverablekeys?.map((deliverable, i) => (
                      <li key={i}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-4xl mt-10 font-bebas tracking-custom">
                  <span className="text-custom-blue">{item.heading3}</span>
                </h2>

                <div className="mt-2 text-start">
                  <ul className="list-disc ml-8 text-paraClr">
                    {item.memberkeys?.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>

                <h2 className="md:text-4xl text-center md:text-left mt-10 font-bebas tracking-custom">
                  <span className="text-custom-blue">{item.heading4}</span>
                </h2>

                <div className="mt-2 text-start">
                  <ul className="list-disc ml-8 text-paraClr">
                    {item.toolskeys?.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section
        className="mt-20 md:h-[381px]"
        style={{
          backgroundImage: "url('/backgrounds/project-communication.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-4xl text-center pt-16 text-paraClr font-bebas">
          <span>PROJECT COMMUNICATION</span>
          <span className="text-white"> STRUCTURE.</span>
        </div>
        <div className="text-white w-5/6 md:w-4/6 text-center m-auto mt-2 leading-tight">
          We do daily discussion and communication between our team to check the progress and performance of our team. This is to ensure that our progress is going to meet the deadline. For that we use different tools like Skype, Google Meet, Trello, Microsoft 360.
        </div>

        <div className="flex flex-col md:flex-row w-5/6 m-auto gap-10 mt-10 text-white">
          <div className="flex items-center justify-center w-1/2">
            <div className="w-full py-10 border-0 md:border-r-[1px] border-white flex flex-col justify-center items-center">
              <span className="font-bold mb-3">DAILY SCRUM STANDUP</span>
              <p className="text-xs">monday - friday</p>
              <p className="text-xs mt-1">30 minutes</p>
            </div>
            <div className="w-full py-10  border-0 md:border-r-[1px] border-white flex flex-col justify-center items-center">
              <span className="font-bold mb-3">WEEKLY REVIEW</span>
              <p className="text-xs">weekly</p>
              <p className="text-xs mt-1">40-60 minutes</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <div className="w-full py-10  border-0 md:border-r-[1px] border-white flex flex-col justify-center items-center">
              <span className="font-bold mb-3">SPRINT DELIVERY</span>
              <p className="text-xs">2-3 - weeks</p>
              <p className="text-xs mt-1">1-2 hours</p>
            </div>
            <div className="w-full py-10 border-white flex flex-col justify-center items-center">
              <span className="font-bold mb-3">DAILY SCRUM STANDUP</span>
              <p className="text-xs">bi-weekly</p>
              <p className="text-xs mt-1">3-4 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section */}
      <Contactform />
    </div>
  );
};

export default How_we_work;
