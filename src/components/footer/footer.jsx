import React from 'react';
import './footer.css';
import logo from '../../assets/Content.png';
 
 
const Footer = () => {
  return (
    <footer className="footer">
      <p>  
        <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      </p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/vehicles">All Vehicles</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </footer>
  );
};

export default Footer;