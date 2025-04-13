import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomPage"; // Fixed typo in your original code
import Footer from "../components/Footer/Footer";

const UserRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default UserRoutes;
