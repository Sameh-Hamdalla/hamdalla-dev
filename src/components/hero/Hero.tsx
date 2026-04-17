import React from "react";
import "./hero.css";


/**
 * Props Interface:
 * Beschreibt welche Daten diese Komponente von außen bekommt
 */
interface HeroProps {
  onOpenConsultant: () => void;
}

/**
 * Hero Component:
 * - Oben: Hero Bereich (Text + Buttons)
 * - Darunter: Image Section (separate visuelle Cards)
 */
const Hero: React.FC<HeroProps> = ({ onOpenConsultant }) => {
  return (
    <>
      {/* ============================= */}
      {/* ===== HERO SECTION ===== */}
      {/* ============================= */}
      <section className="hero">

        <div className="hero-container">

          <div className="hero-grid">

            {/* ===== LEFT SIDE (Text + CTA) ===== */}
            <div className="hero-left">

              {/* Badge / kleine Info */}
              <span className="hero-badge">
                Exklusiv für KMUs & Einzelhandel
              </span>

              {/* Hauptüberschrift */}
              <h1 className="hero-title">
                Ihre Vision,
                <span className="accent"> digital perfektioniert.</span>
              </h1>

              {/* Beschreibungstext */}
              <p className="hero-text">
                Vom lokalen Laden zum digitalen Vorreiter.
                Ich entwickle maßgeschneiderte Softwarelösungen,
                Webseiten und Onlineshops, die Ihr Geschäft
                wirklich voranbringen.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">

                {/* <a href="#analysis" className="btn-primary">
                  Website kostenlos analysieren
                  <br />
                  <span>„In 2 Minuten • 100% kostenlos"</span>
                </a> */}

                {/* Öffnet KI-Berater */}
                <button
                  onClick={onOpenConsultant}
                  className="btn-primary"
                >
                  KI-Berater fragen
                </button>

                {/* Scrollt zu Leistungen */}
                <a href="#services" className="btn-secondary" 
                >
                  Meine Leistungen
                </a>

              </div>
            </div>

            {/* ===== RIGHT SIDE (optional leer oder später für Animationen) ===== */}
            <div className="hero-right">
              {/* absichtlich leer → sorgt für sauberes Layout */}
            </div>

          </div>

        </div>
      </section>

      {/* ============================= */}
      {/* ===== IMAGE SECTION ===== */}
      {/* ============================= */}
      {/* <section className="hero-images-section">

        <div className="hero-images-container">

    
          <img
            src={klu}
            alt="Projekt Vorschau 1"
            className="hero-image-card"
          />

         
          <img
            src={frw2}
            alt="Projekt Vorschau 2"
            className="hero-image-card"
          />

        </div>

      </section> */}
    </>
  );
};

export default Hero;