import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PatientDashboard from './pages/PatientDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        <Route
          path="/patient-dashboard"
          element={isLoggedIn ? <PatientDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admin-dashboard"
          element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
