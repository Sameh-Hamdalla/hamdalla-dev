import React from "react";

const Datenschutz = () => {
  return (
    <div className="datenschutz-container">
      <style>{`
        .datenschutz-container {
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .datenschutz-container h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .datenschutz-container h2 {
          margin-top: 2rem;
          font-size: 1.3rem;
        }

        .datenschutz-container p {
          margin: 0.5rem 0;
        }

        .datenschutz-container ul {
          padding-left: 1.2rem;
        }
      `}</style>

      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Sameh Hamdalla<br />
        HAMDALLA WEB<br />
        Jägerweg 8<br />
        79879 Wutach<br />
        Deutschland
      </p>
      <p>
        Telefon: 015154844078<br />
        E-Mail: info@hamdalla-web.com
      </p>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften (DSGVO).
      </p>

      <h2>3. Datenerfassung auf unserer Website</h2>
      <p>
        Beim Besuch unserer Website werden automatisch Informationen erfasst:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Browsertyp</li>
        <li>Betriebssystem</li>
        <li>Uhrzeit des Zugriffs</li>
      </ul>
      <p>
        Diese Daten dienen der technischen Sicherheit und werden nicht zur
        Identifikation genutzt.
      </p>

      <h2>4. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre
        Angaben zur Bearbeitung Ihrer Anfrage gespeichert.
      </p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>

      <h2>5. Hosting</h2>
      <p>
        Unsere Website wird bei einem externen Anbieter gehostet. Dabei können
        personenbezogene Daten (z. B. IP-Adressen) verarbeitet werden.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies, um die Nutzung zu verbessern. Sie
        können Cookies in Ihrem Browser jederzeit deaktivieren.
      </p>

      <h2>7. Instagram</h2>
      <p>
        Auf unserer Website sind Links zu unserem Profil bei Instagram
        eingebunden.
      </p>
      <p>
        Instagram ist ein Dienst der Meta Platforms Ireland Limited,
        4 Grand Canal Square, Dublin 2, Irland.
      </p>
      <p>
        Wenn Sie auf einen Instagram-Link klicken, werden Sie auf die externe
        Website von Instagram weitergeleitet. Dabei können personenbezogene Daten
        (z. B. IP-Adresse) an Instagram übermittelt werden.
      </p>
      <p>
        Wir haben keinen Einfluss auf die Verarbeitung dieser Daten durch
        Instagram.
      </p>
      <p>
        Weitere Informationen finden Sie hier:
        https://help.instagram.com/519522125107875
      </p>

      <h2>8. Externe Links</h2>
      <p>
        Unsere Website enthält Links zu externen Seiten. Für deren Inhalte und
        Datenschutz sind die jeweiligen Betreiber verantwortlich.
      </p>

      <h2>9. Ihre Rechte</h2>
      <ul>
        <li>Auskunft über Ihre Daten</li>
        <li>Berichtigung</li>
        <li>Löschung</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p>
        Sie haben außerdem das Recht, sich bei einer Datenschutzbehörde zu
        beschweren.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen.
      </p>

    </div>
  );
};

export default Datenschutz;