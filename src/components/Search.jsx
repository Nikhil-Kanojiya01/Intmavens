import React, { useState } from 'react'

const Search = ({ onSearch, placeholder = "Search..." }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        if (onSearch) {
            onSearch(searchTerm)
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        if (onSearch) {
            onSearch(value) // Real-time search as user types
        }
    }

    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Search</h3>
            <div className="search-widget">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button 
                    onClick={handleSearch}
                    className="search-btn"
                    type="button"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search