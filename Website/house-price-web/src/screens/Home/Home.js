import React from "react";
import "./Home.css";

const HeroSection = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById("predict-price");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Predict Your Home's Value with <br />
          Precision!
        </h1>
        <p>
          Get accurate house price predictions using our advanced algorithm that
          analyzes 20+ different features.
        </p>
        <button className="download-btn" onClick={handleScrollToSection}>
          Let's Go!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
