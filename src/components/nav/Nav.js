import React, { useState } from "react";
import logo from "../../AI/images/logo.svg";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="containers nav--flex">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Artificial Intelligence</h3>
        </div>
        <ul className="nav--list">
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

        <div className="flex--box">
          <div className="menu--icon" onClick={show}>
            <i class="bi bi-list"></i>
          </div>
          <div className="nav--btn">
            <button className="btns nav--btn">Sing in</button>
          </div>
        </div>

        {isOpen ? (
          <ul className="second--nav second--nav--active">
            <li>
              <a href="#home" onClick={close}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={close}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={close}>
                Services
              </a>
            </li>
            <li>
              <a href="#blog" onClick={close}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={close}>
                Contact
              </a>
            </li>
            <div className="close--btn" onClick={close}>
              <i class="bi bi-x-lg"></i>
            </div>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};
export default Nav;
