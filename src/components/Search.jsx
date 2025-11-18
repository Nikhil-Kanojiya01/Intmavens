import React, { useState } from 'react'

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        if (onSearch) {
            onSearch(searchTerm)
        }
    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
        if (onSearch) {
            onSearch(e.target.value)
        }
    }

    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Search</h3>
            <form onSubmit={handleSearch} className="search-widget">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
        </div>
    )
}

export default Search