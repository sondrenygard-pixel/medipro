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
        <a href="/personvern">Personvern</a>
        <a href="/vilkar">Vilkår</a>
        <a href="/support">Support</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default function PersonvernPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">Personvern</div>
          <h1>Personvern i MediPro.</h1>
          <p>
            MediPro skal være en trygg og profesjonell tjeneste. Appene er laget
            som kliniske støtteverktøy, ikke som systemer for registrering eller
            lagring av pasientopplysninger.
          </p>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Personvernerklæring</span>
          <h2>Begrenset databehandling og tydelig ansvar.</h2>
          <p>
            Vi behandler kun opplysninger som er nødvendige for drift, support,
            kontakt og eventuelle virksomhetsavtaler.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Ingen pasientjournal</h2>
            <p>
              MediPro-appene er ikke ment for lagring av pasientopplysninger,
              journaldata, fødselsnummer eller annen direkte identifiserbar
              pasientinformasjon.
            </p>
          </article>

          <article className="subCard">
            <h2>Abonnement</h2>
            <p>
              Individuelle abonnementer håndteres gjennom App Store eller annen
              godkjent betalingsløsning. Betalingsinformasjon behandles av
              plattformleverandøren.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontakt og support</h2>
            <p>
              Når du kontakter oss, behandler vi informasjonen du selv oppgir
              for å kunne svare og følge opp henvendelsen.
            </p>
          </article>

          <article className="subCard">
            <h2>Virksomhetsavtaler</h2>
            <p>
              Ved virksomhetslisens kan vi behandle kontaktinformasjon,
              avtaledata og nødvendig informasjon for administrasjon og support.
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Kontakt ved spørsmål</span>
            <h2>Spørsmål om personvern?</h2>
            <p>
              MediPro er en tjeneste levert av Smartverkstedet, org.nr.
              932 599 147.
            </p>
          </div>

          <a href="mailto:post@medipro.no">post@medipro.no</a>
        </div>
      </section>
   
    <Footer />
    </main>
  )
}
