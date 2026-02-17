import React, { useState, useRef, useEffect } from "react";
import "./ai-consultant.css";
import { getAIConsultation } from "../../api/geminiService";
import { ChatMessage } from "../../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultant: React.FC<Props> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hallo! Ich bin Ihr KI-Berater von DevFlow."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const text = input.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", content: text }]);
    setLoading(true);

    const reply = await getAIConsultation(text);

    setMessages(m => [...m, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-overlay">
      <div className="ai-modal">

        {/* Header */}
        <div className="ai-header">
          <div className="ai-header-left">
            <div className="ai-avatar">🤖</div>
            <div>
              <div className="ai-title">DevFlow KI-Berater</div>
              <div className="ai-status">Online</div>
            </div>
          </div>
          <button className="ai-close" onClick={onClose}>✕</button>
        </div>

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg-row ${m.role}`}>
              <div className={`msg-bubble ${
                m.role === "user" ? "msg-user" : "msg-assistant"
              }`}>
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="msg-row assistant">
              <div className="ai-typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* Footer */}
        <div className="ai-footer">
          <form className="ai-form"
            onSubmit={e => { e.preventDefault(); send(); }}
          >
            <input
              className="ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Frage stellen…"
              disabled={loading}
            />
            <button className="ai-send" disabled={!input.trim() || loading}>
              Senden
            </button>
          </form>

          <div className="ai-note">
            KI kann Fehler machen — technische Details bitte prüfen.
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIConsultant;
