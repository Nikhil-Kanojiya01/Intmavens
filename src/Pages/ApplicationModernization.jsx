import React from 'react'
import appModImage1 from '../assets/images/application-modernization-1.png'
import appModImage2 from '../assets/images/application-modernization-2.webp'
import appModImage3 from '../assets/images/application-modernization-3.jpg'

const ApplicationModernization = () => {
	return (
		<div className="service-page">
			{/* Hero Section */}
			<section className="service-hero section--sm">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Application Modernization</h1>
						<p className="service-hero__subtitle">
							Transform your legacy applications into modern, scalable, and efficient solutions. Our comprehensive modernization services help organizations migrate from outdated systems to cloud-native architectures that drive business growth and innovation.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="service-content section--sm">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Our Modernization Approach</h2>
							
							<div className="service-feature">
								<h3><strong>Legacy Assessment & Strategy:</strong></h3>
								<p>Comprehensive evaluation of your existing applications, identifying modernization opportunities and developing a strategic roadmap for transformation.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Architecture Redesign:</strong></h3>
								<p>Transform monolithic applications into microservices architecture, enabling better scalability, maintainability, and faster time-to-market.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Cloud-Native Development:</strong></h3>
								<p>Leverage containerization, serverless computing, and cloud-native technologies to build resilient and scalable applications.</p>
							</div>

							<div className="service-feature">
								<h3><strong>API-First Integration:</strong></h3>
								<p>Implement RESTful APIs and microservices architecture for seamless integration with modern systems and third-party services.</p>
							</div>

							<div className="service-feature">
								<h3><strong>DevOps & Automation:</strong></h3>
								<p>Establish CI/CD pipelines, automated testing, and infrastructure as code for faster, more reliable deployments.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={appModImage1} alt="Application Modernization Overview" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Modernization Benefits Section */}
			<section className="service-multicloud section--sm">
				<div className="container">
					<div className="service-multicloud__grid">
						<div className="service-content__image">
							<img src={appModImage2} alt="Modernization Benefits and Technologies" className="service-image" />
						</div>
						
						<div className="multicloud-content">
							<h2 className="service-section__title">Key Benefits of Modernization</h2>
							<p>
								Application modernization delivers tangible business value through improved performance, reduced costs, and enhanced user experiences. Our systematic approach ensures successful transformation with minimal business disruption.
							</p>
							
							<div className="multicloud-features">
								<div className="multicloud-feature">
									<h4>Enhanced Performance</h4>
									<ul>
										<li>Faster response times and improved user experience</li>
										<li>Better resource utilization and system efficiency</li>
										<li>Scalable architecture for growing business needs</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Cost Optimization</h4>
									<ul>
										<li>Reduced infrastructure and maintenance costs</li>
										<li>Lower total cost of ownership (TCO)</li>
										<li>Pay-as-you-use cloud pricing models</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Business Agility</h4>
									<ul>
										<li>Faster time-to-market for new features</li>
										<li>Improved development and deployment cycles</li>
										<li>Better adaptability to market changes</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Security & Compliance</h4>
									<ul>
										<li>Modern security frameworks and practices</li>
										<li>Enhanced data protection and privacy</li>
										<li>Compliance with industry standards</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technology Stack & Tools Section */}
			<section className="service-content section--light section--sm">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Modern Technology Stack</h2>
							
							<div className="service-feature">
								<h3><strong>Cloud Platforms:</strong></h3>
								<p>Expert implementation across AWS, Azure, and Google Cloud Platform with multi-cloud and hybrid strategies for optimal flexibility.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Containerization:</strong></h3>
								<p>Docker and Kubernetes orchestration for portable, scalable applications that run consistently across environments.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Modern Frameworks:</strong></h3>
								<p>Implementation using React, Angular, .NET Core, Spring Boot, and other cutting-edge frameworks for robust applications.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Database Modernization:</strong></h3>
								<p>Migration to modern databases including NoSQL, cloud-native databases, and distributed data architectures.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Integration Platforms:</strong></h3>
								<p>API gateways, event-driven architecture, and enterprise service buses for seamless system integration.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={appModImage3} alt="Modern Technology Stack" className="service-image" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ApplicationModernization