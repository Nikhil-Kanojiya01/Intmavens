import { useState, useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import Search from "../components/Search";
import RecentPosts from "../components/RecentPost"; // Import the RecentPosts component
import Categories from "../components/Categories";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

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

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Open a post when navigated from another route with state (e.g. CaseStudies)
  const location = useLocation();
  console.log("Location by nikhil : ",location)
  useEffect(() => {
    if (location && location.state && location.state.selectedSlug) {
      const slug = location.state.selectedSlug;
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) setSelectedPost(post);
    }
    if (location && location.state && location.state.selectedId) {
      const id = location.state.selectedId;
      const post = blogPosts.find((p) => p.id === id);
      if (post) setSelectedPost(post);
    }
  }, []);

  return (
    <div className="blog-page">
      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {/* Blog Header (hidden when a post detail is open) */}
              {!selectedPost && (
                <section className="blog-hero section--sm">
                  <div className="container">
                    <div className="u-text-center">
                      <h1 className="blog-hero__title">Our Latest Blog</h1>
                      <div className="blog-hero__underline"></div>
                    </div>
                  </div>
                </section>
              )}
              {/* If a post is selected show details view, otherwise show grid */}
              {!selectedPost ? (
                <div className="blog-grid">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="blog-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedPost(post)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedPost(post);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="blog-card__image">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="blog-card__img"
                        />
                        <div className="blog-card__overlay">
                          <span className="blog-card__category">{post.category}</span>
                        </div>
                      </div>
                      <div className="blog-card__content">
                        <h3 className="blog-card__title">{post.title}</h3>
                        <p className="blog-card__excerpt">
                          {post.excerpt.split(" ").slice(0, 15).join(" ")}
                          {post.excerpt.split(" ").length > 15 && "..."}
                        </p>
                        <div className="blog-card__meta">
                          <span className="blog-card__date">{post.date}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="blog-details-container">
                  <article className="blog-details">
                    <div className="blog-details__image">
                      <img src={selectedPost.image} alt={selectedPost.title}  />
                    </div>
                    <h2 className="blog-details__title">{selectedPost.title}</h2>
                    <div className="blog-details__meta">
                      <span className="blog-details__category">{selectedPost.category}</span>
                      <span className="blog-details__date">{selectedPost.date}</span>
                    </div>
                    <div className="blog-details__content">
                      {selectedPost.content ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                      ) : (
                        <p>{selectedPost.excerpt}</p>
                      )}
                    </div>
                  </article>
                  <button
                    className="btn"
                    onClick={() => setSelectedPost(null)}
                    style={{ marginBottom: "1rem" }}
                  >
                    ← Back to posts
                  </button>
                </div>
              )}

              {/* No Results Message */}
              {filteredPosts.length === 0 && (
                <div className="no-results">
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
            {/* keep placeholder blog-details area for layout if needed */}

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
              />

              {/* Recent Posts Component */}
              <RecentPosts posts={blogPosts} limit={5} />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
