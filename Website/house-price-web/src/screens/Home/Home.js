import React from "react";
import "./Home.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Predict Your Home's Value with <br />
          AI Precision!
        </h1>
        <p>
          Get accurate house price predictions using our advanced algorithm that
          analyzes 20 different features.
        </p>
        <button className="download-btn">Let's Go!</button>
      </div>
    </section>
  );
};

export default HeroSection;
