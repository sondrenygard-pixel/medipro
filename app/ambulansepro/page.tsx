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

export default function AmbulanseProPage() {
  return (
    <main className="subPage">
      <div className="subTop productHeroTop">
        <Header />

        <section className="productHero">
          <div className="productHeroText">
            <div className="subHeroBadge">For prehospitalt personell</div>

            <h1>AmbulansePro</h1>

            <p>
              Moderne klinisk støtte utviklet for norsk ambulansetjeneste.
              Rask tilgang til vurderingsverktøy, prosedyrer, medikamentstøtte
              og strukturert beslutningsstøtte når hvert sekund teller.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="/kontakt">
                Kontakt oss
              </a>

              <a
                className="secondaryButton"
                href="/virksomheter"
              >
                Virksomhetslisens
              </a>
            </div>
          </div>

          <div className="productHeroImage">
            <img
              src="/ambulansepro-hero-premium.jpg"
              alt="AmbulansePro"
            />
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Utviklet for ambulansetjenesten</span>

          <h2>
            Rask støtte når hvert sekund teller.
          </h2>

          <p>
            AmbulansePro samler praktiske verktøy og faglig støtte
            i én løsning. Målet er å redusere tidsbruk,
            skape struktur og gjøre viktig informasjon tilgjengelig
            i situasjoner der beslutninger må tas raskt.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>ABCDE og pasientvurdering</h2>
            <p>
              Strukturert støtte for systematisk undersøkelse,
              observasjoner og vurdering av pasientens tilstand.
            </p>
          </article>

          <article className="subCard">
            <h2>Akutte tilstander</h2>
            <p>
              Praktisk tilgang til prosedyrer, algoritmer og
              huskeregler for situasjoner som krever rask handling.
            </p>
          </article>

          <article className="subCard">
            <h2>Medikamentstøtte</h2>
            <p>
              Dosering, fortynning og legemiddelinformasjon
              samlet i en moderne og brukervennlig løsning.
            </p>
          </article>

          <article className="subCard">
            <h2>Offline tilgang</h2>
            <p>
              Kritisk innhold skal være tilgjengelig også når
              dekningen er dårlig eller mangler helt.
            </p>
          </article>

          <article className="subCard">
            <h2>Beslutningsstøtte</h2>
            <p>
              Verktøy som hjelper med prioritering,
              kommunikasjon og struktur gjennom hele oppdraget.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig utvikling</h2>
            <p>
              Nye funksjoner, prosedyrer og forbedringer
              legges til fortløpende basert på behov i norsk
              prehospital tjeneste.
            </p>
          </article>
        </div>

        <div className="subNotice">
          AmbulansePro er et faglig støtteverktøy og erstatter ikke
          klinisk vurdering, medisinsk ansvar, lokale prosedyrer eller
          gjeldende retningslinjer.
        </div>
      </section>
    </main>
  )
}
