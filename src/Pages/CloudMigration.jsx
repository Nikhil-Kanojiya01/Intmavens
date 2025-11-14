import React from 'react'
import cloudImage1 from '../assets/images/cloud-migration-1.webp'

const CloudMigration = () => {
	return (
		<div className="service-page">
			<section className="service-hero">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Cloud Migration Services</h1>
						<p className="service-hero__subtitle">
							Seamlessly transition your business to the cloud with our comprehensive migration services. We ensure minimal downtime, maximum security, and optimal performance throughout your cloud journey.
						</p>
					</div>
				</div>
			</section>

			<section className="service-content">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Why Choose Cloud Migration?</h2>
							
							<div className="service-feature">
								<h3><strong>Cost Efficiency:</strong></h3>
								<p>Reduce infrastructure costs and eliminate the need for on-premises hardware maintenance.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Scalability:</strong></h3>
								<p>Scale your resources up or down based on demand without capital investments.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Enhanced Security:</strong></h3>
								<p>Benefit from enterprise-grade security features and compliance standards.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Improved Performance:</strong></h3>
								<p>Leverage high-performance infrastructure and global content delivery networks.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Business Continuity:</strong></h3>
								<p>Ensure reliable backup and disaster recovery solutions.</p>
							</div>
						</div>
						
					<div className="service-content__image">
						<img src={cloudImage1} alt="Cloud Migration Services" className="service-image" />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CloudMigration