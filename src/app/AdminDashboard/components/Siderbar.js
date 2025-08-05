"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TiUserAdd } from "react-icons/ti";
import { FaHome, FaUsers, FaProjectDiagram, FaBlog } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon for small screens */}
      <button
        className="lg:hidden fixed top-16 left-4 z-50 p-2 bg-custom-blue text-white rounded-md"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <HiMenu size={28} />
      </button>

      {/* Sidebar overlay for mobile/tablet */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-xl border-2 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-screen lg:w-72 lg:flex`}
      >
        {/* Close icon for mobile/tablet */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Close sidebar">
            <HiX size={28} />
          </button>
        </div>
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
                  <span className="md:block sm:hidden xs:hidden">Get In Touch</span>
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
      </div>

      {/* Overlay for mobile/tablet when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
