import React from 'react'

const ServiceCard = ({ service, className = '' }) => {
	const { title, description, icon, } = service

	return (
		<article className={`service-card ${className}`}>
			<div className="service-card__icon">
				<i className={`service-card__icon-symbol ${icon}`}></i>
			</div>
			<div className="service-card__content">
				<h4 className="service-card__title">{title}</h4>
				<p className="service-card__description">{description}</p>
			</div>
		</article>
	)
}

export default ServiceCard