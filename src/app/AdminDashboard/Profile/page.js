// "use client";
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Siderbar";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "next/image";
// import { isAuthenticated } from "@/app/helper/verifytoken";
// import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";

// const Profile = () => {
//   const Header = dynamic(() => import("../components/Header.js"), {
//     ssr: false,
//   });
//   const Sidebar = dynamic(() => import("../components/Siderbar.js"), {
//     ssr: false,
//   });
//   const userId = localStorage.getItem("userId");
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     UserName: "",
//     Email: "",
//     Password: "",
//     ConformPassword: "",
//     Image: "",
//   });

//   // const [imagePreview, setImagePreview] = useState("");
//   // const [showPassword, setShowPassword] = useState(false);
//   // const [showConformPassword, setShowConformPassword] = useState(false);
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // const handleImageChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     Image: e.target.files[0],
//   //   });
//   // };

//   // const API_URL = "/api/Users";

//   // const showalladmins = (userId) => {
//   //   axios
//   //     .get(`${API_URL}/${userId}`)
//   //     .then((res) => {
//   //       const adminData = res.data.Result;
//   //       console.log(adminData);
//   //       setFormData({
//   //         UserName: adminData.username,
//   //         Email: adminData.email,
//   //         Password: adminData.confirmpassword,
//   //         ConformPassword: adminData.confirmpassword,
//   //         Image: adminData.Image,
//   //       });
//   //       setImagePreview(adminData.Image);
//   //     })
//   //     .catch((error) => {
//   //       console.log(`error : ${error}`);
//   //     });
//   // };
//   // useEffect(() => {
//   //   // Check if user is authenticated
//   //   if (!isAuthenticated()) {
//   //     router.push("/AdminDashboard/Login"); // Redirect to login page if not authenticated
//   //     return;
//   //   }

//   //   const userId = localStorage.getItem("userId");
//   //   if (userId) {
//   //     showalladmins(userId);
//   //   }
//   // }, []);
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const formDataToSend = new FormData();
//   //   formDataToSend.append("username", formData.UserName);
//   //   formDataToSend.append("email", formData.Email);
//   //   formDataToSend.append("password", formData.ConformPassword);
//   //   formDataToSend.append("confirmpassword", formData.ConformPassword);
//   //   if (formData.Image) {
//   //     formDataToSend.append(
//   //       "Image",
//   //       formData.Image ? formData.Image : imagePreview
//   //     );
//   //   }

//   //   if (formData.Password !== formData.ConformPassword) {
//   //     toast.warn("Password and ConfirmPassword is not match");
//   //     return;
//   //   }
//   //   console.log(
//   //     formData.UserName,
//   //     formData.Email,
//   //     formData.Password,
//   //     formData.ConformPassword,
//   //     formData.Image
//   //   );
//   //   try {
//   //     const response = await axios.put(`${API_URL}/${userId}`, formDataToSend, {
//   //       headers: {
//   //         "Content-Type": "multipart/form-data",
//   //       },
//   //     });

//   //     if (response.status !== 200) {
//   //       throw new Error("Network response was not ok");
//   //     }

//   //     toast.success("Admin updated successfully");
//   //   } catch (error) {
//   //     console.error("Error updating admin:", error);
//   //     toast.error("Error updating admin");
//   //   }
//   // };

//   const [imagePreview, setImagePreview] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConformPassword, setShowConformPassword] = useState(false);

//   useEffect(() => {
//     // Check if window is defined (i.e., the code is running on the client-side)
//     if (typeof window !== "undefined") {
//       // Check if user is authenticated
//       if (!isAuthenticated()) {
//         router.push("/AdminDashboard/Login"); // Redirect to login page if not authenticated
//         return;
//       }

//       const userId = localStorage.getItem("userId");
//       if (userId) {
//         showalladmins(userId);
//       }
//     }
//   }, []);

//   const showalladmins = async (userId) => {
//     try {
//       const res = await axios.get(`/api/Users/${userId}`);
//       const adminData = res.data.Result;
//       setFormData({
//         UserName: adminData.username,
//         Email: adminData.email,
//         Password: adminData.confirmpassword,
//         ConformPassword: adminData.confirmpassword,
//         Image: adminData.Image,
//       });
//       setImagePreview(adminData.Image);
//     } catch (error) {
//       console.log(`Error: ${error}`);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({
//       ...formData,
//       Image: e.target.files[0],
//     });
//     setImagePreview(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.Password !== formData.ConformPassword) {
//       toast.warn("Password and Confirm Password do not match");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("username", formData.UserName);
//     formDataToSend.append("email", formData.Email);
//     formDataToSend.append("password", formData.ConformPassword);
//     formDataToSend.append("confirmpassword", formData.ConformPassword);
//     if (formData.Image) {
//       formDataToSend.append("Image", formData.Image);
//     }

//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.put(`/api/Users/${userId}`, formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.status === 200) {
//         toast.success("Admin updated successfully");
//       } else {
//         throw new Error("Network response was not ok");
//       }
//     } catch (error) {
//       console.error("Error updating admin:", error);
//       toast.error("Error updating admin");
//     }
//   };

//   return (
//     <>
//       <Header className="min-w-full" />
//       <div className="flex  gap-4">
//         <Sidebar />
//         <main className="container mx-auto p-4">
//           <section>
//             <div className="flex justify-center items-center m-auto">
//               <div className="bg-white rounded-xl p-8 max-w-lg mx-auto shadow-xl shadow-custom-blue">
//                 <h2 className="text-2xl font-semibold mb-6 text-center">
//                   Profile
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4 flex flex-col items-center">
//                     {/* <label
//                       className="block text-gray-700 text-sm font-bold mb-2"
//                       htmlFor="profileImage"
//                     >
//                       Profile Image
//                     </label> */}
//                     <div className="w-24 h-24 mb-4">
//                       {imagePreview ? (
//                         <Image
//                           src={"/uploads/" + imagePreview}
//                           alt="Profile Preview"
//                           className="w-full h-full object-cover rounded-full"
//                           width={200}
//                           height={200}
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
//                           {/* <span className="text-gray-400">No Image</span> */}
//                           <Image
//                             src="https://static.thenounproject.com/png/363639-200.png"
//                             alt="Profile Preview"
//                             className="w-full h-full object-cover rounded-full"
//                             width={200}
//                             height={200}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   {/*  */}
//                   <div class="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
//                     <label class="block">
//                       <span className="text-gray-950">Upload file</span>
//                       <input
//                         type="file"
//                         class="mt-1 block w-full text-sm text-gray-500
//                         file:mr-4 file:py-2 file:px-4 file:rounded-full
//                          file:border-0 file:text-sm file:font-semibold
//                           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                         id="profileImage"
//                         name="profileImage"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                       />
//                     </label>
//                   </div>
//                   {/*  */}
//                   <div className="flex gap-3">
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="username"
//                       >
//                         Username
//                       </label>
//                       <input
//                         type="text"
//                         id="UserName"
//                         name="UserName"
//                         value={formData.UserName}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="email"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="Email"
//                         name="Email"
//                         value={formData.Email}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex gap-3">
//                     {/* <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="password"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.Password}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="confirmPassword"
//                       >
//                         Confirm Password
//                       </label>
//                       <input
//                         type="password"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.ConformPassword}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                       />
//                     </div> */}
//                     <div className="relative">
//                       <label htmlFor="Password" className="text-gray-950">
//                         Password :
//                       </label>
//                       <br />
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         id="Password"
//                         name="Password"
//                         className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//                         value={formData.Password}
//                         onChange={handleChange}
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8 0-1.05.202-2.052.567-2.971m4.243 10.908A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M20.426 9.54A9.978 9.978 0 0119 12c0 4.418-3.582 8-8 8-2.019 0-3.884-.597-5.433-1.625M12 5c2.019 0 3.884.597 5.433 1.625m1.64 8.86a9.978 9.978 0 001.393-5.485c0-4.418-3.582-8-8-8-2.019 0-3.884.597-5.433 1.625m4.242 10.907A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M3.5 3.5L20.5 20.5"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M2.458 12C3.732 7.943 7.522 5 12 5c2.045 0 3.974.623 5.56 1.688M20.542 12C19.268 16.057 15.478 19 11 19c-2.045 0-3.974-.623-5.56-1.688M12 5v.01"
//                             />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                     <div className="relative">
//                       <label
//                         htmlFor="ConformPassword"
//                         className="text-gray-950"
//                       >
//                         ConformPassword :
//                       </label>
//                       <br />
//                       <input
//                         type={showConformPassword ? "text" : "password"}
//                         id="ConformPassword"
//                         name="ConformPassword"
//                         className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//                         value={formData.ConformPassword}
//                         onChange={handleChange}
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
//                         onClick={() =>
//                           setShowConformPassword(!showConformPassword)
//                         }
//                       >
//                         {showConformPassword ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8 0-1.05.202-2.052.567-2.971m4.243 10.908A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M20.426 9.54A9.978 9.978 0 0119 12c0 4.418-3.582 8-8 8-2.019 0-3.884-.597-5.433-1.625M12 5c2.019 0 3.884.597 5.433 1.625m1.64 8.86a9.978 9.978 0 001.393-5.485c0-4.418-3.582-8-8-8-2.019 0-3.884.597-5.433 1.625m4.242 10.907A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M3.5 3.5L20.5 20.5"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M2.458 12C3.732 7.943 7.522 5 12 5c2.045 0 3.974.623 5.56 1.688M20.542 12C19.268 16.057 15.478 19 11 19c-2.045 0-3.974-.623-5.56-1.688M12 5v.01"
//                             />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between mt-5">
//                     <button
//                       type="submit"
//                       className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     >
//                       Update
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Profile;

"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConformPassword: "",
    Image: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check if window is defined (i.e., the code is running on the client-side)
    if (typeof window !== "undefined") {
      // Check if user is authenticated
      if (!isAuthenticated()) {
        router.push("/AdminDashboard/Login"); // Redirect to login page if not authenticated
        return;
      }

      const userId = localStorage.getItem("userId");
      if (userId) {
        showalladmins(userId);
      }
    }
  }, []);

  const showalladmins = async (userId) => {
    try {
      const res = await axios.get(`/api/Users/${userId}`);
      const adminData = res.data.Result;
      setFormData({
        UserName: adminData.username,
        Email: adminData.email,
        Password: adminData.confirmpassword,
        ConformPassword: adminData.confirmpassword,
        Image: adminData.Image,
      });
      setImagePreview(adminData.Image);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      Image: e.target.files[0],
    });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Password !== formData.ConformPassword) {
      toast.warn("Password and Confirm Password do not match");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.UserName);
    formDataToSend.append("email", formData.Email);
    formDataToSend.append("password", formData.ConformPassword);
    formDataToSend.append("confirmpassword", formData.ConformPassword);
    if (formData.Image) {
      formDataToSend.append("Image", formData.Image);
    }

    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.put(`/api/Users/${userId}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Admin updated successfully");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Error updating admin");
    }
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <main className="container mx-auto p-4">
          <section>
            <div className="flex justify-center items-center m-auto">
              <div className="bg-white rounded-xl p-8 max-w-lg mx-auto shadow-xl shadow-custom-blue">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Profile
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex flex-col items-center">
                    <div className="w-24 h-24 mb-4">
                      {imagePreview ? (
                        <Image
                          src={imagePreview}
                          alt="Profile Preview"
                          className="w-full h-full object-cover rounded-full"
                          width={200}
                          height={200}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                          <Image
                            src="https://static.thenounproject.com/png/363639-200.png"
                            alt="Profile Preview"
                            className="w-full h-full object-cover rounded-full"
                            width={200}
                            height={200}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
                    <label className="block">
                      <span className="text-gray-950">Upload file</span>
                      <input
                        type="file"
                        className="mt-1 block w-full text-sm text-gray-500 
                        file:mr-4 file:py-2 file:px-4 file:rounded-full
                         file:border-0 file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="UserName"
                        name="UserName"
                        value={formData.UserName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative">
                      <label htmlFor="Password" className="text-gray-950">
                        Password :
                      </label>
                      <br />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="Password"
                        name="Password"
                        className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                        value={formData.Password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
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
                              strokeWidth={2}
                              d="M12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9S17.52 3 12 3zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-2.5-5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
                            />
                          </svg>
                        ) : (
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
                              strokeWidth={2}
                              d="M12 6.5c-2.5 0-4.5 2-4.5 4.5S9.5 15.5 12 15.5s4.5-2 4.5-4.5S14.5 6.5 12 6.5zM12 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9S17.52 3 12 3zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="ConformPassword"
                        className="text-gray-950"
                      >
                        Confirm Password :
                      </label>
                      <br />
                      <input
                        type={showConformPassword ? "text" : "password"}
                        id="ConformPassword"
                        name="ConformPassword"
                        className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
                        value={formData.ConformPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
                        onClick={() =>
                          setShowConformPassword(!showConformPassword)
                        }
                      >
                        {showConformPassword ? (
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
                              strokeWidth={2}
                              d="M12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9S17.52 3 12 3zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-2.5-5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
                            />
                          </svg>
                        ) : (
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
                              strokeWidth={2}
                              d="M12 6.5c-2.5 0-4.5 2-4.5 4.5S9.5 15.5 12 15.5s4.5-2 4.5-4.5S14.5 6.5 12 6.5zM12 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9S17.52 3 12 3zm0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
