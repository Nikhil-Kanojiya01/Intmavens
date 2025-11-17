import React from 'react'
import biztalkImage1 from '../assets/images/BizTalkAndAIS-1.png'
import biztalkImage2 from '../assets/images/BizTalkToAIS-2.png'

const BiztalkAzureintegrationservices = () => {
	return (
		<div className="service-page">
			{/* Hero Section */}
			<section className="service-hero section--sm">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">BizTalk to Azure Integration Services Migration</h1>
						<p className="service-hero__subtitle">
							Seamlessly modernize your integration infrastructure with our proven BizTalk to Azure Integration Services migration approach. Our integration experts with 15+ years of industry experience help organizations transition to cloud-native integration solutions with zero downtime and optimized performance.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="service-content section--sm">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Empower your BizTalk</h2>
							
							<div className="service-feature">
								<h3><strong>Experience 24/7 Support:</strong></h3>
								<ul>
									<li>BizTalk LDL ESS Production Support</li>
									<li>ITSM - Incident Management</li>
								</ul>
							</div>

							<div className="service-feature">
								<h3><strong>Assessments:</strong></h3>
								<ul>
									<li>BizTalk Health Check – Finding and Remediation</li>
									<li>BizTalk to Azure Logic Apps Migration Compatibility and Solutions</li>
									<li>Application Modernization compatibility</li>
								</ul>
							</div>

							<div className="service-feature">
								<h3><strong>Trainings:</strong></h3>
								<ul>
									<li>Azure Integration Services – Logic Apps, Function App, API Management, Event Grid, Service Bus, Azure Data Factory (ADF)</li>
									<li>BizTalk Development and Administration</li>
								</ul>
							</div>

							<div className="service-feature">
								<h3><strong>Design and Development:</strong></h3>
								<ul>
									<li>Migrate to Azure Integration Services (AIS) or Upgrade to BizTalk 2020</li>
									<li>Design Hybrid Integration – On-Prem & Azure</li>
									<li>SaaS Integration with Azure Logic Apps</li>
									<li>Application Modernization</li>
									<li>Reliability – HA & DR Setup</li>
								</ul>
							</div>

							<div className="service-feature">
								<h3><strong>Consulting:</strong></h3>
								<ul>
									<li>Our Experts with 15+ years of experience in BizTalk from 2006 to 2020 and now to Azure Integration Services are here to help you</li>
								</ul>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={biztalkImage1} alt="BizTalk and Azure Integration Services" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* BizTalk to Azure Integration Services Migration Section */}
			<section className="service-multicloud section--sm">
				<div className="container">
					<div className="service-multicloud__grid">
						<div className="service-content__image">
							<img src={biztalkImage2} alt="BizTalk to Azure Integration Services Migration" className="service-image" />
						</div>
						
						<div className="multicloud-content">
							<h2 className="service-section__title">BizTalk to Azure Integration Services Migration</h2>
							<p>
								At IntMavens, we follow a proven approach to Migration:
							</p>
							
							<div className="multicloud-features">
								<div className="multicloud-feature">
									<h4>BizTalk Modernization Assessment</h4>
									<ul>
										<li>Evaluate your BizTalk workloads to understand best possible Migration Path with least hiccups</li>
										<li>A more includes a downtime and risks to your service in Production and optimize in cost effective manner</li>
										<li>Fully sponsored 3 days assessment and workshop</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Create Landing Zones</h4>
									<ul>
										<li>Compliant with Industry led best practices</li>
										<li>Secure and Optimized Development Practices</li>
										<li>Centralized End-to-End Monitoring/Dashboarding/Alerting platform</li>
										<li>ITSM (Incident and Alert) Handling using SNOW</li>
										<li>DevOps for CI-CD</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Trainings</h4>
									<ul>
										<li>Curated Trainings for BizTalk to AIS (Architects & Developers)</li>
										<li>Azure Integration Services - Logic Apps, Function Apps, Event Grid, Service Bus, API Management, Azure Data Factory</li>
									</ul>
								</div>
								
								<div className="multicloud-feature">
									<h4>Migration Focus Areas</h4>
									<p>Comprehensive migration covering Modernization App, Modernization Event Bus Service Logic, AS Client Processing, Leading Zone Capability, Performance & Cost Optimization, and Rollback to AS-IS framework.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Ready to Modernize Section */}
			<section className="service-content section--sm">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Ready to Modernize Your Integration Infrastructure?</h2>
						<p className="service-hero__subtitle">
							Transform your BizTalk environment to modern Azure Integration Services with our proven migration methodology. Contact IntMavens today to begin your integration modernization journey and unlock the full potential of cloud-native integration capabilities.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default BiztalkAzureintegrationservices