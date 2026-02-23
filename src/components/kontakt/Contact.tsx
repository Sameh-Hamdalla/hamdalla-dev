import React from "react";
import "./Contact.css";
import wa from "../../assets/wa.png";

/**
 * Contact Component
 * 
 * Displays the contact section of the website.
 * 
 * Features:
 * - Introductory contact text
 * - Email contact information
 * - Location information
 * - Contact form for user inquiries
 * 
 * This component is part of the landing page and
 * allows potential clients to get in touch.
 */
const Contact: React.FC = () => {
  return (
    /**
     * Main contact section wrapper.
     * Contains both informational text and contact form.
     */
    <section id="contact" className="contact">

      {/* Background glow effect for visual styling */}
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-grid">

          {/* ===== Left Content Area (Contact Information) ===== */}
          <div className="contact-left">

            {/* Section headline */}
            <h2 className="contact-kicker">Kontakt</h2>

            {/* Main value proposition */}
            <h3 className="contact-title">
              Lassen Sie uns Ihr Geschäft
              <span className="accent"> gemeinsam</span>
              voranbringen.
            </h3>

            {/* Short description text */}
            <p className="contact-desc">
              Haben Sie eine Idee oder eine Problemstellung? 
              Ich freue mich auf Ihre Nachricht und melde mich 
              innerhalb von 24 Stunden bei Ihnen zurück.
            </p>

            {/* ===== Contact Info Blocks ===== */}
            <div className="contact-info contact-links">

              {/* Email Block */}
              <div className="info-item">
                <div className="info-icon">✉</div>

                <div>
                  <p className="info-label">Schreiben Sie mir</p>

                  <div className="info-value">
                    {/* Clickable mail link */}
                    <a href="mailto:sa_mh87@outlook.de">
                      sa_mh87@outlook.de
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Block */}
              <div className="info-item">
                <div className="info-icon">📍</div>

                <div>
                  <p className="info-label">Standort</p>
                  <p className="info-value">Remote Deutschland</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== Right Content Area (Contact Form) ===== */}
          <div className="contact-card">

            <form className="contact-form">

              {/* Name + Email Grid */}
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

              {/* Subject selection */}
              <div>
                <label>Betreff</label>
                <select>
                  <option>Neue Webseite / Onlineshop</option>
                  <option>Webseiteoptimierung</option>
                  <option>Landingpage</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label>Ihre Nachricht</label>
                <textarea
                  rows={4}
                  placeholder="Erzählen Sie mir kurz von Ihrem Projekt..."
                />
              </div>

              {/* Submit button */}
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