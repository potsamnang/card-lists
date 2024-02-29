import React from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/logo.webp";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={p1} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
