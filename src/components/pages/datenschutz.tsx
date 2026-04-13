import React from "react";

const Datenschutz = () => {
  return (
    <div className="datenschutz-container">
      <style>{`
        .datenschutz-container {
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .datenschutz-container h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .datenschutz-container h2 {
          margin-top: 2rem;
          font-size: 1.3rem;
        }

        .datenschutz-container p {
          margin: 0.5rem 0;
        }

        .datenschutz-container ul {
          padding-left: 1.2rem;
        }

        .datenschutz-container li {
          margin: 0.3rem 0;
        }
      `}</style>

      <h1>Datenschutzerklärung</h1>

      <p>
        Willkommen bei der Datenschutzrichtlinie von www.hamdalla-web.com/. Diese
        Richtlinie hilft Ihnen zu verstehen, welche Daten wir erheben, warum wir
        sie erheben und welche Rechte Sie diesbezüglich haben.
      </p>

      <p><strong>Letzte Aktualisierung: 13. April 2026</strong></p>

      <h2>Arten der erhobenen Daten</h2>
      <p>
        Der Eigentümer stellt keine Auflistung der erhobenen personenbezogenen
        Daten zur Verfügung.
      </p>

      <p>
        Personenbezogene Daten können vom Nutzer freiwillig angegeben oder
        automatisch erhoben werden, wenn diese Anwendung genutzt wird.
      </p>

      <h2>Art und Ort der Datenverarbeitung</h2>
      <p>
        Der Anbieter verarbeitet personenbezogene Daten der Nutzer auf
        ordnungsgemäße Weise und ergreift Sicherheitsmaßnahmen zum Schutz vor
        unbefugtem Zugriff.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden so lange gespeichert, wie es für den Zweck
        erforderlich ist oder gesetzliche Verpflichtungen bestehen.
      </p>

      <h2>Cookie-Richtlinie</h2>
      <p>
        Diese Anwendung verwendet Cookies und Tracking-Technologien zur
        Bereitstellung und Verbesserung der Dienste.
      </p>

      <h2>Rechtsgrundlagen der Verarbeitung</h2>
      <ul>
        <li>Einwilligung des Nutzers</li>
        <li>Vertragserfüllung</li>
        <li>Rechtliche Verpflichtungen</li>
        <li>Berechtigte Interessen</li>
      </ul>

      <h2>Rechte der Nutzer (DSGVO)</h2>
      <ul>
        <li>Auskunft über gespeicherte Daten</li>
        <li>Berichtigung falscher Daten</li>
        <li>Löschung der Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerspruch gegen Verarbeitung</li>
      </ul>

      <h2>Kontakt</h2>
      <p>
        Bei Fragen zur Verarbeitung Ihrer Daten kontaktieren Sie uns unter:
      </p>
      <p>
        E-Mail: info@hamdalla-web.com
      </p>

      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Der Anbieter behält sich vor, diese Datenschutzerklärung jederzeit zu
        ändern. Nutzer werden gebeten, diese Seite regelmäßig zu überprüfen.
      </p>

      <h2>Begriffsbestimmungen</h2>
      <p>
        Personenbezogene Daten sind alle Informationen, die eine Person direkt
        oder indirekt identifizieren können.
      </p>

      <p>
        Nutzungsdaten sind technische Informationen wie IP-Adresse,
        Browsertyp oder Zugriffszeiten.
      </p>

    </div>
  );
};

export default Datenschutz;