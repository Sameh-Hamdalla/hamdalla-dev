import React from "react";
import "./hero.css";

interface HeroProps {
  onOpenConsultant: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultant }) => {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-grid">

          {/* ===== Left ===== */}
          <div className="hero-left">

            <span className="hero-badge">
              Exklusiv für KMUs & Einzelhandel
            </span>

            <h1 className="hero-title">
              Ihre Vision,
              <span className="accent"> digital perfektioniert.</span>
            </h1>

            <p className="hero-text">
              Vom lokalen Laden zum digitalen Vorreiter.
              Ich entwickle maßgeschneiderte Softwarelösungen,
              Webseiten und Onlineshops, die Ihr Geschäft
              wirklich voranbringen.
            </p>

            <div className="hero-buttons">

              <a href="#services" className="btn-primary">
                Meine Leistungen
              </a>

              <button
                onClick={onOpenConsultant}
                className="btn-secondary"
              >
                KI-Berater fragen
              </button>

            </div>
          </div>

          {/* ===== Right ===== */}
          <div className="hero-right">

            <div className="hero-glow"></div>

            <img
              src="https://picsum.photos/seed/software/800/600"
              alt="Moderne Softwareentwicklung"
              className="hero-image"
            />

            <div className="hero-status">
              <span className="status-dot"></span>
              Verfügbar für neue Projekte
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
