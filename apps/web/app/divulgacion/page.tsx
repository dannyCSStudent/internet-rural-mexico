import { FoundationPage, generatePageMetadata } from "../page-template";

export const metadata = generatePageMetadata("/divulgacion");

export default function DivulgacionPage() {
  return <FoundationPage path="/divulgacion" />;
}
