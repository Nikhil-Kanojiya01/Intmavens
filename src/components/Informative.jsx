import React from 'react'
import informativeImage from '../assets/images/informative-image.png'

const Informative = () => {
	return (
		<section className="informative" id="informative">
			<div className="container">
				<div className="informative__inner">
					<div className="informative__visual">
						<img 
							src={informativeImage} 
							alt="Business Analytics and Assessment Services" 
							className="informative__image"
						/>
					</div>
					<div className="informative__content">
					<div>
						<h3 className="informative__title">
							Explorer Our Fully Sponsored 1 Day Assessments.
						</h3>
						<div className="informative__underline"></div>
						<ul className="informative__list">
							<li className="informative__item">
								<strong>Well-Architecture Framework (WAF)</strong> Assessment
							</li>
							<li className="informative__item">
								<strong>Application Modernization Assessment</strong> with SWAT Analysis of different approaches
							</li>
							<li className="informative__item">
								<strong>Exclusive 1:1 Workshops</strong> to deep dive on your use cases with industry leading SMEs
							</li>
							<li className="informative__item">
								Build Developer Velocities with our Free sessions
							</li>
							<li className="informative__item">
								<strong>BizTalk Health Check</strong> – Findings and Remediation
							</li>
							<li className="informative__item">
								<strong>BizTalk to Azure Logic Apps MigrationCompatibility</strong> and possible approaches
							</li>
							<li className="informative__item">
								<strong>Database Migration Assessment</strong>to PaaS or SaaS solutions
							</li>
							<li className="informative__item">
								<strong>Data Warehouse Assessment</strong> – Legacy to Moderndata integration, enterprise data warehousing and big data analytics
							</li>
						</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Informative
