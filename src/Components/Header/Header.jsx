import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      {/* Left Section: Logo */}
      <div className="header-left">
        <div className="logo">
          Logo
        </div>
      </div>

      {/* Center Section: Navigation Menu */}
      <div className="header-center">
        <nav className="nav-links">
          <ul>
            <li className='dropdown_section'>
              <div>
                <div className='dropdown_title'>Men</div>
                <div className='dropdown_menu'>
                </div>
              </div>  
            </li>
            <li className='dropdown_section'>
              <div>
                <div className='dropdown_title'>Men</div>
                <div className='dropdown_menu'>
                </div>
              </div>  
            </li>
            <li className='dropdown_section'>
              <div>
                <div className='dropdown_title'>Men</div>
                <div className='dropdown_menu'>
                </div>
              </div>  
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Section: Search and Icons */}
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-input" />
        <span className="icon search-icon">🔍</span>
        <span className="icon cart-icon with-notification">🛒</span>
      </div>
    </header>
  );
};

export default Header;
