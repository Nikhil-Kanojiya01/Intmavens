import React from 'react'

const RecentPosts = ({ 
    posts, 
    limit = 5, 
    showImages = false,
    onPostClick 
}) => {
    const recentPosts = posts.slice(0, limit)

    const handlePostClick = (post) => {
        if (onPostClick) {
            onPostClick(post)
        }
    }

    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Recent Posts</h3>
            <div className="recent-posts">
                {recentPosts.map((post) => (
                    <div 
                        key={post.id} 
                        className="recent-post"
                        onClick={() => handlePostClick(post)}
                    >
                        {showImages && (
                            <div className="recent-post__image">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="recent-post__img"
                                />
                            </div>
                        )}
                        <div className="recent-post__content">
                            <h4 className="recent-post__title">{post.title}</h4>
                            <span className="recent-post__date">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentPosts