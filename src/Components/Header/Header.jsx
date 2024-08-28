import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      {/* Left Section: Logo */}
      <div className="header-left">
        <Link to="/">
          <div className="logo">
            Logo
          </div>
        </Link>
      </div>

      {/* Center Section: Navigation Menu */}
      <div className="header-center">
        <nav className="nav-links">
          <ul>
            <li className='dropdown_section'>
              <div>
                <Link to="/men"><div className='dropdown_title'>Men</div></Link>
                <div className='dropdown_menu'>
                </div>
              </div>
            </li>
            <li className='dropdown_section'>
              <div>
                <Link to="/women"><div className='dropdown_title'>Women</div></Link>
                <div className='dropdown_menu'>
                </div>
              </div>
            </li>
            <li className='dropdown_section'>
              <div>
                <Link to="/children"><div className='dropdown_title'>Children</div></Link>
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
        <span className="icon cart-icon with-notification">🛒</span>
        <span className="icon cart-icon with-notification">Login</span>
      </div>
    </header>
  );
};

export default Header;
