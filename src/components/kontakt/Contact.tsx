import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">

      {/* Glow Background */}
      <div className="contact-glow"></div>

      <div className="contact-container">

        <div className="contact-grid">

          {/* ===== Left Text ===== */}
          <div className="contact-left">

            <h2 className="contact-kicker">Kontakt</h2>

            <h3 className="contact-title">
              Lassen Sie uns Ihr Geschäft
              <span className="accent"> gemeinsam</span>
              voranbringen.
            </h3>

            <p className="contact-desc">
              Haben Sie eine Idee oder eine Problemstellung?
              Ich freue mich auf Ihre Nachricht und melde mich
              innerhalb von 24 Stunden bei Ihnen zurück.
            </p>

            {/* Info Blocks */}
            <div className="contact-info">

              <div className="info-item">
                <div className="info-icon">✉</div>
                <div>
                  <p className="info-label">Schreiben Sie mir</p>
                  <p className="info-value">hallo@devflow.de</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <p className="info-label">Standort</p>
                  <p className="info-value">Berlin / Remote Deutschland</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== Form ===== */}
          <div className="contact-card">

            <form className="contact-form">

              <div className="form-grid">

                <div>
                  <label>Ihr Name</label>
                  <input type="text" placeholder="Max Mustermann" />
                </div>

                <div>
                  <label>E-Mail Adresse</label>
                  <input type="email" placeholder="max@beispiel.de" />
                </div>

              </div>

              <div>
                <label>Betreff</label>
                <select>
                  <option>Neue Webseite / Onlineshop</option>
                  <option>Softwareentwicklung</option>
                  <option>Prozessberatung</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div>
                <label>Ihre Nachricht</label>
                <textarea rows={4} placeholder="Erzählen Sie mir kurz von Ihrem Projekt..." />
              </div>

              <button type="submit" className="submit-btn">
                Anfrage absenden
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
