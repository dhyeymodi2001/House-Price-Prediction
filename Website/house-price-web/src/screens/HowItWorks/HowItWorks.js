import React from "react";
import { FaRegClipboard, FaBrain, FaClipboardCheck } from "react-icons/fa";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="howitworks" className="ai-prediction-section">
      <div className="container">
        <h2 className="section-heading">How Our Predictive Model Works</h2>
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-card">
            <FaRegClipboard className="step-icon" />
            <h3 className="step-title">Input Data</h3>
            <p className="step-description">
              Enter your property details including size, features, and
              condition
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <FaBrain className="step-icon" />
            <h3 className="step-title">AI Analysis</h3>
            <p className="step-description">
              Our model analyzes your data against thousands of real estate
              transactions
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <FaClipboardCheck className="step-icon" />
            <h3 className="step-title">Get Results</h3>
            <p className="step-description">
              Receive accurate price prediction based on current market
              conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
