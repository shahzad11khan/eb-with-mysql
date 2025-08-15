"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import dynamic from "next/dynamic";
import axios from "axios";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { TeamCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import { API_URL_TEAM } from "../components/ShowApidatas/apiUrls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ShowAllTeam = () => {
  const AddNewMemModal = dynamic(() => import("../components/AddNewMemModal"), { ssr: false });
  const UpdateAdminModal = dynamic(() => import("../components/Updates/UpdateModelForTeam"), { ssr: false });
  const router = useRouter();
  const [showmodal, setshowmodal] = useState(false);
  const [showUpdateModel, setUpdateModel] = useState(false);
  const [showAllTeam, setshowAllTeam] = useState([]);
  const [teamLoading, setTeamLoading] = useState(false);
  const [teamError, setTeamError] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeam, setFilteredTeam] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    setTeamLoading(true);
    setTeamError(null);
    getTeam();
  }, [router]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = showAllTeam.filter((team) =>
      team.username.toLowerCase().includes(value)
    );
    setFilteredTeam(filtered);
  };

  const getTeam = async () => {
    try {
      const { admins } = await TeamCount();
      setshowAllTeam(admins);
      setTeamLoading(false);
    } catch (error) {
      setTeamError("Failed to fetch team members.");
      setTeamLoading(false);
      console.log(`Failed to fetch team: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_TEAM}/${id}`);
      toast.success("Delete Team Member Successfully");
      getTeam(); // Refresh team list after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (id) => {
    setSelectedTeamId(id);
    setUpdateModel(true);
  };

  // Sort the team data by `order` before rendering
  const sortedTeam = (searchTerm !== "" ? filteredTeam : showAllTeam)
    .sort((a, b) => a.order - b.order);  // Sort based on the `order` field

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto py-2 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Team List</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setshowmodal(true)}
            >
              Add New Member
            </button>
          </div>
          <div className="overflow-x-auto h-[600px]">
            <input
              type="text"
              placeholder="Search by username"
              className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <table className="table-auto w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">S.No</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Designation</th>
                  {/* <th className="px-4 py-2">Order</th> */}
                  <th className="px-4 py-2">LinkedIn</th>
                  <th className="px-4 py-2">Github</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {teamLoading ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4">
                      <p>Loading team members...</p>
                    </td>
                  </tr>
                ) : teamError ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4">
                      <p>{teamError}</p>
                    </td>
                  </tr>
                ) : showAllTeam.length > 0 ? (
                  sortedTeam.map((team, idx) => (
                    <tr key={team._id} className="border-2 border-b-gray-500">
                      <td className="p-2 text-center">{idx + 1}</td>
                      <td className="px-4 py-2">
                        <Image
                          src={team.image}
                          alt={team.username}
                          width={56}
                          height={56}
                          className="h-14 w-14 object-cover"
                          loading="lazy"
                          unoptimized
                        />
                      </td>
                      <td className="px-4 py-2">{team.username}</td>
                      <td className="p-2">{team.email}</td>
                      <td className="p-2">{team.designation}</td>
                      {/* <td className="px-4 py-2">{team.order}</td> */}
                      <td className="px-4 py-2">
                        {team.LinkedIn ? (
                          <a
                            href={team.LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            LinkedIn
                          </a>
                        ) : (
                          "No Link"
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {team.Github ? (
                          <a
                            href={team.Github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            GitHub
                          </a>
                        ) : (
                          "No Link"
                        )}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-green-500 px-2 py-1 rounded hover:underline"
                          onClick={() => handleEdit(team.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(team.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-4">
                      <p>No User Found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showmodal && (
            <AddNewMemModal
              isclose={() => setshowmodal(false)}
              getteams={getTeam}
            />
          )}
          {showUpdateModel && (
            <UpdateAdminModal
              isclose={() => setUpdateModel(false)}
              teamId={selectedTeamId}
              getteams={getTeam}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ShowAllTeam;
