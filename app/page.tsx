function BrandLogo() {
  return (
    <a className="cleanBrand" href="/">
      <div className="cleanBrandMark">M</div>
      <div>
        <strong>MediPro</strong>
        <span>Kliniske verktøy</span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="cleanHome">
      <header className="cleanNav">
        <BrandLogo />

        <nav>
          <a href="#produkter">Produkter</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/faglige-kilder">Faglige kilder</a>
          <a href="/kontakt">Kontakt</a>
        </nav>

        <a className="cleanNavButton" href="/support">Support</a>
      </header>

      <section className="cleanHero">
        <div className="cleanHeroText">
          <div className="cleanBadge">Utviklet for norsk helsetjeneste</div>

          <h1>
            Klinisk støtte
            <span>på vakt.</span>
          </h1>

          <p>
            MediPro samler digitale verktøy for sykepleiere, ambulansepersonell
            og leger. Plattformen utvikles kontinuerlig for å gi raskere tilgang
            til faglig støtte, struktur og praktiske kliniske verktøy.
          </p>

          <div className="cleanActions">
            <a href="#produkter" className="cleanPrimary">Utforsk produktene</a>
            <a href="/virksomheter" className="cleanSecondary">For virksomheter</a>
          </div>
        </div>

        <div className="cleanPhone">
          <div className="phoneStatus">09:41</div>
          <div className="phoneTitle">MediPro</div>
          <h2>God vakt</h2>
          <p>Kunnskap. Struktur. Trygghet.</p>

          <div className="phoneGrid">
            <div>NEWS2</div>
            <div>ABCDE</div>
            <div>Sepsis</div>
            <div>ISBAR</div>
            <div>Legemidler</div>
            <div>Regning</div>
          </div>
        </div>
      </section>

      <section className="cleanSection" id="produkter">
        <div className="cleanSectionHeader">
          <h2>Én plattform. Flere profesjoner.</h2>
          <p>
            Hver app er tilpasset sin yrkesgruppe, men utvikles som del av samme
            profesjonelle produktfamilie.
          </p>
        </div>

        <div className="cleanProductGrid">
          <a href="/sykepleierpro" className="cleanProduct nurse">
            <span>SykepleierPro</span>
            <p>Kliniske verktøy, beregninger og støtte gjennom vakten.</p>
          </a>

          <a href="/ambulansepro" className="cleanProduct ambulance">
            <span>AmbulansePro</span>
            <p>Strukturert støtte for prehospital vurdering og tiltak.</p>
          </a>

          <a href="/legepro" className="cleanProduct doctor">
            <span>LegePro</span>
            <p>Relevante kliniske verktøy og faglig støtte for leger.</p>
          </a>
        </div>
      </section>
    </main>
  )
}
