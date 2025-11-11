import React from 'react'
import { services } from '../../data/services'

const Services = () => {
	return (
		<section className="services" id="services">
			<div className="container">
				<h3 className="center">Our Services</h3>
				<div className="services-grid">
					{services.map((s) => (
						<article key={s.id} className="service-card">
							<h4>{s.title}</h4>
							<p>{s.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
