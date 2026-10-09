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
          <article className="subCard"><h2>Konto og fødselsdato</h2><p>Ved voksenregistrering lagrer vi fornavn, e-postadresse, full fødselsdato, kontorolle, tidspunkt og versjon for aksepterte vilkår. Fødselsdato brukes til å kontrollere 18-årsgrensen og vise bursdagshilsen. Vi kan bruke alder i aggregert statistikk, men ikke dele den identifiserbare fødselsdatoen i slike oversikter. Vi beholder fødselsdatoen mens kontoen finnes fordi alderskontroll og hilsen bruker den; du kan be om retting eller slette kontoen. Økt- og enhetsidentifikatorer brukes til sikker innlogging og varsler.</p></article>
          <article className="subCard"><h2>Familieforespørsler: 7 dager</h2><p>Barn kan sende forespørsler med melding, strekkode, ingredienstekst og eventuelt bilde til inviterte foresatte. Foresattes svar lagres sammen med forespørselen. Dette kan røpe opplysninger om helse eller kosthold. Del derfor bare det som er nødvendig, og unngå bilder av personer. Innholdet krypteres i databasen og vises bare til riktig familie. Forespørsel, svar og vedlegg slettes fra den aktive databasen senest ved neste vedlikehold etter sju dager. Varsler inneholder ikke selve matspørsmålet.</p></article>
          <article className="subCard"><h2>Barn og foresatte</h2><p>En voksen inviterer barnet til separat barnekonto og bekrefter ansvaret for bruken. Barnekontoen bruker ikke e-post eller markedsføring. Invitasjon er ikke juridisk identitetskontroll av foresatt. Familieopplysninger skal bare brukes når den voksne har rett til å opptre på barnets vegne. Kontakt oss ved feil invitasjon, uenighet om tilgang eller ønske om sletting.</p></article>
          <article className="subCard"><h2>Prisbidrag</h2><p>Vi lagrer strekkode, butikkjede, valgfritt butikksted, pris, tidspunkt og en intern kobling til kontoen for misbruksvern. Andre brukere ser ikke navnet ditt. Rapporterte priser er ikke verifiserte butikkpriser. Bidrag eldre enn 90 dager slettes fra den aktive databasen, og dine bidrag slettes når kontoen slettes. Ikke skriv personopplysninger i feltet for butikksted.</p></article>
          <article className="subCard"><h2>Skanning, produktdata og AI</h2><p>Kamera brukes bare når du starter skanning. Tekstgjenkjenning fra ingrediensbilder skjer på enheten. Strekkode eller søketekst kan sendes til Open Food Facts ved produktoppslag. Hvis du bruker AI-veilederen, sendes spørsmålet og relevante, gjennomgåtte matopplysninger til OpenAI for å lage et svar. Ikke legg inn navn, helsehistorikk eller andre personopplysninger i AI-spørsmål. AI-svar er ikke medisinske vurderinger.</p></article>
          <article className="subCard"><h2>Grunnlag og valgfrie funksjoner</h2><p>Konto, familiedeling og abonnement behandles for å levere avtalen du inngår. Sikkerhetskontroller og misbruksvern bygger på vår berettigede interesse i trygg drift. Opplysninger som kan røpe helse i familieforespørsler krever særskilt vurdering og et gyldig unntak etter personvernforordningen artikkel 9 før offentlig bruk; samtykke til vanlige brukervilkår er ikke alene nok. Nyhetsbrev og valgfri bruksstatistikk er separate, frivillige valg som kan endres. Apple håndterer betalingen; vi mottar abonnementsstatus, ikke kortnummer.</p></article>
          <article className="subCard"><h2>Leverandører og overføring</h2><p>Vi bruker Supabase til database og serverdrift, Resend til kontorelatert e-post, Apple til kjøp og pushvarsler, Open Food Facts til produktoppslag og OpenAI til AI-veilederen. Disse tjenestene kan behandle nødvendige opplysninger etter sine egne eller våre avtaler, også utenfor Norge. Vi må kontrollere behandlingsavtaler, lagringssted og eventuelle overføringsgrunnlag før offentlig lansering. Hemmelige servernøkler ligger ikke i appen.</p></article>
          <article className="subCard"><h2>Lagring og sletting</h2><p>Kontodata lagres mens kontoen er aktiv og slettes ved kontosletting, med unntak for opplysninger som må beholdes på grunn av lovpålagte krav. Engangskoder utløper etter ti minutter, familieforespørsler etter sju dager og prisbidrag etter 90 dager. Varslingsenheter som ikke er oppdatert, fjernes etter 30 dager. Sikkerhetslogger og sikkerhetskopier kan ha andre slettefrister; vi må dokumentere disse før offentlig lansering.</p></article>
          <article className="subCard"><h2>Dine rettigheter og kontakt</h2><p>Du kan be om innsyn, retting, sletting, begrensning, dataportabilitet eller protestere der regelverket gir rett til det. Du kan slette kontoen i appen, eller kontakte <a href="mailto:post@medipro.no">post@medipro.no</a>. Du kan klage til Datatilsynet. Behandlingsansvarlig: Pro Med Professional Medics AS, org.nr. 923 076 026, www.medipro.no.</p></article>
        </div>
        <p className="subLegalNote">Versjon 2.0 · 9. oktober 2026</p>
      </section>
      <Footer />
    </main>
  )
}
