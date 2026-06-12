export default function SykepleierProPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/">
          <div className="mark"><span>M</span></div>
          <span>MediPro</span>
        </a>

        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <section className="subHero">
        <div className="eyebrow">For sykepleiere</div>
        <h1>SykepleierPro</h1>
        <p>
          SykepleierPro er utviklet for sykepleiere som ønsker rask tilgang til
          kliniske støtteverktøy, beregninger og faglig informasjon gjennom hele
          vakten.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Støtte gjennom hele arbeidshverdagen</h2>
          <p>
            Appen samler praktiske verktøy som kan være nyttige i klinisk arbeid,
            fra vurdering og rapportering til legemiddelregning, væskebalanse og
            oppfølging av pasienter. Målet er å gjøre relevant informasjon
            tilgjengelig raskt, tydelig og strukturert.
          </p>
          <p>
            SykepleierPro er laget for situasjoner der man trenger oversikt uten
            å bruke unødvendig tid på å lete i ulike kilder.
          </p>
        </article>

        <article className="contentCard">
          <h2>Utvikles kontinuerlig</h2>
          <p>
            SykepleierPro er ikke ment å være et statisk produkt. Nye funksjoner,
            fagområder og forbedringer legges til fortløpende, basert på klinisk
            erfaring, brukerbehov og utviklingen i norsk helsetjeneste.
          </p>
          <p>
            Et abonnement gir derfor ikke bare tilgang til dagens funksjoner, men
            også til en løsning som skal bli bedre over tid.
          </p>
        </article>

        <article className="contentCard">
          <h2>For både enkeltbrukere og arbeidsgivere</h2>
          <p>
            Sykepleiere kan abonnere på appen selv, mens arbeidsgivere kan kjøpe
            felles lisens til ansatte. Ved virksomhetsavtale kan løsningen
            tilpasses kundens behov, fagområder, opplæringsinnhold og interne
            prioriteringer.
          </p>
        </article>

        <div className="notice">
          SykepleierPro er et faglig støtteverktøy. Appen erstatter ikke klinisk
          vurdering, lokale prosedyrer, ordinasjoner, dobbeltkontroll eller
          helsepersonells selvstendige ansvar.
        </div>
      </section>
    </main>
  )
}
