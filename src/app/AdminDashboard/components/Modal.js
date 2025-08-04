// export default Modal;
import React, { useRef, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./ShowApidatas/apiUrls";

const Modal = ({ isclose, getadmins, showModal }) => {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConformPassword: "",
    file: null,
  });

  // Show/hide password states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Reset form when modal opens
  useEffect(() => {
    setFormData({
      UserName: "",
      Email: "",
      Password: "",
      ConformPassword: "",
      file: null,
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setImagePreview(null); // Reset preview when modal opens
  }, [showModal]);

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file || null,
    }));
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.UserName);
      formDataToSend.append("email", formData.Email);
      formDataToSend.append("password", formData.Password);
      formDataToSend.append("confirmpassword", formData.ConformPassword);
      if (formData.file) {
        formDataToSend.append("Image", formData.file);
      }

      const response = await axios.post(
        `${url}/api/Users/singup`,
        formDataToSend
      );

      console.log(response.data);

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to create admin");
      } else {
        getadmins();
        isclose(); // Close the popup window
        toast.success("Admin created successfully!");
      }
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
        <h2 className="text-xl font-semibold text-gray-950">Add New Admin</h2>
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
              defaultValue=""
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
              defaultValue=""
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Password" className="text-gray-950">
              Password :
            </label>
            <br />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                name="Password"
                className="mt-1 px-3 py-1.5 w-full pr-10 rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                value={formData.Password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="ConformPassword" className="text-gray-950">
              ConformPassword :
            </label>
            <br />
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="ConformPassword"
                name="ConformPassword"
                className="mt-1 px-3 py-1.5 w-full pr-10 rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                value={formData.ConformPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
        </section>
        <div className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
          <label className="block" htmlFor="file">
            <span className="text-gray-950">Upload file</span>
            <input
              onChange={handleFileChange}
              type="file"
              id="file"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-32 rounded-md border"
              />
            </div>
          )}
        </div>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Create Admin
        </button>
      </div>
    </div>
  );
};

export default Modal;
