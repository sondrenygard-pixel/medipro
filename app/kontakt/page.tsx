function Header() {
  return (
    <header className="subHeader">
      <a className="siteBrand" href="/">
        <div className="siteBrandMark">M</div>
        <div>
          <strong>MediPro</strong>
          <span>Kliniske verktøy</span>
        </div>
      </a>

      <nav className="subNav">
        <a href="/">Forside</a>
        <a href="/sykepleierpro">SykepleierPro</a>
        <a href="/ambulansepro">AmbulansePro</a>
        <a href="/legepro">LegePro</a>
        <a href="/virksomheter">Virksomheter</a>
        <a href="/faglige-kilder">Faglige kilder</a>
        <a href="/support">Support</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default function KontaktPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">Kontakt</div>
          <h1>Snakk med MediPro.</h1>
          <p>
            Har du spørsmål om appene, virksomhetslisens, samarbeid, support
            eller videre utvikling, kan du kontakte oss direkte.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="mailto:post@medipro.no">
              Send e-post
            </a>
            <a className="secondaryButton" href="/support">
              Gå til support
            </a>
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Kontaktinformasjon</span>
          <h2>Riktig kontaktpunkt for riktig behov.</h2>
          <p>
            Velg kontaktvei ut fra hva henvendelsen gjelder. Vi svarer så raskt
            vi kan.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Generelle henvendelser</h2>
            <p>
              For spørsmål om MediPro, samarbeid, presse, innspill eller annen
              generell kontakt.
              <br />
              <br />
              <strong>post@medipro.no</strong>
            </p>
          </article>

          <article className="subCard">
            <h2>Support</h2>
            <p>
              For tekniske spørsmål, tilgang, abonnement eller bruk av appene.
              <br />
              <br />
              <strong>support@medipro.no</strong>
            </p>
          </article>

          <article className="subCard">
            <h2>Virksomhetslisens</h2>
            <p>
              For arbeidsgivere, fagmiljøer, utdanningsinstitusjoner eller
              helseaktører som ønsker felles lisens.
              <br />
              <br />
              <strong>post@medipro.no</strong>
            </p>
          </article>

          <article className="subCard">
            <h2>Selskapsinformasjon</h2>
            <p>
              MediPro er en tjeneste levert av Smartverkstedet.
              <br />
              <br />
              <strong>Org.nr. 932 599 147</strong>
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Vil du vite mer?</span>
            <h2>Vi hjelper deg videre.</h2>
            <p>
              Send oss en kort beskrivelse av hva henvendelsen gjelder, så tar
              vi kontakt.
            </p>
          </div>

          <a href="mailto:post@medipro.no">post@medipro.no</a>
        </div>
      </section>
    </main>
  )
}
