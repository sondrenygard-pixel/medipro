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
        <a href="/support">Support</a>
        <a href="/kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default function VirksomheterPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">For arbeidsgivere</div>
          <h1>Digitale verktøy for hele fagmiljøer.</h1>
          <p>
            MediPro kan tilbys gjennom virksomhetslisens til sykehus, kommuner,
            legevakter, ambulansetjenester, utdanningsinstitusjoner og private
            helseaktører.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="/kontakt">
              Kontakt om lisens
            </a>
            <a className="secondaryButton" href="/faglige-kilder">
              Se faglig grunnlag
            </a>
          </div>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Virksomhetslisens</span>
          <h2>Én avtale. Flere ansatte. Samme kliniske verktøy.</h2>
          <p>
            En virksomhetsavtale gjør det enklere å gi ansatte tilgang til
            relevante digitale støtteverktøy uten at hver enkelt må håndtere
            abonnement selv.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Felles tilgang</h2>
            <p>
              Gi ansatte tilgang til MediPro-appene gjennom én samlet avtale,
              tilpasset organisasjonens størrelse og behov.
            </p>
          </article>

          <article className="subCard">
            <h2>Tilpasset fagmiljøet</h2>
            <p>
              Ved virksomhetsavtale kan innhold, prioriterte funksjoner,
              opplæring og fagområder tilpasses lokale behov.
            </p>
          </article>

          <article className="subCard">
            <h2>For flere yrkesgrupper</h2>
            <p>
              Løsningen kan dekke sykepleiere, ambulansepersonell, leger,
              studenter og andre kliniske roller.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontinuerlig videreutvikling</h2>
            <p>
              Plattformen utvikles løpende med nye funksjoner, bedre struktur
              og mer relevant faglig innhold.
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Interessert i virksomhetslisens?</span>
            <h2>La oss finne riktig løsning for deres fagmiljø.</h2>
            <p>
              Kontakt oss for en uforpliktende dialog om behov, målgruppe,
              tilgang, priser og eventuell spesialtilpasning.
            </p>
          </div>

          <a href="/kontakt">Kontakt MediPro</a>
        </div>
      </section>
    </main>
  )
}
