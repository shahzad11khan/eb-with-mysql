"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { RequestCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import {API_URL_Request} from "../components/ShowApidatas/apiUrls"
const CandidateTable = () => {
  const router = useRouter();
  const [showAllReq, setshowAllReq] = useState([]);
  const [requestsLoading, setRequestsLoading] = useState(false);
  const [requestsError, setRequestsError] = useState(null);
  const fetchRequests = () => {
    setRequestsLoading(true);
    setRequestsError(null);
    RequestCount()
      .then(({ admins }) => {
        setshowAllReq(admins);
        setRequestsLoading(false);
      })
      .catch((error) => {
        setRequestsError("Failed to fetch requests.");
        setRequestsLoading(false);
        console.log(`Failed to fetch Request: ${error}`);
      });
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    fetchRequests();
  }, [router]);

  // Function to delete an item
  const handleDelete = async (id) => {
    console.log("Deleting ID:", id);
    try {
      await axios.delete(`${API_URL_Request}/${id}`);
      toast.success("Delete Request Successfully");
      // Remove the deleted item from the UI
      setshowAllReq((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <>
      <Header className="min-w-full" />
      <div className="flex  gap-4">
        <Sidebar />
        <div className="container mx-auto p-4 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Candidates</h2>
          </div>
          <div className="overflow-x-auto h-[500px] ">
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Experience</th>
                  <th className="px-4 py-2">Expected Salary</th>
                  <th className="px-4 py-2">Show CV</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {requestsLoading ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">
                      Loading requests...
                    </td>
                  </tr>
                ) : requestsError ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-red-500">
                      {requestsError}
                    </td>
                  </tr>
                ) : Array.isArray(showAllReq) && showAllReq.length > 0 ? (
                  showAllReq.map((item, idx) => (
                    <tr key={item.id} className="border-2 border-b-gray-500">
                      <td className="px-4 py-2">{idx + 1}</td>
                      <td className="px-4 py-2">{item.username}</td>
                      <td className="px-4 py-2">{item.email}</td>
                      <td className="px-4 py-2">{item.phone}</td>
                      <td className="px-4 py-2">{item.experience}</td>
                      <td className="px-4 py-2">{item.expected_salary}</td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                          onClick={() => window.open(item.file_cv, "_blank")}
                        >
                          Show CV
                        </button>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">
                      No requests yet
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

export default CandidateTable;
