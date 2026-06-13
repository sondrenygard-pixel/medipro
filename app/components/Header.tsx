export default function Header() {
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

      <details className="mobileMenu">
        <summary>Meny</summary>
        <div>
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
        </div>
      </details>
    </header>
  )
}
