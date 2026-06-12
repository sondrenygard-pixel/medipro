export default function VirksomheterPage() {
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
        <div className="eyebrow">For arbeidsgivere</div>
        <h1>Digitale verktøy for hele fagmiljøer.</h1>
        <p>
          MediPro tilbyr virksomhetslisenser for arbeidsgivere som ønsker å gi
          ansatte tilgang til moderne kliniske støtteverktøy gjennom én samlet
          avtale.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Felles lisens for ansatte</h2>
          <p>
            Arbeidsgivere kan kjøpe tilgang til ansatte i sykehus, kommuner,
            legevakter, ambulansetjenester, utdanningsinstitusjoner og private
            helsetjenester. Dette gir en enklere og mer samlet løsning enn at
            hver enkelt ansatt må håndtere abonnement selv.
          </p>
        </article>

        <article className="contentCard">
          <h2>Spesialtilpasning ved virksomhetsavtale</h2>
          <p>
            Ved felles lisens kan MediPro tilpasses kundens behov. Dette kan
            omfatte relevante fagområder, interne ressurser, opplæringsinnhold,
            prosedyrereferanser, prioriterte funksjoner og annen innretning som
            gjør appene mer relevante for virksomhetens ansatte.
          </p>
        </article>

        <article className="contentCard">
          <h2>En løsning som utvikles over tid</h2>
          <p>
            MediPro er bygget for kontinuerlig videreutvikling. Nye funksjoner,
            forbedringer og faglig innhold publiseres fortløpende. For
            virksomheter betyr det at løsningen kan vokse sammen med behovene i
            organisasjonen.
          </p>
        </article>

        <article className="contentCard">
          <h2>Kontakt for virksomhetsavtale</h2>
          <p>
            For spørsmål om lisensmodeller, tilpasning eller samarbeid, kontakt
            oss på post@medipro.no.
          </p>
        </article>
      </section>
    </main>
  )
}
