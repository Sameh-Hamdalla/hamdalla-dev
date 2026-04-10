import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

/**
 * Contact Component
 *
 * Diese Komponente zeigt:
 * - Kontaktinformationen (links)
 * - Ein Kontaktformular (rechts)
 *
 * Ziel:
 * Wenn das Formular abgeschickt wird,
 * soll EmailJS eine E-Mail versenden – ohne Backend.
 */
const Contact: React.FC = () => {

  /**
   * formRef ist eine Referenz auf das echte HTML-Formular.
   *
   * Warum brauchen wir das?
   * EmailJS benötigt das echte <form>-Element,
   * um alle Felder mit name="..." auszulesen.
   *
   * HTMLFormElement | null bedeutet:
   * - Es wird ein echtes <form> sein
   * - Am Anfang ist es noch null (bevor React gerendert hat)
   */
  const formRef = useRef<HTMLFormElement | null>(null);


  /**
   * Diese Funktion wird aufgerufen,
   * wenn das Formular abgeschickt wird.
   *
   * e = Event-Objekt vom Formular
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

    /**
     * Verhindert das Standard-Verhalten des Formulars.
     *
     * Normalerweise würde:
     * - die Seite neu laden
     * - oder ein Redirect passieren
     *
     * Das wollen wir NICHT.
     */
    e.preventDefault();

    /**
     * Sicherheitscheck:
     * Falls das Formular noch nicht existiert,
     * beenden wir die Funktion sofort.
     */
    if (!formRef.current) return;


    /**
     * Jetzt senden wir die Daten an EmailJS.
     *
     * sendForm() liest automatisch:
     * - alle Felder mit name="..."
     * - erstellt daraus ein Objekt
     * - füllt das Template
     * - sendet die E-Mail
     */
    emailjs
      .sendForm(
        "service_8l5sbx5",       // Meine Service ID (Gmail-Verbindung)
        "template_pg0whwh",      // Meine Template ID (E-Mail Vorlage)
        formRef.current,         // Das echte <form>-Element
        "xs4NNYHVqLoEiUXeY"       //Meine Public Key (Projekt-Schlüssel)
      )

      /**
       * .then() läuft, wenn alles erfolgreich war.
       */
      .then(() => {
        alert("✅ Nachricht wurde gesendet!");

        /**
         * reset() leert alle Eingabefelder.
         */
        formRef.current?.reset();
      })

      /**
       * .catch() läuft, wenn ein Fehler passiert ist.
       * Zum Beispiel:
       * - falsche IDs
       * - kein Internet
       * - Template falsch
       */
      .catch((err) => {
        console.log("EmailJS error:", err);
        alert("❌ Fehler beim Senden. Bitte später erneut versuchen.");
      });
  };

  return (

    /**
     * Haupt-Container der Kontaktsektion
     */
    <section id="contact" className="contact">

      {/* Dekoratives Hintergrund-Element */}
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-grid">

          {/* ===================== */}
          {/* Linke Seite: Infos   */}
          {/* ===================== */}
          <div className="contact-left">

            <h2 className="contact-kicker">Kontakt</h2>

            <h3 className="contact-title">
              Lassen Sie uns Ihr Geschäft
              <span className="accent"> gemeinsam </span>
              voranbringen.
            </h3>

            <p className="contact-desc">
              Haben Sie eine Idee oder eine Problemstellung?
              Ich freue mich auf Ihre Nachricht und melde mich
              innerhalb von 24 Stunden bei Ihnen zurück.
            </p>

            {/* Kontaktinformationen */}
            <div className="contact-info contact-links">

              {/* Email Block */}
              <div className="info-item">
                <div className="info-icon">✉</div>

                <div>
                  <p className="info-label">Schreiben Sie mir</p>

                  <div className="info-value">
                    {/* mailto öffnet nur das Mailprogramm */}
                    <a href="mailto:info@hamdalla-web.com">
                      info@hamdalla-web.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Standort */}
              <div className="info-item">
                <div className="info-icon">📍</div>

                <div>
                  <p className="info-label">Standort</p>
                  <p className="info-value">Remote Deutschland</p>
                </div>
              </div>

            </div>
          </div>


          {/* ===================== */}
          {/* Rechte Seite: Formular */}
          {/* ===================== */}
          <div className="contact-card">

            {/* 
              WICHTIG:
              ref verbindet das Formular mit formRef
              onSubmit ruft sendEmail auf
            */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="contact-form"
            >

              {/* Name + Email */}
              <div className="form-grid">

                <div>
                  <label>Ihr Name</label>

                  {/* 
                    name="name" ist extrem wichtig!
                    EmailJS liest nur Felder mit name=""
                  */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>

                <div>
                  <label>E-Mail Adresse</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>
              </div>

              {/* Betreff */}
              <div>
                <label>Betreff</label>

                <select name="subject" required>
                  <option value="Neue Webseite / Onlineshop">
                    Neue Webseite / Onlineshop
                  </option>
                  <option value="Webseiteoptimierung">
                    Webseiteoptimierung
                  </option>
                  <option value="Landingpage">
                    Landingpage
                  </option>
                  <option value="Sonstiges">
                    Sonstiges
                  </option>
                </select>
              </div>

              {/* Nachricht */}
              <div>
                <label>Ihre Nachricht</label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Erzählen Sie mir kurz von Ihrem Projekt..."
                  required
                />
              </div>

              {/* Submit Button */}
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