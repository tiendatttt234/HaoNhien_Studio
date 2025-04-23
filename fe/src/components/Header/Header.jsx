import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // Adjust path based on your structure
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // For search icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery); // Replace with your search logic
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
          <div className="hn-nav-link hn-dropdown">
            <Link to="/product" className="hn-dropdown-toggle">
              SẢN PHẨM
            </Link>
            <div className="hn-dropdown-menu">
              <a href="/noithat" className="hn-dropdown-item">
                Nội thất chung cư
              </a>
            </div>
          </div>
          <a href="/service" className="hn-nav-link">
            DỊCH VỤ
          </a>
          <a href="/new" className="hn-nav-link">
            TIN TỨC
          </a>
          <Link to="/support" className="hn-consult-button">ĐĂNG KÝ TƯ VẤN</Link>
          {/* Search form for mobile */}
          <form className="hn-search-container hn-search-mobile" onSubmit={handleSearch}>
            <input
              type="text"
              className="hn-search-input"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <button type="submit" className="hn-search-button" aria-label="Search button">
              <FaSearch className="hn-search-icon" />
            </button>
          </form>
        </nav>

        {/* Search form for desktop */}
        <form className="hn-search-container hn-search-desktop" onSubmit={handleSearch}>
          <input
            type="text"
            className="hn-search-input"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className="hn-search-button" aria-label="Search button">
            <FaSearch className="hn-search-icon" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;