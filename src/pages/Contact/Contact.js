// src/component/Contact/Contact.js
import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Get in Touch with Grow Organic India</h2>
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Green Street, New Delhi, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@groworganicindia.com</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.245356667144!2d77.20902133955077!3d28.613939173998566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e15c87fd3%3A0xffabf6f0f4a25e18!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1637170014530!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Grow Organic India Location"
        ></iframe>
      </div>
    </div>
  );
}