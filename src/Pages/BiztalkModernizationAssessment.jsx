import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import Search from "../components/Search";
import Categories from "../components/Categories"; // Import the Categories component

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

  // Handle search from Search component
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle category selection from Categories component
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="blog-page">
      {/* Blog Content */}
      <section className="blog-content">
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

              {/* No Results Message */}
              {filteredPosts.length === 0 && (
                <div className="no-results">
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Search Component */}
              <Search 
                onSearch={handleSearch}
                placeholder="Search blog posts..."
              />

              {/* Categories Component */}
              <Categories 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
                showCounts={true}
                blogPosts={blogPosts}
              />

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