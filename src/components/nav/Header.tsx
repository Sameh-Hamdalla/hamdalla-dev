import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "@/src/ScrollToTop";

const Header: React.FC = () => {

  // 🔹 State für Mobile Menü (Burger Menü)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">

          <div className="header-inner">

            {/* ============================= */}
            {/* ===== LOGO (Startseite) ===== */}
            {/* ============================= */}
            {/* Link navigiert zur Startseite */}
            <Link 
              to="/" 
              className="logo-group"
              onClick={(e) => {
                // 👉 Wenn wir schon auf der Startseite sind:
                if (window.location.pathname === "/") {
                  e.preventDefault(); // verhindert "Neuladen"
                  window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll nach oben
                }
              }}
            >
              <img src={logo} alt="Hamdalla Web Logo" className="logo-img" />
              <span className="logo-text">HAMDALLA WEB</span>
            </Link>

            {/* ============================= */}
            {/* ===== NAVIGATION ===== */}
            {/* ============================= */}
            <nav className="nav">

              {/* 🔹 Scroll innerhalb der Seite (kein Reload) */}
              <a href="#services">Leistungen</a>

              <a href="#portfolio">Referenzen</a>

              <a href="#contact">Kontakt</a>

            </nav>

            {/* ============================= */}
            {/* ===== CTA BUTTON ===== */}
            {/* ============================= */}
            {/* Wichtigster Button → führt zum Kontakt */}
            <a href="#contact" className="cta-btn">
              Projekt anfragen
            </a>

            {/* ============================= */}
            {/* ===== BURGER BUTTON (Mobile) ===== */}
            {/* ============================= */}
            <button 
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)} // öffnet/schließt Menü
            >
              ☰
            </button>

            {/* ============================= */}
            {/* ===== MOBILE MENU ===== */}
            {/* ============================= */}
            {menuOpen && (

              <div className="mobile-menu">

                {/* Beim Klick wird Menü geschlossen */}
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Leistungen
                </a>

                <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                  Referenzen
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Kontakt
                </a>

                {/* CTA im Mobile Menü */}
                <a 
                  href="#contact" 
                  className="mobile-cta" 
                  onClick={() => setMenuOpen(false)}
                >
                  Projekt anfragen
                </a>

              </div>
            )}

          </div>
        </div>
      </header>

      {/* ============================= */}
      {/* ===== SCROLL TO TOP ===== */}
      {/* ============================= */}
      {/* sorgt dafür, dass beim Seitenwechsel nach oben gescrollt wird */}
      <ScrollToTop />
    </>
  );
};

export default Header;