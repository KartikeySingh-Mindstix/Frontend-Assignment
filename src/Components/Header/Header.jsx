import { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import CartIcon from '../../icons/CartIcon/CartIcon';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';

const Header = () => {
  const [categories, setCategories] = useState([]);

  const dropdownNavStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 15px'
  };

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories');
        setCategories(res.data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const primaryCategories = categories.slice(0, 4);
  const extraCategories = categories.slice(4);

  return (
    <div className="header_container">
      <div className="header_main">
        {/* Left Section: Logo */}
        <div className="header_left">
          <Link to="/">
            <div className="logo">
              <img src={"https://img.logoipsum.com/280.svg"} alt="Logo" />
            </div>
          </Link>
        </div>

        {/* Center Section: Navigation Menu */}
        <div className="header_center">
          <div className="nav_sections">
            <div className="nav_items">
              {primaryCategories.map((tab, index) => (
                <div key={index} className="nav_item">
                  <Link className="nav_link" to={`/category/${tab.slug}`} reloadDocument>
                    {tab.name}
                  </Link>
                </div>
              ))}
              {extraCategories.length > 0 && (

                <Dropdown title={"More"} titleStyle={dropdownNavStyle}>
                  <div className="header_dropdown_section">
                    {extraCategories.map((extraTab, index) => (
                      <div key={index} className="dropdown_item">
                        <Link className="header_dropdown_link" to={`/category/${extraTab.slug}`} reloadDocument>
                          {extraTab.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Dropdown>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Search and Icons */}
        <div className="header_right">
          <SearchBar />
          <div className="icon_container">
            <div className="cart_link">
              <div className="cart_icon">
                <CartIcon />
              </div>
            </div>
            <div className="user_icon">
              <IoPersonOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
