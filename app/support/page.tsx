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

export default function SupportPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">Support</div>
          <h1>Hjelp og kundestøtte.</h1>
          <p>
            Trenger du hjelp med en MediPro-app, abonnement, tilgang,
            virksomhetslisens eller tekniske spørsmål, kan du kontakte oss.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="mailto:support@medipro.no">
              Kontakt support
            </a>
            <a className="secondaryButton" href="/kontakt">
              Kontakt MediPro
            </a>
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Supportområder</span>
          <h2>Riktig hjelp når du trenger det.</h2>
          <p>
            Vi hjelper med tekniske spørsmål, tilgang, abonnement,
            virksomhetsavtaler og andre henvendelser knyttet til MediPro.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Eksisterende kunder</h2>
            <p>
              For spørsmål om bruk av appene, feil, tilgang eller andre forhold
              knyttet til eksisterende kundeforhold.
              <br />
              <br />
              <strong>support@medipro.no</strong>
            </p>
          </article>

          <article className="subCard">
            <h2>Abonnement og betaling</h2>
            <p>
              Individuelle abonnementer håndteres gjennom App Store eller annen
              godkjent betalingsløsning. Spørsmål om virksomhetslisenser kan
              sendes til oss direkte.
            </p>
          </article>

          <article className="subCard">
            <h2>Virksomheter</h2>
            <p>
              Arbeidsgivere og fagmiljøer kan kontakte oss for informasjon om
              felles lisens, onboarding, tilgang for ansatte og tilpasning.
            </p>
          </article>

          <article className="subCard">
            <h2>Tilbakemeldinger</h2>
            <p>
              Innspill fra helsepersonell er viktig for videreutviklingen av
              MediPro. Vi tar gjerne imot forslag til forbedringer og nye
              funksjoner.
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Trenger du hjelp?</span>
            <h2>Kontakt support direkte.</h2>
            <p>
              Beskriv kort hvilken app det gjelder, hva problemet er, og
              hvilken enhet du bruker.
            </p>
          </div>

          <a href="mailto:support@medipro.no">support@medipro.no</a>
        </div>
      </section>
    </main>
  )
}
