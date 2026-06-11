export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <div className="logo">
          <div className="logoMark">M</div>
          <span>MediPro</span>
        </div>

        <nav className="nav">
          <a href="#produkter">Produkter</a>
          <a href="#tilgang">Tilgang</a>
          <a href="#virksomheter">Virksomheter</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="kicker">Norsk helseteknologi</div>
          <h1>Digitale verktøy utviklet for helsepersonell.</h1>
          <p className="lead">
            MediPro utvikler moderne kliniske apper for sykepleiere,
            ambulansepersonell og leger. Plattformen gir rask tilgang til
            faglig støtte, praktiske verktøy og klinisk beslutningsstøtte i en
            arbeidshverdag der tid, presisjon og trygghet betyr alt.
          </p>

          <div className="actions">
            <a className="buttonPrimary" href="#produkter">
              Utforsk produktene
            </a>
            <a className="buttonSecondary" href="#kontakt">
              Kontakt oss
            </a>
          </div>
        </div>

        <div className="deviceCard">
          <div className="screen">
            <div className="screenTop">
              <strong>Klinisk arbeidsflate</strong>
              <span className="pill">I utvikling</span>
            </div>

            <div className="tool">
              <strong>SykepleierPro</strong>
              <span>Verktøy for vurdering, rapport, legemidler og vaktarbeid.</span>
            </div>

            <div className="tool">
              <strong>AmbulansePro</strong>
              <span>Prehospital støtte for struktur, tiltak og raske vurderinger.</span>
            </div>

            <div className="tool">
              <strong>LegePro</strong>
              <span>Kliniske verktøy for leger i travel arbeidshverdag.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="produkter">
        <div className="sectionHeader">
          <h2>Én plattform. Flere profesjoner.</h2>
          <p>
            MediPro bygges som en samlet satsing på digitale verktøy for norsk
            helsetjeneste. Appene er laget for ulike yrkesgrupper, men med samme
            mål: å gjøre relevant informasjon raskere, tydeligere og mer
            tilgjengelig når den trengs.
          </p>
        </div>

        <div className="grid">
          <article className="card">
            <h3>SykepleierPro</h3>
            <p>
              Utviklet for sykepleiere som ønsker rask tilgang til kliniske
              verktøy, beregninger og faglig støtte gjennom vakten. Appen
              inneholder blant annet støtte for vurdering, rapportering,
              legemiddelregning og oppfølging av pasienter.
            </p>
            <p>
              SykepleierPro videreutvikles kontinuerlig med nye funksjoner,
              fagområder og forbedringer basert på klinisk erfaring og
              tilbakemeldinger fra brukere.
            </p>
          </article>

          <article className="card">
            <h3>AmbulansePro</h3>
            <p>
              Utviklet for prehospitalt personell som trenger strukturert og
              lett tilgjengelig støtte i situasjoner der tid og oversikt er
              avgjørende. Appen skal samle relevante vurderingsverktøy,
              akuttmedisinsk støtte og praktiske ressurser for bruk i felt.
            </p>
            <p>
              AmbulansePro bygges for å vokse over tid, med nye moduler og
              forbedringer tilpasset behovene i en moderne prehospital tjeneste.
            </p>
          </article>

          <article className="card">
            <h3>LegePro</h3>
            <p>
              LegePro utvikles som en klinisk arbeidsflate for leger som ønsker
              rask tilgang til relevante støtteverktøy, medisinske kalkulatorer
              og faglig informasjon i en hektisk arbeidshverdag.
            </p>
            <p>
              Plattformen er under utvikling og vil gradvis utvides med nye
              fagområder, funksjoner og ressurser for klinisk praksis.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="tilgang">
        <div className="darkSection">
          <div className="sectionHeader">
            <h2>For enkeltpersoner og virksomheter.</h2>
            <p>
              MediPro er laget for både helsepersonell som ønsker tilgang selv,
              og arbeidsgivere som vil tilby moderne digitale verktøy til sine
              ansatte gjennom én samlet avtale.
            </p>
          </div>

          <div className="twoCol">
            <article className="card">
              <h3>Individuelt abonnement</h3>
              <p>
                Helsepersonell kan abonnere direkte på appene og få tilgang til
                relevante verktøy, faglig innhold og løpende oppdateringer på
                egne premisser.
              </p>
              <p>
                Dette passer for deg som ønsker en mer strukturert, effektiv og
                tryggere digital støtte i egen arbeidshverdag.
              </p>
            </article>

            <article className="card">
              <h3>Virksomhetslisens</h3>
              <p>
                Arbeidsgivere kan kjøpe felles lisens til ansatte gjennom en
                samlet avtale. Dette gjør det enklere å gi hele fagmiljøer
                tilgang til samme digitale verktøy og samme faglige plattform.
              </p>
              <p>
                Ved virksomhetsavtale kan løsningene spesialtilpasses kundens
                behov, fagområder, arbeidsflyt og interne prioriteringer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="virksomheter">
        <div className="sectionHeader">
          <h2>Bygget for helsetjenester som vil utvikle seg.</h2>
          <p>
            Helsevesenet stiller stadig større krav til kvalitet, effektivitet,
            kompetanse og standardisering. MediPro skal gjøre det enklere for
            sykehus, kommuner, legevakter, ambulansetjenester og andre aktører å
            tilby ansatte relevante digitale støtteverktøy.
          </p>
        </div>

        <div className="grid">
          <article className="card">
            <h3>Felles tilgang</h3>
            <p>
              Gi ansatte tilgang gjennom én samlet avtale, i stedet for at hver
              enkelt må håndtere abonnement og betaling selv.
            </p>
          </article>

          <article className="card">
            <h3>Tilpasning</h3>
            <p>
              Ved virksomhetsavtaler kan MediPro tilpasses organisasjonens
              behov, for eksempel med relevante fagområder, interne ressurser,
              opplæringsinnhold eller prioriterte funksjoner.
            </p>
          </article>

          <article className="card">
            <h3>Langsiktig utvikling</h3>
            <p>
              MediPro er ikke en statisk løsning. Plattformen utvikles
              kontinuerlig med nye funksjoner, forbedringer og faglig innhold.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Kontinuerlig utvikling er en del av produktet.</h2>
          <p>
            Når du velger MediPro, velger du ikke bare dagens funksjonalitet.
            Du får tilgang til en plattform som skal forbedres over tid, med nye
            funksjoner, faglige oppdateringer og videreutvikling basert på
            behovene i norsk helsetjeneste.
          </p>
        </div>

        <div className="notice">
          MediPro leverer faglige støtteverktøy og informasjonstjenester. Appene
          erstatter ikke klinisk vurdering, medisinsk ansvar, lokale prosedyrer,
          ordinasjoner eller gjeldende retningslinjer. Brukeren er alltid
          ansvarlig for egne vurderinger og beslutninger.
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="sectionHeader">
          <h2>Kontakt MediPro</h2>
          <p>
            Ta kontakt ved spørsmål om appene, virksomhetslisenser,
            samarbeid eller support.
          </p>
        </div>

        <div className="twoCol">
          <article className="card">
            <h3>Generelle henvendelser</h3>
            <p>post@medipro.no</p>
          </article>

          <article className="card">
            <h3>Support for eksisterende kunder</h3>
            <p>support@medipro.no</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <div className="logo">
              <div className="logoMark">M</div>
              <span>MediPro</span>
            </div>
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
