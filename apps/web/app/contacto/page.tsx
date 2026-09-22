import Link from "next/link";

import { generatePageMetadata } from "../page-template";
import { pages } from "../site-content";
import { ContactDraftTool } from "./contact-draft-tool";

export const metadata = generatePageMetadata("/contacto");

export default function ContactoPage() {
  const page = pages["/contacto"];

  return (
    <main className="simple-page">
      <section className="page-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>

      <ContactDraftTool />

      <section className="text-list" aria-label="Guía de contacto">
        {page.sections.map((section) => (
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <div className="page-actions">
        <Link className="button-primary" href="/starlink-es-para-mi">
          Evaluar mi caso
        </Link>
        <Link className="button-secondary" href="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
