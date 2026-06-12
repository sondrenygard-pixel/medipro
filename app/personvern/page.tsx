export default function PersonvernPage() {
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
        <div className="eyebrow">Personvern</div>
        <h1>Personvernerklæring</h1>
        <p>
          MediPro skal behandle personopplysninger på en trygg, begrenset og
          transparent måte. Appene er utviklet for klinisk støtte, ikke for
          innsamling av pasientdata.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Ingen innsamling av pasientopplysninger</h2>
          <p>
            MediPro-appene er ikke ment for registrering, lagring eller deling
            av pasientopplysninger. Brukere skal ikke legge inn navn,
            fødselsnummer, journalopplysninger eller andre direkte
            identifiserbare pasientdata i appene.
          </p>
        </article>

        <article className="contentCard">
          <h2>Abonnement</h2>
          <p>
            Individuelle abonnementer administreres gjennom App Store eller
            annen godkjent betalingsløsning. Betalingsinformasjon behandles av
            den aktuelle plattformleverandøren, ikke direkte av MediPro.
          </p>
        </article>

        <article className="contentCard">
          <h2>Kontaktinformasjon</h2>
          <p>
            Dersom du kontakter MediPro via e-post, behandler vi de
            opplysningene du selv oppgir for å kunne svare på henvendelsen.
          </p>
        </article>

        <article className="contentCard">
          <h2>Virksomhetsavtaler</h2>
          <p>
            Ved virksomhetslisenser kan det være nødvendig å behandle begrenset
            informasjon om kontaktpersoner, avtaleforhold og teknisk tilgang.
            Slike opplysninger brukes kun for administrasjon, support og
            oppfølging av avtalen.
          </p>
        </article>

        <article className="contentCard">
          <h2>Kontakt</h2>
          <p>
            Spørsmål om personvern kan sendes til post@medipro.no.
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
