import { FoundationPage, generatePageMetadata } from "../page-template";
import { pages } from "../site-content";
import { StructuredData } from "../structured-data";

export const metadata = generatePageMetadata("/faq");

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pages["/faq"].sections.map((section) => ({
    "@type": "Question",
    name: section.heading,
    acceptedAnswer: {
      "@type": "Answer",
      text: section.body,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqPageSchema} />
      <FoundationPage path="/faq" />
    </>
  );
}
