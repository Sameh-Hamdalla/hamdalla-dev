import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-logo">
             <img src={logo} alt="Hamdalla Dev Logo" className="logo-img" />
            <span className="footer-logo-text">Hamdalla Digital</span>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Hamdalla  Digital Webentwicklungen
            Alle Rechte vorbehalten.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
