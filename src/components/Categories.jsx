import React from 'react'

const Categories = ({ 
    categories, 
    selectedCategory, 
    onCategorySelect, 
    showCounts = false,
    blogPosts = [] 
}) => {
    const handleCategoryClick = (category) => {
        if (onCategorySelect) {
            onCategorySelect(category)
        }
    }

    const getCategoryCount = (category) => {
        if (!showCounts || !blogPosts.length) return null
        
        if (category === 'All') {
            return blogPosts.length
        }
        return blogPosts.filter(post => post.category === category).length
    }

    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <ul className="categories-list">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => handleCategoryClick(category)}
                            className={`category-link ${
                                selectedCategory === category ? "active" : ""
                            }`}
                        >
                            {category}
                            {showCounts && (
                                <span className="category-count">
                                    ({getCategoryCount(category)})
                                </span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories