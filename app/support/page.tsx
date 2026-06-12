export default function SupportPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/"><div className="mark"><span>M</span></div><span>MediPro</span></a>
        <nav className="nav">
          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
          <a href="/virksomheter">Virksomheter</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="subHero">
        <div className="eyebrow">Support</div>
        <h1>Hjelp og kundestøtte</h1>
        <p>
          Trenger du hjelp med en av MediPro-appene, abonnement, tilgang eller
          tekniske spørsmål, kan du kontakte oss direkte.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Eksisterende kunder</h2>
          <p>
            For support knyttet til eksisterende kundeforhold, tekniske
            spørsmål eller bruk av appene, kontakt oss på support@medipro.no.
          </p>
        </article>

        <article className="contentCard">
          <h2>Abonnement og betaling</h2>
          <p>
            Individuelle abonnementer håndteres gjennom App Store eller annen
            godkjent betalingsløsning. Spørsmål om virksomhetslisenser kan
            sendes til post@medipro.no.
          </p>
        </article>

        <article className="contentCard">
          <h2>Virksomheter</h2>
          <p>
            Dersom du representerer en arbeidsgiver og ønsker informasjon om
            felles lisens, tilpasning eller tilgang for ansatte, kan du kontakte
            oss på post@medipro.no.
          </p>
        </article>
      </section>
    </main>
  )
}
