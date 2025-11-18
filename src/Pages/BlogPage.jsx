import { useState } from "react";
import { blogPosts } from "../data/blogPosts";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from blog posts
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      {/* Blog Content */}
      <section className="blog-content section--sm">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {/* Blog Header */}
              <section className="blog-hero section--sm">
                <div className="container">
                  <div className="u-text-center">
                    <h1 className="blog-hero__title">Our Latest Blog</h1>
                    <div className="blog-hero__underline"></div>
                  </div>
                </div>
              </section>
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card__image">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="blog-card__img"
                      />
                      <div className="blog-card__overlay">
                        <span className="blog-card__category">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="blog-card__content">
                      <h3 className="blog-card__title">{post.title}</h3>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      <div className="blog-card__meta">
                        <span className="blog-card__date">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-widget">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <button className="search-btn">Search</button>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`category-link ${
                          selectedCategory === category ? "active" : ""
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts">
                  {blogPosts.slice(0, 5).map((post) => (
                    <div key={post.id} className="recent-post">
                      <div className="recent-post__content">
                        <h4 className="recent-post__title">{post.title}</h4>
                        <span className="recent-post__date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
