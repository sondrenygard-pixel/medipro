import { ArrowUpRight, ArrowRight } from "lucide-react";
export const products = [
 {slug:"sykepleierpro",name:"SykepleierPro",audience:"FOR SYKEPLEIERE OG STUDENTER",icon:"/media/sykepleier-icon.webp",screen:"/media/sykepleier-home.jpg",scene:"/media/nursing-scene.webp",store:"https://apps.apple.com/no/app/sykepleierpro/id6775972429",description:"Kliniske verktøy og faglige oppslag for sykepleiehverdagen. Fra vurdering og legemiddelregning til ISBAR og studentmodus.",features:["NEWS2, ABCDE og GCS","Legemidler og beregninger","ISBAR og studentmodus"]},
 {slug:"ambulansepro",name:"AmbulansePro",audience:"FOR AMBULANSEPERSONELL",icon:"/media/ambulanse-icon.webp",screen:"/media/ambulanse-home.webp",scene:"/media/ambulance-scene.webp",store:"https://apps.apple.com/no/app/ambulansepro/id6780284365",description:"Verktøy og faglig støtte for prehospitalt arbeid. Fra systematisk pasientvurdering til akutte tilstander og overlevering.",features:["HLR/AHLR og NEWS2","ABCDE, RETTS og pediatri","Legemidler og ISBAR"]}
];
export function Phone({product}:{product:typeof products[number]}) {
 return <figure className={"mp-phone "+product.slug}><a href={product.screen} target="_blank" rel="noopener noreferrer" aria-label={"Åpne skjermbilde av "+product.name+" i full størrelse"}><img src={product.screen} alt={"Hjemskjermen i "+product.name} width="1242" height="2688"/></a><figcaption>{product.name}</figcaption></figure>;
}
export function ProductCard({product:p}:{product:typeof products[number]}) {
 return <article className={"mp-product "+p.slug}>
  <a className="mp-product-visual" href={"/"+p.slug} aria-label={"Les om "+p.name}><img className="mp-scene" src={p.scene} alt="" loading="lazy"/><img className="mp-card-screen" src={p.screen} alt={"Skjermbilde av "+p.name} loading="lazy"/><span className="mp-live"><span/> I App Store nå</span></a>
  <div className="mp-product-copy"><p className="mp-eyebrow">{p.audience}</p><div className="mp-product-title"><img src={p.icon} alt="" width="48" height="48"/><h3>{p.name}</h3></div><p>{p.description}</p><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul><div className="mp-product-links"><a className="mp-button mp-button-dark" href={p.store} target="_blank" rel="noopener noreferrer">Hent i App Store <ArrowUpRight size={17}/></a><a className="mp-inline-link" href={"/"+p.slug}>Utforsk appen <ArrowRight size={17}/></a></div></div>
 </article>;
}
