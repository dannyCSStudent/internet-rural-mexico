import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/sobre-nosotros");

export default function SobreNosotrosPage() {
  return <FoundationPage path="/sobre-nosotros" />;
}
