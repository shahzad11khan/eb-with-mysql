import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Uiuxappslogo } from "../components/Mobileapps";
import Contactform from "../Utils/Contactform";
import Link from "next/link";
const Ai = () => {
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
            USER EXPERIENCE DESIGNING
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center">
              We design clean and aesthetic user experiences for businesses.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home - Services -&nbsp; <span className="text-custom-blue">&nbsp;UI / UX</span>
          </a>
        </div>
      </div>

      {/* section 2 */}
      <div id="section2"></div>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">U s e r </span>
            <span className="">&nbsp;e x p e r i e n c e &nbsp;d e s i g n i n g.</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">IMPROVE YOUR </span>
            <span className="text-custom-blue">USER EXPERIENCE?</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Grabbing the market by your brands depends on the sophisticated
            aesthetic UI/UX designs of your product. One of the leading
            expertise of Encoderbytes is the strong UI/UX designing background
            with a skilled workforce. Our UI/UX designs are focused on efficient
            solutions to user problems. We apply design thinking to product
            design, therefore we categorize the UX process to 5 key phases :
            Product definition, Research, Analysis, Design and validation. Our
            systematic approach results in an unconventional UI and UX design –
            a user friendly solution.
          </p>  
          <Link href='#form'
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
      <div id="section3"></div>
      <div className="bg-white md:px-20 pb-16">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-4xl text-center font-bebas tracking-custom">
            <span className="">USER EXPERIENCE </span>
            <span className="text-custom-blue">DESIGNING PROCESS</span>
          </div>
          <p className="md:w-3/5 mt-3 text-center text-paraClr leading-tight">
            We follow a complete user experience designing process from start like user research to designing high fiedelity designs. Each phase involves users of the product to get better result.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 md:mx-16">
          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                STRATEGY WORKSHOP
              </span>
              <span className="text-6xl text-white opacity-20">01</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                Our AI development services help you by avoiding biases and
                human error and also helps you by saving your money and time
                through automating and optimizing everyday processes and daily
                routine operations.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                DEFINING USER PERSONA
              </span>
              <span className="text-6xl text-white opacity-20">02</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                As a leading UX and UI design Company, it is an utmost crucial
                responsibility for us to understand your requirements in a
                better way,for that reason we create user personas to explain
                your audiences/customers . After that ,we frame the outcome to
                do more qualitative and quantitative research and analytics.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                EMPATHY MAPPING
              </span>
              <span className="text-6xl text-white opacity-20">03</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                The benefits of doing empathy mapping are manifold. We believe
                it removes bias from our designs and aligns the team on a
                single, shared understanding of the user’s empathy like what
                they head, see, do, or listen. We then discover weaknesses in
                our research, uncovers user needs that the user themselves may
                not even be aware of, understand what drives users’ behaviors
                which finally guide us towards what user is feeling or thinking.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                ANALYZING COMPETITOR LANDSCAPE
              </span>
              <span className="text-6xl text-white opacity-20">04</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                To identify the defensive or offensive strategic context or to
                know about the opportunities and threats you must be aware of
                with whom you are competing.So that way we recognize potential
                competitors and their targeted customer,identify key matrices or
                competencies and set each one a score.In the UI and UX design
                planning ,we rate them on the basis of their defined matrices
                and a plan what we need to implement and what to extract.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                MIND MAPPING AND CARD SORTING
              </span>
              <span className="text-6xl text-white opacity-20">05</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                In this step all the data we have collected on the wall we
                represent by engaging the product owners,developer,manager and
                designers.After that we group the collected data on the sticky
                notes/cards.The arranged map have identical and related
                components of an application in chunks to give us a whole
                structure from high ranking view. No wonder why we call
                ourselves master in user experience design.The result !! A
                flawless UX design which is approved by everyone.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-5">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                ARCHITECTURE INFORMATION
              </span>
              <span className="text-6xl text-white opacity-20">06</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                Prevention from finality and usability disaster -directing to
                costly redesigns we take architectural information in creating a
                plan.That is why in our UX and UI design services incorporate
                information Architecture plays a huge role.it helps us to focus
                on organizing ,structuring and effectively labeling content so
                that complete information and intended task is available for
                users.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-custom-blue p-5">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                LOW FIDELITY SKETCHES
              </span>
              <span className="text-6xl text-white opacity-20">07</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                We have an equitable understanding of how to compose a screen,
                after a detailed architectural information is out .For each user
                requirement we start to create fast and cheap on-paper
                prototypes ,incorporating navigation, content and action.To get
                an early feedback from our stakeholders ,rectifying mistakes and
                iterating to reduce rework at later stages this activity help us
                a lot.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-custom-blue p-5">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                HIGH FIDELITY WIREFRAMING
              </span>
              <span className="text-6xl text-white opacity-20">08</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                To detailing out the screens in its exact shape and style we
                further transform the paper prototype into high fidelity
                wireframes. For our visual design expert the sole reference is
                to build the click through prototype to define the flow.To
                manifest the possible outcome this is the integral step of our
                web.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-custom-blue p-5">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                DEFINING UI GUIDELINES
              </span>
              <span className="text-6xl text-white opacity-20">09</span>
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6 text-white">
              <p className="leading-tight">
                We carefully design your web and mobile applications by setting
                up different components like color palette,typography,the
                call-to-action buttons, notifications and alerts,icons and
                possibly every component of a user interface.in order to reduce
                frequent follow ups with designer we draft a customized UI guide
                that helps our Ux and UI developers to work independently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div id="section4"></div>
      <div className="w-full bg-custom">
        <div className="flex justify-center items-center flex-col pt-14">
          <div className="text-[40px] text-center font-bebas tracking-custom">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 mt-10 pb-20 w-5/6">
            {Uiuxappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-300 text-center flex flex-col gap-4 w-48 h-48 justify-center items-center rounded-xl "
                >
                  <Image
                    src={items.image}
                    className="rounded-lg"
                    alt="image"
                    width={44}
                    height={50}
                  />
                  <span>{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 8 */}

      {/* contact from */}
      <Contactform />
    </div>
  );
};

export default Ai;
