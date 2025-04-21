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
import Support from "../pages/Supports/Support";
import New from "../pages/News/New";
import NewByCate from "../pages/NewsByCategory/NewByCate";
import NewDetail from "../pages/NewDetails/NewDetail";
import Service from "../pages/Service/Service";
import ServiceDetail from "../pages/ServiceDetail/ServiceDeatil";
// Component to conditionally render Header
const HeaderWrapper = () => {
  const location = useLocation();
  // Không hiển thị Header nếu đang ở "/" hoặc "/newdetail"
  const noHeaderRoutes = ["/", "/newdetail"];
  return noHeaderRoutes.includes(location.pathname) ? null : <Header />;
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
          <Route path="/support" element={<Support />} />
          <Route path="/new" element={<New />} />
          <Route path="/newbycate" element={<NewByCate />} />
          <Route path="/newdetail" element={<NewDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicedetail" element={<ServiceDetail />} />
          {/* Add other routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default UserRoutes;
