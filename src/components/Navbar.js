import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/img/logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="header-logo">
      <img src={logo} className="logo" alt="header logo" />
      <h3 className="nav-header">space travelers&apos; Hub</h3>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Rockets</Link></li>
      <li><Link to="/missionpage">Mission</Link></li>
      <li><Link to="/profilepage">MyProfile</Link></li>
    </ul>
  </div>
);

export default Navbar;
