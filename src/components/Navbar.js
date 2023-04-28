/* eslint-disable react/self-closing-comp */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/img/logo.png';

const Navbar = () => (
  <div className="navbar">
    <div className="header-logo">
      <img src={logo} className="logo" alt="header logo" />
      <h3 className="nav-header">space travelers&apos; Hub</h3>
    </div>
    <ul className="nav-links">
      <li className="nav-li">
        <NavLink className="nav-link" to="/">
          Rockets
        </NavLink>
      </li>
      <li className="nav-li">
        <NavLink className="nav-link" to="/missionpage">
          Mission
        </NavLink>
      </li>
      <div className="line"></div>
      <li className="nav-li">
        <NavLink className="nav-link" to="/profilepage">
          MyProfile
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
