import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("idle");

    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_8l5sbx5",
        "template_pg0whwh",
        formRef.current,
        "xs4NNYHVqLoEiUXeY"
      )
      .then(() => {
        setFormStatus("success");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.log("EmailJS error:", err);
        setFormStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-kicker">Kontakt</h2>

            <h3 className="contact-title">
              Lassen Sie uns Ihr Geschäft
              <span className="accent"> gemeinsam </span>
              voranbringen.
            </h3>

            <p className="contact-desc">
              Haben Sie eine Idee oder eine Problemstellung? Ich freue mich auf Ihre
              Nachricht und melde mich innerhalb von 24 Stunden bei Ihnen zurück.
            </p>

            <ul className="contact-benefits">
              <li>Persönliche Beratung statt Standardlösung</li>
              <li>Unverbindliche Ersteinschätzung</li>
              <li>Antwort meist innerhalb von 24 Stunden</li>
            </ul>

            <div className="contact-info contact-links">
              <div className="info-item">
                <div className="info-icon" aria-hidden="true">✉</div>

                <div>
                  <p className="info-label">Schreiben Sie mir</p>

                  <div className="info-value">
                    <a href="mailto:info@hamdalla-web.com">
                      info@hamdalla-web.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">⌖</div>

                <div>
                  <p className="info-label">Standort</p>
                  <p className="info-value">Remote Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="contact-form"
            >
              <div className="form-head">
                <h4 className="form-title">Projekt anfragen</h4>
                <p className="form-desc">
                  Füllen Sie das Formular kurz aus. Ich prüfe Ihre Anfrage und melde
                  mich zeitnah mit einer ersten Einschätzung.
                </p>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">
                    Ihr Name <span className="required">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    E-Mail Adresse <span className="required">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="phone">Telefonnummer <span>optional</span></label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+49 ..."
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject">
                  Betreff <span className="required">*</span>
                </label>

                <select id="subject" name="subject" required>
                  <option value="Neue Website">Neue Website</option>
                  <option value="Website modernisieren">Website modernisieren</option>
                  <option value="Onlineshop">Onlineshop</option>
                  <option value="Individuelle Software">Individuelle Software</option>
                  <option value="Wartung & Support">Wartung & Support</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Ihre Nachricht <span className="required">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Erzählen Sie mir kurz von Ihrem Projekt..."
                  required
                />
              </div>

              <div className="privacy-row">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                />

                <label htmlFor="privacy" className="privacy-label">
                  Ich stimme der Verarbeitung meiner Daten zu. <br />
                  <Link to="/datenschutz" className="privacy-link">
                    Datenschutzerklärung lesen
                  </Link>
                </label>
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Wird gesendet..." : "Anfrage absenden"}
              </button>

              <p className="form-note">
                Ihre Anfrage ist unverbindlich. Ich melde mich in der Regel innerhalb von 24 Stunden.
              </p>

              <div aria-live="polite">
                {formStatus === "success" && (
                  <p className="form-message form-message-success">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="form-message form-message-error">
                    Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
