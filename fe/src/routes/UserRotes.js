// UserRoutes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomPage";

const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Có thể thêm các route khác ở đây */}
      </Routes>
    </Router>
  );
};

export default UserRoutes;
