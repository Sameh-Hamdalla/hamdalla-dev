import React from "react";
import "./services.css";

const services = [
  {
    title: "Individualsoftware",
    description:
      "Maßgeschneiderte Programme zur Verwaltung von Kunden, Inventar oder Terminen. Exakt so, wie Ihr Betrieb arbeitet.",
    icon: "💻"
  },
  {
    title: "Onlineshops & Webseiten",
    description:
      "Professionelle Webpräsenz für Ihren lokalen Laden. Bringen Sie Ihre Produkte online und erreichen Sie neue Kunden.",
    icon: "🛒"
  },
  {
    title: "Prozess-Automatisierung",
    description:
      "Sparen Sie Zeit im Alltag. Ich digitalisiere manuelle Abläufe wie Buchhaltungsvorbereitung oder Lagerabgleiche.",
    icon: "⚡"
  },
  {
    title: "IT-Beratung",
    description:
      "Welche Software braucht Ihr Unternehmen wirklich? Ich berate ehrlich und herstellerunabhängig.",
    icon: "🧠"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">

      <div className="services-container">

        {/* ===== Header ===== */}
        <div className="services-head">
          <h2 className="services-kicker">Leistungen</h2>
          <h3 className="services-title">
            Digitale Lösungen für Ihren Erfolg
          </h3>
          <p className="services-sub">
            Keine Massenware, sondern individuelle Lösungen,
            die perfekt zu Ihren Geschäftsprozessen passen.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">

              <div className="service-icon">
                {s.icon}
              </div>

              <h4>{s.title}</h4>
              <p>{s.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
