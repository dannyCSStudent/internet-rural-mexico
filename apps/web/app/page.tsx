import Link from "next/link";

import { disclosure } from "./site-content";

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
    </main>
  );
}
