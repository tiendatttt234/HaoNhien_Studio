import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomPage"; // Fixed typo in path
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../pages/Product/Product";
import ProductByCategory from "../pages/PoductByCategory/ProductByCategory";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
// Component to conditionally render Header
const HeaderWrapper = () => {
  const location = useLocation();
  // Only render Header if not on the home page
  return location.pathname !== "/" ? <Header /> : null;
};

const UserRoutes = () => {
  return (
    <Router>
      <div>
        <HeaderWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/noithat" element={<ProductByCategory />} />
          <Route path="/detail" element={<ProductDetail />} />
          {/* Add other routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default UserRoutes;
