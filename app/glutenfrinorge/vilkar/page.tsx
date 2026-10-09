import Header from "../../components/Header"
import Footer from "../../components/Footer"

export const metadata = {
  title: "Brukervilkår | GlutenFri Norge",
  description: "Brukervilkår for GlutenFri Norge fra Pro Med Professional Medics AS.",
}

export default function GlutenFriVilkarPage() {
  return (
    <main className="subPage">
      <div className="subTop">
        <Header />
        <section className="subHero">
          <div className="subHeroBadge">GlutenFri Norge</div>
          <h1>Brukervilkår.</h1>
          <p>Vilkår for konto, familieverktøy, produktinformasjon, fellesskapspriser og abonnement i GlutenFri Norge.</p>
        </section>
      </div>
      <section className="subContent">
        <div className="featureIntro">
          <span>Gjeldende fra 9. oktober 2026</span>
          <h2>Les dette før du bruker appen.</h2>
          <p>Ved å opprette konto eller bruke appen godtar du vilkårene. Hvis du ikke godtar dem, skal du ikke bruke tjenesten.</p>
        </div>
        <div className="subGrid">
          <article className="subCard"><h2>1. Hvem leverer tjenesten?</h2><p>GlutenFri Norge leveres av Pro Med Professional Medics AS, org.nr. 923 076 026, e-post post@medipro.no, www.medipro.no.</p></article>
          <article className="subCard"><h2>2. Helse- og matopplysninger</h2><p>Appen er et praktisk informasjonsverktøy, ikke medisinsk rådgivning, diagnose eller garanti for at et produkt er trygt ved cøliaki. Produktopplysninger kan være mangelfulle eller utdaterte. Kontroller alltid emballasjen og kontakt produsenten når du er usikker. Ved symptomer eller spørsmål om behandling skal du kontakte helsepersonell.</p></article>
          <article className="subCard"><h2>3. Produktdata og skanning</h2><p>Strekkoder brukes til å slå opp produktopplysninger, blant annet i Open Food Facts. En oppføring, ingrediensliste, bilde, automatisk tekstlesing eller fravær av treff beviser ikke glutenfri status. Appen viser «ikke avklart» når den ikke har gyldig dokumentasjon.</p></article>
          <article className="subCard"><h2>4. Brukerrapporterte priser</h2><p>Prisoversikten bygger på priser brukere selv rapporterer. Pris, butikkjede og eventuelt butikksted er ikke nødvendigvis kontrollert. Priser kan være feil eller utløpt og er ikke et løfte om dagens pris eller tilgjengelighet. Ikke legg inn navn, kontaktopplysninger eller andre personopplysninger i fritekstfelt.</p></article>
          <article className="subCard"><h2>5. Konto og familie</h2><p>Du må oppgi korrekte kontoopplysninger og holde innloggingen din sikker. Voksne foresatte opprettes på invitasjonsbasis og oppgir selv foresattrollen; tjenesten gjennomfører ikke juridisk identitetskontroll. Den voksne som inviterer et barn, må ha nødvendige fullmakter og forklare barnet hvordan appen brukes. Ikke bruk tjenesten til å sende inn opplysninger om andre uten grunnlag.</p></article>
          <article className="subCard"><h2>6. Akseptabel bruk</h2><p>Du skal ikke forsøke å få tilgang til andres konto eller data, omgå sikkerhetsfunksjoner, forstyrre tjenesten, sende skadelig innhold eller legge inn bevisst uriktige pris- eller produktopplysninger. Vi kan begrense tilgang ved misbruk eller sikkerhetshendelser.</p></article>
          <article className="subCard"><h2>7. Abonnement og betaling</h2><p>GlutenFri Plus tilbys som ukeabonnement til 39 kr, månedsabonnement til 49 kr og årsabonnement til 399 kr, slik pris og vilkår vises i App Store ved kjøp. Eventuell gratis prøveperiode vises før bekreftelse og følger Apples vilkår. Betaling og automatisk fornyelse håndteres av Apple. Du administrerer eller avslutter abonnementet i Apple-kontoens abonnementsinnstillinger. Sletting av appen avslutter ikke abonnementet.</p></article>
          <article className="subCard"><h2>8. Tilgjengelighet og endringer</h2><p>Vi arbeider for stabil drift, men kan ikke garantere uavbrutt tilgang eller at eksterne kilder og varsler alltid er tilgjengelige. Vi kan oppdatere appen og vilkårene. Vesentlige endringer varsles i appen eller på nettsiden når det er praktisk mulig.</p></article>
          <article className="subCard"><h2>9. Ansvar og lovvalg</h2><p>Ufravikelige rettigheter etter norsk forbrukerlovgivning gjelder. Tjenesten erstatter ikke kontroll av matemballasje eller råd fra kvalifisert helsepersonell. Vilkårene reguleres av norsk rett.</p></article>
          <article className="subCard"><h2>10. Kontakt</h2><p>Spørsmål eller klager: <a href="mailto:post@medipro.no">post@medipro.no</a>. Pro Med Professional Medics AS, org.nr. 923 076 026.</p></article>
        </div>
        <p className="subLegalNote">Versjon 1.0 · 9. oktober 2026</p>
      </section>
      <Footer />
    </main>
  )
}
