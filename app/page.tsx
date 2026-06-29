import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata = {
  title: "MediPro | Digitale verktøy for helsepersonell",
  description:
    "MediPro utvikler kliniske apper for sykepleiere, ambulansepersonell og leger i norsk helsetjeneste.",
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

        <Header />

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
            <a
              className="primaryButton"
              href="https://apps.apple.com/no/app/sykepleierpro/id6775972429"
              target="_blank"
              rel="noopener noreferrer"
            >
              Last ned SykepleierPro
            </a>
            <a className="secondaryButton" href="#produkter">
              Se produktfamilien
            </a>
          </div>

          <p className="heroFinePrint">
            SykepleierPro er nå tilgjengelig i App Store. AmbulansePro og
            LegePro er under utvikling.
          </p>
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
              <div className="subHeroBadge">Tilgjengelig i App Store</div>
              <h3>SykepleierPro</h3>
              <p>Kliniske verktøy, beregninger og støtte gjennom vakten.</p>
              <span>Les mer om SykepleierPro →</span>
            </div>
          </a>

          <a href="/ambulansepro" className="productCard imageCard">
            <img src="/kort-ambulansepro.png" alt="AmbulansePro" />
            <div className="productCardOverlay" />
            <div className="productCardContent">
              <div className="subHeroBadge">Kommer snart til App Store</div>
              <h3>AmbulansePro</h3>
              <p>
                Strukturert støtte for prehospital vurdering, tiltak og
                praktiske beslutninger.
              </p>
              <span>Les mer om AmbulansePro →</span>
            </div>
          </a>

          <a href="/legepro" className="productCard imageCard">
            <img src="/kort-legepro.png" alt="LegePro" />
            <div className="productCardOverlay" />
            <div className="productCardContent">
              <div className="subHeroBadge">Kommer snart til App Store</div>
              <h3>LegePro</h3>
              <p>
                Relevante kliniske verktøy, kalkulatorer og faglig støtte for
                leger.
              </p>
              <span>Les mer om LegePro →</span>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
