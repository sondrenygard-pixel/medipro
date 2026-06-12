export default function FagligeKilderPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/"><div className="mark"><span>M</span></div><span>MediPro</span></a>
        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <section className="subHero">
        <div className="eyebrow">Faglig grunnlag</div>
        <h1>Faglige kilder</h1>
        <p>
          MediPro skal bygge på anerkjente kilder, nasjonale anbefalinger og
          relevant klinisk praksis. Innholdet skal brukes som støtte, ikke som
          erstatning for faglig vurdering.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Kildegrunnlag</h2>
          <p>
            Faglig innhold i MediPro kan bygge på kilder som nasjonale
            retningslinjer, Helsedirektoratet, Folkehelseinstituttet,
            Felleskatalogen, Norsk legemiddelhåndbok, faglige veiledere og
            andre relevante kilder for norsk helsetjeneste.
          </p>
        </article>

        <article className="contentCard">
          <h2>Lokale prosedyrer</h2>
          <p>
            Helsepersonell må alltid forholde seg til lokale prosedyrer,
            ordinasjoner, gjeldende retningslinjer og arbeidsgivers krav.
            MediPro skal støtte klinisk arbeid, men ikke erstatte lokale
            rutiner eller faglig ansvar.
          </p>
        </article>

        <article className="contentCard">
          <h2>Oppdatering</h2>
          <p>
            MediPro er i kontinuerlig utvikling. Faglig innhold og funksjoner
            kan oppdateres over tid når kilder, anbefalinger eller behov i
            helsetjenesten endres.
          </p>
        </article>

        <article className="contentCard">
          <h2>Virksomhetstilpasning</h2>
          <p>
            Ved virksomhetsavtaler kan relevante lokale ressurser, prosedyrer
            eller opplæringsmateriell fremheves eller integreres der dette er
            avtalt med kunden.
          </p>
        </article>
      </section>
    </main>
  )
}
