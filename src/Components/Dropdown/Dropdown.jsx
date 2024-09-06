import { useState } from 'react';
import './Dropdown.css';
import { FiChevronDown } from 'react-icons/fi';

const Dropdown = ({ title, titleStyle, children }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="dropdown-container">
            <div
                className={`dropdown_title`}
                style={titleStyle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {title}
                <FiChevronDown className={`dropdown_icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </div>
            <div className="dropdown_menu" style={{display: isDropdownOpen ? "block" : "none"}}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
