export default function LegeProPage() {
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
        <div className="eyebrow">For leger</div>
        <h1>LegePro</h1>
        <p>
          LegePro utvikles som en klinisk arbeidsflate for leger som ønsker rask
          tilgang til medisinske kalkulatorer, faglig støtte og relevante
          kliniske verktøy i en travel arbeidshverdag.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Kliniske verktøy samlet ett sted</h2>
          <p>
            LegePro skal gjøre det enklere å finne relevant støtte i klinisk
            arbeid, enten det gjelder beregninger, vurderingsverktøy,
            fagoppslag eller praktisk beslutningsstøtte.
          </p>
          <p>
            Målet er å redusere friksjon i arbeidshverdagen og gi rask tilgang
            til informasjon når presisjon og oversikt er avgjørende.
          </p>
        </article>

        <article className="contentCard">
          <h2>Bygget for norsk klinisk praksis</h2>
          <p>
            Plattformen utvikles med norsk helsetjeneste som utgangspunkt og
            med fokus på brukervennlighet, faglig kvalitet og effektiv tilgang
            til relevante ressurser.
          </p>
        </article>

        <article className="contentCard">
          <h2>Under aktiv utvikling</h2>
          <p>
            LegePro er en del av MediPros langsiktige satsing på digitale
            verktøy for helsepersonell. Nye fagområder, funksjoner og
            støtteverktøy vil bli introdusert gradvis.
          </p>
        </article>

        <article className="contentCard">
          <h2>For leger og arbeidsgivere</h2>
          <p>
            Leger vil kunne abonnere individuelt, samtidig som arbeidsgivere kan
            kjøpe felles lisens til ansatte. Ved virksomhetsavtale kan løsningen
            tilpasses organisasjonens behov, fagområder og interne
            prioriteringer.
          </p>
        </article>

        <div className="notice">
          LegePro er et faglig støtteverktøy og erstatter ikke klinisk vurdering,
          medisinsk ansvar, lokale prosedyrer, ordinasjoner eller gjeldende
          retningslinjer.
        </div>
      </section>
    </main>
  )
}
