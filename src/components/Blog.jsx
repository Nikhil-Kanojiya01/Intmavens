import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  // Sort posts by date descending, convert date strings into Date objects for accurate sorting
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__header">
          <h2 className="blog__title">Our Latest Blog</h2>
          <div className="blog__underline"></div>
        </div>
        <div className="blog__grid">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to="/resources/blogs"
              state={{ selectedSlug: post.slug }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article className="blog-card">
                <div className="blog-card__image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card__img"
                  />
                  <div
                    className="blog-card__overlay"
                    style={{ backgroundColor: `${post.color || ""}20` }}
                  >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
