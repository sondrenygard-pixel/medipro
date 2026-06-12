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
      <div className="subTop productHeroTop">
        <Header />

        <section className="productHero">
          <div className="productHeroText">
            <div className="subHeroBadge">For sykepleiere</div>
            <h1>SykepleierPro</h1>
            <p>
              En moderne klinisk arbeidsflate for sykepleiere som trenger rask
              tilgang til vurderingsverktøy, beregninger, struktur og faglig
              støtte gjennom vakten.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="/support">Support</a>
              <a className="secondaryButton" href="/virksomheter">Virksomhetslisens</a>
            </div>
          </div>

          <div className="productHeroImage">
            <img src="/kort-sykepleierpro.png" alt="SykepleierPro app" />
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Utviklet for klinisk hverdag</span>
          <h2>Raskere oversikt når vakten krever presisjon.</h2>
          <p>
            SykepleierPro er laget for praktisk bruk i arbeidshverdagen. Målet
            er å samle de verktøyene sykepleiere ofte trenger, slik at viktig
            støtte er tilgjengelig uten unødvendig leting.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Kliniske vurderinger</h2>
            <p>
              Verktøy som NEWS2, ABCDE, GCS og sepsis-støtte gir struktur når
              pasientens tilstand skal vurderes og kommuniseres videre.
            </p>
          </article>

          <article className="subCard">
            <h2>Rapport og kommunikasjon</h2>
            <p>
              ISBAR og strukturerte fagkort hjelper med tydelig rapport,
              prioritering og tryggere informasjonsflyt i vakten.
            </p>
          </article>

          <article className="subCard">
            <h2>Beregninger og legemidler</h2>
            <p>
              Praktiske kalkulatorer for dose, infusjon, fortynning, væske og
              andre relevante beregninger samlet på ett sted.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig utvikling</h2>
            <p>
              Appen videreutvikles fortløpende med nye funksjoner, bedre
              struktur og mer innhold tilpasset norsk helsetjeneste.
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
