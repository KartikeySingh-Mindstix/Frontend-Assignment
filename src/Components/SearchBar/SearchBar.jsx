import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import "./SearchBar.css"
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const handleClearSearch = () => {
        setSearchQuery('');
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div>
            <div className="search_input_container">
                <input
                    type="search"
                    placeholder="Search"
                    className="search_input"
                    value={searchQuery}
                    onKeyDown={handleSearch}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <FiSearch className="search_icon" />
            </div>
        </div>
    )
}

export default SearchBar