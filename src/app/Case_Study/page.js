"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import Contactform from '../Utils/Contactform'
import Top from '../Utils/Top'
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Limelight } from 'next/font/google';

const CaseStudyPage = ({searchParams}) => {
  const projectId = searchParams.project;
  console.log("ProjectId is :", projectId);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stable getProjects function
  const getProjects = React.useCallback(async () => {
    setLoading(true);
    try {
      const { admins } = await ProjectsCount();
      setProjects(admins);
    } catch (error) {
      console.log(`Failed to fetch team: ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects, projectId]);


  const project = projects.find((p) => p.id === Number(projectId));

  const parseJsonField = (field, fallback = []) => {
    try {
      return typeof field === 'string' ? JSON.parse(field) : field || fallback;
    } catch (error) {
      console.error('Error parsing JSON field:', error);
      return fallback;
    }
  };

  const projectTeam = project ? parseJsonField(project.ProjectTeam, []) : [];
  const projectTechnology = project ? parseJsonField(project.ProjectTechnology, []) : [];

  return (
    <>
      <Top />
      <div
        className="max-w-full flex flex-col gap-10 justify-center items-center mt-10 md:mt-20 text-white"
        style={{ backgroundColor: "rgb(164, 189, 247)" }}>
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="flex m-auto py-3">
            {loading ? (
              <Skeleton width={130} height={25} baseColor="#e0e0e0" highlightColor="#f8d4e6" />
            ) : (
              <p className="flex m-auto justify-center items-center text-center font-bold tracking-widest text-2xl underline">
                {project ? project.ProjectCategory : "Statusaver"}
              </p>
            )}
          </div>
          <div className="text-4xl md:text-6xl text-center flex justify-center items-center font-bebas tracking-custom">
           {loading ? (
              <Skeleton width={200} height={20} baseColor="#e0e0e0" highlightColor="#f8d4e6"/>
            ) : (
              project ? project.ProjectName :" Social media Apps Status Downloader"
           )}
          </div>
        </div>

        <div className="p-4">
          {loading ? (
            <Skeleton width={280} height={200} baseColor="#e0e0e0" highlightColor="#f8d4e6" />
          ) : project ? (
            <img
              src={project.Image}
              alt="Logo"
              className="
              object-cover rounded-lg border-4 shadow-2xl 
              w-80 h-65 mx-auto
              md:w-full md:h-80  md:mx-auto 
              lg:w-full lg:h-100"/>
          ) : (
            <img
              src="/backgrounds/app3a.png"
              alt="Logo"
              // className="object-cover w-80 h-65 mx-auto bottom-0 md:w-[400px] md:h-[300px] md:mx-auto lg:w-full lg:h-72"
              className="object-cover" width={588} height={314}/>
          )}
      </div>
   </div>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-16 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[70%]">
          <div className="font-bold text-paraClr text-lg">
           {loading ? (              
            <Skeleton width={150} height={20} />
          ) : (
            project ? project.ProjectCategory : "Statusaver"
          )}
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-custom-blue">OVERVIEW</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
           {loading ? (
              <Skeleton count={5} width={280} />
            ) : (
              project ? project.ProjectDescription : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."
            )}
          </p>
        </div>
        {/* iamge */}
        <div className="w-full md:w-[30%] h-auto md:h-full relative mt-5 md:mt-0">
          <div className="bg-custom-blue-light w-[250px] h-[139px] rounded-[10px] m-auto uppercase">
            <div className="bg-custom-blue rounded-t-[10px] h-10 flex items-center justify-center">
              <h2 className="font-bold text-white tracking-custom">Project Timeline</h2>
            </div>
            <div className=" bg-blue-300  rounded-b-[10px] flex items-center justify-center h-[99px]">
              <h2 className="flex items-center justify-center text-white font-medium ">
                {loading ? (
                  <Skeleton width={120} height={20} />
                ) : (
                  project ? project.ProjectTimeline : "Jan 2025 - March 2025"
                )}
              </h2>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom px-4">
  <div className="py-20 flex flex-wrap justify-center items-center gap-7 text-white">
    
    {/* Team Section */}
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-custom-blue rounded-[10px] flex flex-col items-center justify-start">
      <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">our team</h2>
      <ul className="text-center tracking-custom leading-tight">
        {loading ? (
          <Skeleton count={3} width={90} />
        ) : projectTeam.length > 0 ? (
          projectTeam.map((member, index) => (
            <li key={index} className="mb-1">{member}</li>
          ))
        ) : (
          <li className="text-gray-300">No team members listed</li>
        )}
      </ul>
    </div>

    {/* Technologies Section */}
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-custom-blue rounded-[10px] flex flex-col items-center justify-start text-center">
      <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">technologies used</h2>
      <ul className="text-center tracking-custom leading-tight">
        {loading ? (
          <Skeleton count={3} width={90} />
        ) : projectTechnology.length > 0 ? (
          projectTechnology.map((tech, index) => (
            <li key={index} className="mb-1">{tech}</li>
          ))
        ) : (
          <li className="text-gray-300">No technologies listed</li>
        )}
      </ul>
    </div>

    {/* Category Section */}
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-custom-blue rounded-[10px] flex flex-col items-center justify-start">
      <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">category</h2>
      <ul className="text-center tracking-custom leading-tight">
        <li>
          {loading ? (
          <Skeleton width={90} />
        ) : (
          project ? project.ProjectCategory : "Statusaver"
          )
        }
        </li>
      </ul>
    </div>
  </div>
</div>




      <div className="p-10 md:px-20" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-8">
          <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">THE </span>
            <span className="text-custom-blue">PROBLEM  </span>
          </div>
          {loading ? (
              <div className="text-center w-5/6 text-paraClr leading-tight">
              <Skeleton count={5} width={280} />
              </div>
            ) : (
              <div className="text-center w-5/6 text-paraClr leading-tight">
              {project ? project.ProjectProblem : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."}
              </div>
            )}
        </div>
      </div>
{/* 
      <div className="p-10 md:px-20" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-8">
           <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">THE </span>
            <span className="text-custom-blue">PROBLEM  </span>
          </div>
          
            {loading ? (
              <div className="text-center w-5/6 text-paraClr leading-tight">
              <Skeleton count={5} width={280} />
              </div>
            ) : (
              <div className="text-center w-5/6 text-paraClr leading-tight">
              {project ? project.ProjectProblem : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."}
              </div>
            )}
          </div>
        </div> */}




      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-16 lg:px-32 mt-20 md:mt-10 gap-y-10 md:gap-y-0 md:gap-x-16 mb-10 bg-[#608cc4] py-10 text-white">
  {/* Text Section */}
  <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left w-full md:w-1/2">
    <div className="font-bold text-lg">
      <span className="border-b-4 border-white">
        {loading ? (
          <Skeleton width={150} height={20} />
        ) : (
          project ? project.ProjectCategory : "Statusaver"
          )
        }
      </span>
    </div>
    <div className="text-4xl font-bebas tracking-custom">
      <span>Solution</span>
    </div>
    <p className="text-sm md:text-base leading-tight mb-5 md:mb-0 px-2 md:px-0">
      {loading ? (
        <Skeleton count={10} width={280} />
      ): (project ? project.ProjectSolution : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.")}
    </p>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    {loading ? (
      <Skeleton height={150} width={150} borderRadius={12} />
    ) : project ? (
      <img
        src={project.Image}
        alt="Logo"
        className="object-cover rounded-lg border-4 shadow-2xl w-[280px] sm:w-[340px] md:w-[400px] lg:w-[500px] h-auto mx-auto"
      />
    ) : (
      <img
        src="/backgrounds/app3a.png"
        alt="Logo"
        className="object-cover rounded-lg border-4 shadow-2xl w-[280px] sm:w-[340px] md:w-[400px] lg:w-[500px] h-auto mx-auto"
      />
    )}
  </div>
</div>



      <div className="p-10 md:px-20 mt-10">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">The </span>
            <span className="text-custom-blue">Process  </span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight mb-14">
          <p>
            {loading ? (
              <Skeleton count={5} width={280} />
            ) : (
              project ? project.ProjectProccess : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."
            )}
          </p>
          </div>
          {/* <Image
            src="/backgrounds/process1.svg"
            alt="Logo"
            className="object-cover"
            width={1197}
            height={174}
          /> */}
        </div>
      </div>


      <div className="p-10 md:px-20 mt-16">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-3xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-custom-blue">Impact</span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight mb-14">
            {loading ? (
              <Skeleton count={5} width={280} />
            ) : (
              project ? project.ProjectImpact : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."
            )}
          </div>
          {/* <Image
            src="/backgrounds/Group 105.svg"
            alt="Logo"
            className="object-cover"
            width={526}
            height={251}
          /> */}
        </div>
      </div>
       {/* Future Improvements */}
      {/* <div className="p-10 md:px-20  mt-16">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-3xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-custom-blue">Future Improvements</span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </div>
        </div>
      </div> */}

      <Link href='/Projects'
        className="text-customFull transition-all w-36 h-10 font-semibold m-auto rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
      >
        View Portfolio
      </Link>
      <Contactform />
    </>
  )
}

export default CaseStudyPage