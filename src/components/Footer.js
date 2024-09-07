// src/components/Footer.js
import React from 'react';
import './css/Footer.css'; // Import file CSS jika ada

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Hana Nadira Savaira</p>
          {/* <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
