import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import logo from '../../assets/Content.png'; // Ensure logo path is correct

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/hero">Home</Link></li>
          <li><Link to="/allvehicles">All Vehicles</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/buy" className="btn">Buy</Link></li>
          <li><Link to="/sell" className="btn">Sell</Link></li>
          <li><Link to="/profile" className="btn"><i className="fas fa-user-circle"></i></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
