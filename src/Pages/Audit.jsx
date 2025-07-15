import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import NavBar from '../Componenets/NavBar';
import SEODashboard from '../Componenets/SeoDashboard';
const Audit = () => {
  const location = useLocation();
const navigate = useNavigate();
  const [AuditDetail, setAuditDetail] = useState({})
  const url = location?.state?.url; 

  
 useEffect(() => {
  const handleAudit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/audit", { url },{ withCredentials: true } );
      console.log("Full response:", res.data); 
      setAuditDetail(res.data);
    } catch (err) {
      console.error("Audit failed", err);
    }
  };

  if (!url) {
    navigate("/");
  } else {
    handleAudit();
  }
}, [url, navigate]);


  return (
    <>
        <div className='bg-[#0A0A0A] min-h-screen text-white'>
            <NavBar/>

            {AuditDetail?.Data ? (
  <div>
    <SEODashboard data={AuditDetail?.Data}/>
  </div>
) : (
  <div className="flex items-center justify-center px-3 gap-4 h-screen">
    {/* Spinner */}
    <svg
      className="h-6 w-6 animate-spin text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    {/* Status label */}
    <span className="text-gray-300">Running audit—please wait…</span>
  </div>
)}

        </div>
    </>
  );
};

export default Audit;
