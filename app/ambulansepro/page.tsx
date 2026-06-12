export default function AmbulanseProPage() {
  return (
    <main className="subpage visualSubpage">
      <header className="header subHeader">
        <a className="brand" href="/">
          <div className="mark">
            <span>M</span>
          </div>
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

      <section className="subImageHero ambulanceHero">
        <img
          src="/ambulansepro-hero-v2.jpg"
          alt="AmbulansePro for prehospitalt personell"
          className="subImageHeroBg"
        />

        <div className="subImageHeroOverlay" />

        <div className="subImageHeroContent">
          <div className="eyebrow">For prehospitalt personell</div>

          <h1>AmbulansePro</h1>

          <p>
            Strukturert støtte for ambulansepersonell som trenger rask tilgang
            til faglige ressurser, vurderingsstøtte og praktiske verktøy i
            prehospitalt arbeid.
          </p>

          <div className="heroButtons">
            <a className="heroPrimary" href="/kontakt">
              Kontakt oss
            </a>
            <a className="heroSecondary" href="/virksomheter">
              Virksomhetslisens
            </a>
          </div>
        </div>
      </section>

      <section className="content enhancedContent">
        <article className="contentCard featureCard">
          <span className="featureNumber">01</span>
          <h2>Utviklet for arbeid i felt</h2>
          <p>
            Prehospitalt arbeid krever raske vurderinger, tydelig struktur og
            god tilgang til relevant informasjon. AmbulansePro bygges for å
            samle praktiske støtteverktøy, vurderingsstøtte og faglige ressurser
            i én moderne app.
          </p>
          <p>
            Målet er å gi bedre oversikt i situasjoner der tid, kommunikasjon og
            prioritering er avgjørende.
          </p>
        </article>

        <article className="contentCard featureCard">
          <span className="featureNumber">02</span>
          <h2>Mer enn en oppslagsapp</h2>
          <p>
            AmbulansePro skal ikke bare vise informasjon. Appen utvikles som en
            klinisk arbeidsflate for prehospital tjeneste, med støtte for
            strukturert pasientvurdering, akutte tilstander, tiltak og praktisk
            beslutningsstøtte.
          </p>
        </article>

        <article className="contentCard featureCard">
          <span className="featureNumber">03</span>
          <h2>Kontinuerlig videreutvikling</h2>
          <p>
            AmbulansePro er under aktiv utvikling. Nye funksjoner og fagområder
            legges til fortløpende, med mål om å gjøre appen stadig mer relevant
            for ambulansepersonell og prehospitale fagmiljøer.
          </p>
        </article>

        <article className="contentCard featureCard">
          <span className="featureNumber">04</span>
          <h2>For ansatte og arbeidsgivere</h2>
          <p>
            Appen kan brukes gjennom individuelt abonnement eller tilbys gjennom
            virksomhetslisens. Ved felles lisens kan løsningen tilpasses
            virksomhetens behov, fagområder og interne prioriteringer.
          </p>
        </article>

        <div className="notice">
          AmbulansePro er et faglig støtteverktøy og erstatter ikke klinisk
          vurdering, lokale prosedyrer, medisinsk ansvar eller gjeldende
          retningslinjer.
        </div>
      </section>
    </main>
  )
}
