"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAdminModal = ({ isclose, adminId, getadmins }) => {
  // console.log(adminId);
  const [imagePreview, setImagePreview] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConformPassword: "",
    Image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const API_URL = "/api/Users";

  // Fetch admin data and set preview
  const showalladmins = () => {
    axios
      .get(`${API_URL}/${adminId}`)
      .then((res) => {
        const adminData = res.data.result;
        setFormData({
          UserName: adminData.username,
          Email: adminData.email,
          Password: adminData.confirmpassword,
          ConformPassword: adminData.confirmpassword,
          Image: adminData.Image,
        });
        // Only set preview if image exists
        if (adminData.Image) {
          setImagePreview(
            adminData.Image.startsWith("http")
              ? adminData.Image
              : `/uploads/${adminData.Image}`
          );
        } else {
          setImagePreview(""); // or set to a default image URL if you want
        }
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };

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
    showalladmins();
  }, []);

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

  // Show preview for new uploads
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      Image: file,
    });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateAdmin = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.UserName);
    formDataToSend.append("email", formData.Email);
    formDataToSend.append("password", formData.Password);
    formDataToSend.append("confirmpassword", formData.ConformPassword);
    if (formData.Image) {
      formDataToSend.append(
        "Image",
        formData.Image ? formData.Image : imagePreview
      );
    }

    if (formData.Password !== formData.ConformPassword) {
      toast.warn("Password and ConfirmPassword is not match");
      return;
    }
    console.log(
      formData.UserName,
      formData.Email,
      formData.Password,
      formData.ConformPassword,
      formData.Image
    );
    try {
      const response = await axios.put(
        `${API_URL}/${adminId}`,
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

      toast.success("Admin updated successfully");
      getadmins();
      isclose();
      setFormData({
        UserName: "",
        Email: "",
        Password: "",
        ConformPassword: "",
        Image: "",
      });
      router.push("/AdminDashboard/RegisterAdmin");
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Error updating admin");
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
        <h2 className="text-xl font-semibold text-gray-950">
          Update Admin Record
        </h2>

        <section className="grid grid-cols-2 gap-4">
          {/* image */}

          {/* end image */}
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
          <div className="relative">
            <label htmlFor="Password" className="text-gray-950">
              Password :
            </label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              name="Password"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black pr-10"
              value={formData.Password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute right-3 top-12 -translate-y-1/2 text-xl text-black bg-transparent border-none cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              style={{ padding: 0 }}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="relative">
            <label htmlFor="ConformPassword" className="text-gray-950">
              ConformPassword :
            </label>
            <br />
            <input
              type={showConformPassword ? "text" : "password"}
              id="ConformPassword"
              name="ConformPassword"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black pr-10"
              value={formData.ConformPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute right-3 top-12 -translate-y-1/2 text-xl text-black bg-transparent border-none cursor-pointer"
              onClick={() => setShowConformPassword((prev) => !prev)}
              tabIndex={-1}
              style={{ padding: 0 }}
            >
              {showConformPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div>
            <label className="block">
              <span className="text-gray-950">Upload file</span>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleFileChange}
              />
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt={`Profile Picture of ${formData.UserName}`}
                className="mt-2 w-24 h-24 object-cover rounded-md"
              />
            )}
            {/* {!imagePreview && (
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mt-2">
                <img
                  src="https://static.thenounproject.com/png/363639-200.png"
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )} */}
          </div>
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={updateAdmin}
        >
          Update Admin
        </button>
      </div>
    </div>
  );
};

export default UpdateAdminModal;
