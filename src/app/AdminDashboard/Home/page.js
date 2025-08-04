"use client";
import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import TableWithTitle from "../components/Table";
import Image from "next/image";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { GrUserAdmin } from "react-icons/gr";
import { FaPeopleGroup, FaNotesMedical } from "react-icons/fa6";
import { RiFolderReceivedFill } from "react-icons/ri";
import { MdTouchApp } from "react-icons/md";
import { API_URL_TEAM } from "../components/ShowApidatas/apiUrls";
import axios from "axios";

import {
  GetInCount,
  RequestCount,
  ShowAllAdmins,
  TeamCount,
  VacancyCount,
} from "../components/ShowApidatas/ShowUserAPiDatas";

const AdminHome = () => {
  const [counts, setCounts] = useState({
    admins: 0,
    team: 0,
    vacancies: 0,
    getInTouch: 0,
    requests: 0,
  });

  const router = useRouter();

  const fetchCounts = useCallback(async () => {
    try {
      const [
        { count: admins },
        { count: team },
        { count: vacancies },
        { count: getInTouch },
        { count: requests },
      ] = await Promise.all([
        ShowAllAdmins(),
        TeamCount(),
        VacancyCount(),
        GetInCount(),
        RequestCount(),
      ]);

      setCounts({ admins, team, vacancies, getInTouch, requests });
    } catch (error) {
      console.log(`Failed to fetch data: ${error}`);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }

    fetchCounts();
  }, [fetchCounts, router]);

  const [showTeamMember, setShowTeamMember] = useState([]);
  useEffect(() => {
    const getTeamMembers = async () => {
      try {
        const response = await axios.get(API_URL_TEAM);
        const showTeamMember = response.data.Result?.filter(t => t.order !== 0) || [];
        setShowTeamMember(showTeamMember);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    getTeamMembers();
  },[]);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 70], // Sample data values
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [50, 65, 84, 65, 87, 46, 70], // Sample data values
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <main className="w-full mt-5 h-60">
          <section className="grid grid-cols-5 min-w-full justify-between gap-2 text-center rounded-xl">
            {[
              {
                icon: <GrUserAdmin size={30} />,
                title: "All Registered Admins",
                count: counts.admins,
              },
              {
                icon: <FaPeopleGroup size={30} />,
                title: "Team Members",
                count: counts.team,
              },
              {
                icon: <FaNotesMedical size={30} />,
                title: "Vacancies",
                count: counts.vacancies,
              },
              {
                icon: <MdTouchApp size={30} />,
                title: "Get In Touch",
                count: counts.getInTouch,
              },
              {
                icon: <RiFolderReceivedFill size={30} />,
                title: "Requests",
                count: counts.requests,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-custom-blue rounded-md py-3"
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="flex flex-col items-center gap-2 justify-center">
                    <span>{item.icon}</span>
                    <span className="text-xs">{item.title}</span>
                  </div>
                  <span className="text-2xl">{item.count}</span>
                </div>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-2 min-w-full justify-evenly gap-4 mt-4">
            <div className="w-full h-72 flex justify-center items-center  rounded-xl">
              <BarChart data={data} data1={data1} />
            </div>
            <div className="w-full h-72 flex justify-center items-center  rounded-xl">
              <DonutChart data={data} />
            </div>
            <div className="w-full h-64 p-4  rounded-xl">
              <TableWithTitle />
            </div>
            <div className="w-full h-72 flex flex-col items-center gap-3 text-white text-center">
              <div className="h-16  rounded-xl w-full flex px-3 items-center border-2 border-custom-blue">
                <div className="flex items-center text-black">
                  <div className="mr-2">
                    {showTeamMember[0] ? (
                      <img
                      src={showTeamMember[0]?.image}
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"  
                      />
                    ) : (
                      <Image
                      src="/team/001.jpg"
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"
                      />
                    )}
                  </div>
                  <div className="flex flex-col pl-5">
                    <span className="flex justify-start text-black">
                      {showTeamMember[0]? showTeamMember[0].username.toUpperCase() : "Sultan Khan"}
                    </span>
                    <span className="text-xs text-gray-400 flex justify-start">
                      Hello Admin!
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-16  rounded-xl w-full flex px-3 items-center border-2 border-custom-blue">
                <div className="flex items-center text-black">
                  <div className="mr-2">
                    {showTeamMember[0] ? (
                      <img
                        src={showTeamMember[1]?.image}
                        alt="image"
                        width={90}
                        height={90}
                        className="rounded-full h-10 w-10"
                      />
                    ) : (
                      <Image
                      src="/team/Nouman.jpg"
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"
                    />
                    )}
                  </div>
                  <div className="flex flex-col pl-5">
                    <span className="flex justify-start text-black">
                      {showTeamMember[1] ? showTeamMember[1].username.toUpperCase() : "Eng . Mueez"}
                    </span>
                    <span className="text-xs text-gray-400 flex justify-start">
                      Hi Fella!
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-16  rounded-xl w-full flex px-3 items-center border-2 border-custom-blue">
                <div className="flex items-center text-black">
                  <div className="mr-2">
                    {showTeamMember[2] ? (
                      <img
                      src={showTeamMember[2]?.image}
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"
                      />
                    ):(
                      <Image
                      src="/team/team9.jpg"
                      alt="image"
                      width={90}
                      height={90}
                      className="rounded-full h-10 w-10"
                    />
                    )}
                  </div>
                  <div className="flex flex-col pl-5">
                    <span className="flex justify-start text-black">
                      {showTeamMember[2] ? showTeamMember[2].username.toUpperCase() : "M. Ubaid Ullah"}
                    </span>
                    <span className="text-xs text-gray-400 flex justify-start">
                      Welcome Back!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminHome;
