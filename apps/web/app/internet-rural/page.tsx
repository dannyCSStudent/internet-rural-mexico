import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/internet-rural");

export default function InternetRuralPage() {
  return <FoundationPage path="/internet-rural" />;
}
