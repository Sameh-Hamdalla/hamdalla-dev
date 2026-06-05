import React from "react";
import "./hero.css";

import sammel1 from "../../assets/sammel1.png";

interface HeroProps {
  onOpenConsultant: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultant }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="hero-badge">
              Webdesign & Softwarelösungen für KMUs und Einzelhandel
            </span>

            <h1 className="hero-title">
              Webdesign Schwarzwald -
              <span className="accent"> moderne Websites & Onlineshops</span>
            </h1>

            <p className="hero-text">
              Ich erstelle professionelle Webseiten, Onlineshops und individuelle
              Softwarelösungen für kleine und mittelständische Unternehmen, die
              online mehr Kunden gewinnen wollen.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                onClick={onOpenConsultant}
                className="btn-primary"
              >
                Kostenlose Website-Beratung starten
              </button>

              <a href="#services" className="btn-secondary">
                Meine Leistungen
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-preview">
              <div className="hero-preview-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <img
                src={sammel1}
                alt="Projektvorschau einer individuell entwickelten Software"
              />

              <div className="hero-preview-label">
                React · Electron · FastAPI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
