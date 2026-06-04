import React from "react";
import "./datenschutz.css";

const Datenschutz = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="legal-kicker">Rechtliches</span>
        <h1>Datenschutzerklärung</h1>
        <p>
          Informationen darüber, wie auf dieser Website personenbezogene Daten
          verarbeitet werden.
        </p>
      </section>

      <section className="legal-content">
        <article className="legal-section">
          <h2>1. Verantwortlicher</h2>
          <p>
            Sameh Hamdalla<br />
            HAMDALLA WEB<br />
            Jägerweg 8<br />
            79879 Wutach<br />
            Deutschland
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@hamdalla-web.com">info@hamdalla-web.com</a>
          </p>
        </article>

        <article className="legal-section">
          <h2>2. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir
            verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb
            dieser Website, die Kommunikation mit Ihnen oder die Bereitstellung
            unserer Angebote erforderlich ist.
          </p>
          <p>
            Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche oder vertragliche Maßnahmen), Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse) und, falls erforderlich, Art. 6 Abs.
            1 lit. a DSGVO (Einwilligung).
          </p>
        </article>

        <article className="legal-section">
          <h2>3. Hosting und Bereitstellung der Website</h2>
          <p>Diese Website wird technisch über folgende Anbieter bereitgestellt:</p>
          <ul>
            <li>IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland</li>
            <li>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
          </ul>
          <p>
            Beim Aufruf der Website können technisch erforderliche Zugriffsdaten
            verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des
            Zugriffs, Browsertyp, Betriebssystem, Referrer-URL und angefragte
            Dateien. Die Verarbeitung erfolgt zur sicheren und stabilen
            Bereitstellung der Website.
          </p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
        </article>

        <article className="legal-section">
          <h2>4. Kontaktformular und E-Mail-Kontakt</h2>
          <p>
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren,
            verarbeiten wir die von Ihnen angegebenen Daten, insbesondere Name,
            E-Mail-Adresse, Betreff und Nachricht, zur Bearbeitung Ihrer Anfrage.
          </p>
          <p>
            Für den Versand von Nachrichten über das Kontaktformular verwenden
            wir EmailJS. Dabei werden die Formulardaten an EmailJS übermittelt,
            damit Ihre Anfrage per E-Mail an uns zugestellt werden kann.
          </p>
          <p>
            Anbieter: EmailJS Pte Ltd. Weitere Informationen finden Sie in der
            Datenschutzerklärung von EmailJS:{" "}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.emailjs.com/legal/privacy-policy/
            </a>
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage mit
            einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt;
            ansonsten Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </article>

        <article className="legal-section">
          <h2>5. KI-Berater</h2>
          <p>
            Auf dieser Website kann ein KI-Berater genutzt werden. Wenn Sie eine
            Nachricht in das Chatfeld eingeben und absenden, wird der eingegebene
            Text verarbeitet, um eine Antwort zu erzeugen.
          </p>
          <p>
            Zur Bereitstellung der KI-Funktion nutzen wir Dienste von Google
            Gemini. Dabei können Ihre eingegebenen Inhalte an Google übermittelt
            und dort verarbeitet werden. Geben Sie in den KI-Chat bitte keine
            sensiblen Daten, vertraulichen Informationen oder besonderen
            Kategorien personenbezogener Daten ein.
          </p>
          <p>
            Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland. Weitere Informationen finden Sie in der
            Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
        </article>

        <article className="legal-section">
          <h2>6. Cookies und lokale Speicherung</h2>
          <p>
            Diese Website verwendet nach aktuellem Stand keine Analyse- oder
            Marketing-Cookies. Ein Cookie-Banner ist daher für solche Zwecke
            nicht erforderlich.
          </p>
          <p>
            Technisch notwendige Speicherungen oder Zugriffsdaten können durch
            den Betrieb der Website und das Hosting entstehen. Soweit dafür
            personenbezogene Daten verarbeitet werden, erfolgt dies zur
            Bereitstellung und Sicherheit der Website.
          </p>
        </article>

        <article className="legal-section">
          <h2>7. Social Media Links</h2>
          <p>
            Auf unserer Website befinden sich Links zu unseren Profilen auf
            externen Plattformen:
          </p>
          <ul>
            <li>Instagram / Meta Platforms Ireland Limited</li>
            <li>LinkedIn / LinkedIn Ireland Unlimited Company</li>
            <li>GitHub / GitHub, Inc.</li>
          </ul>
          <p>
            Beim reinen Besuch unserer Website werden durch diese Links keine
            Social-Media-Plugins geladen. Erst wenn Sie einen Link anklicken,
            verlassen Sie unsere Website und es gelten die Datenschutzregeln des
            jeweiligen Plattformbetreibers.
          </p>
        </article>

        <article className="legal-section">
          <h2>8. Externe Links und Projektlinks</h2>
          <p>
            Unsere Website enthält Links zu externen Seiten, insbesondere zu
            Projektbeispielen, Social-Media-Profilen und weiteren externen
            Angeboten. Für Inhalte und Datenschutz dieser externen Seiten sind
            die jeweiligen Betreiber verantwortlich.
          </p>
        </article>

        <article className="legal-section">
          <h2>9. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für
            den jeweiligen Zweck erforderlich ist oder gesetzliche
            Aufbewahrungsfristen bestehen. Anfragen per Kontaktformular oder
            E-Mail löschen wir, wenn die Bearbeitung abgeschlossen ist und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </article>

        <article className="legal-section">
          <h2>10. Ihre Rechte</h2>
          <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</li>
          </ul>
          <p>
            Außerdem haben Sie das Recht, sich bei einer zuständigen
            Datenschutzaufsichtsbehörde zu beschweren.
          </p>
        </article>

        <article className="legal-section">
          <h2>11. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
            „https://“ in der Adresszeile Ihres Browsers.
          </p>
        </article>

        <article className="legal-section">
          <h2>12. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
            sich technische, rechtliche oder organisatorische Änderungen ergeben.
          </p>
          <p>Stand: Juni 2026</p>
        </article>
      </section>
    </main>
  );
};

export default Datenschutz;
