import Footer from "../components/Footer"

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
        <a href="/faglige-kilder">Faglige kilder</a>
        <a href="/support">Support</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default function SourcesPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">Faglig grunnlag</div>

          <h1>Kunnskap du kan stole på.</h1>

          <p>
            MediPro utvikles med utgangspunkt i anerkjente norske og
            internasjonale kilder. Målet er å gi helsepersonell rask tilgang
            til relevant informasjon uten å gå på kompromiss med kvalitet.
          </p>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Kildegrunnlag</span>

          <h2>Utviklet med fokus på kvalitet og klinisk relevans.</h2>

          <p>
            Innholdet i MediPro skal fungere som faglig støtte i klinisk arbeid
            og oppdateres fortløpende etter hvert som kunnskapsgrunnlaget
            utvikler seg.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Nasjonale retningslinjer</h2>
            <p>
              Innhold kan bygge på anbefalinger fra Helsedirektoratet,
              Folkehelseinstituttet, regionale helseforetak og andre relevante
              nasjonale fagmiljøer.
            </p>
          </article>

          <article className="subCard">
            <h2>Legemiddelinformasjon</h2>
            <p>
              Der det er relevant benyttes informasjon fra blant annet
              Felleskatalogen, Norsk legemiddelhåndbok og andre anerkjente
              legemiddelkilder.
            </p>
          </article>

          <article className="subCard">
            <h2>Klinisk praksis</h2>
            <p>
              Funksjoner og verktøy utvikles med utgangspunkt i praktiske behov
              fra norsk helsetjeneste og klinisk arbeidshverdag.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig oppdatering</h2>
            <p>
              Innhold gjennomgås og videreutvikles fortløpende for å sikre
              relevans og samsvar med oppdatert kunnskap.
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Viktig informasjon</span>

            <h2>Et støtteverktøy – ikke en erstatning for faglig vurdering.</h2>

            <p>
              MediPro erstatter ikke klinisk skjønn, lokale prosedyrer,
              ordinasjoner eller virksomhetens ansvar for opplæring og
              kvalitetssikring.
            </p>
          </div>

          <a href="/kontakt">Kontakt oss</a>
        </div>
      </section>
    </main>
  )
}
