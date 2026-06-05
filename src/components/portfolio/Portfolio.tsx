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

const techBadges = [
  { label: "React", className: "tech-react" },
  { label: "JavaScript", className: "tech-js" },
  { label: "TypeScript", className: "tech-ts" },
  { label: "HTML", className: "tech-html" },
  { label: "CSS", className: "tech-css" },
  { label: "Python", className: "tech-python" },
  { label: "FastAPI", className: "tech-fastapi" },
  { label: "Git", className: "tech-git" },
  { label: "SQLite", className: "tech-sqlite" },
  { label: "Electron", className: "tech-electron" },
  { label: "Vite", className: "tech-vite" },
  { label: "Tailwind", className: "tech-tailwind" },
];

const projects = [
  {
    title: "Sammelzentrum Desktop Version",
    category: "Desktop Software",
    image: sammel1,
    gallery: [sammel1, sammel2, sammel3, sammel4],
    technologies: ["React", "Electron", "FastAPI", "SQLite"],
    description:
      "Individuell entwickelte Desktop-Anwendung für die Sammelzentrale Aktion Hoffnung Laupheim. Die Software ermöglicht die Verwaltung von Projekten, Trägerorganisationen und Ansprechpartnern. Enthalten sind Such- und Filterfunktionen, PDF- und Excel-Export, Statistiken, Datensicherung sowie eine lokale Datenbank.",
  },
  {
    title: "Taxi Unternehmen",
    category: "Unternehmenswebsite",
    image: taxi,
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Eine übersichtliche Unternehmenswebsite für ein Taxiunternehmen mit klaren Informationen, direkter Kontaktmöglichkeit und responsivem Aufbau.",
    site: "https://marsaalam-yassin-taxi.vercel.app/",
  },
  {
    title: "Restaurant Pizzeria HAMHAM",
    category: "Individualsoftware",
    image: pizza,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    description:
      "Eine moderne Restaurant-Website mit digitaler Speisekarte, ansprechender Präsentation und nutzerfreundlicher Bedienung auf allen Geräten.",
    site: "https://restaurant-pizzeria-hamham.vercel.app/",
  },
  {
    title: "Friseur Buchungssystem",
    category: "Individualsoftware",
    image: salon,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    description:
      "Ein digitales Buchungssystem für Friseursalons, mit dem Kunden Dienstleistungen entdecken und Termine einfach anfragen können.",
    site: "https://friseur-app-phi.vercel.app/",
  },
  {
    title: "WerkMeister",
    category: "Individualsoftware",
    image: werkmeister,
    technologies: ["React", "Python", "FastAPI", "SQLite"],
    description:
      "Eine Web-App für Handwerksbetriebe zur strukturierten Verwaltung von Aufträgen, Abläufen und wichtigen Arbeitsinformationen.",
    site: "https://werk-meister-zeta.vercel.app/",
  },
  {
    title: "InventarManager-App",
    category: "Individualsoftware",
    image: inventar,
    technologies: ["React", "Python", "FastAPI", "SQLite"],
    description:
      "Eine Inventarverwaltung für Unternehmen, um Produkte, Bestände und wichtige Daten zentral, schnell und zuverlässig zu organisieren.",
    site: "https://inventar-manager-frontend.vercel.app/inventar",
  },
];

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
        loading="lazy"
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
      <div className="portfolio-tech-cloud" aria-hidden="true">
        {techBadges.map((tech, index) => (
          <span
            key={tech.label}
            className={`tech-badge ${tech.className}`}
            style={{ "--i": index } as React.CSSProperties}
          >
            {tech.label}
          </span>
        ))}
      </div>

      <div className="portfolio-container">
        <div className="portfolio-head">
          <h2 className="portfolio-kicker">Referenzen</h2>
          <h3 className="portfolio-title">Beispielprojekte</h3>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.title} className="portfolio-card">
              <h4 className="portfolio-project-title">{project.title}</h4>

              <span className="portfolio-category-top">
                {project.category}
              </span>

              <p className="portfolio-description">
                {project.description}
              </p>

              <div className="portfolio-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.gallery ? (
                <ProjectCarousel images={project.gallery} title={project.title} />
              ) : (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-image-box"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                    loading="lazy"
                  />

                  <div className="portfolio-overlay">
                    <span className="portfolio-overlay-text">
                      Projekt ansehen
                    </span>
                  </div>
                </a>
              )}

              <div className="portfolio-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
