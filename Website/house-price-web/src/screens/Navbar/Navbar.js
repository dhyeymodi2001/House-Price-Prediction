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

  const handleScrollToSection = () => {
    const section = document.getElementById("predict-price");
    section.scrollIntoView({ behavior: "smooth" });
  };

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
            <a href="#howitworks">How It Works?</a>
          </li>
          <li>
            <a href="https://github.com/dhyeymodi2001/House-Price-Prediction">
              Source Code
            </a>
          </li>
          <li>
            <a href="https://medium.com/@dhyeymodi21/building-a-house-price-prediction-app-from-dataset-to-deployment-aebf68a9ae5c">
              Blog
            </a>
          </li>
          <li>
            <a href="#contactus">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-logo">
        <button className="download-btn1" onClick={handleScrollToSection}>
          Predict Price
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
