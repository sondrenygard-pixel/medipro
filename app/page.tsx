function BrandLogo() {
  return (
    <a className="brandHero imageBrand" href="/">
      <img src="/medipro-logo.png" alt="MediPro" />
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

      <section className="imageHero">
        <img
          src="/medipro-hero-v2.png"
          alt="MediPro kliniske verktøy for helsepersonell"
          className="imageHeroBg"
        />

        <div className="imageHeroOverlay" />

        <div className="imageHeroContent">
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
