import { SiteHeader } from "../components"

export default function VirksomheterPage() {
  return (
    <main className="premiumPage">
      <SiteHeader />

      <section className="premiumSubHero">
        <div className="eyebrow">For arbeidsgivere</div>
        <h1>Digitale verktøy for hele fagmiljøer.</h1>
        <p>
          MediPro kan tilbys ansatte gjennom virksomhetslisens, med én samlet
          avtale for sykehus, kommuner, legevakter, ambulansetjenester og
          utdanningsinstitusjoner.
        </p>
      </section>

      <section className="premiumContent">
        <div className="premiumGrid">
          <article className="premiumCard">
            <h2>Felles lisens</h2>
            <p>
              Gi ansatte tilgang til samme digitale verktøy uten at hver enkelt
              må håndtere abonnement selv.
            </p>
          </article>

          <article className="premiumCard">
            <h2>Tilpasning</h2>
            <p>
              Ved virksomhetsavtale kan innhold, fagområder og prioriterte
              funksjoner tilpasses organisasjonens behov.
            </p>
          </article>

          <article className="premiumCard">
            <h2>Kontinuerlig utvikling</h2>
            <p>
              Plattformen utvikles over tid med nye funksjoner, faglig innhold
              og forbedringer.
            </p>
          </article>

          <article className="premiumCard">
            <h2>Kontakt</h2>
            <p>
              For virksomhetsavtale: post@medipro.no
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
