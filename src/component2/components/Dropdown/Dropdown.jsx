import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ segments }) => {
    return (
        <div className="dropdown_menu">
            {segments.map((segment, index) => (
                <div key={index} className="dropdown_segment">
                    <Link>
                        <h4 className="segment_title">{segment.segmentTitle}</h4>
                    </Link>

                    <ul className="segment_options">
                        {segment.options.map((option, optionIndex) => (
                            <li key={optionIndex}>
                                <Link
                                    className='opiton_link'
                                    to={option.link}
                                    style={option.style}
                                >
                                    {option.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
