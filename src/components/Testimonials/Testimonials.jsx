import React from 'react'
import { testimonials } from '../../data/testimonials'

const Testimonials = () => (
	<section className="testimonials">
		<div className="container">
			<h3 className="center">What our clients say</h3>
			<div className="testimonials-grid">
				{testimonials.map((t) => (
					<blockquote key={t.id} className="service-card">
						<p>“{t.testimonial}”</p>
						<footer>- {t.name}, {t.position}</footer>
					</blockquote>
				))}
			</div>
		</div>
	</section>
)

export default Testimonials
