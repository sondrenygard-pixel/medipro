export function SiteHeader() {
  return (
    <header className="topbar">
      <a className="topbrand" href="/">
        <div className="topbrandMark">M</div>
        <div>
          <strong>MediPro</strong>
          <span>Kliniske verktøy</span>
        </div>
      </a>

      <nav className="desktopNav">
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
          <a href="/support">Support</a>
          <a href="/kontakt">Kontakt</a>
        </div>
      </details>
    </header>
  )
}
