import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/contacto");

export default function ContactoPage() {
  return <FoundationPage path="/contacto" />;
}
