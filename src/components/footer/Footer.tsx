import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
          <div className="footer-col">
  

            {/* 🔥 SOCIAL LINKS */}
            <div className="footer-socials">

              <a 
                href="https://www.instagram.com/hamdalla.web/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram/>
              </a>

              <a 
                href="https://www.linkedin.com/in/sameh-hamdalla-214a68215/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin/>
              </a>

              <a 
                href="https://github.com/Sameh-Hamdalla" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub/>
              </a>

            </div>
          </div>
        </div>

        {/* 4. Rechtliches */}
        <div className="footer-col">
          <h4>Rechtliches</h4>

          <ul className="footer-list">
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            {/* <li><Link to="/agb">AGB</Link></li> */}
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