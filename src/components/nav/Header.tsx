import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "@/src/ScrollToTop";
const Header: React.FC = () => {
  // States

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <><header className="header">
      <div className="header-container">

        <div className="header-inner">

          {/* Logo */}
          <Link to="/" className="logo-group">
            <img src={logo} alt="Hamdalla Web Logo" className="logo-img" />
            <span className="logo-text">HAMDALLA WEB</span>
          </Link>

          {/* Navigation */}
          <nav className="nav">
            <a href="/#services">Leistungen</a>
            <a href="/#portfolio">Referenzen</a>
            <a href="#contact">Kontakt</a>
          </nav>

          {/* Button */}
          <a href="#contact" className="cta-btn">
            Projekt anfragen
          </a>

          {/* Burger Button (Mobile) */}
          <button className="burger"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {menuOpen && (

            <div className="mobile-menu">
              <a href="#services" onClick={() => setMenuOpen(false)}>Leistungen</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Referenzen</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
              <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Projekt anfragen</a>
            </div>
          )}

        </div>

      </div>
    </header><ScrollToTop /></>
  );
};

export default Header;
