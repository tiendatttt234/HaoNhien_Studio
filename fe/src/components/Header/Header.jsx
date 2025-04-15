import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // Adjust path based on your structure
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="hn-header">
      <div className="hn-header-container">
        <Link to="/" className="hn-logo">
          <img src={logo} alt="Logo" className="hn-logo-img" />
        </Link>

        <button className="hn-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hn-menu-icon"></span>
        </button>

        <nav className={`hn-nav-head ${isMenuOpen ? 'hn-nav-open' : ''}`}>
          <Link to="/" className="hn-nav-link">
            TRANG CHỦ
          </Link>
          <Link to="/product" className="hn-nav-link">
            SẢN PHẨM
          </Link>
          <a href="#" className="hn-nav-link">
            DỊCH VỤ
          </a>
          <a href="#" className="hn-nav-link">
            TIN TỨC
          </a>
          <button className="hn-consult-button">ĐĂNG KÝ TƯ VẤN</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;