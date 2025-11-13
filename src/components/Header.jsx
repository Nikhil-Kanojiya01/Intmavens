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
							<li>
								<Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
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
