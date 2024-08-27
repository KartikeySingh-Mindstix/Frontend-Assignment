import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h1>Company</h1>
          <p>Specializes in providing high-quality, stylish products for your wardrobe</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>SHOP</h4>
            <ul>
              <li>All Collections</li>
              <li>Winter Edition</li>
              <li>Discount</li>
            </ul>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>FAQs</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h4>CONTACT US</h4>
            <ul>
              <li>FAQs</li>
              <li>Cookie Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &#169;2024 Company. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
