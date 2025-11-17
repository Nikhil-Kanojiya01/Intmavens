import React from 'react'
import cloudImage1 from '../assets/images/cloud-optimization-1.png'
import cloudImage2 from '../assets/images/cloud-optimization-2.png'
import cloudImage3 from '../assets/images/cloud-optimization-3.jpg'

const CloudOptimization = () => {
	return (
		<div className="service-page">
			{/* Hero Section */}
			<section className="service-hero">
				<div className="container">
					<div className="service-hero__content">
						<h1 className="service-hero__title">Cloud Optimization</h1>
						<p className="service-hero__subtitle">
							Maximize your cloud investment with our comprehensive optimization services. We help organizations reduce costs, improve performance, and enhance security while ensuring optimal resource utilization across multi-cloud environments.
						</p>
					</div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="service-content">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Our Cloud Optimization Approach</h2>
							
							<div className="service-feature">
								<h3><strong>Cost Optimization:</strong></h3>
								<p>Implement intelligent cost management strategies to reduce cloud spending by 20-40% while maintaining performance and availability standards.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Performance Optimization:</strong></h3>
								<p>Enhance application performance through resource rightsizing, auto-scaling, and intelligent workload placement across cloud regions.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Security Optimization:</strong></h3>
								<p>Strengthen cloud security posture with advanced threat detection, compliance automation, and zero-trust architecture implementation.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Resource Optimization:</strong></h3>
								<p>Optimize compute, storage, and network resources through intelligent monitoring, automation, and predictive scaling technologies.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Multi-Cloud Optimization:</strong></h3>
								<p>Leverage the best features of multiple cloud providers while optimizing workload distribution and avoiding vendor lock-in.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={cloudImage1} alt="Cloud Optimization Overview" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Cloud Cost Management Section */}
			<section className="service-multicloud">
				<div className="container">
					<div className="service-multicloud__grid">
						<div className="service-content__image">
							<img src={cloudImage2} alt="Cloud Cost Management" className="service-image" />
						</div>
						
						<div className="multicloud-content">
							<h2 className="service-section__title">Cloud Cost Management</h2>
							<p>
								Take control of your cloud spending with our advanced cost optimization strategies. Our proven methodologies help enterprises achieve significant cost savings while maintaining operational excellence.
							</p>
							
							<div className="multicloud-features">
								<div className="multicloud-feature">
									<h4>Cost Monitoring & Analytics</h4>
									<p>Real-time cost tracking and detailed analytics to identify spending patterns and optimization opportunities.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Reserved Instance Optimization</h4>
									<p>Strategic reserved instance planning and management to maximize cost savings on predictable workloads.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Right-sizing Recommendations</h4>
									<p>Intelligent resource sizing recommendations based on actual usage patterns and performance requirements.</p>
								</div>
								
								<div className="multicloud-feature">
									<h4>Automated Cost Controls</h4>
									<p>Implement automated policies and guardrails to prevent cost overruns and enforce spending limits.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Performance & Security Optimization Section */}
			<section className="service-content section--light">
				<div className="container">
					<div className="service-content__grid">
						<div className="service-content__text">
							<h2 className="service-section__title">Performance & Security Optimization</h2>
							
							<div className="service-feature">
								<h3><strong>Application Performance Tuning:</strong></h3>
								<p>Optimize application architecture and infrastructure to achieve superior performance, reduced latency, and improved user experience.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Auto-scaling & Load Balancing:</strong></h3>
								<p>Implement intelligent auto-scaling and load balancing strategies to handle traffic spikes while optimizing resource costs.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Security Posture Assessment:</strong></h3>
								<p>Comprehensive security audits and continuous monitoring to identify vulnerabilities and ensure compliance with industry standards.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Disaster Recovery Optimization:</strong></h3>
								<p>Design and optimize disaster recovery strategies to minimize downtime and ensure business continuity in cloud environments.</p>
							</div>

							<div className="service-feature">
								<h3><strong>Compliance & Governance:</strong></h3>
								<p>Establish robust governance frameworks and automated compliance monitoring for regulatory requirements across industries.</p>
							</div>
						</div>
						
						<div className="service-content__image">
							<img src={cloudImage3} alt="Performance and Security Optimization" className="service-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Experience The Benefits Section */}
			<section className="service-content">
				<div className="container">
					<div className="u-text-center">
						<h2 className="service-section__title center">Experience The Benefits Of Cloud Optimization</h2>
						<p className="service-hero__subtitle">
							Cloud optimization isn't a one-time effort; it's an ongoing commitment to ensure your cloud environment is efficient, secure, and aligned with your business objectives. Contact IntMavens today to optimize your cloud investments and unlock the full potential of your digital infrastructure.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CloudOptimization;
