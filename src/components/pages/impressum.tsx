import React from "react";
import "./datenschutz.css";

const Impressum = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="legal-kicker">Rechtliches</span>
        <h1>Impressum</h1>
        <p>
          Anbieterkennzeichnung und Kontaktinformationen von HAMDALLA WEB.
        </p>
      </section>

      <section className="legal-content">
        <article className="legal-section legal-highlight">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            HAMDALLA WEB<br />
            Inhaber: Sameh Hamdalla<br />
            Jägerweg 8<br />
            79879 Wutach<br />
            Deutschland
          </p>
        </article>

        <article className="legal-section">
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4915154844078">015154844078</a><br />
            E-Mail: <a href="mailto:info@hamdalla-web.com">info@hamdalla-web.com</a>
          </p>
        </article>

        <article className="legal-section">
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Sameh Hamdalla<br />
            Jägerweg 8<br />
            79879 Wutach<br />
            Deutschland
          </p>
        </article>

        <article className="legal-section">
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </article>

        <article className="legal-section">
          <h2>Haftung für Links</h2>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </article>

        <article className="legal-section">
          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen
            des Urheberrechts bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Impressum;
