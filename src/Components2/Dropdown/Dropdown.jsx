import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // Create a separate CSS file for dropdown styles

const Dropdown = ({ segments }) => {
  return (
    <div className="dropdown-menu">
      {segments.map((segment, index) => (
        <div key={index} className="dropdown-segment">
          <h4 className="segment-title">{segment.segmentTitle}</h4>
          <ul className="segment-options">
            {segment.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <Link to={option.link}>{option.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
