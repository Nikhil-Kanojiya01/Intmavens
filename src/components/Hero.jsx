import React from 'react'
import heroImage from '../assets/images/hero-image.png'

const Hero = () => {
	return (
		<section className="hero" id="home">
			<div className="container">
				<div className="hero-inner">
					<div className="hero-copy">
						<h2>Modernize your Business with our Integration Expertise</h2>
						<p>
							<span style={{color: '#f1c111'}}>I</span>nt<span style={{color: '#f1c111'}}>M</span>avens is one of India's fastest growing integration companies,
							enabling our customers to realize their full potential through
							Application Modernization, DevOps implementation and B2B Hybrid
							Integration (On-Prem & Cloud).
						</p>
						<div className="hero-cta">
							<a className="btn btn--primary" href="/contactus">Let's Connect</a>
						</div>
					</div>
					<div className="hero-visual">
						<img src={heroImage} alt="IntMavens Integration Solutions" className="hero-image" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero


