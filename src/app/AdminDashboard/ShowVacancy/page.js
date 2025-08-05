"use client";
import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import AddVacancyModal from "../components/AddVacancyModal";
import UpdateVacancyModal from "../components/Updates/UpdateModelForVacancy";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { VacancyCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import { API_URL_Vacancy_Delete } from "../components/ShowApidatas/apiUrls";

const VacancyTable = () => {
  const router = useRouter();
  const [showmodal, setshowmodal] = useState(false);
  const [showUpdateVacancymodal, setUpdateVacancymodal] = useState(false);
  const [showAllVacancy, setshowAllVacancy] = useState([]);
  const [selectedVacancyId, setSelectedVacancyId] = useState("");

  // Use useCallback for memoized data fetching
  const getVacancy = useCallback(async () => {
    try {
      // Check if user is authenticated (moved inside for potential early exit)
      if (!isAuthenticated()) {
        router.push("/AdminDashboard/Login"); // Redirect if not authenticated
        return;
      }

      const response = await VacancyCount();
      const admins = response.admins;
      setshowAllVacancy(admins);
    } catch (error) {
      console.error(`Failed to fetch vacancies: ${error}`);
    }
  }, [router, isAuthenticated]);

  useEffect(() => {
    getVacancy();
  }, [getVacancy]);

  // Function to delete an item (async/await for clarity)
  const handleDelete = async (id) => {
    try {
      console.log("hi", id);
      await axios.delete(`${API_URL_Vacancy_Delete}/${id}`);
      getVacancy(); // Refetch data after deletion
      toast.success("Vacancy Deleted Successfully");
    } catch (error) {
      console.error("Error deleting vacancy:", error);
    }
  };

  // handle edit
  const handleEdit = (id) => {
    console.log(id);
    setSelectedVacancyId(id);
    setUpdateVacancymodal(true);
  };
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Vacancies</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setshowmodal(true)}
            >
              Add New Vacancy
            </button>
          </div>
          <div className="overflow-x-auto h-[500px] ">
            <table className="min-w-full ">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" px-4 py-2">S.no</th>
                  <th className=" px-4 py-2">Vacancy Title</th>
                  <th className=" px-4 py-2">Required Skills</th>
                  <th className=" px-4 py-2">Year of Experience</th>
                  <th className=" px-4 py-2">Edit</th>
                  <th className=" px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                {showAllVacancy.length > 0 ? (
                  showAllVacancy.map((vac, idx) => (
                    <tr key={vac._id} className="border-2 border-b-gray-500">
                      <td className="px-4 py-2">{idx + 1}</td>
                      <td className="px-4 py-2">{vac.VacancyTitle}</td>
                      <td className="px-4 py-2">
                        <div
                          className="overflow-y-scroll no-scrollbar"
                          style={{
                            maxHeight: "4rem",
                            lineHeight: "1.2rem",
                            maxWidth: "35rem",
                          }}
                        >
                          {vac.Requireds}
                        </div>
                      </td>
                      <td className=" px-4 py-2 text-center">
                        {vac.Experience}
                      </td>
                      <td className=" px-4 py-2 text-center">
                        <button
                          className=" text-green-500 px-2 py-1 rounded hover:underline"
                          onClick={() => handleEdit(vac.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className=" px-4 py-2 text-center">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(vac.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      {showAllVacancy.length == 0 ? (
                        <p>No Vacancy available.</p>
                      ) : (
                        <p>Please wait while loading...</p>
                      )}
                    </td>
                  </tr>
                )}

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          {showmodal && (
            <AddVacancyModal
              isclose={() => setshowmodal(false)}
              getVacancies={getVacancy}
            />
          )}
          {showUpdateVacancymodal && (
            <UpdateVacancyModal
              isclose={() => setUpdateVacancymodal(false)}
              vacId={selectedVacancyId}
              getVacancies={getVacancy}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VacancyTable;
