import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Componenets/NavBar';
import SEODashboard from '../Componenets/SeoDashboard';
import Spinner from '../Componenets/Spinner';

const Audit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [auditDetail, setAuditDetail] = useState({});
  const [error, setError] = useState('');
  const url = location?.state?.url;

  useEffect(() => {
    const handleAudit = async () => {
      try {
        const res = await axios.post(
          'http://localhost:3000/audit',
          { url },
          { withCredentials: true }
        );
        console.log('Full response:', res.data);
        setAuditDetail(res.data);
      } catch (err) {
        if (err.request) {
          setError('Server not responding…  [ x_x ] ');

        } else {
          console.error('Audit failed', err);
          setError('Audit failed due to an internal error.');
        }
      }
    };

    if (!url) {
      navigate('/');
    } else {
      handleAudit();
    }
  }, [url, navigate]);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      <NavBar />

      {auditDetail?.Data ? (
        <SEODashboard data={auditDetail.Data} />
      ) : error ? (
        <div className="text-center text-red-400 mt-10 text-lg">{error}</div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Audit;
