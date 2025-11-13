import React from 'react'
import { services } from '../data/services'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<section className="services" id="services">
			<div className="container">
				<h3 className="services__title">Our Offerings</h3>
				<p className="services__subtitle mb-4">
					<span style={{color: '#f1c111'}}>I</span>nt<span style={{color: '#f1c111'}}>M</span>avens is started by a bunch of Integration and Data Experts with 16+ years of experience in designing and developing integrations with BizTalk and now in Azure Integration Services(AIS) and Data & Analytics Experts in MSBI using SSIS and now ADF, Synapse & PowerBI. We are working with many customers to realize their full potential through Application Modernization, DevOps implementation and B2B Hybrid Integration (On-Prem & Cloud). Currently our customers have successfully migrated and achieving zero downtime and minimal bugs with our expert assistance
				</p>
				<div className="services-grid">
					{services.map((service) => (
						<ServiceCard 
							key={service.id} 
							service={service}
							className="services__card"
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
