export default function KontaktPage() {
  return (
    <main className="subpage">
      <header className="header">
        <a className="brand" href="/"><div className="mark"><span>M</span></div><span>MediPro</span></a>
      </header>

      <section className="subHero">
        <div className="eyebrow">Kontakt</div>
        <h1>Kontakt MediPro</h1>
        <p>
          Ta kontakt ved spørsmål om appene, virksomhetslisenser, samarbeid
          eller support.
        </p>
      </section>

      <section className="content">
        <article className="contentCard">
          <h2>Generelle henvendelser</h2>
          <p>post@medipro.no</p>
        </article>

        <article className="contentCard">
          <h2>Support for eksisterende kunder</h2>
          <p>support@medipro.no</p>
        </article>

        <article className="contentCard">
          <h2>Selskapsinformasjon</h2>
          <p>MediPro er en tjeneste levert av Smartverkstedet.</p>
          <p>Org.nr. 932 599 147</p>
        </article>
      </section>
    </main>
  )
}
