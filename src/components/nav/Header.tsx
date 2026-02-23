import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  // States

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-inner">

          {/* Logo */}
          <div className="logo-group">
            <img src={logo} alt="Hamdalla Dev Logo" className="logo-img" />
            <span className="logo-text">Hamdalla Dev</span>
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

          {/* Burger Button (Mobile) */}
          <button className="burger"
          onClick={()=>setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {menuOpen && (

            <div className="mobile-menu">
              <a href="#services" onClick={() => setMenuOpen(false)}>Leistungen</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Referenzen</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
              <a href="#contact" className="mobile-cta"onClick={() => setMenuOpen(false)}>Projekt anfragen</a>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Header;
