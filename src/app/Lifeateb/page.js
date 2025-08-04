"use client";
import Link from 'next/link';
import Top from '../Utils/Top'
import Image from 'next/image'
import ApplyContactForm from '../Utils/ApplyContactForm';
const page = () => {
  return (
    <>
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
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-2xl md:text-4xl  flex justify-center items-center font-bebas tracking-custom">
            life at encoderbytes
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center w-3/4">
              Here we provide best professional and cultural apportunities for our team to grow both in an industry and society.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home -&nbsp; <span className="text-custom-blue">&nbsp;Life at Encoderbytes</span>
          </a>
        </div>
      </div>

      {/* 2nd */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">e n c</span>
            <span className="">&nbsp;o d e r b y t e s</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">LIFE AT </span>
            <span className="text-custom-blue">ENCODERBYTES</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            EncoderBytes is a leading bespoke software development company based in Peshawar, PK. We build robust software for startups and established businesses. Since 2019.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/About">
              <button className="text-customFull transition-all w-36 h-11 font-semibold rounded-md bg-custom-blue hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue">
                About Us
              </button>
            </Link>

            <Link href="/Projects">
              <button className="text-custom-blue font-semibold transition-all w-36 h-11 border-2 border-custom-blue  rounded-md hover:text-white hover:bg-custom-blue">
                Portfolio
              </button>
            </Link>

          </div>
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

      {/* 3rd */}
      <div className="w-full min-h-full py-14 bg-custom">
        <div className="flex justify-center items-center flex-col mt-4 ">
          <div className="text-4xl font-bebas tracking-custom">
            <span className="">Professional </span>
            <span className="text-custom-blue">Development</span>
          </div>
          <p className="w-4/6 mt-2 text-center text-paraClr leading-tight">
            We foster an environment that is conducive to the professional development of every team member. There are always things to learn from our clients and other team members, and we actively look for opportunities to inspire such learnings.
            <br /><br />
            EncoderBytes offers multiple career tracks and, over the years, our team members have discovered and pursued new passions, branched out in terms of their role, and grown tremendously as professionals.
          </p>
        </div>

        <div className="w-5/6 m-auto flex items-center justify-center gap-4 py-14">
          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>
        </div>



      </div>


      <div className="w-full min-h-full py-14">
        <div className="flex justify-center items-center flex-col mt-4 ">
          <div className="text-4xl font-bebas tracking-custom">
            <span className="">Education </span>
            <span className="text-custom-blue">& Training</span>
          </div>
          <p className="w-4/6 mt-2 text-center text-paraClr leading-tight">
            We encourage our team members to pursue professional education that is in line with their passion, and that helps them do better at work. This includes technical courses and specialised certifications. EncoderBytes pays for conferences, online courses, books, and more.

            <br /><br />
            In-house training sessions are arranged routinely for our team members to learn new technologies (which are coming out all the time!) as well as to pass on insights around various processes and methodologies involved in complex software development.
          </p>
        </div>

        <div className="w-5/6 m-auto flex items-center justify-center gap-4 py-14">
          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>
        </div>
      </div>

      <div className="w-full min-h-full py-14 bg-custom">
        <div className="flex justify-center items-center flex-col mt-4 ">
          <div className="text-4xl font-bebas tracking-custom">
            <span className="">fun </span>
            <span className="text-custom-blue">& Entertainment</span>
          </div>
          <p className="w-4/6 mt-2 text-center text-paraClr leading-tight">
            It goes without saying that software development is hard work. And delivering great software is even harder! While there’s clearly an element of “labour of love” involved here but we tend to find an opportunity every now and then to get away from work and do something fun. Some of us are, admittedly, way too adventurous!

            <br /><br />
            Thank you EncoderBytes entertainment committee for keeping us all sane amid all the work and deadlines! If it weren’t for you, we all would have been really dull.
          </p>
        </div>

        <div className="w-5/6 m-auto flex items-center justify-center gap-4 py-14">
          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>

          <div className=" flex items-center justify-center flex-col-reverse gap-4">
            <Image
              src="/backgrounds/LifeatEb1.png"
              alt="Logo"
              className="object-cover "
              width={306}
              height={388}
            />

            <Image
              src="/backgrounds/LifeatEb2.png"
              alt="Logo"
              className="object-cover"
              width={306}
              height={388}
            />
          </div>
        </div>
      </div>

      <ApplyContactForm />
    </>
  )
}

export default page