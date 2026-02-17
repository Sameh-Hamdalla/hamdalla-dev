import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-inner">

          {/* Logo */}
          <div className="logo-group">
            <div className="logo-icon">D</div>
            <span className="logo-text">DevFlow</span>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <a href="#services">Leistungen</a>
            <a href="#portfolio">Referenzen</a>
            <a href="#contact">Kontakt</a>
          </nav>

          {/* Button */}
          <a href="#contact" className="cta-btn">
            Projekt anfragen
          </a>

        </div>

      </div>
    </header>
  );
};

export default Header;
