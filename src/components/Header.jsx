import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-300x180.png'

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<div className="logo">
						<Link to="/">
							<img src={logo} alt="IntMavens logo" className="logo-image" />
						</Link>
					</div>

					{/* Hamburger Menu Button */}
					<button 
						className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}
						onClick={toggleMobileMenu}
						aria-label="Toggle navigation menu"
						aria-expanded={isMobileMenuOpen}
					>
						<span className="hamburger__line"></span>
						<span className="hamburger__line"></span>
						<span className="hamburger__line"></span>
					</button>

					<nav className={`navigation ${isMobileMenuOpen ? 'navigation--open' : ''}`} aria-label="Main navigation">
						<ul>
							<li>
								<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
							</li>
							<li>
								<Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
							</li>
							<li className="dropdown">
								<span className="dropdown-link">Services</span>
								<ul className="dropdown-menu">
									<li><Link to="/services/application-modernization" onClick={() => setIsMobileMenuOpen(false)}>Application Modernization</Link></li>
									<li><Link to="/services/artificial-intelligence" onClick={() => setIsMobileMenuOpen(false)}>Artificial Intelligence</Link></li>
									<li><Link to="/services/cloud-migration" onClick={() => setIsMobileMenuOpen(false)}>Cloud Migration</Link></li>
									<li><Link to="/services/hybrid-cloud-integration" onClick={() => setIsMobileMenuOpen(false)}>Hybrid Cloud Integration</Link></li>
									<li><Link to="/services/cloud-optimization" onClick={() => setIsMobileMenuOpen(false)}>Cloud Optimization</Link></li>
									<li><Link to="/services/data-enablement-services" onClick={() => setIsMobileMenuOpen(false)}>Data Enablement Services</Link></li>
									<li className="dropdown">
										<span className="dropdown-link">BizTalk & AIS</span>
										<ul className="dropdown-menu">
											<li><Link to="/services/biztalk-azureintegrationservices-ais" onClick={() => setIsMobileMenuOpen(false)}>BizTalk Azure Integration Services</Link></li>
											<li><Link to="/services/biztalk-health-check" onClick={() => setIsMobileMenuOpen(false)}>BizTalk Health Check</Link></li>
											<li><Link to="/services/biztalk-modernization-assessment" onClick={() => setIsMobileMenuOpen(false)}>BizTalk Modernization Assessment</Link></li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
							</li>
							<li>
								<Link to="/resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
							</li>
							<li>
								<Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
							</li>
						</ul>
					</nav>

					<div className="header-contact">
						<Link to="/contact" className="btn btn--primary">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
