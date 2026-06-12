export default function VilkarPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/"><div className="mark"><span>M</span></div><span>MediPro</span></a>
        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/support">Support</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="subHero">
        <div className="eyebrow">Vilkår</div>
        <h1>Vilkår for bruk</h1>
        <p>
          Disse vilkårene gjelder bruk av MediPro-nettsiden og MediPro sine
          apper og digitale tjenester.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Faglig støtteverktøy</h2>
          <p>
            MediPro leverer faglige støtteverktøy og informasjonstjenester.
            Appene erstatter ikke klinisk vurdering, medisinsk ansvar, lokale
            prosedyrer, ordinasjoner, dobbeltkontroll eller gjeldende
            retningslinjer.
          </p>
          <p>
            Brukeren er alltid selv ansvarlig for egne vurderinger, beslutninger
            og handlinger i klinisk arbeid.
          </p>
        </article>

        <article className="contentCard">
          <h2>Bruk av innhold</h2>
          <p>
            Innholdet i MediPro er ment som støtte for helsepersonell og andre
            relevante brukere. Informasjonen skal alltid vurderes opp mot
            oppdatert fagkunnskap, lokale prosedyrer og gjeldende
            retningslinjer.
          </p>
        </article>

        <article className="contentCard">
          <h2>Abonnement</h2>
          <p>
            Individuelle abonnementer kjøpes og administreres gjennom App Store
            eller annen godkjent betalingsløsning. Vilkår for betaling,
            fornyelse og oppsigelse følger den aktuelle plattformens regler.
          </p>
        </article>

        <article className="contentCard">
          <h2>Virksomhetslisenser</h2>
          <p>
            Arbeidsgivere kan inngå egne avtaler om tilgang for ansatte. Slike
            avtaler reguleres av egne kommersielle vilkår mellom virksomheten
            og MediPro.
          </p>
        </article>

        <article className="contentCard">
          <h2>Endringer</h2>
          <p>
            MediPro er i kontinuerlig utvikling. Funksjoner, innhold og vilkår
            kan endres over tid for å forbedre tjenestene og tilpasse dem til
            nye behov, krav og faglige oppdateringer.
          </p>
        </article>

        <article className="contentCard">
          <h2>Kontakt</h2>
          <p>
            Spørsmål om vilkår kan sendes til post@medipro.no.
          </p>
          <p>
            MediPro er en tjeneste levert av Smartverkstedet, org.nr.
            932 599 147.
          </p>
        </article>
      </section>
    </main>
  )
}
