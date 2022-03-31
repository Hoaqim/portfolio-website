import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="navbar-parent">
        <nav>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About me</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#hire">
              <li>Hire me!</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
