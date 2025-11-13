import React from 'react'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
	return (
		<section className="blog" id="blog">
			<div className="container">
				<div className="blog__header">
					<h2 className="blog__title">Our Latest Blog</h2>
					<div className="blog__underline"></div>
				</div>
				<div className="blog__grid">
					{blogPosts.map((post) => (
						<article key={post.id} className="blog__card">
							<div className="blog__card-image">
								<img 
									src={post.image} 
									alt={post.title}
									className="blog__image"
								/>
								<div 
									className="blog__card-overlay"
									style={{ backgroundColor: `${post.color}20` }}
								></div>
							</div>
							<div className="blog__card-content">
								<div className="blog__card-header">
									<span className="blog__category">{post.category}</span>
									<span className="blog__date">{post.date}</span>
								</div>
								<h3 className="blog__card-title">{post.title}</h3>
								<p className="blog__card-excerpt">{post.excerpt}</p>
								<a href={`/${post.slug}`} className="blog__card-link">
									Read More →
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog
