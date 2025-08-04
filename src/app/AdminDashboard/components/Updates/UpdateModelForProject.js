import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_Projects } from "../ShowApidatas/apiUrls";

const UpdateProjectModal = ({ isclose, proId, getallprojects }) => {
  const modalRef = useRef();

  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    ProCategory: "",
    ProName: "",
    ProDiscription: "",
    Image: "",
    ProProblem: "",
    ProSolution: "",
    ProImpact: "",
    ProTeam: "",
    ProTechnology: "",
    ProTimeline: "",
    ProProccess: "",
    LatestProject: ""
  });

  const [timeline, setTimeline] = useState({
    start: "",
    end: "",
    inProgress: false,
  });

  const [wordCounts, setWordCounts] = useState({
    ProDiscription: 0,
    ProProblem: 0,
    ProSolution: 0,
    ProImpact: 0,
    ProProccess: 0,
  });

  const [errors, setErrors] = useState({
    ProDiscription: "",
    ProProblem: "",
    ProSolution: "",
    ProImpact: "",
    ProProccess: "",
  });

  const countWords = (text) => text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox
    }));

    if (Object.keys(wordCounts).includes(name)) {
      const words = countWords(value);
      setWordCounts((prev) => ({ ...prev, [name]: words }));
      setErrors((prev) => ({
        ...prev,
        [name]: words < 100 ? `Minimum words should be 100 (Current: ${words})` : "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        Image: file,
      }));
      // Use FileReader for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    const { name, value, checked } = e.target;

    if (name === "inProgress") {
      setTimeline((prev) => ({
        ...prev,
        inProgress: checked,
        end: checked ? "" : prev.end,
      }));
      setFormData((prev) => ({
        ...prev,
        ProTimeline: `${formatDate(timeline.start)} - ${checked ? "In Progress" : formatDate(timeline.end)}`,
      }));
    } else {
      const updatedTimeline = { ...timeline, [name]: value };
      setTimeline(updatedTimeline);

      setFormData((prev) => ({
        ...prev,
        ProTimeline: `${formatDate(updatedTimeline.start)} - ${updatedTimeline.inProgress ? "In Progress" : formatDate(updatedTimeline.end)}`,
      }));
    }
  };

  const handleClose = (e) => {
    if (modalRef.current === e.target) isclose();
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") isclose();
  }, [isclose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const fetchProjectData = async () => {
    try {
      const res = await axios.get(`${API_URL_Projects}/${proId}`);
      const data = res.data.Result;

      setFormData({
        ProName: data.ProjectName || "",
        ProCategory: data.ProjectCategory || "",
        ProDiscription: data.ProjectDescription || "",
        Image: data.Image || "",
        ProProblem: data.ProjectProblem || "",
        ProSolution: data.ProjectSolution || "",
        ProImpact: data.ProjectImpact || "",
        ProProccess: data.ProjectProccess || "",
        ProTeam: JSON.parse(data.ProjectTeam) || "",
        ProTechnology: JSON.parse(data.ProjectTechnology) || "",
        ProTimeline: data.ProjectTimeline || "",
        LatestProject : data.LatestProject || ""
      });

      const [start, end] = (data.ProjectTimeline || "").split(" - ");
      setTimeline({
        start: start || "",
        end: end === "In Progress" ? "" : end || "",
        inProgress: end === "In Progress",
      });

      const imageURL = data.Image?.startsWith("http")
        ? data.Image
        : `/uploads/${data.Image}`;
      setImagePreview(imageURL);

      setWordCounts({
        ProDiscription: countWords(data.ProjectDescription || ""),
        ProProblem: countWords(data.ProjectProblem || ""),
        ProSolution: countWords(data.ProjectSolution || ""),
        ProImpact: countWords(data.ProjectImpact || ""),
        ProProccess: countWords(data.ProjectProccess || ""),
      });

    } catch (err) {
      toast.error("Failed to fetch project data");
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const sendMessage = async () => {
    if (Object.values(wordCounts).some(count => count < 100)) {
      toast.error("All text sections must have at least 100 words.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("ProjectName", formData.ProName);
      formDataToSend.append("ProjectCategory", formData.ProCategory);
      formDataToSend.append("ProjectDescription", formData.ProDiscription);
      formDataToSend.append("ProjectProblem", formData.ProProblem);
      formDataToSend.append("ProjectSolution", formData.ProSolution);
      formDataToSend.append("ProjectImpact", formData.ProImpact);
      formDataToSend.append("ProjectTimeline", formData.ProTimeline);
      formDataToSend.append("ProjectProccess", formData.ProProccess);
      formDataToSend.append("LatestProject", formData.LatestProject ? "1" : "0"); // Send as "1" or "0"

      // Convert to JSON strings
      formDataToSend.append(
        "ProjectTeam",
        JSON.stringify(
          (Array.isArray(formData.ProTeam) ? formData.ProTeam : String(formData.ProTeam).split(",")).map(item => item.trim())
        )
      );
      formDataToSend.append(
        "ProjectTechnology",
        JSON.stringify(
          (Array.isArray(formData.ProTechnology) ? formData.ProTechnology : String(formData.ProTechnology).split(",")).map(item => item.trim())
        )
      );

      if (formData.Image && typeof formData.Image !== "string") {
        formDataToSend.append("Image", formData.Image);
      } else {
        formDataToSend.append("OldImage", formData.Image); // Optional fallback
      }

      await axios.put(`${API_URL_Projects}/${proId}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      toast.success("Project updated successfully");
      getallprojects();
      isclose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update project");
    }
  };

  return (
    <div ref={modalRef} onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <button className="self-end" onClick={isclose}>✖️</button>
        <h2 className="text-xl font-semibold text-gray-950">Update Project</h2>

        <section className="grid grid-cols-2 gap-4">
          {[
            { label: "Project Name", id: "ProName" },
            { label: "Category", id: "ProCategory" },
            { label: "Project Team", id: "ProTeam", placeholder: "Ali, Sara" },
            { label: "Technologies", id: "ProTechnology", placeholder: "React, Firebase" },
          ].map(({ label, id, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="text-gray-950">{label}:</label>
              <input
                type="text"
                id={id}
                name={id}
                placeholder={placeholder}
                className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border text-black"
                value={formData[id]}
                onChange={handleInputChange}
              />
            </div>
          ))}

          {/* File upload */}
          <div>
            <label className="block text-gray-950">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full mt-1 file:bg-blue-50 file:text-blue-700"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>

          {/* Textareas */}
          {["ProDiscription", "ProProblem", "ProSolution", "ProProccess", "ProImpact"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="text-gray-950">{field.replace("Pro", "Project ")}:</label>
              <textarea
                id={field}
                name={field}
                className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border text-black"
                value={formData[field]}
                onChange={handleInputChange}
              />
              <div className="text-red-600 text-sm">{errors[field]}</div>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <div>
          <label className="text-gray-950">Project Timeline:</label>
          <div className="flex items-center gap-2 mt-1">
            <input type="date" name="start" value={timeline.start} onChange={handleTimelineChange} className="text-black border px-2 py-1" />
            <span>to</span>
            <input type="date" name="end" value={timeline.inProgress ? "" : timeline.end} onChange={handleTimelineChange} disabled={timeline.inProgress} className="text-black border px-2 py-1" />
            <label className="ml-2 text-sm text-gray-800">
              <input type="checkbox" name="inProgress" checked={timeline.inProgress} onChange={handleTimelineChange} className="mr-1" />
              In Progress
            </label>
          </div>
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
            name="LatestProject"
            className="ml-2 w-6"
            checked={!!formData.LatestProject && formData.LatestProject !== "false"} // Show checked if value is true or "1"
            onChange={handleInputChange}
          />
        </label>

        <button className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400" onClick={sendMessage}>
          Update Project
        </button>
      </div>
    </div>
  );
};

export default UpdateProjectModal;
