import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/privacidad");

export default function PrivacidadPage() {
  return <FoundationPage path="/privacidad" />;
}
