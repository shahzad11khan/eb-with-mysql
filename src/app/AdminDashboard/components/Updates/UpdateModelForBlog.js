"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_Blog } from "../ShowApidatas/apiUrls";

const UpdateBlogModal = ({ isclose, reload, proId }) => {
  console.log(proId);
  const modalRef = useRef();
  const [imagePreview, setImagePreview] = useState("");

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      isclose();
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        isclose();
      }
    },
    [isclose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const [formData, setFormData] = useState({
    blogtitle: "",
    author: "",
    datetime: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file || null,
    }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(formData.image); // fallback to old image
    }
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  const showalladmins = () => {
    axios
      .get(`${API_URL_Blog}/${proId}`)
      .then((res) => {
        const adminData = res.data.Result;
        console.log(adminData);
        setFormData({
          blogtitle: adminData.blogtitle,
          author: adminData.author,
          datetime: formatDate(adminData.datetime),
          description: adminData.description,
          image: adminData.image,
        });
        setImagePreview(adminData.image);
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };
  useEffect(() => {
    if (proId) {
      showalladmins();
    }
  }, [proId]);
  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("blogtitle", formData.blogtitle);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("datetime", formData.datetime);
      formDataToSend.append("description", formData.description);
      if (formData.image) {
        formDataToSend.append(
          "image",
          formData.image ? formData.image : imagePreview
        );
      }

      console.log(
        formData.blogtitle,
        formData.author,
        formData.datetime,
        formData.description,
        formData.image
      );

      const response = await axios.put(
        `${API_URL_Blog}/${proId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      toast.success("blog updated successfully");
      isclose();
      reload();
      setFormData({
        blogtitle: "",
        author: "",
        datetime: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Error updating project");
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
        <button className="self-end" onClick={isclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-950">Update Blog</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="blogtitle" className="text-gray-950">
              Blog Title :
            </label>
            <br />
            <input
              type="text"
              id="blogtitle"
              name="blogtitle"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.blogtitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author" className="text-gray-950">
              Author Name :
            </label>
            <br />
            <input
              type="text"
              id="author"
              name="author"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>
        </section>  
          
          <div>
            <label htmlFor="description" className="text-gray-950">
              Discription :
            </label>
            <br />
            <textarea
              type="text"
              id="description"
              name="description"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="datetime" className="text-gray-950">
              Date And Time :
            </label>
            <br />
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.datetime}
              onChange={handleInputChange}
            />
          </div>
          <div class="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
            <label class="block">
              <span className="text-gray-950">Upload file</span>
              <input
                onChange={handleFileChange}
                name="image"
                type="file"
                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {imagePreview && (
              <img
                src={imagePreview}
                alt={`Profile Picture of ${formData.author}`}
                className="mt-2 w-24 h-24 object-cover rounded-md border"
              />
            )}
            </label>
          </div>
          {/* 
          of no use

          <div className="w-[100px] h-20 mb-4">
            
             : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
                <img
                  src="https://static.thenounproject.com/png/363639-200.png"
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )
          </div> */}
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Update Blog
        </button>
      </div>
    </div>
  );
};

export default UpdateBlogModal;
