import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "SykepleierPro | Kliniske verktøy for sykepleiere",
  description:
    "SykepleierPro gir sykepleiere i Norge rask tilgang til kliniske verktøy, beregninger, struktur og faglig støtte gjennom vakten.",
}

export default function SykepleierProPage() {
  return (
    <main className="subPage">
      <div className="subTop productHeroTop">
        <Header />

        <section className="productHero">
          <div className="productHeroText">
            <div className="subHeroBadge">Av sykepleiere i Norge – for sykepleiere i Norge</div>
            <h1>SykepleierPro</h1>
            <p>
              Kliniske verktøy, kalkulatorer og faglig støtte samlet i én app
              for norske sykepleiere og sykepleierstudenter.
            </p>

            <div className="heroActions">
              <a
                className="primaryButton"
                href="https://apps.apple.com/no/app/sykepleierpro/id6775972429"
                target="_blank"
                rel="noopener noreferrer"
              >
                Last ned på App Store
              </a>
              <a className="secondaryButton" href="/support">
                Support
              </a>
            </div>

            <p className="heroFinePrint">
              Tilgjengelig for iPhone og iPad. Grunnfunksjoner er gratis.
              Premium gir tilgang til avanserte kalkulatorer og flere verktøy.
            </p>
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
            er å samle verktøyene sykepleiere ofte trenger, slik at viktig
            støtte er tilgjengelig uten unødvendig leting.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Kliniske vurderinger</h2>
            <p>
              NEWS2, ABCDE, GCS, sepsis, akutt barn og forgiftning gir struktur
              når pasientens tilstand skal vurderes og kommuniseres videre.
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
              relevante legemiddeloppslag samlet på ett sted.
            </p>
          </article>

          <article className="subCard">
            <h2>Laget for norske forhold</h2>
            <p>
              Appen er utviklet med fokus på norsk klinisk praksis, norske
              kilder, pasientsikkerhet og effektiv arbeidsflyt.
            </p>
          </article>
        </div>

        <div className="subNotice">
          SykepleierPro er et faglig støtteverktøy og erstatter ikke klinisk
          vurdering, lokale prosedyrer, ordinasjoner eller helsepersonells
          selvstendige ansvar.
        </div>
      </section>

      <Footer />
    </main>
  )
}
