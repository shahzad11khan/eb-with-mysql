"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./ShowApidatas/apiUrls";

const AddNewProModal = ({ isclose, getallprojects }) => {
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
    ProName: "",
    ProCategory: "",
    ProDiscription: "",
    file: null,
    ProProblem: "",
    ProSolution: "",
    ProImpact: "",
    ProTeam: "",
    ProTechnology: "",
    ProTimeline: "",
    ProProccess : "",
    latestProject: false, // Add this line
  });

  const [wordCounts, setWordCounts] = useState({
    ProDiscription: 0,
    ProProblem: 0,
    ProSolution: 0,
    ProImpact: 0,
    ProProccess: 0
  });
  const [errors, setErrors] = useState({
    ProDiscription: "",
    ProProblem: "",
    ProSolution: "",
    ProImpact: "",
    ProProccess: ""
  });

  const countWords = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox
    }));

    if (["ProDiscription", "ProProblem", "ProSolution", "ProImpact", "ProProccess"].includes(name)) {
      const words = countWords(value);
      setWordCounts((prev) => ({
        ...prev,
        [name]: words,
      }));
      setErrors((prev) => ({
        ...prev,
        [name]:
          words < 100
            ? `Minimum words should be 100 (Current: ${words})`
            : "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file || null,
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

  const [timeline, setTimeline] = useState({
    start: "",
    end: "",
    inProgress: false,
  });

  // Helper to format date as DD-MM-YYYY
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleTimelineChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "inProgress") {
      setTimeline((prev) => ({
        ...prev,
        inProgress: checked,
        end: checked ? "In Progress" : "",
      }));
      setFormData((prev) => ({
        ...prev,
        ProTimeline: checked
          ? `${formatDate(timeline.start)} - In Progress`
          : `${formatDate(timeline.start)} - ${formatDate(timeline.end)}`,
      }));
    } else {
      setTimeline((prev) => ({
        ...prev,
        [name]: value,
      }));
      setFormData((prev) => ({
        ...prev,
        ProTimeline:
          name === "start"
            ? `${formatDate(value)} - ${timeline.inProgress ? "In Progress" : formatDate(timeline.end)}`
            : `${formatDate(timeline.start)} - ${name === "end" ? formatDate(value) : formatDate(timeline.end)}`,
      }));
    }
  };

  const sendMessage = async () => {
    // Prevent submission if any textarea has less than 100 words
    if (
      wordCounts.ProDiscription < 100 ||
      wordCounts.ProProblem < 100 ||
      wordCounts.ProSolution < 100 ||
      wordCounts.ProImpact < 100 ||
      wordCounts.ProProccess < 100
    ) {
      setErrors((prev) => ({
        ...prev,
        ProDiscription:
          wordCounts.ProDiscription < 100
            ? `Minimum words should be 100 (Current: ${wordCounts.ProDiscription})`
            : "",
        ProProblem:
          wordCounts.ProProblem < 100
            ? `Minimum words should be 100 (Current: ${wordCounts.ProProblem})`
            : "",
        ProSolution:
          wordCounts.ProSolution < 100
            ? `Minimum words should be 100 (Current: ${wordCounts.ProSolution})`
            : "",
        ProImpact:
          wordCounts.ProImpact < 100
            ? `Minimum words should be 100 (Current: ${wordCounts.ProImpact})`
            : "",
        ProProcess:
          wordCounts.ProProccess < 100
            ? `Minimum words should be 100 (Current: ${wordCounts.ProProccess})`
            : "",
      }));
      toast.error("Please ensure all fields have at least 100 words.");
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("ProjectName", formData.ProName);
      formDataToSend.append("ProjectCategory", formData.ProCategory);
      formDataToSend.append("ProjectDescription", formData.ProDiscription);
      if (formData.file) {
        formDataToSend.append("Image", formData.file);
      }
      formDataToSend.append("ProjectProblem", formData.ProProblem);
      formDataToSend.append("ProjectSolution", formData.ProSolution);
      formDataToSend.append("ProjectImpact", formData.ProImpact);
      formDataToSend.append("ProjectTeam", formData.ProTeam);
      formDataToSend.append("ProjectTechnology", formData.ProTechnology);
      formDataToSend.append("ProjectTimeline", formData.ProTimeline);
      formDataToSend.append("ProjectProccess", formData.ProProccess)
      formDataToSend.append("LatestProject", formData.latestProject); // Add this line
      const data = {
        ProjectName: formData.ProName,
        ProjectCategory: formData.ProCategory,
        ProjectDescription: formData.ProDiscription, 
        Image: formData.file,

        ProjectProblem: formData.ProProblem,
        ProjectSolution : formData.ProSolution,
        ProjectImpact : formData.ProImpact,
        ProjectTeam: formData.ProTeam,
        ProjectTechnology: formData.ProTechnology,
        ProjectTimeline : formData.ProTimeline,
        ProjectProccess : formData.ProProccess,
        LatestProject: formData.latestProject, // Add this line
      };
      console.log(data);

      const response = await axios.post(`${url}/api/Project`, formDataToSend);

      console.log(response.data);

      getallprojects();
      isclose(); // Close the popup window
      toast.success("Project created successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to create admin");
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
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
        <h2 className="text-xl font-semibold text-gray-950">Add New Project</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="ProName" className="text-gray-950">
              Project Name :
            </label>
            <br />
            <input
              type="text"
              id="ProName"
              name="ProName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="ProCategory" className="text-gray-950">
              Category :
            </label>
            <br />
            <input
              type="text"
              id="ProCategory"
              name="ProCategory"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProCategory}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="ProTeam" className="text-gray-950">
              Project Team:
            </label>
            <br />
            <input
              type="text"
              id="ProTeam"
              name="ProTeam"
              placeholder="Names seperated by , "
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProTeam}
              onChange={handleInputChange}
              />
          </div>
          <div>
            <label htmlFor="ProTechnology" className="text-gray-950">
              Project Technologies:
            </label>
            <br />
            <input
              type="text"
              id="ProTechnology"
              name="ProTechnology"
              placeholder="Names seperated by , "
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProTechnology}
              onChange={handleInputChange}
              />
          </div>

          <div className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
            <label className="block">
              <span className="text-gray-950">Upload file</span>
              <input
                onChange={handleFileChange}
                name="file"
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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

          <div>
            <label htmlFor="ProDiscription" className="text-gray-950">
              Discription :
            </label>
            <br />
            <textarea
              type="text"
              id="ProDiscription"
              name="ProDiscription"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProDiscription}
              onChange={handleInputChange}
            />
            <div className="text-red-600 text-sm">
              {errors.ProDiscription}
            </div>
          </div>
          

          {/* Project Problem */}
          <div>
            <label htmlFor="ProProblem" className="text-gray-950">
              Project Problem :
            </label>
            <br />
            <textarea
              id="ProProblem"
              name="ProProblem"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProProblem}
              onChange={handleInputChange}
              />
            <div className="text-red-600 text-sm">
              {errors.ProProblem}
            </div>
          </div>

          {/* Project Solution */}
          <div>
            <label htmlFor="ProSolution" className="text-gray-950">
              Project Solution :
            </label>
            <br />
            <textarea
              id="ProSolution"
              name="ProSolution"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProSolution}
              onChange={handleInputChange}
              />
            <div className="text-red-600 text-sm">
              {errors.ProSolution}
            </div>
          </div>
          <div>
            <label htmlFor="ProProccess" className="text-gray-950">
              Project Process :
            </label>
            <br />
            <textarea
              id="ProProccess"
              name="ProProccess"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProProccess}
              onChange={handleInputChange}
            />
            <div className="text-red-600 text-sm">
              {errors.ProProccess}
            </div>
          </div>

          {/* Project Impact */}
          <div>
            <label htmlFor="ProImpact" className="text-gray-950">
              Project Impact :
            </label>
            <br />
            <textarea
            id="ProImpact"
            name="ProImpact"
            className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
            value={formData.ProImpact}
            onChange={handleInputChange}
            />
            <div className="text-red-600 text-sm">
              {errors.ProImpact}
            </div>
          </div>
        </section>
        <div>
            <label className="text-gray-950">Project Timeline :</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2">
                {/* Calendar Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" fill="#fff" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="#6366f1" strokeWidth="2"/>
                </svg>
              </span>
              <input
                type="date"
                name="start"
                className="px-2 py-1 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-black"
                value={timeline.start}
                onChange={handleTimelineChange}
                required
              />
              <span className="mx-2 text-gray-700">to</span>
              <input
                type="date"
                name="end"
                className="px-2 py-1 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-black"
                value={timeline.inProgress ? "" : timeline.end}
                onChange={handleTimelineChange}
                disabled={timeline.inProgress}
                required={!timeline.inProgress}
              />
              <label className="flex items-center ml-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  name="inProgress"
                  checked={timeline.inProgress}
                  onChange={handleTimelineChange}
                  className="mr-1"
                />
                In Progress
              </label>
            </div>
            {/* Show timeline summary */}
            <div className="text-xs text-gray-700 mt-1">
              {timeline.start &&
                (timeline.inProgress
                  ? `Start: ${formatDate(timeline.start)}, End: In Progress`
                  : timeline.end
                  ? `Start: ${formatDate(timeline.start)}, End: ${formatDate(timeline.end)}`
                  : "")}
            </div>
          </div>
          <label className="flex items-center ml-2 text-md text-black">
            Is this a Latest Project ?
            <input 
              type="checkbox"
              name="latestProject"
              className="ml-2 w-6"
              checked={formData.latestProject}
              onChange={handleInputChange}
            />
          </label>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default AddNewProModal;
