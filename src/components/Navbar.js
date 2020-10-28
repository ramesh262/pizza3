import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Shop">Shop</a>
          </li>
          <li>
            <a href="#News">News</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
