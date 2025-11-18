import React, { useState } from "react";
import { caseStudies } from "../data/blogPosts";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from case studies
  const categories = [
    "All",
    ...new Set(caseStudies.map((study) => study.category)),
  ];

  // Filter case studies based on search and category
  const filteredStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="case-studies-page">
      {/* Case Studies Content */}
      <section className="case-studies-content">
        <div className="container">
          {/* Case Studies Header */}
          <section className="case-studies-hero section--sm">
            <div className="u-text-center">
              <h1 className="case-studies-hero__title">Case Studies</h1>
              <div className="case-studies-hero__underline"></div>
            </div>
          </section>

          {/* Main Content - Full Width */}
          <div className="case-studies-main-full">
            <div className="case-studies-grid">
              {filteredStudies.map((study) => (
                <article key={study.id} className="case-study-card">
                  <div className="case-study-card__image">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="case-study-card__img"
                    />
                    <div className="case-study-card__overlay">
                      <span className="case-study-card__category">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="case-study-card__content">
                    <h3 className="case-study-card__title">{study.title}</h3>
                    <p className="case-study-card__excerpt">{study.excerpt}</p>
                    <div className="case-study-card__meta">
                      <span className="case-study-card__date">{study.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredStudies.length === 0 && (
              <div className="no-results">
                <h3>No case studies found</h3>
                <p>Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;