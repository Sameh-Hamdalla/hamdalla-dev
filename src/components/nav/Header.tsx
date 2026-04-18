import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ScrollToTop from "@/src/ScrollToTop";

const Header: React.FC = () => {

  // 🔹 Mobile Menü State
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Aktive Section (für Highlight)
  const [activeSection, setActiveSection] = useState("");

  // 🔹 Scroll Listener für aktive Section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "portfolio", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Menü schließen (sauberer Code)
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-inner">

            {/* ============================= */}
            {/* ===== LOGO ===== */}
            {/* ============================= */}
            <Link
              to="/"
              className="logo-group"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
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

              <a
                href="/#services"
                className={activeSection === "services" ? "active" : ""}
              >
                Leistungen
              </a>

              <a
                href="/#portfolio"
                className={activeSection === "portfolio" ? "active" : ""}
              >
                Referenzen
              </a>

              <a
                href="/#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Kontakt
              </a>

            </nav>

            {/* ============================= */}
            {/* ===== CTA BUTTON ===== */}
            {/* ============================= */}
            <a href="/#contact" className="cta-btn">
              Projekt anfragen
            </a>

            {/* ============================= */}
            {/* ===== BURGER BUTTON ===== */}
            {/* ============================= */}
            <button
              className="burger"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              ☰
            </button>

            {/* ============================= */}
            {/* ===== MOBILE MENU ===== */}
            {/* ============================= */}
            {menuOpen && (
              <div className="mobile-menu">

                <a href="/#services" onClick={handleCloseMenu}>
                  Leistungen
                </a>

                <a href="/#portfolio" onClick={handleCloseMenu}>
                  Referenzen
                </a>

                <a href="/#contact" onClick={handleCloseMenu}>
                  Kontakt
                </a>

                <a
                  href="/#contact"
                  className="mobile-cta"
                  onClick={handleCloseMenu}
                >
                  Projekt anfragen
                </a>

              </div>
            )}

          </div>
        </div>
      </header>

      {/* Scroll Verhalten bei Seitenwechsel */}
      <ScrollToTop />
    </>
  );
};

export default Header;