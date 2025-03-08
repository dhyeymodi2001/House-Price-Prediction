import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="container">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          We’d love to hear from you. Send us a message.
        </p>

        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3 className="contact-title">Our Location</h3>
            <p className="contact-detail">
              4342 Queen St, Niagara Falls, ON L2E 7J7
            </p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3 className="contact-title">Phone Number</h3>
            <p className="contact-detail">+1 (647) 761-5235</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3 className="contact-title">Email Address</h3>
            <p className="contact-detail">dhyeymodi21@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
