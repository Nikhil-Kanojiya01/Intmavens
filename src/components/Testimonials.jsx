import React from 'react'
import { testimonials } from '../data/testimonials'
import Carousel from './Carousel'

const Testimonials = () => {
	const renderTestimonial = (testimonial) => (
		<div className="testimonial-card">
			<div className="testimonial-card__content">
				<div className="testimonial-card__quote">
					<i className="fas fa-quote-left testimonial-card__quote-icon"></i>
					<p className="testimonial-card__text">"{testimonial.testimonial}"</p>
				</div>
				<div className="testimonial-card__author">
					<div className="testimonial-card__author-info">
						<h4 className="testimonial-card__name">{testimonial.name}</h4>
						<p className="testimonial-card__position">{testimonial.position}</p>
						{testimonial.company && (
							<a 
								href={testimonial.website} 
								target="_blank" 
								rel="noopener noreferrer"
								className="testimonial-card__company"
							>
								{testimonial.company}
							</a>
						)}
					</div>
					<div className="testimonial-card__rating">
						{[...Array(5)].map((_, i) => (
							<i key={i} className="fas fa-star testimonial-card__star"></i>
						))}
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<section className="testimonials">
			<div className="container">
				<div className="testimonials__header">
					<h3 className="section-title">Our Client Testimonials</h3>
					<p className="testimonials__subtitle">
						See what our clients have to say about our work and partnership
					</p>
				</div>
				<Carousel
					items={testimonials}
					autoPlay={true}
					autoPlayInterval={6000}
					showDots={true}
					showArrows={true}
					className="testimonials-carousel"
					renderItem={renderTestimonial}
				/>
			</div>
		</section>
	)
}

export default Testimonials
