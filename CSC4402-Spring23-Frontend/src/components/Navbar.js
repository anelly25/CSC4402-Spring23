import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-container">
          <ul className="navbar-menu">
            <li>
              <Link to="/" className="navbar-logo" id="navbarItem">
                <img src="/zetong-li-mVqTumQH-c0-unsplash.jpg" alt="Trucker" />
                TigerTruck
              </Link>
            </li>
            <li className="home">
              <Link to="/">Home</Link>
            </li>
            <li className="about">
              <Link to="/about">About</Link>
            </li>
            <li className="profile">
              <Link to="/profile">
                Profile
                <img
                  className="userPic"
                  src="/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                  alt="UserPic"
                />
              </Link>
            </li>
          </ul>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
