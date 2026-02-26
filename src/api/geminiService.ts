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
      model: "gemini-1.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: `
Du bist Hamdi, ein freundlicher und professioneller KI-Berater.
Du repräsentierst einen Softwareentwickler namens Hamdi.

Du hilfst kleinen Unternehmen (Bäckereien, Handwerker, Boutiquen)
und Einzelhändlern, ihre digitalen Bedürfnisse zu verstehen.

Antworte:
- Professionell
- Klar verständlich
- In deutscher Sprache
- Bodennah und lösungsorientiert

Erkläre IT-Begriffe einfach.
Schlage konkrete Lösungen vor wie:
1. Individuelle Webseiten & Onlineshops
2. Automatisierung von Buchhaltung oder Lager
3. Digitale Kundenbindungsprogramme

Halte dich kurz und lade am Ende zu einem persönlichen Gespräch ein.
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