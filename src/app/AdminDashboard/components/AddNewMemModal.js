import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "./ShowApidatas/apiUrls";

// const AddNewMemModal = ({ isclose, getteams }) => {
//   const modalRef = useRef();

//   const handleClose = (e) => {
//     if (modalRef.current === e.target) {
//       isclose();
//     }
//   };

//   const handleKeyDown = useCallback(
//     (e) => {
//       if (e.key === "Escape") {
//         isclose();
//       }
//     },
//     [isclose]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleKeyDown]);
//   //

//   const [formData, setFormData] = useState({
//     UserName: "",
//     Email: "",
//     Designation: "",
//     LinkedIn: "",
//     Github: "",
//     file: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       file: file || null,
//     }));
//   };

//   const sendMessage = async () => {
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("username", formData.UserName);
//       formDataToSend.append("email", formData.Email);
//       formDataToSend.append("designation", formData.Designation);
//       formDataToSend.append("LinkedIn", formData.LinkedIn);
//       formDataToSend.append("Github", formData.Github);
//       if (formData.file) {
//         formDataToSend.append("image", formData.file);
//       }

//       console.log("Sending the following data:");
//       // console.log({
//       //   UserName: formData.UserName,
//       //   Email: formData.Email,
//       //   Designation: formData.Designation,
//       //   LinkedIn: formData.LinkedIn,
//       //   Github: formData.Github,
//       //   image: formData.file,
//       // });
//       const response = await axios.post(`${url}/api/Team`, formDataToSend);

//       console.log(response);
//       resetForm();
//       if (!response.data.success) {
//         console.log(response.data.error)
//       } else {
//         getteams();
//         isclose();
//         resetForm();
//         toast.success("Team member created successfully!");
//       }
//     } catch (error) {
//       console.log(error.message || "Failed to create admin");
//       console.log(error);
//     }
//   };
//   //
//   const resetForm = () => {
//     setFormData({
//       UserName: "",
//       Email: "",
//       Designation: "",
//       LinkedIn: "",
//       Github: "",
//       file: null,
//     });
//   };
//   return (
//     <div
//       ref={modalRef}
//       onClick={handleClose}
//       className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
//         <button className="self-end" onClick={isclose}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <h2 className="text-xl font-semibold text-gray-950">
//           Add New Team Member
//         </h2>

//         <section className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="UserName" className="text-gray-950">
//               UserName :
//             </label>
//             <br />
//             <input
//               type="text"
//               id="UserName"
//               name="UserName"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.UserName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="Email" className="text-gray-950">
//               Email :
//             </label>
//             <br />
//             <input
//               type="email"
//               id="Email"
//               name="Email"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.Email}
//               onChange={handleInputChange}
//             />
//             {/* <p className="text-sm text-red-500 font-bold">
//               Email must be unique
//             </p> */}
//           </div>
//           <div>
//             <label htmlFor="Designation" className="text-gray-950">
//               Designation :
//             </label>
//             <br />
//             <input
//               type="text"
//               id="Designation"
//               name="Designation"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.Designation}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div class="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
//             <label class="block">
//               <span className="text-gray-950">Upload file</span>
//               <input
//                 onChange={handleFileChange}
//                 name="Image"
//                 type="file"
//                 class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="LinkedIn" className="text-gray-950">
//               LinkedIn Link:
//             </label>
//             <br />
//             <input
//               type="text"
//               id="LinkedIn"
//               name="LinkedIn"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.LinkedIn}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="Github" className="text-gray-950">
//               Github Link:
//             </label>
//             <br />
//             <input
//               type="text"
//               id="Github"
//               name="Github"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.Github}
//               onChange={handleInputChange}
//             />
//           </div>
//         </section>

//         <button
//           className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
//           onClick={sendMessage}
//         >
//           Create Member
//         </button>
//       </div>
//     </div>
//   );
// };









const AddNewMemModal = ({ isclose, getteams }) => {
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

  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Designation: "",
    LinkedIn: "",
    Github: "",
    order: 0, // Added order field
    file: null,
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
      file: file || null,
    }));
  };

  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.UserName);
      formDataToSend.append("email", formData.Email);
      formDataToSend.append("designation", formData.Designation);
      formDataToSend.append("LinkedIn", formData.LinkedIn);
      formDataToSend.append("Github", formData.Github);
      formDataToSend.append("order", formData.order); // Include order field
      if (formData.file) {
        formDataToSend.append("image", formData.file);
      }

      const response = await axios.post(`${url}/api/Team`, formDataToSend);

      if (!response.data.success) {
        toast.error(response.data.error || "Error adding team member.");
      } else {
        getteams();
        isclose();
        resetForm();
        toast.success("Team member created successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An unexpected error occurred.");
      console.error("Error creating member:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      UserName: "",
      Email: "",
      Designation: "",
      LinkedIn: "",
      Github: "",
      order: "", // Reset order field
      file: null,
    });
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
          Add New Team Member
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
          <div>
            <label htmlFor="order" className="text-gray-950">
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
            />
          </div>
          <div>
            <label className="block">
              <span className="text-gray-950">Upload file</span>
              <input
                onChange={handleFileChange}
                name="Image"
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
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

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Create Member
        </button>
      </div>
    </div>
  );
};

export default AddNewMemModal;
