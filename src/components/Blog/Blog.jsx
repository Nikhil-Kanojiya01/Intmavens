import React from 'react'
import { blogPosts } from '../../data/blogPosts'

const Blog = () => {
	return (
		<section className="blog" id="blog">
			<div className="container">
				<h3 className="center">Latest Articles</h3>
				<div className="blog-list">
					{blogPosts.map((post) => (
						<article key={post.id} className="blog-card">
							<h4>{post.title}</h4>
							<p>{post.excerpt}</p>
							<a href={`/${post.slug}`}>Read more →</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog
