// React wird importiert, damit wir JSX verwenden können
import React from "react";

// CSS-Datei für das Styling der Portfolio-Komponente
import "./portfolio.css";

// Import eines lokalen Bildes aus dem assets-Ordner
// Vite wandelt das in eine Bild-URL um
import inventar from "../../assets/inventar.png"

import taxi2 from "../../assets/taxi2.png"
import telefon from "../../assets/telefon.png"
import pizza from "../../assets/pizza.png"
// Array mit allen Projekten
// Jedes Projekt ist ein Objekt mit:
// - title (Projektname)
// - category (Kategorie)
// - image (Bild-Quelle)
// - client (optional, aktuell auskommentiert)
const projects = [

   {
    title: "Taxi Unternehmen",
    category: "Unternehmenswebsite",
    image: taxi2,
    site: "https://marsaalam-yassin-taxi.vercel.app/"
  },
  {
    title: "InventarManager-App", // Name des Projekts
    category: "Individualsoftware", // Kategorie
    image: inventar, // Lokales importiertes Bild
    site: "https://inventar-manager-frontend.vercel.app/inventar" 
  
  },
    {
    title: "Restaurant Pizzeria HAMHAM", // Name des Projekts
    category: "Individualsoftware", // Kategorie
    image: pizza, // Lokales importiertes Bild
    site: "https://restaurant-pizzeria-hamham.vercel.app/" 
  
  },
  {
    title: "Telefonshop",
    category: "E-Commerce",
    image: telefon,
    // Externes Bild über URL
    site: "https://iphone-landingpage.vercel.app/"
  },
 
];


// Definition der React-Komponente
// React.FC bedeutet: Functional Component
const Portfolio: React.FC = () => {

  // JSX wird zurückgegeben
  return (

    // section = semantischer HTML-Container
    // id wird z.B. für Scroll-Navigation verwendet
    <section id="portfolio" className="portfolio">

      {/* Container für max-width und Zentrierung */}
      <div className="portfolio-container">

        {/* ===== Header-Bereich ===== */}
        <div className="portfolio-head">

          {/* Linke Seite mit Überschriften */}
          <div>
            <h2 className="portfolio-kicker">
              Referenzen
            </h2>

            <h3 className="portfolio-title">
              Projektübersicht
            </h3>
          </div>

          {/* Button rechts im Header=> Weiterleitung zu Guthub */}
          <button className="portfolio-more">
            <a href="https://github.com/Sameh-Hamdalla"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-github-link">
            Alle Projekte ansehen →
            </a>
          </button>

        </div>


        {/* ===== Grid mit Projekt-Karten ===== */}
        <div className="portfolio-grid">

          {/*
            projects.map(...) läuft durch jedes Objekt im Array
            Für jedes Projekt wird eine Karte erzeugt
          */}
          {projects.map((p, i) => (

            // key ist wichtig für React
            // React nutzt ihn für effizientes Rendering
            <div key={i} className="portfolio-card">

              {/* Bild-Container */}
              <div className="portfolio-image-box">

                {/* Projektbild */}
                <img
                  src={p.image} // Bildquelle (lokal oder URL)
                  alt={p.title} // Alternativtext (wichtig für SEO & Accessibility)
                  className="portfolio-image"
                />

                {/* Overlay erscheint meist beim Hover */}
                {/* <div className="portfolio-overlay">
                  <span>Case Study lesen</span>
                </div> */}

              </div>


              {/* Textbereich unter dem Bild */}
              <div className="portfolio-text">

                {/* Kategorie-Anzeige */}
                <span className="portfolio-category">
                  {p.category}
                </span>

                {/* Projekttitel */}
                <h4>{p.title}</h4>

                {/* Optionaler Kunde (aktuell deaktiviert) */}
                <a href={p.site} target="_blank" rel="noopener noreferrer">
                  {p.site}
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


// Exportiert die Komponente,
// damit sie in anderen Dateien genutzt werden kann
export default Portfolio;