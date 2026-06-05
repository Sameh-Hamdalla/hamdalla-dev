import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const whatsappLink = "https://wa.me/4915154844078";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>HAMDALLA WEB</h3>
          <p className="footer-desc">
            Webdesign & Softwarelösungen für KMUs und Einzelhandel
          </p>
        </div>

        <div className="footer-col">
          <h4>Adresse</h4>
          <p>
            Jägerweg 8<br />
            79879 Wutach
          </p>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>

          <a href="mailto:info@hamdalla-web.com" className="footer-mail">
            info@hamdalla-web.com
          </a>

          <div className="footer-socials">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
              aria-label="Kontakt über WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/hamdalla.web/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/sameh-hamdalla-214a68215/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Sameh-Hamdalla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Rechtliches</h4>

          <ul className="footer-list">
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} HAMDALLA WEB Webentwicklungen
      </div>
    </footer>
  );
};

export default Footer;
