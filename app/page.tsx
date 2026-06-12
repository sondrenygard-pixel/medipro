import Footer from "./components/Footer"

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
      <section className="homeHeroFull">
        <img
          src="/medipro-home-hero.jpg"
          alt=""
          className="homeHeroBackground"
        />
        <div className="homeHeroShade" />

        <header className="siteHeader">
          <BrandLogo />

          <nav className="siteNav">
            <a href="#produkter">Produkter</a>
            <a href="/virksomheter">Virksomheter</a>
            <a href="/faglige-kilder">Faglige kilder</a>
            <a href="/kontakt">Kontakt</a>
          </nav>

          <a className="headerButton" href="/support">Support</a>
        </header>

        <div className="homeHeroContent">
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
            <a className="primaryButton" href="#produkter">Utforsk produktene</a>
            <a className="secondaryButton" href="/virksomheter">For virksomheter</a>
          </div>
        </div>
      </section>

<section className="productsSection" id="produkter">
  <div className="sectionIntro">
    <span>Produktfamilien</span>
    <h2>Én plattform. Flere profesjoner.</h2>
    <p>
      Hver app er tilpasset sin yrkesgruppe, men utvikles som del av samme
      profesjonelle produktfamilie.
    </p>
  </div>

  <div className="productCards">
    <a href="/sykepleierpro" className="productCard imageCard">
      <img src="/kort-sykepleierpro.png" alt="SykepleierPro" />
      <div className="productCardOverlay" />
      <div className="productCardContent">
        <h3>SykepleierPro</h3>
        <p>Kliniske verktøy, beregninger og støtte gjennom vakten.</p>
        <span>Les mer om SykepleierPro →</span>
      </div>
    </a>

    <a href="/ambulansepro" className="productCard imageCard">
      <img src="/kort-ambulansepro.png" alt="AmbulansePro" />
      <div className="productCardOverlay" />
      <div className="productCardContent">
        <h3>AmbulansePro</h3>
        <p>Strukturert støtte for prehospital vurdering, tiltak og praktiske beslutninger.</p>
        <span>Les mer om AmbulansePro →</span>
      </div>
    </a>

    <a href="/legepro" className="productCard imageCard">
      <img src="/kort-legepro.png" alt="LegePro" />
      <div className="productCardOverlay" />
      <div className="productCardContent">
        <h3>LegePro</h3>
        <p>Relevante kliniske verktøy, kalkulatorer og faglig støtte for leger.</p>
        <span>Les mer om LegePro →</span>
      </div>
    </a>
  </div>
      </section>
    </main>
  )
}
