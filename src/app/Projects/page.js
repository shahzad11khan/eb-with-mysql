"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
// import { projects } from "../components/carts";
import Contactform from "../Utils/Contactform";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
const Page = () => {
  const [Projects, setProjects] = useState([]);
  // const [category, setCategory] = useState("All");
  const [getitem, setgetitem] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    try {
      const { admins } = await ProjectsCount();
      setProjects(admins);
    } catch (error) {
      console.log(`Failed to fetch Projects: ${error}`);
    }
  };

  const handleButtonClick = (buttonValue) => {
    setgetitem(buttonValue);
    setVisibleCount(4);
  };

  const normalizeCategory = (category) => {
  const mapping = {
    app: "mobileapplication",
    mobileapp: "mobileapplication",
    mobileapplication: "mobileapplication",
    web: "webapplication",
    website:"webapplication",
    webapp: "webapplication",
    webapplication: "webapplication",
    ai: "artificialintelligence",
    artificialintelligence: "artificialintelligence",
    uiux: "uiux",
    "ui/ux": "uiux",
    blockchain: "blockchain",
  };

  const key = category?.trim().replace(/\s+/g, "").toLowerCase();
  return mapping[key] || key;
};

const filteredProjects = Projects.filter((project) => {
  const normalizedCategory = normalizeCategory(project.ProjectCategory);
  return !getitem || getitem === "All" || normalizedCategory === getitem.toLowerCase();
});


  return (
    <div className="bg-white">
      <Top />
      <div
        className="max-w-full h-auto flex justify-center items-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24 mt-24">
          <div className="text-custom-blue text-2xl md:text-5xl font-bold flex justify-center items-center">
            OUR PORTFOLIO
          </div>
          <div className="flex  m-auto py-3">
            <p className="flex w-5/6 md:w-5/6 m-auto justify-center items-center text-center text-md leading-4 font-medium">
              We have developed many web and mobile applications for the last
              four years. Some of them are the following.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-20 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Our Portfolio</span>
          </a>
        </div>
      </div>

      {/* <div className=""> */}

      <div className="mt-32 md:mt-32 w-full bg-gray-200 p-5 md:w-4/6 md:m-auto rounded-md font-bold h-auto ">
        {" "}
        <ul className="flex gap-2 md:gap-5 justify-center h-auto  ">
          <li
            className="hover:text-custom-blue text-gray-400 cursor-pointer text-sm md:text-md"
            onClick={() => {
              handleButtonClick("All");
               console.log("This is get item on click :",getitem);
            }}
          >
            ALL
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-gray-400 text-sm md:text-md"
            onClick={() => {
              handleButtonClick("mobileapplication");
              console.log("This is get item on click :",getitem);

            }}
          >
            MOBILE APP
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm text-gray-400 md:text-md"
            onClick={() => {
              handleButtonClick("webapplication");
               console.log("This is get item on click :",getitem);
            }}
          >
            WEB APP
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("artificialintelligence");
            }}
          >
            ARTIFICIAL INTELLIGENCE
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("blockchain");
            }}
          >
            BLOCK CHIAN
          </li>
          <li
            className="hover:text-custom-blue cursor-pointer text-sm md:text-md text-gray-400"
            onClick={() => {
              handleButtonClick("uiux");
            }}
          >
            UI/UX DESIGNING
          </li>
        </ul>
      </div>
      {/* </div> */}

      {/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-16 w-11/12 md:w-5/6 m-auto">
       {filteredProjects.slice(0, visibleCount).map((project) => (
    <div
      key={project.id}
      className="rounded-lg overflow-hidden shadow-md w-full bg-blue-100 border border-gray-200 p-3 sm:p-4 md:p-5 transition-transform hover:scale-105"
    >
      {project.Image?.startsWith("http") ? (
        <img className="w-full h-40 object-cover rounded-md" src={project.Image} alt="Image" />
      ) : (
        <Image
          className="w-full h-40 object-cover rounded-md"
          src={`/uploads/${project.Image}`}
          alt="Image"
          width={400}
          height={160}
        />
      )}
      <div className="px-2 py-3">
        <div className="font-semibold text-xs sm:text-sm text-gray-600 mb-2">
          <span className="text-lg sm:text-xl font-black border-b-2 border-custom-blue">
            {project.ProjectCategory.split(" ")[0]}
          </span>
          <span className="text-lg sm:text-xl font-black pl-1">
            {project.ProjectCategory.split(" ")[1] || ""}
          </span>
        </div>
        <div className="font-bold text-sm sm:text-md mb-1">
          <span className="text-lg sm:text-xl font-bold ">
            {project.ProjectName.split(" ")[0]}
          </span>
          <span className="text-lg sm:text-xl font-bold text-custom-blue pl-1">
            {project.ProjectName.split(" ")[1] || ""}
          </span>
        </div>
        {/* <p className="text-xs sm:text-sm text-gray-400 mt-2 w-full">
          {project.ProjectDescription}
        </p> */}
        <div className="mt-5">
          <a key={project.id} href={`../Case_Study?project=${project.id}`} target="_blank" rel="noopener noreferrer">
            <button
              className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold px-4 py-2 rounded text-xs sm:text-sm">
              READ CASE STUDY
            </button>
          </a>
        </div>
      </div>
    </div>
  ))}

  {filteredProjects.length > 4 && visibleCount < filteredProjects.length && (
  <div className="text-center mt-8">
    <button
      onClick={() => setVisibleCount(prev => prev + 2)}
      className="bg-custom-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Load More
    </button>
  </div>
)}

{filteredProjects.length > 4 && visibleCount > 4 && (
  <div className="text-center mt-4">
    <button
      onClick={() => setVisibleCount(prev => prev - 2)}
      className="text-custom-blue underline text-sm hover:text-blue-700"
    >
      Show Less
    </button>
  </div>
)}


      </div>
      <Contactform />
    </div>
  );
};


export default Page;
