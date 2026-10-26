import Link from "next/link";
import type { Metadata } from "next";

import { disclosure } from "./site-content";

export const metadata: Metadata = {
  title: "Internet Rural México",
  description:
    "Información independiente para entender opciones de Internet en ranchos, fincas, casas y negocios rurales antes de gastar.",
  alternates: { canonical: "/" },
};

const options = [
  ["01", "Internet satelital", "Cobertura amplia para lugares donde la infraestructura terrestre no llega.", "/starlink-mexico"],
  ["02", "Internet inalámbrico fijo", "Conectividad desde una torre cercana, ideal para comunidades con línea de vista.", "/internet-rural"],
  ["03", "Redes móviles", "Una alternativa flexible cuando la señal 4G o 5G está disponible.", "/internet-rural"],
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content shell">
          <p className="eyebrow"><span className="eyebrow-line" /> Información independiente sobre conectividad rural</p>
          <h1>Internet para donde las opciones tradicionales <em>no llegan.</em></h1>
          <p className="hero-copy">Entiende tus opciones antes de gastar en Internet. Comparamos tecnologías, costos y alcances para que conectes tu territorio con claridad.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/starlink-es-para-mi">¿Starlink es para mí? <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost" href="/internet-rural">Ver opciones de Internet rural <span aria-hidden="true">↓</span></Link>
          </div>
          <p className="hero-disclosure">{disclosure}</p>
        </div>
        <div className="hero-footer shell" aria-hidden="true"><span>19° 26&apos; N / 99° 08&apos; O</span><span>Conectividad sin importar la distancia</span><span>Desliza para explorar ↓</span></div>
      </section>

      <section className="intro section shell" id="guia">
        <div className="section-kicker">01 / El punto de partida</div>
        <div className="intro-grid">
          <h2>Tu ubicación no debería decidir cuánto puedes <span>conectarte.</span></h2>
          <div><p className="lead">En México, millones de personas viven fuera del alcance de las opciones tradicionales. Eso no significa que tengas que conformarte.</p><p>La tecnología cambió. Hoy existen distintas formas de llevar Internet a una finca, una comunidad o un proyecto en el campo. Nosotros te ayudamos a entender cuál tiene sentido para ti.</p><Link className="text-link" href="/internet-rural">Conoce el panorama <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="signal-section"><div className="shell signal-grid"><div className="signal-copy"><div className="section-kicker light">02 / Cómo funciona</div><h2>Una señal.<br /><em>Un nuevo alcance.</em></h2><p>La conexión puede viajar por fibra, aire o desde el espacio. Entender el recorrido es el primer paso para tomar una buena decisión.</p><Link className="button button-light" href="/internet-rural">Explorar tecnologías <span aria-hidden="true">↗</span></Link></div><div className="signal-graphic" role="img" aria-label="Diagrama de una señal llegando a una casa rural"><div className="planet-line" /><div className="satellite">✦</div><div className="signal-path path-one" /><div className="signal-path path-two" /><div className="signal-path path-three" /><div className="house"><div className="roof" /><div className="walls"><i /><i /><i /></div></div><span className="graphic-label label-top">SEÑAL</span><span className="graphic-label label-bottom">TU TERRITORIO</span></div></div></section>

      <section className="options section shell" id="opciones"><div className="section-heading"><div><div className="section-kicker">03 / El panorama</div><h2>Tres caminos para <span>conectar.</span></h2></div><p>La mejor opción depende de tu ubicación, tus necesidades y el territorio que quieres cubrir.</p></div><div className="option-grid">{options.map(([number, title, text, href], index) => <article className={`option-card option-${index}`} key={number}><span className="option-number">{number}</span><div className="option-icon" aria-hidden="true">{index === 0 ? "◌" : index === 1 ? "⌁" : "⌖"}</div><h3>{title}</h3><p>{text}</p><Link href={href}>Conocer más <span aria-hidden="true">↗</span></Link></article>)}</div></section>

      <section className="assessment" id="evaluacion"><div className="shell assessment-inner"><div className="section-kicker light">04 / Tu siguiente paso</div><h2>¿Qué tipo de conexión<br /><em>necesita tu territorio?</em></h2><p>Responde cinco preguntas y recibe un punto de partida claro para explorar tus opciones.</p><Link className="button button-sand" href="/starlink-es-para-mi">Comenzar evaluación <span aria-hidden="true">↗</span></Link><span className="assessment-note">Sin registro · 2 minutos</span></div><div className="assessment-ring" aria-hidden="true" /></section>

      <section className="trust-band section shell"><div className="section-kicker">05 / Antes de decidir</div><h2>Información clara para<br /><span>conectar mejor.</span></h2><div className="trust-grid"><p>Revisamos costos, disponibilidad, instalación, energía y limitaciones con una prioridad: ayudarte a elegir con los pies en la tierra.</p><Link className="text-link" href="/faq">Resuelve tus dudas <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
