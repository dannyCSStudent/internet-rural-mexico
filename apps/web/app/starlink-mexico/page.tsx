import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/starlink-mexico");

export default function StarlinkMexicoPage() {
  return <FoundationPage path="/starlink-mexico" />;
}
