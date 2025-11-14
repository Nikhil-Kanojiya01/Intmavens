import React from 'react'
import appModImage1 from '../assets/images/application-modernization-1.png'

const ApplicationModernization = () => {
	return (
		<div className="service-page">
			<section className="service-hero">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Application Modernization</h1>
						<p className="service-hero__subtitle">
							Modernize your legacy applications to improve performance, scalability, and maintainability. Our comprehensive approach ensures your applications are ready for the digital future while maintaining business continuity.
						</p>
					</div>
				</div>
			</section>

			<section className="service-content">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Our Modernization Approach</h2>
							
							<div className="service-feature">
								<h3><strong>Assessment & Planning:</strong></h3>
								<p>Comprehensive evaluation of your current applications and modernization roadmap development.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Architecture Redesign:</strong></h3>
								<p>Refactor monolithic applications into microservices for better scalability and maintainability.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Cloud-Native Development:</strong></h3>
								<p>Leverage containerization, serverless computing, and cloud-native technologies.</p>
							</div>

							<div className="service-feature">
								<h3><strong>API Integration:</strong></h3>
								<p>Modernize with RESTful APIs and microservices architecture for better integration.</p>
							</div>

							<div className="service-feature">
								<h3><strong>DevOps Implementation:</strong></h3>
								<p>Implement CI/CD pipelines and automated testing for faster, reliable deployments.</p>
							</div>
						</div>
						
					<div className="service-content__image">
						<img src={appModImage1} alt="Application Modernization" className="service-image" />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ApplicationModernization