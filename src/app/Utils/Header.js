"use client";
import { useState, useEffect } from "react";
import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  // Assuming you are in a component or function
  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

  // console.log('Current URL:', currentUrl);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [tabOpened, setTabOpened] = useState(currentUrl);


  useEffect(() => {
    // Extract current pathname from window.location
    const path = window.location.pathname;
    // Determine active link based on pathname
    if (tabOpened === "/") {
      setTabOpened("Home");
    } else if (tabOpened === "/About") {
      setTabOpened("About");
    } else if (tabOpened === "/How_we_Work") {
      setTabOpened("How_we_Work");
    } else if (tabOpened === "/Mobile") {
      setTabOpened("Services");
    } else if (tabOpened === "/WebApp") {
      setTabOpened("Services");
    }
    else if (tabOpened === "/Ai") {
      setTabOpened("Services");
    }
    else if (tabOpened === "/Uiux") {
      setTabOpened("Services");
    } else if (tabOpened === "/Projects") {
      setTabOpened("Projects");
    }
    else if (tabOpened === "/Career") {
      setTabOpened("Career");
    }
    else if (tabOpened === "/Blog") {
      setTabOpened("Blog");
    } else {
      setTabOpened("Home"); // Default to Home if path not matched
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };
  const closeProjectsDropdown = () => {
    setProjectsDropdownOpen(false);
  };


  return (
    <nav
      className={`bg-lightBlack fixed top-0 md:top-0 left-0 w-full z-50 h-20 transition-all duration-300 opacity-90 ${isSticky ? "py-2 top-0" : "p-2 lg:mt-6 mt-0 "
        }`}
    >
      <div className="flex justify-between items-center w-10/12 m-auto py-2">
        <div className="flex justify-center items-center">
          <Link href="/"
            onClick={() => {
              setTabOpened("Home");
              setProjectsDropdownOpen(false);
            }}>
            <Image
              src="/logos/logo.png"
              alt="Logo"
              className="h-auto"
              width={190}
              height={190}
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow justify-center gap-2 lg:gap-3 text-xs md:text-sm lg:text-base" >
          <Link
            onClick={() => {
              setTabOpened("Home");
              setProjectsDropdownOpen(false);
            }}
            href="/"
            className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "Home" ? "text-custom-blue" : "text-white"
              }`}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setTabOpened("About");
              setProjectsDropdownOpen(false);
            }}
            href="/About"
            className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "About" ? "text-custom-blue" : "text-white"
              }`}

          >
            About
          </Link>
          <Link
            href="/How_we_Work"
            onClick={() => {
              setTabOpened("How_we_Work");
              setProjectsDropdownOpen(false);
            }}
            className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "How_we_Work" ? "text-custom-blue" : "text-white"
              }`}
          >
            How we work
          </Link>
          <div className="relative">
            <button
              onClick={() => {
                setTabOpened("Services");
                toggleProjectsDropdown()
              }}
              className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "Services" ? "text-custom-blue" : "text-white"
                }`}
            >
              Services
              <span className="ml-1">&#9662;</span>
            </button>

            {isProjectsDropdownOpen && (
              <div
                className="absolute left-0 mt-5 border rounded-md shadow-lg z-10 bg-custom-blue"
                onClick={closeProjectsDropdown}
              >
                <div
                  className="p-2 mt-1 fixed left-0 w-full pb-6 h-[350px] text-white"
                  style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                >
                  <div className="flex w-4/6 m-auto mt-10 text-2xl font-bold">
                    <Link href="/Services">
                      <span className="border-b-4 border-custom-blue">
                        SERVICES WE
                      </span>
                      <span> &nbsp;PROVIDE</span>
                    </Link>
                  </div>

                  <div className="flex w-4/6 justify-between m-auto mt-10">
                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link
                          href="/Mobile"
                          className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                        >
                          MOBILE APP DEVELOPMENT
                        </Link>
                      </div>
                      <div className="text-sm mt-3 ">
                        <ul className="leading-normal">
                          <li>
                            <Link
                              href="/Mobile/#mobilesection3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Services for different industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection5"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Development Process
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection6"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Development Cost
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection7"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link
                          href="/WebApp"
                          className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                        >
                          WEB DEVELOPMENT
                        </Link>
                      </div>
                      <div className="text-sm mt-3 ">
                        <ul className="leading-normal">
                          <li>
                            <Link
                              href="/WebApp/#section3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Whats&apos;s Important
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section5"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Intellectual Property Protection
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section6"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Develop For Variety of Industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section7"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link
                          href="/Ai"
                          className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                        >
                          ARTIFICIAL INTELLIGENCE
                        </Link>
                      </div>
                      <div className="text-sm mt-3 leading-7">
                        <ul className="leading-normal">
                          <li>
                            <Link
                              href="/Ai/#section3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Ai/#section4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link
                          href="/Uiux"
                          className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue text-xl"
                        >
                          UI / UX
                        </Link>
                      </div>
                      <div className="text-sm mt-3 leading-7">
                        <ul className="leading-normal">
                          <li>
                            <Link
                              href="/Uiux/#section3"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Design Process
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Uiux/#section4"
                              className="hover:text-custom-blue hover:border-b-2 hover:border-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            onClick={() => {
              setTabOpened("Projects");
              setProjectsDropdownOpen(false);
            }}
            href="/Projects"
            className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "Projects" ? "text-custom-blue" : "text-white"
              }`}
          >
            Projects
          </Link>
          <Link
            href="/Career"
            onClick={() => {
              setTabOpened("Career");
              setProjectsDropdownOpen(false);
            }}
            className={`lg:mr-2 xl:mr-4 hover:text-custom-blue ${tabOpened === "Career" ? "text-custom-blue" : "text-white"
              }`}
          >
            Career
          </Link>
          <Link
            href="/Blog"
            onClick={() => {
              setTabOpened("Blog");
              setProjectsDropdownOpen(false);
            }}
            className={`lg:mr-2 xl:mr-4  hover:text-custom-blue ${tabOpened === "Blog" ? "text-custom-blue" : "text-white"
              }`}
          >
            Blog
          </Link>
        </div>

        {/* Right Side: Contact Us Button */}
        <div className="hidden lg:flex justify-between">
          <Link href="#form">
            <button className="border hover:bg-custom-blue text-white font-normal py-1 px-2 text-sm rounded-sm shadow-md">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden justify-between">
          <button
            id="mobile-menu-button"
            className="text-white hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H3zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden text-white ${isMobileMenuOpen ? "" : "hidden"
          } bg-gray-700`}
        id="mobile-menu"
      >
        <Link
          href="/"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          Home
        </Link>
        <Link
          href="/About"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          About
        </Link>
        <Link
          href="/Projects"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          Projects
        </Link>
        <div className="relative">
          <button
            onClick={() => {
              setTabOpened("Services");
              toggleProjectsDropdown()
            }}
            className={`ml-4 relative hover:text-custom-blue ${tabOpened === "Services" ? "text-custom-blue" : "text-white"
              }`}
          >
            Service
            <span className="ml-1">&#9662;</span>
          </button>

          {isProjectsDropdownOpen && (
            <div
              className="absolute left-0 mt-5 w-full border rounded-md  text-white shadow-lg z-10"
              onClick={() => {
                closeProjectsDropdown();
                setMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <div className="p-2 mt-1 w-full pb-6 bg-black bg-opacity-90 md:overflow-visible  overflow-y-auto  text-white">
                <div className="flex w-11/12 m-auto mt-10 text-2xl font-bold">
                  <span className="border-b-4 border-custom-blue">
                    SERVICES WE
                  </span>
                  <span>&nbsp;PROVIDE</span>
                </div>
                <div className="flex w-11/12 justify-between m-auto mt-2">
                  <div className="w-1/2">
                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link href="/Mobile">Mobile App Development</Link>
                      </div>
                      <div className="text-xs mt-2">
                        <ul>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection3"
                              className="hover:text-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection4"
                              className="hover:text-custom-blue"
                            >
                              Services For Diff Industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection5"
                              className="hover:text-custom-blue"
                            >
                              Development Process
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection6"
                              className="hover:text-custom-blue"
                            >
                              Development Cost
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Mobile/#mobilesection7"
                              className="hover:text-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link href="/WebApp">Web Development</Link>
                      </div>
                      <div className="text-xs mt-2">
                        <ul>
                          <li>
                            <Link
                              href="/WebApp/#section3"
                              className="hover:text-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section4"
                              className="hover:text-custom-blue"
                            >
                              What&apos;s Important
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section5"
                              className="hover:text-custom-blue"
                            >
                              Intellectual Property Protection
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section6"
                              className="hover:text-custom-blue"
                            >
                              Develop For Variety Of Industries
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/WebApp/#section7"
                              className="hover:text-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2">
                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link href="/Ai">ARTIFICIAL INTELLIGENCE</Link>
                      </div>
                      <div className="text-xs mt-2">
                        <ul>
                          <li>
                            <Link
                              href="/Ai/#section3"
                              className="hover:text-custom-blue"
                            >
                              Development Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Ai/#section4"
                              className="hover:text-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-start p-3">
                      <div className="font-bold">
                        <Link href="/Uiux">UI / UX</Link>
                      </div>
                      <div className="text-xs mt-2">
                        <ul>
                          <li>
                            <Link
                              href="/Uiux/#section3"
                              className="hover:text-custom-blue"
                            >
                              Design Process
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Uiux/#section4"
                              className="hover:text-custom-blue"
                            >
                              Tools & Technologies
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          href="#"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          Blog
        </Link>
        <Link
          href="/How_we_Work"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          How we work
        </Link>
        <Link
          href="/Career"
          className="block py-1 px-4 hover:text-custom-blue"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          Career
        </Link>
        <Link href="#form">
          <button className="bg-blue-500 hover:bg-custom-blue  py-2 px-4 rounded-md shadow-md w-full text-left">
            Contact Us
          </button>
        </Link>
      </div>
    </nav >
  );
};

export default Header;