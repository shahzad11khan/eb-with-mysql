"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
// import UpdateProjectModal from "../components/Updates/UpdateModelForProject";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { BlogsCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import AddNewBlogModal from "../components/AddNewBlogModal";
import { API_URL_Blog } from "../components/ShowApidatas/apiUrls";
import UpdateBlogModal from "../components/Updates/UpdateModelForBlog";
const Blogs = () => {
  const router = useRouter();
  const [showmodal, setShowModal] = useState(false);
  const [showProjectModel, setShowProjectModel] = useState(false);
  const [showAllblog, setShowAllBlog] = useState([]);
  const [selectedProId, setSelectedProId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeam, setFilteredTeam] = useState([]);
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    fetchBlog();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = showAllblog.filter((blog) =>
      blog.blogtitle.toLowerCase().includes(value)
    );
    setFilteredTeam(filtered);
  };
  const fetchBlog = () => {
    BlogsCount()
      .then(({ admins }) => {
        setShowAllBlog(admins);
      })
      .catch((error) => {
        console.log(`Failed to fetch projects: ${error}`);
        fetchBlog([]);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_Blog}/${id}`);
      console.log(id);
      toast.success("blog deleted successfully!");
      fetchBlog();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete blog.");
    }
  };

  const handleEdit = (id) => {
    setSelectedProId(id);
    setShowProjectModel(true);
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Blogs</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Blog
            </button>
          </div>
          <div className="overflow-x-auto h-[500px]">
            <input
              type="text"
              placeholder="Search by Project Name"
              className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Blog Title</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Blog Created Date</th>
                  <th className="px-4 py-2">Blog Description</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {showAllblog.length > 0 ? (
                  (searchTerm !== "" ? filteredTeam : showAllblog).map(
                    (blog, idx) => (
                      <tr key={blog.id} className="border-2 border-b-gray-400">
                        <td className="px-4 py-2">{idx + 1}</td>
                        <td className="px-4 py-2">
                          <img
                            src={blog.image}
                            alt={blog.blogtitle}
                            className="h-16 w-16 object-cover"
                            width={40}
                            height={40}
                          />
                        </td>
                        <td className="px-4 py-2">{blog.blogtitle}</td>
                        <td className="px-4 py-2">{blog.author}</td>
                        <td className="px-4 py-2">
                          {blog.datetime
                            ? // Assuming blog.datetime is a string like "2024-06-28T00:00:00.000+00:00"
                              (() => {
                                let dt = new Date(blog.datetime); // Convert to Date object

                                // Check if dt is a valid Date object before accessing its methods
                                return dt instanceof Date
                                  ? `${dt.getDate()} ${dt.toLocaleString(
                                      "en-US",
                                      { month: "long" }
                                    )} ${dt.getFullYear()}`
                                  : "Invalid Date";
                              })()
                            : "No Date Available"}
                        </td>
                        <td className="px-4 py-2">
                          <div className="overflow-y-scroll no-scrollbar max-h-[4rem] leading-[1.2rem]">
                            {blog.description}
                          </div>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-green-500 px-2 py-1 rounded hover:underline"
                            onClick={() => handleEdit(blog.id)} // Corrected to use `blog.id`
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => handleDelete(blog.id)} // Corrected to use `blog.id`
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )
                ) : showAllblog.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      <p>No Project available.</p>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      <p>Please wait while loading...</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showmodal && (
            <AddNewBlogModal
              isclose={() => setShowModal(false)}
              reload={fetchBlog}
            />
          )}
          {showProjectModel && (
            <UpdateBlogModal
              isclose={() => setShowProjectModel(false)}
              proId={selectedProId}
              reload={fetchBlog}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
