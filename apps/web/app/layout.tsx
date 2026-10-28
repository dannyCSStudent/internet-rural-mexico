import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ReferralLink } from "./referral-link";
import { siteUrl } from "./site-content";
import { StructuredData } from "./structured-data";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Internet Rural México",
  title: {
    default: "Internet Rural México",
    template: "%s | Internet Rural México",
  },
  description:
    "Información independiente para entender opciones de Internet en ranchos, fincas, casas y negocios rurales en México.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Internet Rural México",
    description: "Internet para donde las opciones tradicionales no llegan.",
    url: siteUrl,
    siteName: "Internet Rural México",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Rural México",
    description: "Internet para donde las opciones tradicionales no llegan.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#24523A",
};

const navigation = [
  { href: "/internet-rural", label: "Internet rural" },
  { href: "/starlink-mexico", label: "Starlink México" },
  { href: "/starlink-es-para-mi", label: "Evaluar" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Internet Rural México",
  url: siteUrl,
  inLanguage: "es-MX",
  description:
    "Información independiente para entender opciones de Internet en zonas rurales de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <StructuredData data={websiteSchema} />
        <div className="site-shell">
          <header className="site-header">
            <Link
              className="brand-mark"
              href="/"
              aria-label="Internet Rural México"
            >
              <span className="brand-icon" aria-hidden="true" />
              <span>Internet Rural México</span>
            </Link>
            <nav className="site-nav" aria-label="Navegación principal">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <ReferralLink
                className="referral-nav-link"
                label="Ver Starlink directamente"
                page="site-navigation"
              >
                Ver Starlink
              </ReferralLink>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <p>
              Este sitio es independiente de Starlink. Algunos enlaces son
              enlaces de referencia. Si realizas una compra elegible mediante
              uno de ellos, puedo recibir una recompensa de Starlink.
            </p>
            <div>
              <Link href="/divulgacion">Divulgación</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/sobre-nosotros">Sobre nosotros</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
