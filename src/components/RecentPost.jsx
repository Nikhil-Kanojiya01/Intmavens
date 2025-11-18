import React from 'react'

const RecentPosts = ({ posts, limit = 5 }) => {
    const recentPosts = posts.slice(0, limit)

    return (
        <div className="sidebar-widget">
            <h3 className="widget-title">Recent Posts</h3>
            <div className="recent-posts">
                {recentPosts.map((post) => (
                    <div key={post.id} className="recent-post">
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