import type { Metadata } from "next";
import Link from "next/link";

import { lastVerified, pages, type PagePath } from "./site-content";

export function generatePageMetadata(path: PagePath): Metadata {
  const page = pages[path];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
      type: "article",
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
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
      {page.checklist ? (
        <section className="checklist-block" aria-labelledby="checklist-title">
          <h2 id="checklist-title">Antes de decidir</h2>
          <ul>
            {page.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {page.sources ? (
        <section className="source-block" aria-labelledby="sources-title">
          <h2 id="sources-title">Fuentes oficiales</h2>
          <p>Verificado por última vez: {lastVerified}.</p>
          <ul>
            {page.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noreferrer" target="_blank">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
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
