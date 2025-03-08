import React, { useState, useEffect } from "react";
import "./Navbar.css";
import mainlogo from "../../images/main_logo.png";
import mainlogo2 from "../../images/main_logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust 50 to your desired scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img
          className="logo"
          src={isScrolled ? mainlogo : mainlogo2}
          alt="Main-Logo"
        />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#howItWorks">How It Works?</a>
          </li>
          <li>
            <a href="#sourceCode">Source Code</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#futurePlans">Future Plans</a>
          </li>
        </ul>
      </div>

      <div className="navbar-logo">
        <button className="download-btn1">Predict Price</button>
      </div>
    </nav>
  );
};

export default Navbar;
