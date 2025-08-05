// components/Header.js
"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DigitalClock from "@/app/Utils/digitalClock";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const fetchUserData = useCallback(() => {
    const userId = localStorage.getItem("userId");
    // console.log(userId)
    if (!userId) return;

     axios
      .get(`/api/Users/${userId}`)
      .then((res) => {
        const adminData = res.data.result;
        // console.log(adminData)
        setImagePreview(adminData.image);
      })
      .catch((error) => {
        console.error(`Error fetching user data: ${error}`);
      });
  }, []);

  useEffect(() => {
    fetchUserData();
    // console.log(fetchUserData())
  }, [fetchUserData]);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await axios.get("/api/Users/logout", { timeout: 10000 });
    } catch (error) {
      console.error(`Error logging out: ${error.message}`);
    }

    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    // Cookies.remove("token");

    router.push("/AdminDashboard/Login");
    toast.success("Logged out successfully");
  }, [router]);

  return (
    <header className="bg-custom-blue text-white py-4 sm:py-3 px-2 sm:px-4 md:px-6 md:py-6 flex items-center justify-between opacity-90 w-full">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          className="h-7 w-auto sm:h-8"
          height={40}
          width={120}
        />
      </div>

      {/* Middle: Encoderbytes */}
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <span className="text-base sm:text-lg md:text-2xl font-bold whitespace-nowrap">Admin Dashboard</span>
        {/* <DigitalClock /> */}
      </div>

      {/* Right: Profile */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={imagePreview}
            alt="Profile"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full cursor-pointer object-cover"
            onClick={toggleDropdown}
          />
          {/* Dropdown */}
          {typeof window !== "undefined" && isDropdownOpen && (
            <div className="absolute right-0 mt-2 flex flex-col justify-center items-center bg-white rounded shadow-lg z-10 text-black min-w-[120px]">
              <ul className="py-1 w-full">
                <Link href="/AdminDashboard/Profile">
                  <li className="px-4 py-2 hover:bg-custom-blue cursor-pointer rounded-lg flex items-center gap-2">
                    <CgProfile />
                    <span className="hidden sm:inline">Profile</span>
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-custom-blue cursor-pointer rounded-lg flex items-center gap-2">
                  <button onClick={handleLogout} className="flex items-center gap-2 w-full">
                    <IoIosLogOut />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
