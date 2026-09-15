import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/faq");

export default function FaqPage() {
  return <FoundationPage path="/faq" />;
}
