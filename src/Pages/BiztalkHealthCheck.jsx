import React from 'react'
import healthCheckImage from '../assets/images/biztalk-health-check.png'

const BiztalkHealthCheck = () => {
	return (
		<div className="service-page">
			{/* Health Check Focus Areas Section */}
			<section className="service-content section--light section--sm">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Health Check Focus Areas</h2>
                        <p className="service-hero__subtitle">
							Gain valuable insights into your existing <span style={{ color: 'var(--primary)' }}>BizTalk</span> Server Environment. Aims to identify Potential Issues, Optimize Performance and Verify Configuration Best Practices.
						</p>
						<div className="health-check-diagram">
							<img src={healthCheckImage} alt="BizTalk Health Check Focus Areas" className="service-image" style={{ maxWidth: '70%', height: 'auto' }} />
						</div>
					</div>
				</div>
			</section>

			{/* Objectives Section */}
			<section className="service-content section--sm">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Objectives</h2>
						<p className="service-hero__subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
							Evaluate your BizTalk workloads to comply against Microsoft Best Practices. Get recommendations and assistance to reduce the downtime and risks to your service in Production and optimize performance.
						</p>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="service-content section--light section--sm">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">How it works?</h2>
						
						<div className="grid grid--3 grid--gap-lg" style={{ marginTop: '3rem' }}>
							<div className="health-check-column">
								<h3 className="health-check-column__title">Stakeholders</h3>
								<ul className="health-check-list">
									<li>BizTalk & SQL Admin</li>
									<li>Integration Lead/Architect</li>
									<li>Business Managers</li>
									<li>Leadership Team</li>
								</ul>
							</div>

							<div className="health-check-column">
								<h3 className="health-check-column__title">Data Collected</h3>
								<ul className="health-check-list">
									<li>Performance Counters with normal load</li>
									<li>BPM Report</li>
									<li>BizTalk & SQL Configurations</li>
									<li>Event Logs</li>
								</ul>
							</div>

							<div className="health-check-column">
								<h3 className="health-check-column__title">Deliverables</h3>
								<ul className="health-check-list">
									<li>Presentation and High/Med/Low Risk and Recommendations</li>
									<li>Detailed analysis Report</li>
									<li>Remediation plan</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Timelines Section */}
			<section className="service-content section--sm">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Timelines</h2>
						
						<div className="timeline-cards" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
							<div className="timeline-card timeline-card--day1">
								<div className="timeline-card__header">Day1</div>
								<div className="timeline-card__content">
									<ul>
										<li>Introduction</li>
										<li>Discussion with Stakeholders</li>
										<li>Data collection</li>
									</ul>
								</div>
							</div>
							
							<div className="timeline-card timeline-card--day2">
								<div className="timeline-card__header">Day2</div>
								<div className="timeline-card__content">
									<ul>
										<li>Data Analysis</li>
										<li>Report Creation</li>
									</ul>
								</div>
							</div>
							
							<div className="timeline-card timeline-card--day3">
								<div className="timeline-card__header">Day3</div>
								<div className="timeline-card__content">
									<ul>
										<li>Insights Presentation</li>
										<li>Migration Plan/Paths</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default BiztalkHealthCheck