import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Vilkår | MediPro",
  description:
    "Brukervilkår for MediPro-appene og tilhørende tjenester. MediPro er faglige støtteverktøy for helsepersonell.",
}

export default function VilkarPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />

        <section className="subHero">
          <div className="subHeroBadge">Vilkår</div>
          <h1>Brukervilkår for MediPro.</h1>
          <p>
            Disse vilkårene beskriver hvordan MediPro-appene og tilhørende
            tjenester kan brukes. Appene er faglige støtteverktøy og skal ikke
            erstatte klinisk vurdering, lokale prosedyrer eller medisinsk ansvar.
          </p>
        </section>
      </div>

      <section className="subContent">
        <div className="featureIntro">
          <span>Bruk av tjenesten</span>
          <h2>Profesjonelle verktøy for helsepersonell.</h2>
          <p>
            MediPro er utviklet for å gi rask tilgang til kliniske verktøy,
            strukturert informasjon og praktisk støtte i arbeidshverdagen.
          </p>
        </div>

        <div className="subGrid">
          <article className="subCard">
            <h2>Faglig støtte</h2>
            <p>
              MediPro gir tilgang til støtteverktøy og informasjon. Innholdet
              skal ikke brukes som eneste grunnlag for kliniske beslutninger.
            </p>
          </article>

          <article className="subCard">
            <h2>Brukerens ansvar</h2>
            <p>
              Helsepersonell må alltid bruke egen faglig vurdering og følge
              lokale prosedyrer, ordinasjoner og gjeldende retningslinjer.
            </p>
          </article>

          <article className="subCard">
            <h2>Abonnement</h2>
            <p>
              Individuelle abonnementer håndteres gjennom App Store eller annen
              godkjent betalingsløsning. Vilkår for kjøp, fornyelse og
              kansellering følger den aktuelle plattformen.
            </p>
          </article>

          <article className="subCard">
            <h2>Virksomhetslisens</h2>
            <p>
              Arbeidsgivere kan inngå egen avtale om tilgang for ansatte.
              Omfang, pris, varighet og eventuell tilpasning avtales særskilt.
            </p>
          </article>

          <article className="subCard">
            <h2>Endringer</h2>
            <p>
              MediPro kan videreutvikles, endres eller oppdateres over tid.
              Funksjoner, innhold og tilgjengelighet kan endres uten særskilt
              varsel.
            </p>
          </article>

          <article className="subCard">
            <h2>Kontakt</h2>
            <p>
              Spørsmål om vilkår, abonnement eller virksomhetsavtaler kan sendes
              til post@medipro.no.
            </p>
          </article>
        </div>

        <div className="businessCta">
          <div>
            <span>Ansvarsavklaring</span>
            <h2>MediPro erstatter ikke medisinsk ansvar.</h2>
            <p>
              Brukeren har selv ansvar for faglige beslutninger, kontroll av
              informasjon og etterlevelse av lokale prosedyrer.
            </p>
          </div>

          <a href="/kontakt">Kontakt oss</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
