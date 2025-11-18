import React from 'react'

const Categories = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <ul className="categories-list">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => onCategorySelect(category)}
                            className={`category-link ${selectedCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories