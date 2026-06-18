export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div>
          <h3>MediPro</h3>
          <p>
            Digitale kliniske verktøy utviklet for norsk helsetjeneste.
          </p>
        </div>

        <div>
          <h4>Produkter</h4>

          <a href="/sykepleierpro">SykepleierPro</a>
          <a href="/ambulansepro">AmbulansePro</a>
          <a href="/legepro">LegePro</a>
        </div>

        <div>
          <h4>Informasjon</h4>

          <a href="/virksomheter">Virksomheter</a>
          <a href="/faglige-kilder">Faglige kilder</a>
          <a href="/personvern">Personvern</a>
          <a href="/vilkar">Vilkår</a>
        </div>

        <div>
          <h4>Kontakt</h4>

          <a href="mailto:post@medipro.no">post@medipro.no</a>
          <a href="mailto:support@medipro.no">support@medipro.no</a>
          <a href="/kontakt">Kontakt oss</a>
        </div>
      </div>

      <div className="footerBottom">
        © 2026 MediPro · En tjeneste levert av SMARTVERKSTEDET.
        Org.nr: 932 599 147
      </div>
    </footer>
  )
}
