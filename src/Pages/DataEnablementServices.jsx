import React from 'react'
import dataImage1 from '../assets/images/data-enablement-services-1.png'
import dataImage2 from '../assets/images/data-enablement-services-2.jpg'
import dataImage3 from '../assets/images/data-enablement-services-3.jpg'

const DataEnablementServices = () => {
	return (
		<div className="service-page">
			{/* Hero Section */}
			<section className="service-hero">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Data Enablement Services</h1>
						<p className="service-hero__subtitle">
							Transform your raw data into strategic business insights with our comprehensive data enablement services. We help organizations unlock the full potential of their data through advanced analytics, intelligent automation, and robust data governance frameworks.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="service-content">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Our Data Enablement Approach</h2>
							
							<div className="service-feature">
								<h3><strong>Data Strategy & Governance:</strong></h3>
								<p>Develop comprehensive data strategies with robust governance frameworks to ensure data quality, security, and compliance across your organization.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Data Architecture & Integration:</strong></h3>
								<p>Design and implement scalable data architectures that integrate disparate data sources for unified analytics and reporting capabilities.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Advanced Analytics & AI:</strong></h3>
								<p>Leverage machine learning, predictive analytics, and artificial intelligence to extract meaningful insights and drive data-driven decision making.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Data Visualization & BI:</strong></h3>
								<p>Create interactive dashboards and business intelligence solutions that make complex data accessible and actionable for all stakeholders.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Real-time Data Processing:</strong></h3>
								<p>Implement streaming analytics and real-time data processing to enable immediate insights and rapid response capabilities for your business.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={dataImage1} alt="Data Enablement Services Overview" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Data Analytics & Intelligence Section */}
			<section className="service-multicloud">
				<div className="container">
					<div className="service-multicloud__grid">
						<div className="service-content__image">
							<img src={dataImage2} alt="Data Analytics and Intelligence" className="service-image" />
						</div>
						
						<div className="multicloud-content">
							<h2 className="service-section__title">Data Analytics & Intelligence</h2>
							<p>
								Empower your organization with advanced analytics capabilities that transform raw data into strategic business advantages. Our comprehensive analytics solutions provide deep insights across all business functions and departments.
							</p>
							
							<div className="multicloud-features">
								<div className="multicloud-feature">
									<h4>Predictive Analytics</h4>
									<p>Forecast future trends and behaviors using sophisticated machine learning algorithms and statistical modeling techniques.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Customer Analytics</h4>
									<p>Gain deep understanding of customer behavior, preferences, and lifetime value to drive personalized experiences and retention.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Operational Intelligence</h4>
									<p>Optimize business operations through real-time monitoring, performance analytics, and automated decision-making processes.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Financial Analytics</h4>
									<p>Enhance financial planning, forecasting, and risk management with advanced analytical insights and reporting capabilities.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Data Governance & Security Section */}
			<section className="service-content section--light">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Data Governance & Security</h2>
							
							<div className="service-feature">
								<h3><strong>Data Quality Management:</strong></h3>
								<p>Implement comprehensive data quality frameworks to ensure accuracy, completeness, and consistency across all your data assets and systems.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Privacy & Compliance:</strong></h3>
								<p>Ensure regulatory compliance with GDPR, CCPA, and industry-specific requirements through robust privacy controls and automated monitoring.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Data Security:</strong></h3>
								<p>Protect sensitive data with advanced encryption, access controls, monitoring solutions, and comprehensive security protocols.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Master Data Management:</strong></h3>
								<p>Create single sources of truth for critical business data entities across the enterprise, ensuring consistency and reliability.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Data Lineage & Cataloging:</strong></h3>
								<p>Maintain comprehensive data catalogs with detailed lineage tracking for complete transparency, governance, and regulatory compliance.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={dataImage3} alt="Data Governance and Security" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Transform Your Data Section */}
			<section className="service-content">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Transform Your Data Into Strategic Assets</h2>
						<p className="service-hero__subtitle">
							Data enablement is the foundation of modern digital transformation. Let our experts help you unlock the full potential of your data assets and drive meaningful business outcomes. Contact IntMavens today to begin your data transformation journey.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default DataEnablementServices