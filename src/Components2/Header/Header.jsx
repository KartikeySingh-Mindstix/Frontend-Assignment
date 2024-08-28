import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectHeader } from '../../Features/Header/headerSlice';
import Dropdown from '../Dropdown/Dropdown';



  
  const Header = () => {
    const {navigationTabs} = useSelector(selectHeader);

  
    return (
      <header className="header-container">
        {/* Left Section: Logo */}
        <div className="header-left">
          <Link to="/">
            <div className="logo">
              <span className="custom-logo-text">MyBrand</span> 
            </div>
          </Link>
        </div>
  
        {/* Center Section: Navigation Menu */}
        <div className="header-center">
          <nav className="nav-links">
            <ul>
              {navigationTabs.map((tab, index) => (
                <li key={index} className="dropdown_section">
                  <div>
                    <Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }} to={tab.link}>
                      <div className='dropdown_title'>{tab.title}</div>
                    </Link>
                    {tab.type === "dropdown" && <Dropdown  segments={tab.dropdown} />}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
  
        {/* Right Section: Search and Icons */}
        <div className="header-right">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="icon cart-icon with-notification">🛒</span>
          <span className="icon cart-icon with-notification">Login</span>
        </div>
      </header>
    );
  };
export default Header;




