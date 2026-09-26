import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowUpRight, ArrowRight, BookOpen, Calculator, Activity, Smartphone } from "lucide-react";
import { products, ProductCard, Phone } from "./components/Product";
export const metadata = { title: "MediPro | Faglig støtte. Med deg på vakt.", description: "Oppdag SykepleierPro og AmbulansePro. Kliniske verktøy, legemiddeloppslag og beregninger for norsk helsepersonell." };
export default function Home() {
 return <div className="mp-site">
  <Header />
  <main id="main">
   <section className="mp-hero">
    <img className="mp-hero-bg" src="/media/nursing-scene.webp" alt="" />
    <div className="mp-wrap mp-hero-grid">
     <div className="mp-hero-copy"><p className="mp-eyebrow"><span /> UTVIKLET FOR NORSK HELSEPERSONELL</p>
      <h1>Faglig støtte.<br/><em>Med deg på vakt.</em></h1>
      <p className="mp-lead">Fra sengepost til ambulansetjeneste. Kliniske verktøy, oppslag og beregninger samlet i appene du har med deg.</p>
      <div className="mp-actions"><a className="mp-button" href="#apper">Finn din app <ArrowRight size={18}/></a><a className="mp-text-link" href="#om">Møt MediPro <ArrowUpRight size={17}/></a></div>
      <div className="mp-hero-apps">{products.map(p=><a key={p.slug} href={"/"+p.slug}><img src={p.icon} alt="" width="38" height="38"/><span>{p.name}<small>Tilgjengelig i App Store</small></span></a>)}</div>
     </div>
     <div className="mp-phones"><Phone product={products[0]}/><Phone product={products[1]}/></div>
    </div>
   </section>
   <div className="mp-strip"><div className="mp-wrap"><span><Smartphone/> iPhone og iPad</span><span><Activity/> To apper. Ulike fagområder.</span><span><BookOpen/> Norsk faginnhold</span></div></div>
   <section className="mp-wrap mp-section" id="apper">
    <div className="mp-section-heading"><div><p className="mp-eyebrow">APPENE VÅRE</p><h2>Din hverdag.<br/>Dine verktøy.</h2></div><p>Velg appen som passer fagområdet ditt.<br/>Begge er tilgjengelige i App Store.</p></div>
    <div className="mp-products">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div>
   </section>
   <section className="mp-tools-section"><div className="mp-wrap">
    <div className="mp-section-heading"><div><p className="mp-eyebrow">FRA OPPSLAG TIL OVERLEVERING</p><h2>Samlet der du trenger det.</h2></div></div>
    <div className="mp-tool-grid">
     <article><Activity/><h3>Vurdering og observasjon</h3><p>NEWS2, ABCDE og GCS gir struktur til observasjoner og kliniske vurderinger.</p></article>
     <article><Calculator/><h3>Beregninger og legemidler</h3><p>Legemiddeloppslag og verktøy for dose, fortynning og infusjon.</p></article>
     <article><BookOpen/><h3>Oppslag og kommunikasjon</h3><p>Fagkort og ISBAR hjelper deg å finne frem og samle informasjon til en overlevering.</p></article>
    </div>
   </div></section>
   <section className="mp-wrap mp-about mp-section" id="om">
    <div className="mp-about-image"><img src="/media/ambulance-scene.webp" alt="Illustrasjon fra AmbulansePro: ambulansepersonell ved en ambulanse" loading="lazy"/><span>MEDIPRO / NORSK HELSEHVERDAG</span></div>
    <div><p className="mp-eyebrow">MENNESKET BAK APPENE</p><h2>Fra en sykepleiers<br/>arbeidshverdag.</h2><p>MediPro er skapt av Sondre Nygard, sykepleier og utvikler av SykepleierPro og AmbulansePro. Utgangspunktet er enkelt: å samle praktiske verktøy og faglig informasjon på mobilen.</p><p>Appene brukes som faglig støtte, sammen med egne vurderinger, lokale prosedyrer og gjeldende ordinasjoner.</p><a className="mp-inline-link" href="/faglige-kilder">Les om faglig grunnlag <ArrowUpRight size={18}/></a></div>
   </section>
   <section className="mp-wrap mp-contact-band"><div><p className="mp-eyebrow">VI HØRER GJERNE FRA DEG</p><h2>Spørsmål, innspill eller en idé?</h2><p>Ta kontakt om appene eller bruk i din virksomhet.</p></div><a className="mp-button" href="/kontakt">Kontakt oss <ArrowUpRight size={18}/></a></section>
  </main><Footer/>
 </div>
}
