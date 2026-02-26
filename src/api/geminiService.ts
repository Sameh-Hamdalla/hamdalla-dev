import { GoogleGenAI } from "@google/genai";

export const getAIConsultation = async (userMessage: string) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // ✅ Wenn kein Key da ist, NICHT crashen – nur eine saubere Meldung zurückgeben
  if (!apiKey) {
    console.error("Missing VITE_GEMINI_API_KEY (Production env not set?)");
    return "KI ist aktuell nicht verfügbar (API-Key fehlt). Bitte kontaktieren Sie uns per E-Mail.";
  }

  // ✅ AI erst hier erstellen (nicht beim Import!)
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Du bist ein freundlicher KI-Berater für einen Softwareentwickler namens 'DevFlow'. 
Deine Aufgabe ist es, kleinen Unternehmen (Bäckereien, Handwerker, Boutiquen) und Einzelhändlern zu helfen, 
ihre digitalen Bedürfnisse zu verstehen.

Antworte professionell, bodenständig und auf Deutsch.
Erkläre komplexe IT-Begriffe einfach.
Schlage konkrete Lösungen vor wie:
1. Individuelle Webseiten & Onlineshops.
2. Automatisierung von Buchhaltung oder Lager.
3. Digitale Kundenbindungsprogramme.

Halte dich kurz und biete am Ende an, ein persönliches Gespräch mit dem Entwickler zu vereinbaren.`,
        temperature: 0.7,
      },
    });

    return (
      response.text ||
      "Entschuldigung, ich konnte keine Antwort generieren. Bitte versuchen Sie es später erneut."
    );
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein technisches Problem. Bitte kontaktieren Sie uns direkt per E-Mail.";
  }
};