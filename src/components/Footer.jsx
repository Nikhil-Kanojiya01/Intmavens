import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <div className="footer__main">
          <h3 className="footer__tagline">
            <span style={{ color: "#f1c111" }}>I</span>ntegration{" "}
            <span style={{ color: "#f1c111" }}>M</span>ade{" "}
            <span style={{ color: "#f1c111" }}>Easy</span>
          </h3>
          <div className="footer__contact">
            <a href="tel:+917972143020" className="footer__contact-item">
              <i className="fas fa-phone footer__contact-icon"></i>
              +91-7972143020
            </a>
            <a
              href="mailto:contactus@intmavens.com"
              className="footer__contact-item"
            >
              <i className="fas fa-envelope footer__contact-icon"></i>
              contactus@intmavens.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          Copyright © {new Date().getFullYear()}{" "}
          <span style={{ color: "#f1c111" }}>I</span>nt
          <span style={{ color: "#f1c111" }}>M</span>avens. All Rights Reserved.
        </p>
        <div className="footer__social" role="navigation" aria-label="Social links">
          <a href="tel:+917972143020" className="footer__social-link" title="Phone" aria-label="Phone">
            <i className="fas fa-phone" aria-hidden="true"></i>
          </a>
          <a href="mailto:contactus@intmavens.com" className="footer__social-link" title="Email" aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/917972143020" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="WhatsApp" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/IntMavens" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Facebook" aria-label="Facebook">
            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/IntMavens" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Twitter / X" aria-label="Twitter">
            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/company/intmavens-infotech/" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="LinkedIn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://youtube.com/@intmavens" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="YouTube" aria-label="YouTube">
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/intmavens" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="GitHub" aria-label="GitHub">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
