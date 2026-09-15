import Link from "next/link";

import { generatePageMetadata } from "../page-template";
import { pages } from "../site-content";
import { QualifierTool } from "./qualifier-tool";

export const metadata = generatePageMetadata("/starlink-es-para-mi");

export default function StarlinkEsParaMiPage() {
  const page = pages["/starlink-es-para-mi"];

  return (
    <main className="simple-page">
      <section className="page-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>

      <QualifierTool />

      <section className="text-list" aria-label="Cómo interpretar el resultado">
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

      <div className="page-actions">
        <Link className="button-primary" href="/starlink-mexico">
          Revisar Starlink México
        </Link>
        <Link className="button-secondary" href="/internet-rural">
          Comparar Internet rural
        </Link>
      </div>
    </main>
  );
}
