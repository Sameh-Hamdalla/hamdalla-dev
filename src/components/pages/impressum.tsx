import React from "react";
import "./datenschutz.css";

const Impressum = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="legal-kicker">Rechtliches</span>

        <h1>Impressum</h1>

        <p>
          Rechtliche Informationen, Kontaktdaten und Anbieterkennzeichnung von
          HAMDALLA WEB.
        </p>
      </section>

      <section className="legal-content">
        <article className="legal-section legal-highlight">
          <h2>Angaben gemäß § 5 DDG</h2>

          <p>
            <strong>HAMDALLA WEB</strong>
            <br />
            Inhaber: Sameh Hamdalla
            <br />
            Webentwicklung • Softwareentwicklung • IT-Dienstleistungen
            <br />
            <br />
            Jägerweg 8
            <br />
            79879 Wutach
            <br />
            Deutschland
          </p>
        </article>

        <article className="legal-section">
          <h2>Kontakt</h2>

          <p>
            Telefon: <a href="tel:+4915154844078">+49 151 54844078</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@hamdalla-web.com">info@hamdalla-web.com</a>
          </p>
        </article>

        <article className="legal-section">
          <h2>Wirtschafts-Identifikationsnummer</h2>

          <p>
            Wirtschafts-Identifikationsnummer gemäß § 139c AO:
            <br />
            DE462526439
          </p>
        </article>

        <article className="legal-section">
          <h2>Tätigkeitsbereich</h2>

          <p>
            Entwicklung von Webseiten, Webanwendungen, Desktop-Anwendungen und
            individuellen Softwarelösungen.
          </p>
        </article>

        <article className="legal-section">
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>

          <p>
            Sameh Hamdalla
            <br />
            Jägerweg 8
            <br />
            79879 Wutach
            <br />
            Deutschland
          </p>
        </article>

        <article className="legal-section">
          <h2>Online-Streitbeilegung</h2>

          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <br />
            <br />
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </article>

        <article className="legal-section">
          <h2>Verbraucherstreitbeilegung</h2>

          <p>
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </article>

        <article className="legal-section">
          <h2>Haftung für Inhalte</h2>

          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der
            bereitgestellten Informationen.
          </p>
        </article>

        <article className="legal-section">
          <h2>Haftung für Links</h2>

          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </article>

        <article className="legal-section">
          <h2>Urheberrecht</h2>

          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            dieser Website unterliegen dem deutschen Urheberrecht.
          </p>

          <p>
            Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
            bedarf der vorherigen schriftlichen Zustimmung des jeweiligen
            Rechteinhabers.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Impressum;
