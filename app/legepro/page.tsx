import Footer from "../components/Footer"

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

export default function LegeProPage() {
  return (
    <main className="subPage">
      <div className="subTop productHeroTop">
        <Header />

        <section className="productHero">
          <div className="productHeroText">
            <div className="subHeroBadge">For leger</div>

            <h1>LegePro</h1>

            <p>
              Kliniske verktøy, kalkulatorer og beslutningsstøtte utviklet for
              leger som trenger rask tilgang til relevant informasjon i en
              travel klinisk hverdag.
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
              src="/kort-legepro.png"
              alt="LegePro"
            />
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Utviklet for kliniske beslutninger</span>

          <h2>
            Relevant støtte når tempoet er høyt.
          </h2>

          <p>
            LegePro utvikles for å samle kliniske verktøy, kalkulatorer,
            vurderingsstøtte og faglige ressurser i én moderne plattform.
            Målet er å gjøre viktig informasjon tilgjengelig raskt, slik at
            mer tid kan brukes på pasientene.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Kliniske kalkulatorer</h2>
            <p>
              Relevante medisinske beregninger samlet i en rask og
              brukervennlig arbeidsflate.
            </p>
          </article>

          <article className="subCard">
            <h2>Differensialdiagnoser</h2>
            <p>
              Strukturert støtte for vurdering av symptomer,
              kliniske funn og mulige diagnoser.
            </p>
          </article>

          <article className="subCard">
            <h2>Beslutningsstøtte</h2>
            <p>
              Praktiske verktøy som bidrar til bedre oversikt,
              prioritering og klinisk struktur.
            </p>
          </article>

          <article className="subCard">
            <h2>Retningslinjer og fagstoff</h2>
            <p>
              Hurtig tilgang til relevant faglig informasjon
              og oppdaterte anbefalinger.
            </p>
          </article>

          <article className="subCard">
            <h2>Utviklet for norsk helsetjeneste</h2>
            <p>
              Innhold og funksjoner bygges med utgangspunkt
              i norske arbeidsprosesser og kliniske behov.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig videreutvikling</h2>
            <p>
              Nye funksjoner og fagområder legges til fortløpende
              basert på brukerbehov og utviklingen i helsetjenesten.
            </p>
          </article>
        </div>

        <div className="subNotice">
          LegePro er et faglig støtteverktøy og erstatter ikke klinisk
          vurdering, medisinsk ansvar, lokale prosedyrer eller gjeldende
          retningslinjer.
        </div>
      </section>

    <Footer />
    </main>
  )
}
