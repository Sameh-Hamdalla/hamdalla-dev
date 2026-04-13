const Impressum = () => {
  return (
    <div className="impressum-container">
      <style>{`
        .impressum-container {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .impressum-container h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .impressum-container h2 {
          margin-top: 2rem;
          font-size: 1.3rem;
        }

        .impressum-container p {
          margin: 0.5rem 0;
        }

        .impressum-container a {
          color: #007bff;
          text-decoration: none;
        }

        .impressum-container a:hover {
          text-decoration: underline;
        }
      `}</style>

      <h1>Impressum</h1>

      <p><strong>Angaben gemäß § 5 TMG</strong></p>

      <p>
        HAMDALLA WEB<br />
        Inhaber: Sameh Hamdalla<br />
        Jägerweg 8<br />
        79879 Wutach<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 015154844078<br />
        E-Mail:{" "}
        <a href="mailto:info@hamdalla-web.com">
          info@hamdalla-web.com
        </a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        (wird nachgereicht, falls vorhanden)
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        Sameh Hamdalla<br />
        Jägerweg 8<br />
        79879 Wutach<br />
        Deutschland
      </p>
    </div>
  );
};

export default Impressum;