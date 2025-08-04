"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateVacancyModal = ({ isclose, vacId, getVacancies }) => {
  console.log(vacId);
  const [formData, setFormData] = useState({
    VacancyName: "",
    VacancyDiscription: "",
    Experience: "",
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const API_URL = "/api/Vacancies";
  const showalladmins = () => {
    axios
      .get(`${API_URL}/${vacId}`)
      .then((res) => {
        const vacData = res.data.Result;
        console.log(vacData);
        setFormData({
          VacancyName: vacData.VacancyTitle,
          VacancyDiscription: vacData.Requireds,
          Experience: vacData.Experience,
        });
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };
  useEffect(() => {
    showalladmins();
  }, []);

  const sendMessage = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("VacancyTitle", formData.VacancyName);
    formDataToSend.append("Requireds", formData.VacancyDiscription);
    formDataToSend.append("Experience", formData.Experience);
    console.log(
      formData.VacancyName,
      formData.VacancyDiscription,
      formData.Experience
    );
    try {
      const response = await axios.put(`${API_URL}/${vacId}`, formDataToSend);

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      toast.success("Vacancy updated successfully");
      isclose();
      getVacancies();
      setFormData({
        VacancyName: "",
        VacancyDiscription: "",
        Experience: "",
      });
    } catch (error) {
      console.error("Error updating Vacancy:", error);
      toast.error("Error updating Vacancy");
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
        <h2 className="text-xl font-semibold text-gray-950">Update Vacancy</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="VacancyName" className="text-gray-950">
              Vacancy Title :
            </label>
            <br />
            <input
              type="text"
              id="VacancyName"
              name="VacancyName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Experience" className="text-gray-950">
              Experience :
            </label>
            <br />
            <input
              type="number"
              id="Experience"
              name="Experience"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Experience}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="VacancyDiscription" className="text-gray-950">
              Description :
            </label>
            <br />
            <textarea
              id="VacancyDiscription"
              name="VacancyDiscription"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyDiscription}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter each bullet point on a new line"
            />
          </div>
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Update Vacancy
        </button>
      </div>
    </div>
  );
};

export default UpdateVacancyModal;
