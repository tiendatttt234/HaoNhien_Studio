import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomPage"; // Fixed typo: 'HomPage' to 'HomePage'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; // Adjust the path based on your project structure

const UserRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
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
