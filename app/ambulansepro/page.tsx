export default function AmbulanseProPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/"><div className="mark"><span>M</span></div><span>MediPro</span></a>
        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <section className="subHero">
        <div className="eyebrow">For prehospitalt personell</div>
        <h1>AmbulansePro</h1>
        <p>
          AmbulansePro utvikles for ambulansepersonell som trenger rask tilgang
          til strukturert støtte, faglige ressurser og praktiske verktøy i
          prehospitalt arbeid.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
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

        <article className="contentCard">
          <h2>Mer enn en oppslagsapp</h2>
          <p>
            AmbulansePro skal ikke bare vise informasjon. Appen utvikles som en
            klinisk arbeidsflate for prehospital tjeneste, med støtte for
            strukturert pasientvurdering, akutte tilstander, tiltak og praktisk
            beslutningsstøtte.
          </p>
        </article>

        <article className="contentCard">
          <h2>Kontinuerlig videreutvikling</h2>
          <p>
            AmbulansePro er under aktiv utvikling. Nye funksjoner og fagområder
            vil legges til fortløpende, med mål om å gjøre appen stadig mer
            relevant for ambulansepersonell og prehospitale fagmiljøer.
          </p>
        </article>

        <article className="contentCard">
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
