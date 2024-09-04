import React, { useState, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';

import CartIcon from '../../icons/cartIcon';

import axios from '../../Axios/axiosInstance';
const Header = () => {
    const { navigationTabs2 } = useSelector(state => state.header);
    const [categories, setCategories] = useState([]);
    console.log(categories);
    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const res = await axios.get('/products/categories')
                setCategories(res.data);

            } catch (error) {
                console.log(error)
            }
        }
        getAllCategories()
    }, [])


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
                            {/* {navigationTabs2.map((tab, index) => (
                                <li key={index} className="dropdown_section">
                                    <Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }} to={tab.link}>
                                        <div className='dropdown_title'>{tab.title}</div>
                                    </Link>
                                    {tab.type === "dropdown" && <Dropdown segments={tab.dropdown} />}
                                </li>
                            ))} */}
                            {categories.map((tab, index) => {

                                return (<li key={index} className="dropdown_section"><Link style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }} to={"/category/" + tab}><div className='dropdown_title'>{tab}</div></Link></li>)
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Right Section: Search and Icons */}
                <div className="header_right">
                    <input type="text" placeholder="Search" className="search_input" />
                    <span className="icon cart_icon with_notification"><CartIcon /></span>
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
                    <span className="icon cart_icon with_notification"><CartIcon /></span>
                    <span className="icon cart_icon with_notification">Login</span>
                </div>
            </div>
        </header>
    );
};
export default Header;




