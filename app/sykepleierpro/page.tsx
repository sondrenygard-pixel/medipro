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
        <a href="/support">Support</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default function SykepleierProPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">For sykepleiere</div>
          <h1>SykepleierPro</h1>
          <p>
            Kliniske verktøy, beregninger og faglig støtte samlet i én moderne
            app for sykepleiere og sykepleierstudenter.
          </p>
        </section>
      </div>

      <section className="subContent">
        <div className="subGrid">
          <article className="subCard">
            <h2>Støtte gjennom vakten</h2>
            <p>
              Rask tilgang til NEWS2, ABCDE, ISBAR, GCS, væskebalanse,
              legemiddelregning og andre praktiske verktøy.
            </p>
          </article>

          <article className="subCard">
            <h2>Bygget for klinisk hverdag</h2>
            <p>
              Appen er laget for situasjoner der man trenger oversikt raskt,
              uten å bruke unødvendig tid på å lete i ulike kilder.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig utvikling</h2>
            <p>
              Nye funksjoner, fagområder og forbedringer legges til fortløpende
              basert på klinisk erfaring og behov i norsk helsetjeneste.
            </p>
          </article>

          <article className="subCard">
            <h2>For ansatte og arbeidsgivere</h2>
            <p>
              SykepleierPro kan brukes med individuelt abonnement eller tilbys
              gjennom virksomhetslisens.
            </p>
          </article>
        </div>

        <div className="subNotice">
          SykepleierPro er et faglig støtteverktøy og erstatter ikke klinisk
          vurdering, lokale prosedyrer, ordinasjoner eller helsepersonells
          selvstendige ansvar.
        </div>
      </section>
    </main>
  )
}
