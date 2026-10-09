import Header from "../../components/Header"
import Footer from "../../components/Footer"

export const metadata = {
  title: "Personvern | GlutenFri Norge",
  description: "Personvernerklæring for GlutenFri Norge fra Pro Med Professional Medics AS.",
}

export default function GlutenFriPersonvernPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />
        <section className="subHero">
          <div className="subHeroBadge">GlutenFri Norge</div>
          <h1>Personvern.</h1>
          <p>Her forklarer vi hvilke opplysninger GlutenFri Norge bruker, hvorfor vi bruker dem, og hvordan du kan utøve rettighetene dine.</p>
        </section>
      </div>
      <section className="subContent">
        <div className="featureIntro">
          <span>Gjeldende fra 9. oktober 2026</span>
          <h2>Opplysninger skal brukes med omtanke.</h2>
          <p>Behandlingsansvarlig er Pro Med Professional Medics AS, org.nr. 923 076 026, post@medipro.no.</p>
        </div>
        <div className="subGrid">
          <article className="subCard"><h2>Konto og sikkerhet</h2><p>Vi behandler navn, e-postadresse, aldersopplysning og kontorolle for å opprette konto, verifisere innlogging og gi riktig tilgang. Tekniske opplysninger som økt- og enhetsidentifikatorer brukes for innlogging, sikkerhet og pushvarsler.</p></article>
          <article className="subCard"><h2>Familiefunksjoner</h2><p>Forespørsler mellom barn og foresatte kan inneholde melding, strekkode, ingredienstekst og bilde du selv velger å sende. Opplysningene brukes for å vise forespørselen til riktig familie og levere varsel. Ikke send sensitive helseopplysninger eller bilder av personer. Familieforespørsler og bilder slettes etter 90 dager etter tjenestens oppgitte lagringsregel.</p></article>
          <article className="subCard"><h2>Prisbidrag</h2><p>Prisrapportering lagrer strekkode, butikkjede, pris, tidspunkt og et internt kontoknyttet bidrag for å forebygge misbruk og vise samlet oversikt. Andre brukere ser ikke navnet ditt. Valgfritt butikksted bør ikke inneholde personopplysninger. Prisbidrag fjernes når kontoen slettes; gamle bidrag ryddes etter tjenestens lagringsregel.</p></article>
          <article className="subCard"><h2>Skanning og produktdata</h2><p>Kamera brukes når du selv starter strekkodeskanning. OCR av ingrediensbilder utføres lokalt på enheten. Når du slår opp en vare, sendes strekkoden eller søketeksten til Open Food Facts for å hente produktopplysninger. Open Food Facts behandler forespørselen etter sine egne vilkår og personvernregler.</p></article>
          <article className="subCard"><h2>Formål og behandlingsgrunnlag</h2><p>Vi bruker opplysninger for å levere funksjonene du ber om, oppfylle konto- og abonnementsavtalen, ivareta sikker drift og oppfylle lovpålagte plikter. Valgfrie analyse- eller markedsføringsfunksjoner skal bare brukes når de er aktivert med gyldig samtykke. App Store håndterer betaling; vi mottar nødvendig abonnementsstatus, ikke kortnummeret ditt.</p></article>
          <article className="subCard"><h2>Leverandører</h2><p>Tjenesten bruker Supabase for autentisering, database og serverfunksjoner, Apple for App Store-kjøp og pushvarsler, og Open Food Facts for offentlige produktdata. E-post leveres gjennom tjenestens e-postleverandør når kontofunksjoner krever det. Leverandørene kan behandle opplysninger på våre vegne etter sine avtaler. Vi skal ikke legge hemmelige nøkler i appen.</p></article>
          <article className="subCard"><h2>Lagring og sletting</h2><p>Vi lagrer opplysninger så lenge det er nødvendig for tjenesten, sikkerhet, support og lovpålagte krav. Du kan be om innsyn, retting, eksport eller sletting ved å kontakte oss. Du kan også slette konto fra appen. Enkelte sikkerhetslogger eller opplysninger som må beholdes etter lov, kan lagres lenger med begrenset tilgang.</p></article>
          <article className="subCard"><h2>Dine rettigheter</h2><p>Du kan be om innsyn, retting, sletting, begrensning, dataportabilitet eller protestere mot behandling når vilkårene i personvernregelverket gir rett til det. Du kan klage til Datatilsynet. Kontakt oss først på <a href="mailto:post@medipro.no">post@medipro.no</a> for spørsmål eller forespørsler.</p></article>
          <article className="subCard"><h2>Barn og foresatte</h2><p>Barn bruker en separat barnekonto opprettet gjennom en foresattinvitasjon. Barnekontoen bruker ikke e-post eller markedsføring. Foresattrollen bygger på invitasjon og oppgitt rolle, ikke juridisk identitetskontroll. Foresatte kan kontakte oss for spørsmål om barnets konto og sletting.</p></article>
        </div>
        <p className="subLegalNote">Versjon 1.0 · 9. oktober 2026</p>
      </section>
      <Footer />
    </main>
  )
}
