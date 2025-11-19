import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-300x180.png'

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [openDropdowns, setOpenDropdowns] = useState(new Set())
	const headerRef = useRef(null)

	const toggleMobileMenu = (e) => {
		console.log('Hamburger clicked!', 'Current state:', isMobileMenuOpen, 'New state:', !isMobileMenuOpen)
		if (e) {
			e.preventDefault()
			e.stopPropagation()
		}
		setIsMobileMenuOpen(prevState => {
			console.log('State changing from', prevState, 'to', !prevState)
			return !prevState
		})
		// Close all dropdowns when closing mobile menu
		if (isMobileMenuOpen) {
			setOpenDropdowns(new Set())
		}
	}

	const toggleDropdown = (dropdownId, e) => {
		if (e) {
			e.preventDefault()
			e.stopPropagation()
		}
		
		// Only handle dropdown toggle on mobile screens
		if (window.innerWidth <= 768) {
			setOpenDropdowns(prev => {
				const newSet = new Set(prev)
				if (newSet.has(dropdownId)) {
					newSet.delete(dropdownId)
				} else {
					newSet.add(dropdownId)
				}
				return newSet
			})
		}
	}

	// Alternative handler for debugging
	const handleHamburgerClick = (e) => {
		console.log('Alternative handler triggered')
		toggleMobileMenu(e)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
		setOpenDropdowns(new Set()) // Close all dropdowns when mobile menu closes
	}

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (headerRef.current && !headerRef.current.contains(event.target)) {
				setIsMobileMenuOpen(false)
			}
		}

		if (isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'hidden' // Prevent background scroll
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'unset'
		}
	}, [isMobileMenuOpen])

	// Close mobile menu on window resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsMobileMenuOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<header className="header" ref={headerRef}>
			<div className="container">
				<div className="header-content">
					<div className="logo">
						<Link to="/">
							<img src={logo} alt="IntMavens logo" className="logo-image" />
						</Link>
					</div>

					{/* Hamburger Menu Button */}
					<button 
						type="button"
						className={`hamburger ${isMobileMenuOpen ? 'hamburger--active' : ''}`}
						onClick={handleHamburgerClick}
						onMouseDown={toggleMobileMenu}
						onTouchStart={toggleMobileMenu}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								toggleMobileMenu(e)
							}
						}}
						aria-label="Toggle navigation menu"
						aria-expanded={isMobileMenuOpen}
						aria-controls="main-navigation"
						tabIndex={0}
						style={{ pointerEvents: 'auto', zIndex: 1003 }}
					>
						{isMobileMenuOpen ? (
							<i className="fa-solid fa-xmark" style={{ pointerEvents: 'none' }}></i>
						) : (
							<i className="fa-solid fa-bars" style={{ pointerEvents: 'none' }}></i>
						)}
					</button>

					<nav 
						id="main-navigation"
						className={`navigation ${isMobileMenuOpen ? 'navigation--open' : ''}`} 
						aria-label="Main navigation"
						aria-hidden={!isMobileMenuOpen}
					>
						<ul>
							<li>
								<Link to="/" onClick={closeMobileMenu}>Home</Link>
							</li>
							<li>
								<Link to="/about" onClick={closeMobileMenu}>About Us</Link>
							</li>
							<li className={`dropdown ${openDropdowns.has('services') ? 'dropdown--open' : ''}`}>
								<span 
									className="dropdown-link" 
									onClick={(e) => toggleDropdown('services', e)}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											toggleDropdown('services', e)
										}
									}}
								>
									Services<span>▼</span>
								</span>
								<ul className="dropdown-menu">
									<li><Link to="/services/application-modernization" onClick={closeMobileMenu}>Application Modernization</Link></li>
									<li><Link to="/services/artificial-intelligence" onClick={closeMobileMenu}>Artificial Intelligence</Link></li>
									<li><Link to="/services/cloud-migration" onClick={closeMobileMenu}>Cloud Migration</Link></li>
									<li><Link to="/services/hybrid-cloud-integration" onClick={closeMobileMenu}>Hybrid Cloud Integration</Link></li>
									<li><Link to="/services/cloud-optimization" onClick={closeMobileMenu}>Cloud Optimization</Link></li>
									<li><Link to="/services/data-enablement-services" onClick={closeMobileMenu}>Data Enablement Services</Link></li>
									<li className={`dropdown ${openDropdowns.has('biztalk') ? 'dropdown--open' : ''}`}>
										<span 
											className="dropdown-link"
											onClick={(e) => toggleDropdown('biztalk', e)}
											role="button"
											tabIndex={0}
											onKeyDown={(e) => {
												if (e.key === 'Enter' || e.key === ' ') {
													toggleDropdown('biztalk', e)
												}
											}}
										>
											BizTalk & AIS<span>▼</span>
										</span>
										<ul className="dropdown-menu">
											<li><Link to="/services/biztalk-azureintegrationservices-ais" onClick={closeMobileMenu}>BizTalk Azure Integration Services</Link></li>
											<li><Link to="/services/biztalk-health-check" onClick={closeMobileMenu}>BizTalk Health Check</Link></li>
											<li><Link to="/services/biztalk-modernization-assessment" onClick={closeMobileMenu}>BizTalk Modernization Assessment</Link></li>
										</ul>
									</li>
								</ul>
							</li>
							<li className={`dropdown dropdown--manual ${openDropdowns.has('resources') ? 'dropdown--open' : ''}`}>
								<span 
									className="dropdown-link"
									onClick={(e) => toggleDropdown('resources', e)}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											toggleDropdown('resources', e)
										}
									}}
								>
									Resources<span>▼</span>
								</span>
                                <ul className="dropdown-menu">
                                    <li><Link to="/resources/blogs" onClick={closeMobileMenu}>Blogs</Link></li>
                                    <li><Link to="/resources/case-studies" onClick={closeMobileMenu}>Case Studies</Link></li>
                                </ul>
                              </li>
							<li>
								<Link to="/career" onClick={closeMobileMenu}>Career</Link>
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
