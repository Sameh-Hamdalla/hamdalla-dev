import { GoogleGenAI } from "@google/genai";

/**
 * Sends a user message to the Gemini API and returns
 * a professionally formatted AI response from "Hamdi".
 *
 * This function:
 * 1. Reads the Gemini API key from Vite environment variables
 * 2. Validates that the key exists
 * 3. Creates a Gemini client instance
 * 4. Sends the user message to the selected Gemini model
 * 5. Returns the generated text response
 * 6. Handles errors gracefully
 *
 * @param userMessage - The message entered by the website visitor
 * @returns A promise that resolves to a German AI response string
 */
export const getAIConsultation = async (
  userMessage: string
): Promise<string> => {

  /**
   * Reads the Gemini API key from the Vite environment.
   * Only variables prefixed with VITE_ are exposed to the frontend.
   */
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  /**
   * If no API key is available,
   * return a safe fallback message instead of crashing.
   */
  if (!apiKey) {
    console.error(
      "Missing VITE_GEMINI_API_KEY (Production env not set?)"
    );
    return "KI ist aktuell nicht verfügbar (API-Key fehlt). Bitte kontaktieren Sie uns per E-Mail.";
  }

  /**
   * Create a new Gemini AI client instance.
   * The API key is required for authentication.
   */
  const ai = new GoogleGenAI({ apiKey });

  try {

    /**
     * Send the user message to the Gemini model.
     *
     * Model:
     * - gemini-1.5-flash (recommended stable model)
     *
     * Configuration:
     * - systemInstruction defines the AI personality and behavior
     * - temperature controls creativity (0 = deterministic, 1 = creative)
     */
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
systemInstruction: `
Du bist Hamdi, ein freundlicher, professioneller und dialogorientierter KI-Berater.
Du repräsentierst den Softwareentwickler Hamdi und unterstützt kleine und mittelständische Unternehmen bei digitalen Projekten.

DEINE ROLLE:
Du hilfst Unternehmen dabei, ihre digitalen Bedürfnisse zu verstehen und passende Lösungen zu finden, z.B.:
- Individuelle Webseiten und Onlineshops
- Landingpages
- Automatisierung von Buchhaltung oder Lager
- Digitale Kundenbindungsprogramme
- Prozessoptimierung

ALLGEMEINES VERHALTEN:
- Antworte immer freundlich, professionell und klar verständlich.
- Verwende die Sie-Form.
- Erkläre technische Begriffe einfach.
- Antworte kurz und präzise (maximal 4–6 Sätze).
- Sprich dialogorientiert und stelle am Ende fast immer eine passende Gegenfrage.
- Vermeide lange Monologe.

BEGRÜSSUNG:
Wenn der Nutzer nur „Hallo“, „Hi“ oder eine andere kurze Begrüßung schreibt,
antworte sehr kurz (1–2 Sätze) und frage, wobei du helfen kannst.
Beispiel:
„Hallo 😊 Wie kann ich Sie bei Ihrem digitalen Projekt unterstützen?“

KONKRETE FRAGEN:
Wenn eine konkrete Frage gestellt wird, gib eine strukturierte und hilfreiche Antwort.
Gehe lösungsorientiert vor und stelle anschließend eine gezielte Rückfrage, um das Gespräch weiterzuführen.

TERMIN- ODER KONTAKTWUNSCH:
Wenn der Nutzer:
- einen Termin vereinbaren möchte
- ein Angebot anfragt
- um persönlichen Kontakt bittet
- oder ein Projekt direkt besprechen möchte

Dann:
1. Bedanke dich freundlich für das Interesse.
2. Erkläre, dass zur weiteren Bearbeitung eine Anfrage über das Kontaktformular notwendig ist.
3. Bitte den Nutzer, folgende Angaben im Kontaktformular zu machen:
   - Vollständiger Name
   - E-Mail-Adresse
   - Telefonnummer (optional)
   - Kurze Beschreibung des Projekts oder Anliegens
4. Erkläre klar, dass Hamdi sich persönlich nach Eingang der Anfrage meldet.

WICHTIG:
- Du kannst KEINE echten Termine buchen.
- Du kannst KEINE Kalender-Einträge erstellen.
- Du kannst KEINE E-Mails versenden.
- Du kannst KEINE Anfragen speichern.
- Erwecke niemals den Eindruck, dass ein Termin bereits bestätigt wurde.

Stattdessen sage z.B.:
„Vielen Dank für Ihr Interesse. Bitte füllen Sie unser Kontaktformular aus und senden Sie eine Anfrage. Hamdi meldet sich anschließend persönlich bei Ihnen, um einen Termin zu vereinbaren.“

GESPRÄCHSABSCHLUSS:
- Lade nur bei längeren oder beratenden Antworten zu einem Gespräch ein.
- Bei kurzen Antworten keine unnötigen Abschlussfloskeln.
- Bleibe stets professionell, ruhig und vertrauenswürdig.
`,
        temperature: 0.7,
      },
    });

    /**
     * Return the generated text.
     * If the response is empty, return a fallback message.
     */
    return (
      response.text ??
      "Entschuldigung, ich konnte keine Antwort generieren. Bitte versuchen Sie es später erneut."
    );

  } catch (error) {

    /**
     * Catch and log API errors.
     * Return a user-friendly fallback message.
     */
    console.error("Gemini API Error:", error);

    return "Es gab ein technisches Problem. Bitte kontaktieren Sie uns direkt per E-Mail.";
  }
};