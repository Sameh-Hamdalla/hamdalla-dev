import React from "react";
import "./portfolio.css";

import taxi from "../../assets/taxi.png";
import pizza from "../../assets/pizza.png";
import inventar from "../../assets/inventar.png";
import salon from "../../assets/salon.png";
import werkmeister from "../../assets/werkmeister.png";
import sammel1 from "../../assets/sammel1.png";
import sammel2 from "../../assets/sammel2.png";
import sammel3 from "../../assets/sammel3.png";
import sammel4 from "../../assets/sammel4.png";


// =============================
// 🔹 PROJEKTDATEN
// =============================
const projects = [
  {
    title: "Sammelzentrum Desktop Version",
    category: "Desktop Software",
    image: sammel1,
    gallery: [sammel1, sammel2, sammel3, sammel4],
    description:
      "Individuell entwickelte Desktop-Anwendung für die Sammelzentrale Aktion Hoffnung Laupheim. Die Software ermöglicht die Verwaltung von Projekten, Trägerorganisationen und Ansprechpartnern. Enthalten sind Such- und Filterfunktionen, PDF- und Excel-Export, Statistiken, Datensicherung sowie eine lokale Datenbank. Entwickelt mit React, Electron und FastAPI."
    // site: "https://marsaalam-yassin-taxi.vercel.app/"
  },
    {
    title: "Taxi Unternehmen",
    category: "Unternehmenswebsite",
    image: taxi,
    description:
      "Eine übersichtliche Unternehmenswebsite für ein Taxiunternehmen mit klaren Informationen, direkter Kontaktmöglichkeit und responsivem Aufbau. Umgesetzt mit HTML, CSS und JavaScript.",
    site: "https://marsaalam-yassin-taxi.vercel.app/"
  },
  {
    title: "Restaurant Pizzeria HAMHAM",
    category: "Individualsoftware",
    image: pizza,
    description:
      "Eine moderne Restaurant-Website mit digitaler Speisekarte, ansprechender Präsentation und nutzerfreundlicher Bedienung auf allen Geräten. Entwickelt mit React, HTML, CSS und JavaScript.",
    site: "https://restaurant-pizzeria-hamham.vercel.app/"
  },
   {
    title: "Friseur Buchungssystem",
    category: "Individualsoftware",
    image: salon,
    description:
      "Ein digitales Buchungssystem für Friseursalons, mit dem Kunden Dienstleistungen entdecken und Termine einfach anfragen können. Erstellt mit React, HTML, CSS und JavaScript.",
    site: "https://friseur-app-phi.vercel.app/"
  },
    {
    title: "WerkMeister",
    category: "Individualsoftware",
    image: werkmeister,
    description:
      "Eine Web-App für Handwerksbetriebe zur strukturierten Verwaltung von Aufträgen, Abläufen und wichtigen Arbeitsinformationen. Frontend mit React, Backend mit Python, FastAPI und SQLite.",
    site: "https://werk-meister-zeta.vercel.app/"
  },
  {
    title: "InventarManager-App",
    category: "Individualsoftware",
    image: inventar,
    description:
      "Eine Inventarverwaltung für Unternehmen, um Produkte, Bestände und wichtige Daten zentral, schnell und zuverlässig zu organisieren. Frontend mit React, Backend mit Python, FastAPI und SQLite.",
    site: "https://inventar-manager-frontend.vercel.app/inventar"
  },
 
];


// =============================
// 🔹 COMPONENT
// =============================
const ProjectCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [activeImage, setActiveImage] = React.useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="portfolio-carousel">
      <button
        type="button"
        className="portfolio-carousel-btn portfolio-carousel-btn-left"
        onClick={previousImage}
        aria-label="Vorheriges Bild"
      >
        &lsaquo;
      </button>

      <img
        key={images[activeImage]}
        src={images[activeImage]}
        alt={`${title} Screenshot ${activeImage + 1}`}
        className="portfolio-image"
      />

      <button
        type="button"
        className="portfolio-carousel-btn portfolio-carousel-btn-right"
        onClick={nextImage}
        aria-label="Nächstes Bild"
      >
        &rsaquo;
      </button>

      <div className="portfolio-carousel-counter">
        {activeImage + 1} / {images.length}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {

  return (
    <section id="portfolio" className="portfolio">

      <div className="portfolio-container">

        {/* HEADER */}
        <div className="portfolio-head">
          <h2 className="portfolio-kicker">Referenzen</h2>
          <h3 className="portfolio-title">Beispielprojekte</h3>
        </div>

        {/* GRID */}
        <div className="portfolio-grid">

          {projects.map((p, i) => (

            <div key={i} className="portfolio-card">

              {/* 🔥 TITEL JETZT GANZ OBEN */}
              <h4 className="portfolio-project-title">
                {p.title}
              </h4>

              {/* Kategorie */}
              <span className="portfolio-category-top">
                {p.category}
              </span>

              <p className="portfolio-description">
                {p.description}
              </p>

              {/* 🔥 BILD + OVERLAY */}
              {p.gallery ? (
                 <ProjectCarousel images={p.gallery} title={p.title} />
              ) : (
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-image-box"
              >

                <img
                  src={p.image}
                  alt={p.title}
                  className="portfolio-image"
                />

                {/* 🔥 OVERLAY */}
                <div className="portfolio-overlay">
                  <span className="portfolio-overlay-text">
                    Projekt ansehen
                  </span>
                </div>

              </a>
              )}

              {/* Divider */}
              <div className="portfolio-divider" />

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
