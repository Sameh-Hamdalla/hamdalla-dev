import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-logo">
            <div className="footer-logo-icon">HD</div>
            <span className="footer-logo-text">HAMDALLA-DEV</span>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} DevFlow Softwarelösungen.
            Alle Rechte vorbehalten.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
