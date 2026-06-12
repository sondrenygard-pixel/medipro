function BrandLogo() {
  return (
    <a className="brandHero" href="/">
      <div className="brandM">M</div>
      <span>
        Medi<span>Pro</span>
      </span>
    </a>
  )
}

export default function Home() {
  return (
    <main className="mediproHome">
      <header className="heroNav">
        <BrandLogo />

        <nav>
          <a href="#produkter">Produkter</a>
          <a href="/virksomheter">For virksomheter</a>
          <a href="/faglige-kilder">Faglige kilder</a>
          <a href="/kontakt">Kontakt</a>
        </nav>

        <div className="navActions">
          <a className="navPrimary" href="#produkter">Se produkter</a>
          <a className="navGhost" href="/support">Support</a>
        </div>
      </header>

      <section className="premiumHero">
        <div className="heroText">
          <div className="heroBadge">Utviklet av helsepersonell</div>

          <h1>
            Klinisk støtte
            <span>på vakt</span>
          </h1>

          <p>
            MediPro samler kliniske verktøy i én plattform – utviklet for
            sykepleiere, ambulansepersonell og leger i norsk helsetjeneste.
          </p>

          <div className="heroButtons">
            <a className="heroPrimary" href="#produkter">Utforsk produktene</a>
            <a className="heroSecondary" href="/virksomheter">For virksomheter</a>
          </div>

          <div className="trustRow">
            <div>
              <strong>Basert på norske behov</strong>
              <span>Utviklet for klinisk hverdag</span>
            </div>
            <div>
              <strong>Kontinuerlig oppdatert</strong>
              <span>Nye funksjoner over tid</span>
            </div>
            <div>
              <strong>For ansatte og ledere</strong>
              <span>Abonnement eller lisens</span>
            </div>
          </div>
        </div>

        <div className="phoneScene">
          <div className="clinicalBlur" />
          <div className="phoneMockup">
            <div className="phoneTop">
              <span>09:41</span>
              <span>● ● ●</span>
            </div>

            <div className="phoneBrand">
              <div className="miniM">M</div>
              <strong>MediPro</strong>
            </div>

            <h2>God morgen!</h2>
            <p>Kunnskap. Trygghet. Omsorg.</p>

            <div className="quickGrid">
              <div>Medisin</div>
              <div>NEWS2</div>
              <div>Sepsis</div>
              <div>ABCDE</div>
              <div>ISBAR</div>
              <div>Søk</div>
              <div>Varsler</div>
              <div>Regning</div>
            </div>

            <div className="phoneSectionTitle">Kliniske verktøy</div>

            <div className="toolTiles">
              <div className="tile blue">
                <strong>NEWS2</strong>
                <span>Tidlig oppdagelse</span>
              </div>
              <div className="tile red">
                <strong>Sepsis</strong>
                <span>Screening og tiltak</span>
              </div>
              <div className="tile green">
                <strong>ABCDE</strong>
                <span>Primærvurdering</span>
              </div>
              <div className="tile purple">
                <strong>GCS</strong>
                <span>Bevissthetsnivå</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productSection" id="produkter">
        <div className="sectionHeader">
          <h2>Én plattform. Flere profesjoner.</h2>
          <p>
            MediPro bygges som en samlet satsing på digitale verktøy for norsk
            helsetjeneste. Hver app er tilpasset sin yrkesgruppe, men utvikles
            som del av samme langsiktige plattform.
          </p>
        </div>

        <div className="productGrid">
          <a className="productPremium nurse" href="/sykepleierpro">
            <span>SykepleierPro</span>
            <p>For sykepleiere som ønsker rask tilgang til kliniske verktøy og faglig støtte.</p>
          </a>

          <a className="productPremium ambulance" href="/ambulansepro">
            <span>AmbulansePro</span>
            <p>For prehospitalt personell som trenger struktur og støtte i felt.</p>
          </a>

          <a className="productPremium doctor" href="/legepro">
            <span>LegePro</span>
            <p>For leger som ønsker relevante verktøy samlet i én klinisk arbeidsflate.</p>
          </a>
        </div>
      </section>
    </main>
  )
}
