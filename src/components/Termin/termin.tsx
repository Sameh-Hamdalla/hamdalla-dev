import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./termin.css";

const currentDate = new Date();

const month = currentDate.toLocaleDateString("de-DE", {
  month: "long",
});

const monthNumber = String(
  currentDate.getMonth() + 1
).padStart(2, "0");

const year = currentDate.getFullYear();

const daysInMonth = new Date(
  year,
  Number(monthNumber),
  0
).getDate();

const days = Array.from(
  { length: daysInMonth },
  (_, index) => index + 1
);

const today = currentDate.getDate();
const allowedWeekdays = [2, 3, 5];

const availableDays = days.filter((day) => {
  const date = new Date(year, Number(monthNumber) - 1, day);
  const isAllowedWeekday = allowedWeekdays.includes(date.getDay());
  const isPastDay = day < today;

  return isAllowedWeekday && !isPastDay;
});

const firstAvailableDay = availableDays[0] ?? today;

const times = ["14:00", "15:00", "16:00"];

const Termin: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formSectionRef = useRef<HTMLDivElement | null>(null);
  const [selectedDay, setSelectedDay] = useState(firstAvailableDay);
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSending, setIsSending] = useState(false);

  const selectedAppointment = `${selectedDay}.${monthNumber}.${year} um ${selectedTime} Uhr`;

  const openForm = () => {
    setIsFormOpen(true);
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const sendTerminRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("idle");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    setIsSending(true);

    emailjs
      .send(
        "service_8l5sbx5",
        "template_pg0whwh",
        {
          name,
          email,
          phone,
          telefon: phone,
          telefonnummer: phone,
          handynummer: phone,
          subject: "Kostenlose Beratung",
          termin: selectedAppointment,
          message: [
            `Terminwunsch: ${selectedAppointment}`,
            `Handynummer: ${phone}`,
            "",
            message,
          ].join("\n"),
        },
        "xs4NNYHVqLoEiUXeY"
      )
      .then(() => {
        setFormStatus("success");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.log("EmailJS error:", error);
        setFormStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="termin" className="termin-section">
      <div className="termin-shell">
        <div className="termin-hero">
          <a href="/" className="termin-back">
            Zur Startseite
          </a>

          <p className="termin-eyebrow">
            Kostenlose Erstberatung
          </p>

          <h1>
            Finden wir gemeinsam den besten Zeitpunkt.
          </h1>

          <p>
            Wählen Sie ein freies Zeitfenster aus.
            Danach können Sie Ihre Projektidee kurz
            beschreiben und die Anfrage absenden.
          </p>

          <p className="booking-info">
            Der Terminwunsch wird nach Prüfung bestätigt.
            Sie erhalten anschließend eine Rückmeldung
            per E-Mail.
          </p>
        </div>

        <div className="termin-layout">
          <div className="termin-card termin-calendar-card">
            <div className="card-title-row">
              <div>
                <span className="small-label">
                  Datum
                </span>

                <h2>
                  {month} {year}
                </h2>
              </div>

              <span className="month-chip">
                Europe/Berlin
              </span>
            </div>

            <div className="calendar-weekdays">
              <span>Mo</span>
              <span>Di</span>
              <span>Mi</span>
              <span>Do</span>
              <span>Fr</span>
              <span>Sa</span>
              <span>So</span>
            </div>

            <div className="calendar-grid">
              {days.map((day) => {
                const isSelected =
                  selectedDay === day;

                const isAvailable =
                  availableDays.includes(day);
                const isPastDay = day < today;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={!isAvailable}
                    className={[
                      "calendar-day",
                      isSelected
                        ? "selected"
                        : "",
                      isAvailable
                        ? "available"
                        : "",
                      isPastDay
                        ? "past"
                        : "",
                    ].join(" ")}
                    onClick={() =>
                      setSelectedDay(day)
                    }
                    aria-pressed={isSelected}
                  >
                    <span>{day}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="termin-card time-card">
            <span className="small-label">
              Uhrzeit
            </span>

            <h2>Verfügbare Slots</h2>

            <div className="time-list">
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`time-button ${
                    selectedTime === time
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTime(time)
                  }
                  aria-pressed={
                    selectedTime === time
                  }
                >
                  <span>{time}</span>
                  <small>Online Call</small>
                </button>
              ))}
            </div>
          </div>

          <aside className="termin-summary">
            <span className="small-label">
              Ihre Auswahl
            </span>

            <h2>
              Kostenlose Beratung
            </h2>

            <div className="summary-date">
              <strong>
                {selectedDay}. {month} {year}
              </strong>

              <span>
                {selectedTime} Uhr,
                ca. 60 Minuten
              </span>
            </div>

            <ul>
              <li>
                Projektidee und nächste Schritte
              </li>

              <li>
                Unverbindlich und kostenlos
              </li>

              <li>
                Termin wird nach Prüfung
                bestätigt
              </li>
            </ul>

            <button
              type="button"
              className="booking-submit"
              onClick={openForm}
            >
              Anfrage vorbereiten
            </button>
          </aside>
        </div>

        {isFormOpen && (
          <div className="termin-form-wrap" ref={formSectionRef}>
            <form
              ref={formRef}
              onSubmit={sendTerminRequest}
              className="termin-form"
            >
              <div className="form-head">
                <p className="termin-eyebrow">Termin anfragen</p>
                <h2>Fast geschafft.</h2>
                <p>
                  Hinterlassen Sie bitte Ihre Kontaktdaten. Ihre Handynummer ist
                  Pflicht, damit ich Sie zum vereinbarten Zeitpunkt anrufen kann.
                </p>
              </div>

              <input type="hidden" name="termin" value={selectedAppointment} />
              <input type="hidden" name="subject" value="Kostenlose Beratung" />

              <div className="selected-appointment">
                <span>Ausgewählter Termin</span>
                <strong>{selectedAppointment}</strong>
              </div>

              <div className="termin-form-grid">
                <div className="termin-field">
                  <label htmlFor="termin-name">
                    Ihr Name <span className="required">*</span>
                  </label>
                  <input
                    id="termin-name"
                    type="text"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>

                <div className="termin-field">
                  <label htmlFor="termin-email">
                    E-Mail Adresse <span className="required">*</span>
                  </label>
                  <input
                    id="termin-email"
                    type="email"
                    name="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>
              </div>

              <div className="termin-field">
                <label htmlFor="termin-phone">
                  Handynummer <span className="required">*</span>
                </label>
                <input
                  id="termin-phone"
                  type="tel"
                  name="phone"
                  placeholder="+49 ..."
                  required
                />
              </div>

              <div className="termin-field">
                <label htmlFor="termin-message">
                  Ihre Nachricht <span className="required">*</span>
                </label>
                <textarea
                  id="termin-message"
                  name="message"
                  rows={5}
                  placeholder="Erzählen Sie mir kurz, worum es bei Ihrem Projekt geht..."
                  required
                />
              </div>

              <div className="privacy-row">
                <input type="checkbox" id="termin-privacy" name="privacy" required />
                <label htmlFor="termin-privacy" className="privacy-label">
                  Ich stimme der Verarbeitung meiner Daten zu. <br />
                  <Link to="/datenschutz" className="privacy-link">
                    Datenschutzerklärung lesen
                  </Link>
                </label>
              </div>
              
              <button type="submit" className="termin-submit" disabled={isSending}>
                {isSending ? "Wird gesendet..." : "Termin-Anfrage absenden"}
              </button>

              <p className="form-note">
                Die Anfrage ist unverbindlich. Der Termin wird nach Prüfung bestätigt.
              </p>

              <div aria-live="polite">
                {formStatus === "success" && (
                  <p className="form-message form-message-success">
                    Vielen Dank! Ihre Termin-Anfrage wurde erfolgreich gesendet.
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="form-message form-message-error">
                    Leider konnte die Anfrage nicht gesendet werden. Bitte versuchen
                    Sie es später erneut.
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Termin;
