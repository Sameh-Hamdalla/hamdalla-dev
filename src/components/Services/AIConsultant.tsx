import React, { useState, useRef, useEffect } from "react";
import "./ai-consultant.css";
import { getAIConsultation } from "../../api/geminiService";
import { ChatMessage } from "../../../types";

/**
 * Props Interface
 * ----------------
 * isOpen  → Steuert, ob das Chat-Fenster angezeigt wird
 * onClose → Callback-Funktion zum Schließen des Chat-Fensters
 */
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * AIConsultant Component
 * ----------------------
 * Diese React-Komponente stellt das komplette KI-Chatfenster dar.
 *
 * Verantwortlichkeiten:
 * - UI anzeigen (Modal, Header, Messages, Footer)
 * - Nachrichten verwalten (User & Assistant)
 * - API-Aufruf an Gemini auslösen
 * - Ladezustand anzeigen
 * - Automatisch nach unten scrollen
 */
const AIConsultant: React.FC<Props> = ({ isOpen, onClose }) => {

  /**
   * messages State
   * --------------
   * Speichert den gesamten Chatverlauf.
   * Initial wird eine Begrüßungsnachricht vom Assistant gesetzt.
   */
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hallo! Ich bin Ihr KI-Berater von Hamdalla Dev."
    }
  ]);

  /**
   * input State
   * -----------
   * Speichert den aktuellen Text im Eingabefeld.
   */
  const [input, setInput] = useState("");

  /**
   * loading State
   * -------------
   * Zeigt an, ob gerade eine Anfrage an die KI läuft.
   * Wird genutzt für:
   * - Deaktivieren des Inputs
   * - Anzeigen der Typing-Animation
   */
  const [loading, setLoading] = useState(false);

  /**
   * endRef
   * ------
   * Referenz auf das unterste Element im Chat.
   * Wird verwendet, um automatisch nach unten zu scrollen.
   */
  const endRef = useRef<HTMLDivElement>(null);

  /**
   * useEffect Hook
   * --------------
   * Wird jedes Mal ausgeführt, wenn sich die Nachrichten ändern.
   * Sorgt dafür, dass automatisch zum neuesten Chat-Eintrag gescrollt wird.
   */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /**
   * send()
   * ------
   * Wird ausgelöst, wenn der Nutzer eine Nachricht sendet.
   *
   * Ablauf:
   * 1. Prüfen, ob Eingabe leer oder bereits geladen wird
   * 2. User-Nachricht im State speichern
   * 3. Ladezustand aktivieren
   * 4. KI-Antwort vom Service holen
   * 5. Antwort im State speichern
   * 6. Ladezustand deaktivieren
   */
  const send = async () => {

    // Verhindert leere Nachrichten oder Doppel-Klick während Laden
    if (!input.trim() || loading) return;

    const text = input.trim();

    // Eingabefeld leeren
    setInput("");

    // User-Nachricht zum Chat hinzufügen
    setMessages(m => [...m, { role: "user", content: text }]);

    // Ladezustand aktivieren
    setLoading(true);

    // API-Aufruf an geminiService.ts
    const reply = await getAIConsultation(text);

    // Assistant-Antwort hinzufügen
    setMessages(m => [...m, { role: "assistant", content: reply }]);

    // Ladezustand deaktivieren
    setLoading(false);
  };

  /**
   * Wenn das Chatfenster geschlossen ist,
   * wird nichts gerendert.
   */
  if (!isOpen) return null;

  return (
    <div className="ai-overlay">
      <div className="ai-modal">

        {/* ================= HEADER ================= */}
        <div className="ai-header">
          <div className="ai-header-left">
            <div className="ai-avatar">🤖</div>
            <div>
              <div className="ai-title">Hamdi KI-Berater</div>
              <div className="ai-status">Online</div>
            </div>
          </div>

          {/* Schließen-Button */}
          <button className="ai-close" onClick={onClose}>✕</button>
        </div>

        {/* ================= MESSAGES ================= */}
        <div className="ai-messages">

          {/* Alle Chat-Nachrichten rendern */}
          {messages.map((m, i) => (
            <div key={i} className={`msg-row ${m.role}`}>
              <div className={`msg-bubble ${
                m.role === "user" ? "msg-user" : "msg-assistant"
              }`}>
                {m.content}
              </div>
            </div>
          ))}

          {/* Typing Animation während Laden */}
          {loading && (
            <div className="msg-row assistant">
              <div className="ai-typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}

          {/* Unsichtbarer Scroll-Anker */}
          <div ref={endRef} />
        </div>

        {/* ================= FOOTER ================= */}
        <div className="ai-footer">

          {/* Formular für Texteingabe */}
          <form
            className="ai-form"
            onSubmit={e => {
              e.preventDefault(); // Verhindert Seiten-Reload
              send();
            }}
          >
            <input
              className="ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Frage stellen…"
              disabled={loading}
            />

            <button
              className="ai-send"
              disabled={!input.trim() || loading}
            >
              Senden
            </button>
          </form>

          {/* Hinweistext */}
          <div className="ai-note">
            KI kann Fehler machen — technische Details bitte prüfen.
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIConsultant;