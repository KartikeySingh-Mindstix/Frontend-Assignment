import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectHeader } from '../../Features/Header/headerSlice';
import Dropdown from '../Dropdown/Dropdown';




const Header = () => {
    const { navigationTabs2 } = useSelector(selectHeader);


    return (
        <header className="header_container">
            <div className="header_main">
                {/* Left Section: Logo */}
                <div className="header_left">
                    <Link to="/">
                        <div className="logo">
                            <img src={"https://img.logoipsum.com/280.svg"} />
                        </div>
                    </Link>
                </div>

                {/* Center Section: Navigation Menu */}
                <div className="header_center">
                    <nav className="nav_links">
                        <ul>
                            {navigationTabs2.map((tab, index) => (
                                <li key={index} className="dropdown_section">
                                    <Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }} to={tab.link}>
                                        <div className='dropdown_title'>{tab.title}</div>
                                    </Link>
                                    {tab.type === "dropdown" && <Dropdown segments={tab.dropdown} />}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right Section: Search and Icons */}
                <div className="header_right">
                    <input type="text" placeholder="Search" className="search_input" />
                    <span className="icon cart_icon with_notification">🛒</span>
                    <span className="icon cart_icon with_notification">Login</span>
                </div>
            </div>
            <div className="header_main-sm">
                {/* Left Section: Logo */}
                <div className="header_left">
                    <Link to="/">
                        <div className="logo">
                            <img src={'https://img.logoipsum.com/280.svg'} />
                        </div>
                    </Link>
                </div>

                {/* Center Section: Navigation Menu */}
                <div className="header_center">
                    <nav className="nav_links">
                        <ul>
                            {navigationTabs2.map((tab, index) => (
                                <li key={index} className="dropdown_section">
                                    <Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }} to={tab.link}>
                                        <div className='dropdown_title'>{tab.title}</div>
                                    </Link>
                                    {tab.type === "dropdown" && <Dropdown segments={tab.dropdown} />}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right Section: Search and Icons */}
                <div className="header_right">
                    <input type="text" placeholder="Search" className="search_input" />
                    <span className="icon cart_icon with_notification">🛒</span>
                    <span className="icon cart_icon with_notification">Login</span>
                </div>
            </div>
        </header>
    );
};
export default Header;




