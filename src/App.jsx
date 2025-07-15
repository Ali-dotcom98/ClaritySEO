import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Audit from './Pages/Audit';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />        
        <Route path="/Audit" element={< Audit/>} />
      </Routes>
    </Router>
  );
};

export default App;
