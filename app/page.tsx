function BrandLogo() {
  return (
    <a className="siteBrand" href="/">
      <div className="siteBrandMark">M</div>
      <div>
        <strong>MediPro</strong>
        <span>Kliniske verktøy</span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="homePage">
      <header className="siteHeader">
        <BrandLogo />

        <nav className="siteNav">
          <a href="#produkter">Produkter</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/faglige-kilder">Faglige kilder</a>
          <a href="/kontakt">Kontakt</a>
        </nav>

        <a className="headerButton" href="/support">
          Support
        </a>
      </header>

      <section className="homeHero">
        <div className="homeHeroText">
          <div className="heroPill">Utviklet for norsk helsetjeneste</div>

          <h1>
            Klinisk støtte
            <span>på vakt.</span>
          </h1>

          <p>
            MediPro samler digitale verktøy for sykepleiere,
            ambulansepersonell og leger. Plattformen utvikles kontinuerlig for
            å gi rask tilgang til faglig støtte, struktur og praktiske kliniske
            verktøy.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#produkter">
              Utforsk produktene
            </a>
            <a className="secondaryButton" href="/virksomheter">
              For virksomheter
            </a>
          </div>

          <div className="heroTrust">
            <div>
              <strong>Utviklet med klinisk erfaring</strong>
              <span>Bygget for reelle behov i arbeidshverdagen.</span>
            </div>
            <div>
              <strong>Kontinuerlig utvikling</strong>
              <span>Nye funksjoner og forbedringer legges til over tid.</span>
            </div>
            <div>
              <strong>For ansatte og ledere</strong>
              <span>Individuelt abonnement eller virksomhetslisens.</span>
            </div>
          </div>
        </div>

        <div className="homeHeroVisual">
          <img
            src="/medipro-home-hero.jpg"
            alt="MediPro kliniske verktøy"
          />
        </div>
      </section>

      <section className="productsSection" id="produkter">
        <div className="sectionIntro">
          <span>Produktfamilien</span>
          <h2>Én plattform. Flere profesjoner.</h2>
          <p>
            Hver app er tilpasset sin yrkesgruppe, men utvikles som del av
            samme profesjonelle produktfamilie for norsk helsetjeneste.
          </p>
        </div>

        <div className="productCards">
          <a href="/sykepleierpro" className="productCard sykepleier">
            <div className="productIcon">S+</div>
            <h3>SykepleierPro</h3>
            <p>
              Kliniske verktøy, beregninger, struktur og faglig støtte gjennom
              vakten.
            </p>
            <span>Les mer</span>
          </a>

          <a href="/ambulansepro" className="productCard ambulanse">
            <div className="productIcon">A+</div>
            <h3>AmbulansePro</h3>
            <p>
              Strukturert støtte for prehospital vurdering, tiltak og praktiske
              beslutninger.
            </p>
            <span>Les mer</span>
          </a>

          <a href="/legepro" className="productCard lege">
            <div className="productIcon">L+</div>
            <h3>LegePro</h3>
            <p>
              Relevante kliniske verktøy, kalkulatorer og faglig støtte for
              leger.
            </p>
            <span>Les mer</span>
          </a>
        </div>
      </section>
    </main>
  )
}
