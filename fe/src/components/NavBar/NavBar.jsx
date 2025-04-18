import React, { useState } from 'react';
import './NavBar.css';
import {
    FaShoppingBag,
    FaHome,
    FaTruck,
    FaList,
    FaFileAlt,
    FaUsers,
    FaPercentage,
    FaBoxes,
    FaCalculator,
    FaMobile,
    FaMapMarkerAlt,
    FaFile,
    FaChevronDown,
    FaChevronLeft
} from 'react-icons/fa';

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        { id: 1, title: 'Dashboard', icon: <FaHome />, hasDropdown: false },
        { id: 2, title: 'Products', icon: <FaTruck />, hasDropdown: true },
        { id: 3, title: 'Categories', icon: <FaList />, hasDropdown: true },
        { id: 4, title: 'Orders', icon: <FaFileAlt />, hasDropdown: true },
        { id: 5, title: 'Customers', icon: <FaUsers />, hasDropdown: true },
        { id: 6, title: 'Sales Promotion', icon: <FaPercentage />, hasDropdown: true },
        { id: 7, title: 'Inventory', icon: <FaBoxes />, hasDropdown: true },
        { id: 8, title: 'Accounts', icon: <FaCalculator />, hasDropdown: true },
        { id: 9, title: 'App', icon: <FaMobile />, hasDropdown: true },
        { id: 10, title: 'Store Locator', icon: <FaMapMarkerAlt />, hasDropdown: false },
        { id: 11, title: 'Stater Page', icon: <FaFile />, hasDropdown: false },
    ];

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const toggleDropdown = (id) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    return (
        <div className={`ebazar-navbar ${collapsed ? 'ebazar-collapsed' : ''}`}>
            <div className="ebazar-navbar-header">
                <div className="ebazar-navbar-logo">
                    <FaShoppingBag className="ebazar-logo-icon" />
                    {!collapsed && <span className="ebazar-logo-text">eBazar</span>}
                </div>
            </div>

            <div className="ebazar-navbar-menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="ebazar-menu-item">
                        <div
                            className="ebazar-menu-item-header"
                            onClick={() => item.hasDropdown && toggleDropdown(item.id)}
                        >
                            <div className="ebazar-menu-item-icon">{item.icon}</div>
                            {!collapsed && (
                                <>
                                    <div className="ebazar-menu-item-title">{item.title}</div>
                                    {item.hasDropdown && (
                                        <FaChevronDown
                                            className={`ebazar-dropdown-icon ${activeDropdown === item.id ? 'ebazar-active' : ''}`}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                        {/* Dropdown content would go here */}
                    </div>
                ))}
            </div>

            <div className="ebazar-navbar-footer">
                <button className="ebazar-collapse-btn" onClick={toggleCollapse}>
                    <FaChevronLeft className={`ebazar-collapse-icon ${collapsed ? 'ebazar-rotated' : ''}`} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;