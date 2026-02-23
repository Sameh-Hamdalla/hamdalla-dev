// React wird importiert, damit wir JSX verwenden können
import React from "react";

// CSS-Datei für das Styling dieser Komponente
import "./services.css";


// Array mit allen Dienstleistungen
// Jede Dienstleistung ist ein Objekt mit:
// - title (Titel)
// - description (Beschreibung)
// - icon (Emoji als Icon)
const services = [
  {
    title: "Webseiten für KMUs", // Überschrift der Karte
    description:
      "Ich entwickle moderne, übersichtliche und mobiloptimierte Webseiten für kleine und mittlere Unternehmen. Klar strukturiert, schnell und professionell – damit Ihre Kunden Sie online sofort verstehen.",
    icon: "💻" // Emoji wird als Icon angezeigt
  },
  {
    title: "Landingpages",
    description:
      "Überzeugende One-Pager für neue Angebote, Dienstleistungen oder Kampagnen. Fokus auf klare Botschaft, modernes Design und eine starke Handlungsaufforderung.",
    icon: "🛒"
  },
  {
    title: "Website-Optimierung",
    description:
      "Ich überarbeite bestehende Webseiten und verbessere Design, Struktur und Performance. So wirkt Ihre Online-Präsenz moderner, klarer und professioneller.",
    icon: "⚡"
  },
  {
    title: "Wartung & Support",
    description:
      "Regelmäßige Pflege, kleine Anpassungen und technische Updates. Ich halte Ihre Website aktuell, sicher und funktionsfähig.",
    icon: "🧠"
  }
];


// Definition der React-Komponente
// React.FC bedeutet: Functional Component
const Services: React.FC = () => {

  // Jede React-Komponente muss JSX zurückgeben
  return (

    // section ist ein semantisches HTML-Element
    // id="services" wird z.B. für Navigation oder Scrollen verwendet
    <section id="services" className="services">

      {/* Container-Div für max-width und Zentrierung */}
      <div className="services-container">

        {/* ===== Header-Bereich ===== */}
        <div className="services-head">

          {/* Kleiner Abschnittstitel */}
          <h2 className="services-kicker">
            Leistungen
          </h2>

          {/* Hauptüberschrift */}
          <h3 className="services-title">
            Digitale Lösungen für Ihren Erfolg
          </h3>

          {/* Untertitel / Beschreibung */}
          <p className="services-sub">
            Keine Massenware, sondern individuelle Lösungen,
            die perfekt zu Ihren Geschäftsprozessen passen.
          </p>

        </div>


        {/* ===== Grid-Bereich mit Service-Karten ===== */}
        <div className="services-grid">

          {/* 
            services.map(...) läuft durch jedes Objekt im Array
            Für jedes Objekt wird eine Karte erstellt
          */}
          {services.map((s, i) => (

            /*
              key={i} ist wichtig für React
              React braucht einen eindeutigen Schlüssel,
              um Elemente effizient zu aktualisieren
            */
            <div key={i} className="service-card">

              {/* Icon-Bereich */}
              <div className="service-icon">
                {s.icon}
                {/* s.icon greift auf das icon-Feld im Objekt zu */}
              </div>

              {/* Titel der Karte */}
              <h4>
                {s.title}
                {/* s.title kommt aus dem aktuellen Objekt */}
              </h4>

              {/* Beschreibung der Karte */}
              <p>
                {s.description}
                {/* s.description kommt ebenfalls aus dem Objekt */}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


// Exportiert die Komponente,
// damit sie in anderen Dateien verwendet werden kann
export default Services;