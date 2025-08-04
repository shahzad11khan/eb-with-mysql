import axios from "axios";
import Link from "next/link";
import React, { useRef, useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom"; // Assuming you have React Router for the Link component
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_Verify } from "../ShowApidatas/apiUrls";

const VarifyModal = ({ isclose, getadmins }) => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

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

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token.trim() !== "") {
      try {
        await axios.post(`${API_URL_Verify}`, { token });
        setVerified(true);
        isclose();
      } catch (error) {
        setError(true);
        console.log(error.response.data);
      }
    } else {
      toast.error("Token cannot be empty");
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col  text-white bg-slate-400 rounded-md w-3/6">
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
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <h1 className="text-4xl">Verify Email</h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter token"
              value={token}
              onChange={handleTokenChange}
              className="p-2 mt-4 rounded-md border border-gray-300"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-2 border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
            >
              Verify Token
            </button>
          </div>
          <h2 className="p-2 bg-orange-500 text-black">
            {token ? `${token}` : "no token"}
          </h2>

          {verified && (
            <div>
              <h2 className="text-2xl">Email Verified</h2>
              <Link href="/login">Login</Link>
            </div>
          )}
          {error && (
            <div>
              <h2 className="text-2xl bg-red-500 text-black">Error</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VarifyModal;
