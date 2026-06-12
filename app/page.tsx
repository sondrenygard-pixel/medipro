function BrandLogo() {
  return (
    <a className="brand" href="/">
      <div className="brandSymbol">
        <span className="brandPulse" />
        <span className="brandCross">+</span>
      </div>
      <div>
        <strong>MediPro</strong>
        <small>Kliniske verktøy</small>
      </div>
    </a>
  )
}

function ProductVisual({
  type,
  title,
}: {
  type: "nurse" | "ambulance" | "doctor"
  title: string
}) {
  return (
    <div className={`productVisual ${type}`}>
      <div className="visualTop">
        <div className="visualIcon">+</div>
        <span>{title}</span>
      </div>

      <div className="visualLines">
        <span />
        <span />
        <span />
      </div>

      <div className="visualGrid">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <BrandLogo />

        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">Norsk helseteknologi</div>
          <h1>Digitale verktøy utviklet for helsepersonell.</h1>
          <p className="lead">
            MediPro utvikler moderne kliniske apper for sykepleiere,
            ambulansepersonell og leger. Plattformen gir rask tilgang til faglig
            støtte, praktiske verktøy og klinisk beslutningsstøtte i en
            arbeidshverdag der tid, presisjon og trygghet betyr alt.
          </p>

          <div className="actions">
            <a className="btnPrimary" href="#produkter">
              Utforsk produktene
            </a>
            <a className="btnGhost" href="/virksomheter">
              For virksomheter
            </a>
          </div>
        </div>

        <div className="heroPanel premiumPanel">
          <div className="mockup">
            <div className="mockHeader">
              <div>
                <strong>Klinisk arbeidsflate</strong>
                <p>Tre profesjoner. Én langsiktig plattform.</p>
              </div>
              <span className="status">I kontinuerlig utvikling</span>
            </div>

            <div className="mockCard accentNurse">
              <strong>SykepleierPro</strong>
              <p>Verktøy for vurdering, rapport, legemidler og vaktarbeid.</p>
            </div>

            <div className="mockCard accentAmbulance">
              <strong>AmbulansePro</strong>
              <p>Prehospital støtte for struktur, tiltak og raske vurderinger.</p>
            </div>

            <div className="mockCard accentDoctor">
              <strong>LegePro</strong>
              <p>Kliniske verktøy for leger i travel arbeidshverdag.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="light">
        <section className="section" id="produkter">
          <div className="sectionHeader">
            <h2>Én plattform. Flere profesjoner.</h2>
            <p>
              MediPro bygges som en samlet satsing på digitale verktøy for norsk
              helsetjeneste. Appene er utviklet for ulike yrkesgrupper, men med
              samme mål: å gjøre relevant informasjon raskere, tydeligere og mer
              tilgjengelig når den trengs.
            </p>
          </div>

          <div className="grid3">
            <article className="card productCard">
              <ProductVisual type="nurse" title="SykepleierPro" />
              <h3>SykepleierPro</h3>
              <p>
                For sykepleiere som ønsker rask tilgang til kliniske verktøy,
                beregninger og faglig støtte gjennom vakten.
              </p>
              <a className="cardLink" href="/sykepleierpro">
                Les mer
              </a>
            </article>

            <article className="card productCard">
              <ProductVisual type="ambulance" title="AmbulansePro" />
              <h3>AmbulansePro</h3>
              <p>
                For prehospitalt personell som trenger struktur, oversikt og
                støtte i situasjoner der tid er avgjørende.
              </p>
              <a className="cardLink" href="/ambulansepro">
                Les mer
              </a>
            </article>

            <article className="card productCard">
              <ProductVisual type="doctor" title="LegePro" />
              <h3>LegePro</h3>
              <p>
                En klinisk arbeidsflate for leger, med relevante verktøy og
                faglig støtte i en travel arbeidshverdag.
              </p>
              <a className="cardLink" href="/legepro">
                Les mer
              </a>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="darkBlock">
            <div className="sectionHeader">
              <h2>For enkeltpersoner og arbeidsgivere.</h2>
              <p>
                Helsepersonell kan abonnere selv, mens arbeidsgivere kan kjøpe
                felles lisens til ansatte. Ved virksomhetsavtale kan løsningene
                spesialtilpasses kundens behov, fagområder og arbeidsflyt.
              </p>
            </div>

            <div className="grid2">
              <article className="card">
                <h3>Individuelt abonnement</h3>
                <p>
                  For deg som vil ha tilgang til relevante kliniske verktøy,
                  faglig innhold og løpende oppdateringer på egne premisser.
                </p>
              </article>

              <article className="card">
                <h3>Virksomhetslisens</h3>
                <p>
                  For ledere, fagmiljøer og virksomheter som vil tilby ansatte
                  moderne digitale støtteverktøy gjennom én samlet avtale.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <h2>Bygget for å bli bedre over tid.</h2>
            <p>
              MediPro er ikke en statisk app-portefølje. Plattformen utvikles
              kontinuerlig med nye funksjoner, faglige oppdateringer og
              forbedringer basert på behovene i norsk helsetjeneste.
            </p>
          </div>

          <div className="notice">
            MediPro leverer faglige støtteverktøy og informasjonstjenester.
            Appene erstatter ikke klinisk vurdering, medisinsk ansvar, lokale
            prosedyrer, ordinasjoner eller gjeldende retningslinjer.
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <BrandLogo />
            <p>Digitale verktøy for helsepersonell.</p>
          </div>

          <div>
            <p>© 2026 MediPro</p>
            <p>MediPro er en tjeneste levert av Smartverkstedet.</p>
            <p>Org.nr. 932 599 147</p>
            <p>post@medipro.no · support@medipro.no</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
