import Link from "next/link";
import type { Metadata } from "next";

import { disclosure } from "./site-content";

export const metadata: Metadata = {
  title: "Internet Rural México",
  description:
    "Información independiente para entender opciones de Internet en ranchos, fincas, casas y negocios rurales antes de gastar.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Internet Rural México</p>
          <h1>Internet para donde las opciones tradicionales no llegan.</h1>
          <p className="hero-lede">
            ¿Tu Internet es lento, se cae o no tienes señal? Te ayudamos a
            entender tus opciones de conectividad para ranchos, fincas, casas y
            negocios rurales antes de gastar tu dinero.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/starlink-es-para-mi">
              ¿Starlink es para mí?
            </Link>
            <Link className="button-secondary" href="/internet-rural">
              Ver opciones de Internet rural
            </Link>
          </div>
          <p className="disclosure">{disclosure}</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="sun" />
          <div className="ridge ridge-back" />
          <div className="ridge ridge-front" />
          <div className="signal-card">
            <span>Rancho / finca / casa rural</span>
            <strong>Decisión clara antes de comprar</strong>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">MVP inicial</p>
          <h2>Ayudar primero. Referir después.</h2>
        </div>
        <div className="feature-grid">
          <article>
            <h3>Entender el problema</h3>
            <p>
              Separar lentitud, caídas, falta de cobertura, trabajo remoto,
              cámaras y necesidades de negocio.
            </p>
          </article>
          <article>
            <h3>Comparar opciones</h3>
            <p>
              Revisar Internet fijo, celular, radioenlaces, satélite y lo que
              realmente está disponible en la zona.
            </p>
          </article>
          <article>
            <h3>Tomar una decisión</h3>
            <p>
              Confirmar costos, instalación, limitaciones y datos oficiales
              antes de usar un enlace de referencia.
            </p>
          </article>
        </div>
      </section>

      <section className="content-band split-band">
        <div className="section-heading">
          <p className="eyebrow">Ruta de decisión</p>
          <h2>De problema real a opción viable.</h2>
        </div>
        <div className="decision-steps">
          <article>
            <span>01</span>
            <h3>Describe tu situación</h3>
            <p>
              Comunidad, tipo de propiedad, señal actual, cortes, trabajo,
              cámaras, escuela o negocio.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Compara alternativas</h3>
            <p>
              Internet fijo, celular, radioenlace, satélite y cualquier proveedor
              local con cobertura real.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Confirma condiciones</h3>
            <p>
              Disponibilidad, costos vigentes, instalación, energía, obstrucciones
              y términos oficiales.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
