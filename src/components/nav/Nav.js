import React, { useState } from "react";
import logo from "../../AI/images/logo.svg";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
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
        {isOpen ? (
          <ul className="active--nav">
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
            <div className="close--btn">
              <i class="bi bi-x-lg" onClick={close}></i>
            </div>
          </ul>
        ) : null}
        <div className="flex--box">
          <div className="menu--icon">
            <i class="bi bi-list" onClick={open}></i>
          </div>
          <div className="nav--btn">
            <button className="btn nav--btn">Sing in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
