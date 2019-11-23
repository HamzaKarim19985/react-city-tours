import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav class="navbar" alt="Product Logo">
      <img src={logo} />

      <ul class="nav-links">
        <li>
          <a href="/" class="nav-link">
            Home
          </a>
        </li>

        <li>
          <a href="/" class="nav-link">
            About
          </a>
        </li>

        <li>
          <a href="/" class="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
