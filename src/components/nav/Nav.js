import React from "react";
import logo from "../../AI/images/logo.svg";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="containers nav--flex">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Artificial Intelligence</h3>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu--icon">
          <i class="bi bi-list"></i>
        </div>
        <div className="nav--btn">
          <button className="btn nav--btn">Sing in</button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
