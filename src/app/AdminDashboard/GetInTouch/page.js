"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { GetInCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import { API_URL_GetInTouch } from "../components/ShowApidatas/apiUrls";

const ContactTable = () => {
  const router = useRouter();
  const [showAllGet, setShowAllGet] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { admins } = await GetInCount();
      setShowAllGet(admins);
      console.log(admins);
    } catch (error) {
      console.error(`Failed to fetch data: ${error}`);
      // Handle error: Redirect, toast error message, etc.
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_GetInTouch}/${id}`);
      toast.success("Deleted Successfully");
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Failed to delete item");
    }
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Contacts</h2>
          </div>
          <div className="overflow-x-auto h-[500px]">
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {showAllGet.length > 0 ? (
                  showAllGet.map((get, idx) => (
                    <tr key={get.id} className="border-2 border-b-gray-500">
                      <td className="px-4 py-2">{idx + 1}</td>
                      <td className="px-4 py-2">{get.username}</td>
                      <td className="px-4 py-2">{get.email}</td>
                      <td className="px-4 py-2">{get.phone}</td>
                      <td className="px-4 py-2">
                        <div
                          className="overflow-y-scroll no-scrollbar"
                          style={{
                            maxHeight: "4rem",
                            lineHeight: "1.2rem",
                            maxWidth: "35rem",
                          }}
                        >
                          {get.message}
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(get.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      {showAllGet.length === 0 ? (
                        <p>No contacts available.</p>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTable;
