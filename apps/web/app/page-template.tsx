import type { Metadata } from "next";
import Link from "next/link";

import { pages, type PagePath } from "./site-content";

export function generatePageMetadata(path: PagePath): Metadata {
  const page = pages[path];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
    },
  };
}

export function FoundationPage({ path }: { path: PagePath }) {
  const page = pages[path];

  return (
    <main className="simple-page">
      <section className="page-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>
      <section className="text-list" aria-label="Contenido inicial">
        {page.sections.map((section) => (
          <article key={section}>
            <p>{section}</p>
          </article>
        ))}
      </section>
      <div className="page-actions">
        <Link className="button-primary" href="/starlink-es-para-mi">
          ¿Starlink es para mí?
        </Link>
        <Link className="button-secondary" href="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
