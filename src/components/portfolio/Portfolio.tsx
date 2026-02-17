import React from "react";
import "./portfolio.css";

const projects = [
  {
    title: "Lagerverwaltungs-App",
    category: "Individualsoftware",
    image: "https://picsum.photos/seed/inventory/600/400",
    client: "Eisenwaren Schmitt"
  },
  {
    title: "Mode Boutique Onlineshop",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/fashion/600/400",
    client: "La Belle Mode"
  },
  {
    title: "Automatisierte Buchhaltung",
    category: "Automation",
    image: "https://picsum.photos/seed/finance/600/400",
    client: "Handwerksbetrieb Müller"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">

      <div className="portfolio-container">

        {/* ===== Header ===== */}
        <div className="portfolio-head">

          <div>
            <h2 className="portfolio-kicker">Referenzen</h2>
            <h3 className="portfolio-title">
              Erfolgsgeschichten meiner Kunden
            </h3>
          </div>

          <button className="portfolio-more">
            Alle Projekte ansehen →
          </button>

        </div>

        {/* ===== Grid ===== */}
        <div className="portfolio-grid">

          {projects.map((p, i) => (
            <div key={i} className="portfolio-card">

              <div className="portfolio-image-box">

                <img
                  src={p.image}
                  alt={p.title}
                  className="portfolio-image"
                />

                <div className="portfolio-overlay">
                  <span>Case Study lesen</span>
                </div>

              </div>

              <div className="portfolio-text">
                <span className="portfolio-category">
                  {p.category}
                </span>

                <h4>{p.title}</h4>
                <p>{p.client}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;
