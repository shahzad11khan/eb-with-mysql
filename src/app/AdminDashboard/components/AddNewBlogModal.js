"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./ShowApidatas/apiUrls";

const AddNewBlogModal = ({ isclose, reload }) => {
  const modalRef = useRef();

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
  const [imagePreview, setImagePreview] = useState("");

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
    // Add image preview functionality
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("blogtitle", formData.blogtitle);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("datetime", formData.datetime);
      formDataToSend.append("description", formData.description);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      console.log("Sending the following data:");
      console.log({
        blogtitle: formData.blogtitle,
        author: formData.author,
        datetime: formData.datetime,
        description: formData.description,
        image: formData.image,
      });

      const response = await axios.post(`${url}/api/Blog`, formDataToSend);

      console.log("Response from server:", response.data);

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to create blog");
      } else {
        reload();
        isclose(); // Close the popup window
        toast.success("Blog created successfully!");
        console.log("Blog created successfully!");
      }
    } catch (error) {
      toast.error(error.message || "Failed to create blog");
      console.error("Error creating blog:", error);
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
        <h2 className="text-xl font-semibold text-gray-950">Add New Blog</h2>
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
              type="datetime-local" // Use datetime-local for date and time input
              id="date"
              name="datetime"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.datetime} // Assuming formData.datetime is correctly formatted
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
              {/* Image preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-24 h-24 object-cover rounded-md border"
                />
              )}
            </label>
          </div>
        </section>
         
        
        

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Add New Blog
        </button>
      </div>
    </div>
  );
};

export default AddNewBlogModal;
