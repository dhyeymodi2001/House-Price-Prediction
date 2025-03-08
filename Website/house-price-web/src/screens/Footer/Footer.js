import React from "react";
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Description */}
        <div className="footer-links">
          <h1 className="footer-heading2">Moddsoft</h1>
          <p className="footer-link2">
            Advanced home price
            <br /> prediction platform
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-link-list">
            <li>
              <a href="/home" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-resources">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-link-list">
            <li>
              <a href="/api" className="footer-link">
                API Documentation
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="footer-link">
                Kaggle Competition
              </a>
            </li>
            <li>
              <a href="/terms" className="footer-link">
                Medium Article
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="footer-social-icons">
            <a
              href="https://twitter.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Moddsoft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
