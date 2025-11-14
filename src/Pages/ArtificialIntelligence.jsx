import React from 'react'
import aiImage1 from '../assets/images/artificial-intelligence-1.png'

const ArtificialIntelligence = () => {
	return (
		<div className="service-page">
			<section className="service-hero">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Artificial Intelligence Integration</h1>
						<p className="service-hero__subtitle">
							Transform your business with cutting-edge AI solutions. We help organizations leverage artificial intelligence to automate processes, gain insights, and drive innovation across all business functions.
						</p>
					</div>
				</div>
			</section>

			<section className="service-content">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">AI Solutions We Offer</h2>
							
							<div className="service-feature">
								<h3><strong>Machine Learning:</strong></h3>
								<p>Implement predictive analytics and intelligent automation to optimize business processes.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Natural Language Processing:</strong></h3>
								<p>Deploy chatbots, sentiment analysis, and document processing solutions.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Computer Vision:</strong></h3>
								<p>Integrate image recognition, quality control, and visual inspection systems.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Data Analytics:</strong></h3>
								<p>Transform raw data into actionable insights with advanced analytics platforms.</p>
							</div>

							<div className="service-feature">
								<h3><strong>AI Strategy:</strong></h3>
								<p>Develop comprehensive AI roadmaps aligned with your business objectives.</p>
							</div>
						</div>
						
					<div className="service-content__image">
						<img src={aiImage1} alt="Artificial Intelligence Solutions" className="service-image" />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ArtificialIntelligence