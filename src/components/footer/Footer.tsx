import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* 1. Brand */}
        <div className="footer-col">
          <h3>HAMDALLA WEB</h3>
          <p className="footer-desc">
            Weblösungen für dein Business
          </p>
        </div>

        {/* 2. Adresse */}
        <div className="footer-col">
          <h4>Adresse</h4>
          <p>
            Jägerweg 8<br />
            79879 Wutach
          </p>
        </div>

        {/* 3. Kontakt */}
        <div className="footer-col">
          <h4>Kontakt</h4>
          <p>Tel: 015154844078</p>
          <a href="mailto:info@hamdalla-web.com">
            info@hamdalla-web.com
          </a>
        </div>

        {/* 4. Rechtliches */}
        <div className="footer-col">
          <h4>Rechtliches</h4>

          <ul className="footer-list">
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/agb">AGB</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} HAMDALLA WEB Webentwicklungen
      </div>

    </footer>
  );
};

export default Footer;