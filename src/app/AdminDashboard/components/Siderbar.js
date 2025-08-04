"use client";
import React, { useMemo } from "react";
// import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"; // Import Link from Next.js
import { TiUserAdd } from "react-icons/ti";
import { FaHome, FaUsers, FaProjectDiagram, FaBlog } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="bg-white-800 text-black h-screen w-20 sm:w-48 lg:w-72 flex shadow-xl border-2 mt-1 shadow-custom-blue">
      <nav className="flex-1">
        <ul>
          <Link
            href="/AdminDashboard/Home"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<FaHome />}</span>
                <span className="md:block sm:hidden xs:hidden">Dashboard</span>
              </div>
            </li>
          </Link>
          <Link
            href="/AdminDashboard/RegisterAdmin"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<TiUserAdd />}</span>

                <span className="md:block sm:hidden xs:hidden">
                  Registered Admin
                </span>
              </div>
            </li>
          </Link>
          <Link
            href="/AdminDashboard/ShowAllTeam"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<FaUsers />}</span>

                <span className="md:block sm:hidden xs:hidden">All Team</span>
              </div>
            </li>
          </Link>

          <Link
            href="/AdminDashboard/AllProjects"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">
                  {<FaProjectDiagram />}
                </span>

                <span className="md:block sm:hidden xs:hidden">
                  All Projects
                </span>
              </div>
            </li>
          </Link>

          <Link
            href="/AdminDashboard/AllBlogs"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<FaBlog />}</span>

                <span className="md:block sm:hidden xs:hidden">Blogs</span>
              </div>
            </li>
          </Link>
          <Link
            href="/AdminDashboard/ShowVacancy"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<CiBoxList />}</span>

                <span className="md:block sm:hidden xs:hidden">Vacancies</span>
              </div>
            </li>
          </Link>
          <Link
            href="/AdminDashboard/GetInTouch"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">{<MdTouchApp />}</span>

                <span className="md:block sm:hidden xs:hidden">
                  Get In Touch
                </span>
              </div>
            </li>
          </Link>
          <Link
            href="/AdminDashboard/RequestForJoining"
            className="flex flex-col items-start px-2 cursor-pointer justify-center hover:border-2 hover:border-gray-300"
          >
            <li className="cursor-pointer py-3 flex items-start justify-start w-full">
              <div className="flex gap-3 justify-start items-center w-full">
                <span className="lg:block sm:block">
                  {<FaPersonWalkingArrowRight />}
                </span>

                <span className="md:block sm:hidden xs:hidden">
                  Requests For Joining
                </span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
