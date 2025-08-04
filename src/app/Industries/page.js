import Link from "next/link"
import Top from "../Utils/Top"
import Image from 'next/image'
import Contactform from "../Utils/Contactform"

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
        <div className="flex flex-col justify-center items-center py-20">
          <div className="text-custom-blue text-2xl md:text-4xl  flex justify-center items-center font-bebas tracking-custom">
            Industries we are serving
          </div>
          <div className="flex m-auto">
            <p className="flex m-auto justify-center items-center text-center">
              From startup to enterprise, the full range of engineering services your company needs
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
            <span className="text-paraClr">Serving </span>
            <span className="text-custom-blue">Industries</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            We are providing our services all over the world from 2019. We have worked with many startups & established businesses and helped them to improve their businesses.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/Services">
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

      <div className="bg-custom w-full py-20">

        <div className="w-11/12 m-auto flex items-center justify-center gap-6 flex-wrap text-white font-bebas  tracking-custom">

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">healthcare</h2>
          </div>

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">education</h2>
          </div>

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">travel</h2>
          </div>

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">technology</h2>
          </div>

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">crypto</h2>
          </div>

          <div className="bg-lightBlue w-[416px] h-[429px] rounded-[10px] flex items-center justify-center">
            <h2 className="text-[40px]">e-commerce</h2>
          </div>
        </div>
      </div>

      <div
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
      </div>


      <Contactform />
    </>
  )
}

export default page