import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTeamModal = ({ isclose, teamId, getteams }) => {
  console.log(teamId);
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Designation: "",
    Github: "",
    LinkedIn: "",
    order: 0,
    Image: "",
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

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Image: e.target.files[0],
    });
  };
  const API_URL = "/api/Team";
  const showalladmins = () => {
    axios
      .get(`${API_URL}/${teamId}`)
      .then((res) => {
        const teamData = res.data.Result;
        console.log(teamData);
        setFormData({
          UserName: teamData.username,
          Email: teamData.email,
          Designation: teamData.designation,
          Github: teamData.Github,
          LinkedIn: teamData.LinkedIn,
          order: teamData.order,
          Image: teamData.image,
        });
        setImagePreview(teamData.image);
      })

      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };
  useEffect(() => {
    showalladmins();
  }, []);

  const UpdateTeam = async () => {
    // Assuming formData is an object containing SenderEmail and SenderMessage properties
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.UserName);
    formDataToSend.append("email", formData.Email);
    formDataToSend.append("designation", formData.Designation);
    formDataToSend.append("Github", formData.Github);
    formDataToSend.append("LinkedIn", formData.LinkedIn);
    formDataToSend.append("order", formData.order);
    if (formData.Image) {
      formDataToSend.append(
        "image",
        formData.Image ? formData.Image : imagePreview
      );
    }

    console.log(
      formData.UserName,
      formData.Email,
      formData.Designation,
      formData.Image
    );
    try {
      const response = await axios.put(`${API_URL}/${teamId}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      toast.success("Team member updated successfully");
      isclose();
      getteams();
      setFormData({
        UserName: "",
        Email: "",
        Designation: "",
        Github: "",
        LinkedIn: "",
        order: 0,
        Image: "",
      });
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Error updating admin");
    }

    // Here you can add your logic to send the message, e.g., API call
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
        <h2 className="text-xl font-semibold text-gray-950">
          Update Team Record
        </h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="UserName" className="text-gray-950">
              UserName :
            </label>
            <br />
            <input
              type="text"
              id="UserName"
              name="UserName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.UserName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Email" className="text-gray-950">
              Email :
            </label>
            <br />
            <input
              type="email"
              id="Email"
              name="Email"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Designation" className="text-gray-950">
              Designation :
            </label>
            <br />
            <input
              type="text"
              id="Designation"
              name="Designation"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Designation}
              onChange={handleInputChange}
            />
          </div>

          <div className="">
            <label htmlFor="Order" className="text-gray-950">
              order :
            </label>
            <br />
            <input
              type="number"
              id="order"
              name="order"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.order}
              onChange={handleInputChange}
              min={1}
            />
          </div>

          <div>
            <label htmlFor="LinkedIn" className="text-gray-950">
              LinkedIn Link:
            </label>
            <br />
            <input
              type="text"
              id="LinkedIn"
              name="LinkedIn"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.LinkedIn}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="Github" className="text-gray-950">
              Github Link:
            </label>
            <br />
            <input
              type="text"
              id="Github"
              name="Github"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Github}
              onChange={handleInputChange}
            />
          </div>

        </section>
        <section className="w-5/6 m-auto flex pb-6 rounded-full">
          <div class="mt-1 px-3 py-1.5 w-full rounded-full border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
            <label class="block">
              <span className="text-gray-950">Upload file</span>
              <input
                onChange={handleFileChange}
                type="file"
                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
          </div>




          <div className="w-[200px] h-24 mb-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt={`Profile Picture of ${imagePreview}`}
                className="profile-picture"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                {/* <span className="text-gray-400">No Image</span> */}
                <img
                  src="https://static.thenounproject.com/png/363639-200.png"
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )}
          </div>
        </section>
        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={UpdateTeam}
        >
          Update Member
        </button>
      </div>
    </div>
  );
};

export default UpdateTeamModal;
